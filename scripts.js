let botaoSom = document.querySelector(".botao-som");
let video = document.querySelector(".som-video");
let botao = document.querySelector(".link-informacao");
let modal = document.querySelector(".modal");

// LIGA O SOM
botaoSom.addEventListener("click", ligaSom);

function ligaSom() {
  video.muted = false;
}

// MOSTRA O MODAL
botao.addEventListener("click", mostrarModal);
modal.addEventListener("click", esconderModal);

function mostrarModal() {
  modal.style.display = "block";
}

function esconderModal() {
  modal.style.display = "none";
}
