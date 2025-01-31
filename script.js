function calcularTempo() {
    const dataInicio = new Date("2024-12-30"); // Data do namoro
    const agora = new Date();
    const diff = agora - dataInicio;

    const anos = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const meses = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const dias = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diff % (1000 * 60)) / 1000); // Cálculo dos segundos

    document.getElementById("anos").innerHTML = `${anos} Anos`;
    document.getElementById("meses").innerHTML = `${meses} Meses`;
    document.getElementById("dias").innerHTML = `${dias} Dias`;
    document.getElementById("horas").innerHTML = `${horas} Horas`;
    document.getElementById("minutos").innerHTML = `${minutos} Minutos`;
    document.getElementById("segundos").innerHTML = `${segundos} Segundos`; // Exibe os segundos

    setTimeout(calcularTempo, 1000); // Atualiza a cada segundo
}

calcularTempo();

var swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

function createHeart() {
    const hearts = ["❤️", "😍", "💖", "💘"];
    
    hearts.forEach(heart => {
        const heartElement = document.createElement("div");
        heartElement.classList.add("heart");
        heartElement.innerHTML = heart;
        heartElement.style.left = Math.random() * 100 + "vw"; // Posição aleatória horizontal
        heartElement.style.animationDuration = Math.random() * 3 + 2 + "s"; // Animação aleatória
        heartElement.style.bottom = "-50px"; // Começar de baixo para cima
        heartElement.style.animationName = "moveHeart"; // Nome da animação CSS
        document.getElementById("hearts-container").appendChild(heartElement);
        setTimeout(() => heartElement.remove(), 4000);
    });
}

setInterval(createHeart, 500);

// Função para controlar a música
let musica = document.getElementById("musica");

function toggleMusic() {
    const pauseButton = document.getElementById("pauseButton");

    if (musica.paused) {
        musica.play(); // Retoma a música
        pauseButton.textContent = "Pausar Música"; // Altera o texto do botão
    } else {
        musica.pause(); // Pausa a música
        pauseButton.textContent = "Retomar Música"; // Altera o texto do botão
    }
}

document.getElementById("pauseButton").addEventListener("click", toggleMusic);

// Reproduz a música quando a página carrega
window.onload = function() {
    musica.play();
};