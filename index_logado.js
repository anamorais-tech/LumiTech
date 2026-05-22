const usuario =
    sessionStorage.getItem("usuarioLogado");

// mostrar nome
document.getElementById("nomeUsuario")
    .textContent = usuario;

const iconeUsuario =
    document.querySelector(".usuario");

const menu =
    document.getElementById("menuDropdown");

// abrir menu
iconeUsuario.addEventListener("click", () => {

    menu.classList.toggle("ativo");

});

// fechar clicando fora
document.addEventListener("click", (event) => {

    if (!event.target.closest(".usuario_menu")) {

        menu.classList.remove("ativo");

    }

});

// sair da conta
function sair() {

    sessionStorage.removeItem("usuarioLogado");

    window.location.href = "index.html";

}
