const express = require('express')
const app= express()
const { bd }= require('../data/puntuacion.js')
const cors= require('cors')

let routerElementos= express.Router()
app.use(cors())
app.use(express.json())
app.use('/elementos',routerElementos)


const ordenarElementos= (valor, res, req) =>{
    let nuevoArray = [...bd].sort((a, b) => a[valor] - b[valor])
    console.log(JSON.stringify(nuevoArray))
    return res.send(nuevoArray)

}
routerElementos.get("/",(req, res) => {
    if (req.query.ordenar == 'puntos'){
        return ordenarElementos('puntos', res, req)

    }
    console.log('fetched')
    res.send(bd)
    
});
routerElementos.post("/",(req, res) => {
    let newElement= req.body
    bd.push(newElement)
    res.send(bd)
    
});
routerElementos.put("/",(req, res) => {
    let newElement= req.body
    let indice= bd.findIndex(e => e.id == newElement.id)
    bd[indice]= newElement
    res.send(bd)
    
});
routerElementos.patch("/",(req, res) => {
    let newElement= req.body
    console.log(newElement)
    let indice= bd.findIndex(e => e.id == newElement.id)
    if (indice < 0){
        return res.status(404).end()
    }
    Object.assign(bd[indice],newElement)
    res.send(bd)
    
});
routerElementos.delete("/:id",(req, res) => {
    let identificador= req.params.id
    let indice= bd.findIndex(e => e.id == identificador)
    if (indice < 0){
        return res.status(404).end()
    }
    bd.splice(indice,1)
    res.send(bd)
    
});

routerElementos.get("/:elemento",(req, res) => {
    let publicacion = req.params.elemento
    let resultado = bd.filter(e => e.id == publicacion)

    if (resultado.length === 0) {
        return res.status(404).send(`No se encontro el post ${publicacion}`)
    }

    
    return res.send(resultado)
});

app.listen(3001, () => {
    console.log(bd)    
})
