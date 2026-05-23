const cartas = document.querySelectorAll(".carta");

/* =========================
   VARIAVEIS
========================= */

let primeiraCarta = null;
let segundaCarta = null;
let bloqueado = false;
let tentativas = 0;
let pares = 0;
let pontuacao = 0;

/* =========================
   ELEMENTOS
========================= */

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

/* =========================
   TEMPO
========================= */

let segundos = 0;
const cronometro = setInterval(() => {

  segundos++;

  atualizarTempo();

}, 1000);

/* FUNÇÃO TEMPO */

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

/* =========================
   EMBARALHAR
========================= */

const tabuleiro =
document.querySelector(".tabuleiro");

[...cartas]

  .sort(() => Math.random() - 0.5)

  .forEach(carta => {

    tabuleiro.appendChild(carta);

  });

/* =========================
   CLIQUES
========================= */

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

/* =========================
   VERIFICAR
========================= */

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

    /* TERMINOU O JOGO */

    if(pares === 6){

      finalizarJogo();

    }

    resetar();

  }

  /* ERROU */

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

/* =========================
   FINALIZAR JOGO
========================= */

function finalizarJogo(){

  /* PARA O RELÓGIO */

  clearInterval(cronometro);

  /* SALVAR RESULTADOS */

  localStorage.setItem(
    "pontuacaoJogo",
    pontuacao
  );

  localStorage.setItem(
    "tempoJogo",
    tempoTexto.innerHTML
  );

  /* MOSTRAR RESULTADOS */

  pontuacaoFinal.innerHTML =
  pontuacao;

  tempoFinal.innerHTML =
  tempoTexto.innerHTML;

  /* MOSTRAR TELA */

  setTimeout(() => {

    fimJogo.classList.add("mostrar");

  }, 700);

}

/* =========================
   RESETAR
========================= */

function resetar(){

  primeiraCarta = null;

  segundaCarta = null;

  bloqueado = false;

}