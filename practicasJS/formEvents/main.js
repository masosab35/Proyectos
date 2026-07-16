let formulario1 = document.getElementById("mi-formulario1")
let campoTexto1 = document.getElementById("campo1")
formulario1.addEventListener("submit",function(e){
    e.preventDefault();
    let datoIngresado1 = campoTexto1.value;
    console.log("Nuevo suscriptor: "+ datoIngresado1);
})
let formulario2 = document.getElementById("mi-formulario2")
let campoTexto2 = document.getElementById("campo2")
formulario2.addEventListener("submit",function(e){
    e.preventDefault();
    let datoIngresado2 = campoTexto2.value;
    if (/^[A-ZÑÁÉÍÓÚa-zñáéíóú]+$/.test(datoIngresado2)){
        console.log("Buscando resultados para: "+campoTexto2.value)
    }
    else{
         console.log("Por favor, escribe un término para iniciar la búsqueda");
    }
   
})
let formulario3 = document.getElementById("mi-formulario3")
let campoTexto3 = document.getElementById("campo3")
formulario3.addEventListener("submit",function(e){
    e.preventDefault();
    let datoIngresado3 = campoTexto3.value;
    if ((datoIngresado3.length >= 8) && (/[A-ZÑÁÉÍÓÚ]/.test(datoIngresado3))){
        console.log("¡Registro procesado con éxito!")
    }
    else {
        console.log("Registro fallido: La contraseña no cumple con los requisitos de seguridad")
    }
})