const cartas = document.querySelectorAll(".carta");

let primeiraCarta = null;
let segundaCarta = null;
let bloqueado = false;
let tentativas = 0;
let pares = 0;
let pontuacao = 0;

const tentativasTexto =
document.getElementById("tentativas");

const paresTexto =
document.getElementById("pares");

const pontuacaoTexto =
document.getElementById("pontuacao");

const tempoTexto =
document.getElementById("tempo");

const fimJogo =
document.getElementById("fimJogo");

const pontuacaoFinal =
document.getElementById("pontuacaoFinal");

const tempoFinal =
document.getElementById("tempoFinal");

let segundos = 0;
const cronometro = setInterval(() => {

  segundos++;

  atualizarTempo();

}, 1000);

function atualizarTempo(){

  let minutos = String(
    Math.floor(segundos / 60)
  ).padStart(2, "0");

  let seg = String(
    segundos % 60
  ).padStart(2, "0");

  tempoTexto.innerHTML =
  `${minutos}:${seg}`;

}

/* embaralha cartas*/

const tabuleiro =
document.querySelector(".tabuleiro");

[...cartas]

  .sort(() => Math.random() - 0.5)

  .forEach(carta => {

    tabuleiro.appendChild(carta);

  });

/*cliques*/

cartas.forEach(carta => {

  carta.addEventListener("click", () => {

    if(bloqueado) return;

    if(carta === primeiraCarta) return;

    if(carta.classList.contains("correta")) return;

    carta.classList.add("virada");

    if(!primeiraCarta){

      primeiraCarta = carta;

    }

    else{

      segundaCarta = carta;

      tentativas++;

      tentativasTexto.innerHTML =
      tentativas;

      verificarPar();

    }

  });

});

/*verificação*/

function verificarPar(){

  let valor1 =
  primeiraCarta.dataset.par;

  let valor2 =
  segundaCarta.dataset.par;

  /* ACERTOU */

  if(valor1 === valor2){

    primeiraCarta.classList.add("correta");
    segundaCarta.classList.add("correta");
    pares++;
    pontuacao += 100;
    paresTexto.innerHTML =
    `${pares}/6`;
    pontuacaoTexto.innerHTML =
    pontuacao;

    if(pares === 6){

      finalizarJogo();

    }

    resetar();

  }

  /*erro*/

  else{

    bloqueado = true;

    pontuacao -= 10;

    if(pontuacao < 0){

      pontuacao = 0;

    }

    pontuacaoTexto.innerHTML =
    pontuacao;

    setTimeout(() => {

      primeiraCarta.classList.remove("virada");

      segundaCarta.classList.remove("virada");

      resetar();

    }, 1000);

  }

}

function finalizarJogo(){

  /*para relogio*/

  clearInterval(cronometro);

  /*salva os resultados*/

  localStorage.setItem(
    "pontuacaoJogo",
    pontuacao
  );

  localStorage.setItem(
    "tempoJogo",
    tempoTexto.innerHTML
  );

  /*mostrar os resultados*/

  pontuacaoFinal.innerHTML =
  pontuacao;

  tempoFinal.innerHTML =
  tempoTexto.innerHTML;

  setTimeout(() => {

    fimJogo.classList.add("mostrar");

  }, 700);

}

function resetar(){

  primeiraCarta = null;

  segundaCarta = null;

  bloqueado = false;

}