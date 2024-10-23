let botaoSom = document.querySelector(".botao-som");
let video = document.querySelector(".som-video");
let botao1 = document.querySelector(".link-informacao");
let modal = document.querySelector(".modal");
let tudum = document.querySelector(".audio");
let botao2 = document.querySelector(".link-assistir");

// LIGA O SOM
botaoSom.addEventListener("click", ligaSom);

function ligaSom() {
  video.muted = !video.muted;
}

// MOSTRA O MODAL
botao1.addEventListener("click", mostrarModal);
modal.addEventListener("click", esconderModal);

function mostrarModal() {
  modal.style.display = "block";
}

function esconderModal() {
  modal.style.display = "none";
}

botao2.addEventListener("click", tocarAudio);
function tocarAudio() {
  tudum.play();
}
