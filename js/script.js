// ========== PEGANDO OS ELEMENTOS DO HTML ==========
const botaoTema = document.getElementById("botaotema");
const iconeTema = document.getElementById("iconetema");
const textoBotao = document.getElementById("textobotao");
const mensagem = document.getElementById("mensagem");

const botaoMenu = document.getElementById("botaomenu");
const menu = document.getElementById("menu");

// ========== TEMA CLARO / ESCURO ==========
function aplicarTema(escuro) {
    // adiciona ou tira a classe "escuro" do <body>
    document.body.classList.toggle("escuro", escuro);

    if (escuro) {
        iconeTema.innerHTML = "&#9728;"; // sol
        textoBotao.textContent = "modo claro";
        mensagem.textContent = "estamos usando o tema escuro";
    } else {
        iconeTema.innerHTML = "&#9798;"; // lua
        textoBotao.textContent = "modo escuro";
        mensagem.textContent = "estamos usando o tema claro";
    }

    // guarda a escolha no navegador
    localStorage.setItem("tema", escuro ? "escuro" : "claro");
}

botaoTema.addEventListener("click", function () {
    const estaEscuro = document.body.classList.contains("escuro");
    aplicarTema(!estaEscuro);
});

// quando a página abre, usa o tema que a pessoa escolheu da última vez
aplicarTema(localStorage.getItem("tema") === "escuro");

// ========== MENU DO CELULAR ==========
botaoMenu.addEventListener("click", function () {
    const aberto = menu.classList.toggle("aberto");
    botaoMenu.setAttribute("aria-expanded", aberto);
});

// fecha o menu depois de clicar em um link
menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("aberto");
        botaoMenu.setAttribute("aria-expanded", "false");
    });
});

// ========== ANO NO RODAPÉ ==========
document.getElementById("ano").textContent = new Date().getFullYear();