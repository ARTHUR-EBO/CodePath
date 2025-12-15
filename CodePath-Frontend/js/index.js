const API_URL = "http://localhost:3000/api";
console.log("Página inicial carregada com sucesso!");

// Exemplo: Animação suave ao rolar
window.addEventListener("scroll", () => {
    const features = document.querySelector(".features");
    const position = features.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
        features.style.opacity = 1;
        features.style.transform = "translateY(0)";
    }
});
