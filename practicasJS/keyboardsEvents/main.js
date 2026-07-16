let campoTexto1 = document.getElementById("inputTexto1")
campoTexto1.addEventListener("keydown", function(e){
    console.log("Pulsaste el boton "+ e.key);

    if (e.key == "Enter"){
        console.log("Pulsaste una tecla especial")
    }
})
let campoTexto2 = document.getElementById("inputTexto2")
campoTexto2.addEventListener("keydown", function(e){

    if (e.key == "Enter"){
        console.log("Formulario enviado con éxito")
    }
     if (e.key == "Escape"){
        console.log("Acción cancelada")
    }
})
let campoTexto3 = document.getElementById("inputTexto3")
campoTexto3.addEventListener("keydown", function(e){

    if (/^[A-ZÑÁÉÍÓÚ]$/.test(e.key)){
        console.log("¡Cuidado! No se permiten mayúsculas")
    }
   
})