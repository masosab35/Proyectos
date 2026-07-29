import React from 'react';
import '../hojasDeEstilo/post.css'

function post({ titulo , descripcion , ruta , parrafo, alt, onclick}){
    return(
        <article className="post-1" onClick={onclick}>
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            <img src= {`/IMG/${ruta}.jpg`} alt={`Foto de ${alt}`} width="400px"/>
            <p>{parrafo}</p>
        </article>
    )
}

export default post;