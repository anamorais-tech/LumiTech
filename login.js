const form = document.getElementById("form_login");

form.addEventListener("submit", function (event) {

  event.preventDefault();

  const email =
    document.getElementById("login").value;

  const senha =
    document.getElementById("senha").value;

  //Procurar usuarios
  const usuarios =
    JSON.parse(localStorage.getItem("usuarios")) || [];

  //Verificar usuarios
  const usuarioEncontrado = usuarios.find(usuario =>

    usuario.email === email &&
    usuario.senha === senha

  );

  //Não encontrado
  if (!usuarioEncontrado) {

    alert("E-mail ou senha inválidos.");

    return;
  }

  //Salvar a sessão
  sessionStorage.setItem(
    "usuarioLogado",
    usuarioEncontrado.nome
  );

  //Redirecionar tela
  window.location.href = "index.html";

});