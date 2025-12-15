const API_URL = "http://localhost:3000/api";

const caminho = document.getElementById("caminhoTrilha");
const progressFill = document.getElementById("progressFill");

const trilhaId = 1; // ou pegue da URL se tiver várias trilhas

async function carregarTrilha() {
    try {
        const res = await fetch(`${API_URL}/licoes/trilha/${trilhaId}`);
        const licoes = await res.json();

        caminho.innerHTML = "";

        licoes.forEach((licao, index) => {
            const bloco = document.createElement("a");
            bloco.className = `bloco l${(index % 2) + 1}`;
            bloco.href = `licoes/licao.html?id=${licao.id}`;
            bloco.textContent = licao.titulo;

            caminho.appendChild(bloco);

            if (index < licoes.length - 1) {
                const linha = document.createElement("div");
                linha.className = "linha";
                caminho.appendChild(linha);
            }
        });

    } catch (err) {
        console.error("Erro ao carregar trilha", err);
    }
}

carregarTrilha();
