let casilla= document.getElementById("casilla")
let mivideo= document.getElementById("mivideo")
let boton= document.getElementById("boton")
let estadoCasilla= null

casilla.addEventListener("change",(e) => {
    estadoCasilla = e.target.checked;
    console.log(estadoCasilla)
})
boton.addEventListener("click", (e) =>{
    if (casilla.checked){
        if (mivideo.paused){
            mivideo.play()
            console.log("video reproduciendose")
            boton.innerHTML= "Pausar"
        }
        else{
            mivideo.pause()
            console.log("video pausado")
            boton.innerHTML= "Reproducir"
        }
    }
})
