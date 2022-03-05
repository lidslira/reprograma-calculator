let inputGanhoMes = document.querySelector("#ganho-mes");
let inputHorasDia = document.querySelector("#horas-dia");
let spanHora = document.querySelector("#resposta");

const calcularValorHora = () => {
  let inputHorasMes = inputHorasDia.valueAsNumber *22;
  let valorHora = (inputGanhoMes.valueAsNumber/inputHorasMes).toFixed(2);
  spanHora.textContent = "R$ " + valorHora;
}