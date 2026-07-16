let divPadre = document.getElementById("divPadre");
const stock = ["Bujías Camry", "Filtro de aceite Toyota", "Radiador Corolla", "Amortiguador Starlet", "Pastillas de freno"];
let arregloFinal = [];

for (let i = 0; i <= stock.length; i++){
    let nuevaPieza = document.createElement("p");
    nuevaPieza.className= "piezas";
    nuevaPieza.textContent=stock[i];
    arregloFinal.push(nuevaPieza);
    console.log("pieza");

}
divPadre.append(...arregloFinal);