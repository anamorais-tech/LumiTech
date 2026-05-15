// ===============================
// PREENCHER POTÊNCIA AUTOMÁTICA
// ===============================

const aparelho = document.getElementById("aparelho");
const potencia = document.getElementById("potencia");

aparelho.addEventListener("change", () => {

  potencia.value = aparelho.value;

});

// ===============================
// CALCULAR CONSUMO
// ===============================

function calcular() {

  let potenciaValor = Number(
    document.getElementById("potencia").value
  );

  let horas = Number(
    document.getElementById("horas").value
  );

  let dias = Number(
    document.getElementById("dias").value
  );

  // Fórmula do consumo
  let consumoMensal =
    ((potenciaValor * horas) / 1000) * dias;

  // Valor médio kWh Brasil
  let valorMinimo = consumoMensal * 0.41;
  let valorMaximo = consumoMensal * 1.47;

  // Exibir kWh
  document.getElementById("resultadoKwh")
    .innerText = consumoMensal.toFixed(1);

  // Exibir valor
  document.getElementById("resultadoValor")
    .innerText =
      `Gasto estimado: R$ ${valorMinimo.toFixed(2)} até R$ ${valorMaximo.toFixed(2)}`;
}