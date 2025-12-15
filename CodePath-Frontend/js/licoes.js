const API_URL = "http://localhost:3000/api";

const params = new URLSearchParams(window.location.search);
const licaoId = params.get("id");

const titulo = document.getElementById("tituloLicao");
const conteudo = document.getElementById("conteudoLicao");
const btnIniciar = document.getElementById("btnIniciar");

if (!licaoId) {
    titulo.textContent = "Lição não encontrada";
    btnIniciar.style.display = "none";
}

// Buscar dados da lição
async function carregarLicao() {
    try {
        const res = await fetch(`${API_URL}/licoes/${licaoId}`);
        const data = await res.json();

        titulo.textContent = data.titulo;
        conteudo.innerHTML = `<p>${data.conteudo}</p>`;
    } catch (error) {
        titulo.textContent = "Erro ao carregar lição";
        console.error(error);
    }
}

// Ir para exercícios
btnIniciar.addEventListener("click", () => {
    window.location.href = `../exercicios/exercicios.html?licao=${licaoId}&ex=1`;
});

carregarLicao();
