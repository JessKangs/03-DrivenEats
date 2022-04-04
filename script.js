let prato;
let bebida;
let sobremesa;

function escolherPrato(pratoClicado) {
    prato = pratoClicado.innerHTML;

    const elemento = document.querySelector(".borda-verde");
    const prato1 = document.querySelector("ion-icon")

    if (elemento !== null) {
        elemento.classList.remove("borda-verde");
        prato1.classList.add("escondido")
    } else {
    pratoClicado.classList.add("borda-verde");
    prato1.classList.remove("escondido") }

}

function escolherBebida(bebidaSelecionada) {
    bebida = bebidaSelecionada.innerHTML;

    const elemento = document.querySelector(".bebida").querySelector(".borda-verde");
    const check = document.querySelector(".bebida").querySelector("ion-icon")
    if (elemento !== null) {
        elemento.classList.remove("borda-verde")
        check.classList.add("escondido")
    } else {
    bebidaSelecionada.classList.add("borda-verde");
    check.classList.remove("escondido");
}
}



function escolherSobremesa(sobremesaSelecionada) {
    sobremesa = sobremesaSelecionada.innerHTML;

    const elemento = document.querySelector(".sobremesa").querySelector(".borda-verde");
    const checkButton = document.querySelector(".sobremesa").querySelector("ion-icon");
    if (elemento !== null) {
        elemento.classList.remove("borda-verde")
        checkButton.classList.add("escondido")
    } else {
    sobremesaSelecionada.classList.add("borda-verde");
    checkButton.classList.remove("escondido"); }
}

function perdir() {

    if (prato && bebida && sobremesa) {

        document.querySelector(".botao").classList.add("botao-selecionado")
    }
}