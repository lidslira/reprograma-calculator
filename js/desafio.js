let inputValorHora = document.querySelector("#valor-hora");
let inputHorasProjeto = document.querySelector("#horas-projeto");
let spanResposta = document.querySelector("#resposta");

const calcular = () => {
  let valorProjeto = (inputValorHora.valueAsNumber * inputHorasProjeto.valueAsNumber).toFixed(2);
  spanResposta.textContent = "R$ " + valorProjeto;
}