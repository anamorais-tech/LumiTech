const form = document.querySelector("form");

form.addEventListener("submit", function (event) {

  event.preventDefault();

  //Campos 
  const nome = document.getElementById("nome").value;

  const email = document.getElementById("email").value;

  const confirmarEmail =
    document.getElementById("confirmar_email").value;

  const senha = document.getElementById("senha").value;

  const confirmarSenha =
    document.getElementById("confirmar_senha").value;

  //Confirmar email
  if (email !== confirmarEmail) {

    alert("Os e-mails não coincidem.");

    return;
  }

  //Confirmar senha
  if (senha !== confirmarSenha) {

    alert("As senhas não coincidem.");

    return;
  }

  //Lista de usuarios
  let usuarios =
    JSON.parse(localStorage.getItem("usuarios")) || [];

  const usuarioExistente = usuarios.find(usuario =>
    usuario.email === email
  );

  if (usuarioExistente) {

    alert("Este e-mail já está cadastrado.");

    return;
  }

  //Novo usuario
  const novoUsuario = {

    nome: nome,
    email: email,
    senha: senha

  };

  //Salvar
  usuarios.push(novoUsuario);

  localStorage.setItem(
    "usuarios",
    JSON.stringify(usuarios)
  );

  alert("Cadastro realizado com sucesso!");

  //Redirecionar pagina 
  window.location.href = "login.html";

});