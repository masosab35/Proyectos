let botonBorrar= document.querySelector(".btn-borrar");
let divPadre
botonBorrar.addEventListener("click",(e) =>{
    divPadre = e.target.parentElement;
    console.log(e)
    divPadre.remove() 
})