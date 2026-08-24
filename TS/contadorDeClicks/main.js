"use strict";
let parrafo = document.getElementById("parrafoClicks");
let contador = 0;
document.addEventListener("click", (e) => {
    contador++;
    parrafo.innerHTML = `${contador} Clicks`;
});
