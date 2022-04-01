function escolherPrato(pratoClicado) {
    const elemento = document.querySelector(".borda-verde");
    if (elemento !== null) {
        elemento.classList.toggle("borda-verde");
    }

    pratoClicado.classList.add("borda-verde");
}

