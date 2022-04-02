let prato;
let bebida;
let sobremesa;

function escolherPrato (pratoClicado) {
    prato = pratoClicado.innerHTML;

    const elemento = document.querySelector(".borda-verde");
    if (elemento !== null) {
        elemento.classList.remove("borda-verde");
    }

    pratoClicado.classList.add("borda-verde");

  
}

function escolherBebida (bebidaSelecionada) {
    bebida = bebidaSelecionada.innerHTML;

    const elemento = document.querySelector(".bebida").querySelector(".borda-verde");
    if (elemento !== null) {
        elemento.classList.remove("borda-verde")
    }
    bebidaSelecionada.classList.add("borda-verde")
}   

function escolherSobremesa (sobremesaSelecionada) {
    sobremesa = sobremesaSelecionada.innerHTML;

    const elemento = document.querySelector(".sobremesa").querySelector(".borda-verde");
    if (elemento !== null) {
        elemento.classList.remove("borda-verde")
    }

    sobremesaSelecionada.classList.add("borda-verde")
}

function perdir() {
    
    if (prato && bebida && sobremesa === true ) {
        document.querySelector(".botao").classList.add("escondido")
    document.querySelector(".botao").classList.add("botao-selecionado")
    }
}