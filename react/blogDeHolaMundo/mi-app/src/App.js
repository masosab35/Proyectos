import Post from './componentes/post';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [puntaje,setPuntaje] = useState(
    localStorage.getItem("puntaje")? JSON.parse(localStorage.getItem("puntaje")):{cafe:0,te:0,pintura:0}
  );
  const [estadoClick, setClickeado] = useState("noClick");
  const [estadoEleccion, setEleccion] = useState(false)
  
  const cambiarBotonClickeado= () =>{
    setClickeado("botonClickeado")
  }
  const cambiarCafeClickeado = () =>{
    setPuntaje(prev => {
      let nuevo= {...puntaje ,cafe: prev.cafe + 1};
      localStorage.setItem("puntaje",JSON.stringify(nuevo))
      return nuevo
    })
    setClickeado("cafeClickeado")
    setEleccion(true)
    window.scrollTo({
    top: 0,
    behavior: "smooth"
    });
  }
  const cambiarTeClickeado = () =>{
    setPuntaje(prev => {
      let nuevo= {...puntaje ,te: prev.te + 1};
      localStorage.setItem("puntaje",JSON.stringify(nuevo))
      return nuevo
    })
    setClickeado("teClickeado")
    setEleccion(true)
    window.scrollTo({
    top: 0,
    behavior: "smooth"
    });
  }
  const cambiarPinturaClickeado = () =>{
    setPuntaje(prev => {
      let nuevo= {...puntaje ,pintura: prev.pintura + 1};
      localStorage.setItem("puntaje",JSON.stringify(nuevo))
      return nuevo
    })
    setClickeado("pinturaClickeado")
    setEleccion(true)
    window.scrollTo({
    top: 0,
    behavior: "smooth"
    });
  }
  const volveraVotar = () =>{
    setClickeado("noClick")
    setEleccion(false)
  }
  
  
  return (
    <div className="App">
      <header>
        <h1 id="titulo">Blog de Misael</h1>
      </header>
    
      <section className="container">
          {(estadoClick === "noClick")? <button onClick={cambiarBotonClickeado}>Empezar la encuesta</button>:null}
          {(estadoClick=== "botonClickeado")? <> <Post onclick={cambiarCafeClickeado} titulo = "Foto de Cafe" descripcion = "El mejor cafe del mundo" ruta = "coffee" parrafo = "Ven y mira como preparar el mejor cafe que podrias probar" alt = "cafe"></Post>
          <Post onclick={cambiarTeClickeado} titulo = "Foto de Te" descripcion = "El mejor te del mundo" ruta = "tea" parrafo = "Ven y mira como preparar el mejor cafe que podrias probar" alt = "te"></Post>
          <Post onclick={cambiarPinturaClickeado} titulo = "Foto de Pintura" descripcion = "La pintura que esta en la boca de todos" ruta = "painting" parrafo = "Mira la ciencia detras de la pintura mas famosa del momento" alt="pintura"></Post>
          </>: null}
          {(estadoClick === "cafeClickeado")? <p className = "resultado">Tu y {puntaje.cafe} mas han elegido el cafe</p>: null}
          {(estadoClick === "teClickeado")? <p className = "resultado">Tu y {puntaje.te} mas han elegido el te</p>: null}
          {(estadoClick === "pinturaClickeado")? <p className = "resultado">Tu y {puntaje.pintura} mas han elegido la pintura</p>: null}
          {(estadoEleccion === true)? <button onClick={volveraVotar}>Volver a votar</button>: null}


      </section>
      <footer>
          <section>
              <a href="#titulo">Ir al título</a>
              <a href="mailto:mmasosab@cincinnatus.edu.do">Contactame aqui</a>
          </section>
          <p>Copyright © 2023 Blog de Misael. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
