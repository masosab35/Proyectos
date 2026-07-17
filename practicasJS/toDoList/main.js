let boton= document.getElementById("btn")
let formularioTareas= document.getElementById("formularioTareas")
let inputTarea = document.getElementById("inputTarea")
let contenedorTareas= document.getElementById("contenedorTareas")
let templateDiv= document.getElementById("templateTarea").content.firstElementChild
let objetoTareas = {}


boton.addEventListener("click",(e) =>{
    e.preventDefault()
    if (inputTarea.value.trim() == ""){
        console.log("no escribiste nada")
    }
    else{
        nuevaTarea=inputTarea.value.trim()
        idUnico=Date.now()
        objetoTareas[idUnico] = nuevaTarea
        let clon = templateDiv.cloneNode(true)
        clon.querySelector(".textoTarea").textContent = nuevaTarea
        console.log(clon)
        contenedorTareas.append(clon)
        
        console.log(objetoTareas)
    }

})
