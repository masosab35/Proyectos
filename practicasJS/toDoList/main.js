let formularioCrearTareas = document.getElementById("formularioCrearTareas")
let inputCrearTarea = document.getElementById("inputCrearTarea")
let btnCrearTarea = document.getElementById("btnCrearTarea")
let contenedorAlmacenarTareas = document.getElementById("contenedorAlmacenarTareas")
let templateTarea = document.getElementById("templateTarea")
let objetoTareas = {}


document.addEventListener("DOMContentLoaded",(e)=>{
    e.preventDefault() 
    if(localStorage.getItem("tareas") !== null){
        objetoTareas = JSON.parse(localStorage.getItem("tareas"))
        console.log("cargado")
    }
    else{
        console.log("no hay tareas guardadas")
    }
    pintarTareas()
    
})
formularioCrearTareas.addEventListener("submit",(e)=>{
    e.preventDefault()
    if (inputCrearTarea.value.trim() === ""){
        alert("No puedes agregar una tarea vacía")
        return
    }
    guardarTareas()
    
    
})
document.addEventListener("click",(e)=>{
    if (e.target.classList.contains("btnEliminar")){
        borrarTareas(e)
         return
        }
       
    else if (e.target.classList.contains("btnTachar")){
          if (objetoTareas[e.target.parentElement.id].estado){
            destacharTareas(e)
            console.log("destachado")
            return
            }
        tacharTareas(e)
        console.log("tachado")
        return
        }
        
})



function guardarTareas(){
    let fecha= Date.now()
    objetoTareas[fecha]={
        "id": fecha,
        "texto": inputCrearTarea.value,
        "estado": false
    }
    localStorage.setItem("tareas",JSON.stringify(objetoTareas))
    pintarTareas()
    formularioCrearTareas.reset()
    inputCrearTarea.focus()
    return objetoTareas[fecha]
    
}
function pintarTareas(){
    contenedorAlmacenarTareas.innerHTML = ""
    for (const key in objetoTareas) {
        let clone =templateTarea.content.firstElementChild.cloneNode(true)
        let textoTarea = clone.querySelector(".textoTarea")
        clone.setAttribute("id",objetoTareas[key].id)
        textoTarea.textContent = objetoTareas[key].texto
        if (objetoTareas[key].estado){
            clone.classList.add("tachado")
        }

        contenedorAlmacenarTareas.append(clone)
        
    }
    
}
function borrarTareas(e){
    delete objetoTareas[e.target.parentElement.id]
    console.log(e.target.parentElement.id)
    console.log(objetoTareas)
    localStorage.setItem("tareas",JSON.stringify(objetoTareas))
    pintarTareas()
}
function tacharTareas(e){
    objetoTareas[e.target.parentElement.id].estado = true
    localStorage.setItem("tareas",JSON.stringify(objetoTareas))
    pintarTareas(e)
}
function destacharTareas(e){
    objetoTareas[e.target.parentElement.id].estado = false
    localStorage.setItem("tareas",JSON.stringify(objetoTareas))
    pintarTareas(e)
}
