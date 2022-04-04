let prato;
let bebida;
let sobremesa;
let prato1;
let check;

function escolherPrato(pratoClicado) {
   
    prato = pratoClicado.innerHTML;

    const elemento = document.querySelector(".borda-verde");

    if (elemento !== null) {
        elemento.classList.remove("borda-verde");
        prato1.classList.add("escondido");
    } else {
    pratoClicado.classList.add("borda-verde");}
    prato1 = document.querySelector(".borda-verde").querySelector("ion-icon");
    prato1.classList.remove("escondido");
    

}

function escolherBebida(bebidaSelecionada) {
    bebida = bebidaSelecionada.innerHTML;

    const elemento = document.querySelector(".bebida").querySelector(".borda-verde");
    if (elemento !== null) {
        elemento.classList.remove("borda-verde")
        check.classList.add("escondido")
    } else {
    bebidaSelecionada.classList.add("borda-verde");
    check = document.querySelector(".bebida").querySelector(".borda-verde").querySelector("ion-icon");
    check.classList.remove("escondido");
}
}


function escolherSobremesa(sobremesaSelecionada) {
    sobremesa = sobremesaSelecionada.innerHTML;

    const elemento = document.querySelector(".sobremesa").querySelector(".borda-verde");
    if (elemento !== null) {
        elemento.classList.remove("borda-verde")
        check.classList.add("escondido")
    } else {
        sobremesaSelecionada.classList.add("borda-verde");
    check = document.querySelector(".sobremesa").querySelector(".borda-verde").querySelector("ion-icon");
    check.classList.remove("escondido");
}
}


function pedir() {

    if (prato && bebida && sobremesa) {
        
        document.querySelector(".finalizar").classList.remove("desligado");
        document.querySelector(".finalizar").classList.add("botao-selecionado");
        document.querySelector(".finalizar").innerHTML = "Fechar pedido"; 
        
    } else {
        alert("Você deve marcar todas as opções!")
    }

}


function whats() {
    const text = "Fechar pedido";
    if(prato && bebida && sobremesa)  {
    document.querySelector(".finalizar").innerHTML = text.link('https://wa.me/5519989879392?text=Ol%c3%a1%2c+gostaria+de+fazer+o+pedido%3a%0d%0a++++-+Prato%3a+Frango+Yin+Yang%0d%0a++++-+Bebida%3a+Coquinha+Gelada%0d%0a++++-+Sobremesa%3a+Pudim%0d%0a++++Total%3a+R%24+27.70'); 
} else {
    alert("Você deve marcar todas as opções!")
}
}

