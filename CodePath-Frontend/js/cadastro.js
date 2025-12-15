const API_URL = "http://localhost:3000/api";
const cadastroForm = document.getElementById("cadastroForm");


cadastroForm.addEventListener("submit", async (e) => {
e.preventDefault();


const nome = document.getElementById("cadastroNome").value;
const email = document.getElementById("cadastroEmail").value;
const senha = document.getElementById("cadastroSenha").value;


try {
const response = await fetch("http://localhost:3000/api/user/register", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ nome, email, senha }),
});


const data = await response.json();


if (response.ok) {
alert("Conta criada com sucesso! Faça login.");
window.location.href = "login.html";
} else {
alert(data.message || "Erro ao cadastrar");
}
} catch (err) {
console.error(err);
alert("Erro no servidor.");
}
});