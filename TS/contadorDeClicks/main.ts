let parrafo = document.getElementById("parrafoClicks")
let contador = 0
document.addEventListener("click", (e) => {
    contador++
    if ( !parrafo ) return 
    parrafo.innerHTML = `${contador} Clicks`
})