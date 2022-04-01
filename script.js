function pratoPrincipal (pratoClicado) {
    const elemento = document.querySelector(".borda-verde");
    if (elemento !== null) {
        elemento.classList.toggle("borda-verde");
    }

    pratoClicado.classList.add("borda-verde");

  
}

function bebida (pratoClicado) {
    const elemento = document.querySelector(".borda");
    if (elemento !== null) {
        elemento.classList.toggle("borda");
    }

    pratoClicado.classList.add("borda");

  
}

function sobremesa (pratoClicado) {
    const elemento = document.querySelector(".borda-green");
    if (elemento !== null) {
        elemento.classList.toggle("borda-green");
    }

    pratoClicado.classList.add("borda-green");

  
}


