const API_URL = "http://localhost:3000/api";
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const senha = document.getElementById("loginSenha").value;

    try {
        const response = await fetch(`${API_URL}/user/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, senha }),
        });

        const data = await response.json();

        if (response.ok) {
            // SALVA TOKEN E USUÁRIO NO LOCALSTORAGE
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            localStorage.setItem("userId", data.user.id);

            // REDIRECIONA PARA A TRILHA
            window.location.href = "trilha.html";
        } else {
            alert(data.error || "Erro ao fazer login");
        }
    } catch (err) {
        console.error("Erro no login:", err);
        alert("Erro no servidor.");
    }
});
