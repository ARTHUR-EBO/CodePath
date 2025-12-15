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

    } catch (err) {
        console.error("Erro ao carregar perfil:", err);
    }
}

carregarPerfil();
