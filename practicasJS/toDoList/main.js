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
console.log(objetoTareas)
formularioCrearTareas.addEventListener("submit",(e)=>{
    e.preventDefault()
    guardarTareas()
    
    
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
        contenedorAlmacenarTareas.append(clone)
        
    }
    
}
document.addEventListener("click",(e)=>{
    if (e.target.className == "btnEliminar"){
        delete objetoTareas[e.target.parentElement.id]
        console.log(e.target.parentElement.id)
        console.log(objetoTareas)
        pintarTareas()
    }
    
})


