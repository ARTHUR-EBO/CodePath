const API_URL = "http://localhost:3000/api";

const params = new URLSearchParams(window.location.search);
const licaoId = params.get("licao");
let exercicioAtual = parseInt(params.get("ex"));

const enunciadoEl = document.getElementById("enunciado");
const alternativasEl = document.getElementById("alternativas");
const progressFill = document.getElementById("progressFill");
const btnProximo = document.getElementById("btnProximo");

let exercicios = [];
let alternativaSelecionada = null;

// Carregar exercícios da lição
async function carregarExercicios() {
    try {
        const res = await fetch(`${API_URL}/exercicios/licao/${licaoId}`);
        exercicios = await res.json();
        renderizarExercicio();
    } catch (err) {
        console.error("Erro ao carregar exercícios", err);
    }
}

// Renderiza exercício atual
function renderizarExercicio() {
    const exercicio = exercicios[exercicioAtual - 1];

    if (!exercicio) return;

    enunciadoEl.textContent = exercicio.enunciado;
    alternativasEl.innerHTML = "";
    btnProximo.disabled = true;
    alternativaSelecionada = null;

    exercicio.alternativas.forEach(alt => {
        const btn = document.createElement("button");
        btn.classList.add("alternativa");
        btn.textContent = alt.texto;

        btn.onclick = () => {
            document
                .querySelectorAll(".alternativa")
                .forEach(b => b.classList.remove("selecionada"));

            btn.classList.add("selecionada");
            alternativaSelecionada = alt;
            btnProximo.disabled = false;
        };

        alternativasEl.appendChild(btn);
    });

    const progresso = Math.round((exercicioAtual / exercicios.length) * 100);
    progressFill.style.width = progresso + "%";
    progressFill.textContent = progresso + "%";
}

// Próximo exercício
btnProximo.onclick = async () => {
    if (!alternativaSelecionada.correta) {
        alert("Resposta incorreta 😬 tente novamente!");
        return;
    }

    exercicioAtual++;

    if (exercicioAtual > exercicios.length) {
        // Finalizou lição
        await fetch(`${API_URL}/progresso-licao`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user_id: localStorage.getItem("userId"),
                licao_id: licaoId
            })
        });

        window.location.href = "../trilha.html";
    } else {
        window.location.href = `exercicios.html?licao=${licaoId}&ex=${exercicioAtual}`;
    }
};

carregarExercicios();
