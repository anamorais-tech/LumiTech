const form = document.querySelector("form");

form.addEventListener("submit", function(event) {

  event.preventDefault();

  // CAMPOS
  const nome = document.getElementById("nome").value;

  const email = document.getElementById("email").value;

  const confirmarEmail =
    document.getElementById("confirmar_email").value;

  const senha = document.getElementById("senha").value;

  const confirmarSenha =
    document.getElementById("confirmar_senha").value;

  // VALIDAR EMAIL
  if(email !== confirmarEmail) {

    alert("Os e-mails não coincidem.");

    return;
  }

  // VALIDAR SENHA
  if(senha !== confirmarSenha) {

    alert("As senhas não coincidem.");

    return;
  }

  // LISTA DE USUÁRIOS
  let usuarios =
    JSON.parse(localStorage.getItem("usuarios")) || [];

  // VERIFICAR EMAIL EXISTENTE
  const usuarioExistente = usuarios.find(usuario =>
    usuario.email === email
  );

  if(usuarioExistente) {

    alert("Este e-mail já está cadastrado.");

    return;
  }

  // NOVO USUÁRIO
  const novoUsuario = {

    nome: nome,
    email: email,
    senha: senha

  };

  // SALVAR
  usuarios.push(novoUsuario);

  localStorage.setItem(
    "usuarios",
    JSON.stringify(usuarios)
  );

  alert("Cadastro realizado com sucesso!");

  // REDIRECIONAR
  window.location.href = "login.html";

});