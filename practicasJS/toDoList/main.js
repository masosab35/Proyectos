let boton= document.getElementById("btn")
let formularioTareas= document.getElementById("formularioTareas")
let inputArea = document.getElementById("inputTarea")
let contenedorTareas= document.getElementById("contenedorTareas")
let templateDiv= document.getElementById("templateTarea").content
let objetoTareas

boton.addEventListener("click",(e) =>{
    e.preventDefault()
    if (inputTarea.value.trim() == ""){
        console.log("no escribiste nada")
    }
    else{
        nuevaTarea=inputArea.value.trim()
        idUnico=Date.now()
        objetoTareas={
            [idUnico]: nuevaTarea
        }
        let clon = templateDiv.cloneNode("true")
        console.log(clon)
        clon.querySelector(".textoTarea").textContent = inputTarea.value.trim()
        contenedorTareas.append(clon)
        console.log(objetoTareas)
    }

})
