const botao_abrir = document.querySelector("header > button")
const botao_fechar = document.querySelector("header nav button")

const body = document.querySelector("body")
const nav = document.querySelector("header .mobile")

botao_abrir.addEventListener('click', abrir_menu)
botao_fechar.addEventListener('click', fechar_menu)

function abrir_menu () {
    body.classList.add("escurecer")
    nav.classList.add("abrir")
}

function fechar_menu () {
    body.classList.remove("escurecer")
    nav.classList.remove("abrir")
}