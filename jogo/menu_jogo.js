/* =========================
   DADOS SALVOS
========================= */

const pontuacao =
  localStorage.getItem("pontuacaoJogo");

const tempo =
  localStorage.getItem("tempoJogo");

const pontuacaoTexto =
  document.getElementById("pontuacaoSalva");

const tempoTexto =
  document.getElementById("tempoSalvo");

const resultadoBox =
  document.getElementById("resultadoBox");

const btnJogar =
  document.getElementById("btnJogar");

/* =========================
   PRIMEIRA PARTIDA
========================= */

if(!pontuacao){

  resultadoBox.style.display =
  "none";

}

/* =========================
   JÁ JOGOU
========================= */

else{

  pontuacaoTexto.innerHTML =
  pontuacao;

  tempoTexto.innerHTML =
  tempo;

  btnJogar.innerHTML =
  "Jogar outra vez";

}

/* =========================
   INICIAR JOGO
========================= */

btnJogar.addEventListener("click", () => {

  window.location.href =
  "jogo.html";

});

/* =========================
   VOLTAR
========================= */

function voltarPagina(){

  const usuarioLogado =
  sessionStorage.getItem(
    "usuarioLogado"
  );

  if(usuarioLogado){

    window.location.href =
    "../index_logado.html";

  }

}