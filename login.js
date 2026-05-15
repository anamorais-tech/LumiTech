const form = document.getElementById("form_login");

form.addEventListener("submit", function(event) {

  event.preventDefault();

  const email =
    document.getElementById("login").value;

  const senha =
    document.getElementById("senha").value;

  // PEGAR USUÁRIOS
  const usuarios =
    JSON.parse(localStorage.getItem("usuarios")) || [];

  // VERIFICAR
  const usuarioEncontrado = usuarios.find(usuario =>

    usuario.email === email &&
    usuario.senha === senha

  );

  // NÃO ENCONTRADO
  if(!usuarioEncontrado) {

    alert("E-mail ou senha inválidos.");

    return;
  }

  // SALVAR SESSÃO
  sessionStorage.setItem(
    "usuarioLogado",
    usuarioEncontrado.nome
  );

  // REDIRECIONAR
  window.location.href = "index.html";

});