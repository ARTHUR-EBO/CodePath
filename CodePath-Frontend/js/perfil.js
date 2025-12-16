// perfil.js

// Pegando token
const token = localStorage.getItem("token");
if (!token) {
    alert("Você precisa estar logado.");
    window.location.href = "../pages/login.html";
}

// Pegando ID salvo ao logar
const user = JSON.parse(localStorage.getItem("user"));

if (!user || !user.id) {
    alert("Erro ao carregar usuário.");
    window.location.href = "../pages/login.html";
}

// Busca usuário completo no backend
async function carregarPerfil() {
    try {
        const res = await fetch(`http://localhost:3000/api/user/${user.id}`);
        const data = await res.json();
        
        document.getElementById("userNome").textContent = data.nome;
        document.getElementById("userEmail").textContent = data.email;
        document.getElementById("userXP").textContent = data.xp;

        const foto = data.foto
            ? `http://localhost:3000/${data.foto}`
            : "../img/default.png";

        document.getElementById("userFoto").src = foto;

    } catch (err) {
        console.error("Erro ao carregar perfil:", err);
    }
}

carregarPerfil();

// Upload de foto
document.getElementById("btnSalvarFoto").addEventListener("click", async () => {
    const input = document.getElementById("inputFoto");
    const file = input.files[0];

    if (!file) {
        alert("Selecione uma imagem.");
        return;
    }

    const formData = new FormData();
    formData.append("foto", file);

    try {
        const res = await fetch(
            `http://localhost:3000/api/user/${user.id}/foto`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: formData
            }
        );

        const data = await res.json();

        if (!res.ok) {
            alert(data.error || "Erro ao enviar foto.");
            return;
        }

        document.getElementById("userFoto").src =
            `http://localhost:3000/${data.foto}`;

        alert("Foto atualizada com sucesso!");

    } catch (err) {
        console.error("Erro no upload:", err);
        alert("Erro ao enviar imagem.");
    }
});