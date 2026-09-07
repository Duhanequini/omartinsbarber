const track = document.querySelector(".carrossel-track");
const slides = document.querySelectorAll(".slide");

const botaoAnterior = document.querySelector(".anterior");
const botaoProximo = document.querySelector(".proximo");

const indicadores = document.querySelectorAll(".indicador");

let slideAtual = 0;


/* =========================
   MOSTRAR SLIDE
========================= */

function mostrarSlide(numero) {

    slideAtual = numero;

    track.style.transform = `translateX(-${slideAtual * 100}%)`;

    atualizarIndicadores();
}


/* =========================
   PRÓXIMO SLIDE
========================= */

function proximoSlide() {

    if (slideAtual < slides.length - 1) {
        mostrarSlide(slideAtual + 1);
    } else {
        mostrarSlide(0);
    }

}


/* =========================
   SLIDE ANTERIOR
========================= */

function slideAnterior() {

    if (slideAtual > 0) {
        mostrarSlide(slideAtual - 1);
    } else {
        mostrarSlide(slides.length - 1);
    }

}


/* =========================
   INDICADORES
========================= */

function atualizarIndicadores() {

    indicadores.forEach((indicador, index) => {

        indicador.classList.toggle(
            "ativo",
            index === slideAtual
        );

    });

}


/* =========================
   EVENTOS DOS BOTÕES
========================= */

botaoProximo.addEventListener(
    "click",
    proximoSlide
);

botaoAnterior.addEventListener(
    "click",
    slideAnterior
);


/* =========================
   EVENTOS DOS INDICADORES
========================= */

indicadores.forEach((indicador) => {

    indicador.addEventListener("click", () => {

        const numero = Number(
            indicador.dataset.slide
        );

        mostrarSlide(numero);

    });

});