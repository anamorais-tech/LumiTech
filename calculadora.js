// Preenche potência automaticamente

const aparelho = document.getElementById("aparelho");
const potencia = document.getElementById("potencia");

aparelho.addEventListener("change", () => {

  potencia.value = aparelho.value;

});

// Calcular consumo

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
  let valorMedio = consumoMensal * 0.77;

  // Exibir kWh
  document.getElementById("resultadoKwh")
    .innerText = consumoMensal.toFixed(1);

  // Exibir valor
  document.getElementById("resultadoValor")
    .innerText =
    `Gasto estimado: ≈ R$ ${valorMedio.toFixed(2)}`;
}

function voltarPagina() {

  // verifica se existe usuário logado
  const usuarioLogado =
    sessionStorage.getItem("usuarioLogado");

  if (usuarioLogado) {

    window.location.href = "index_logado.html";

  } else {

    window.location.href = "index.html";

  }

}