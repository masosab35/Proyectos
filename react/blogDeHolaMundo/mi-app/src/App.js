import Post from './componentes/post';
import './App.css';
import React, { useState ,useEffect} from 'react';
import axios from 'axios'

function App() {
  const [puntaje,setPuntaje] = useState(null)
    //localStorage.getItem("puntaje")? JSON.parse(localStorage.getItem("puntaje")):{cafe:0,te:0,pintura:0}
  ;
  const [estadoClick, setClickeado] = useState("noClick");
  const [estadoEleccion, setEleccion] = useState(false)
  
  useEffect(
    () =>{
    axios.get('http://localhost:3001/elementos')
    .then(e => setPuntaje(e.data))
    .catch((error)=> {
      console.log(error)
    })
    
  }
  ,[])
  const enviarDatos = (datos) =>{
    axios.put('http://localhost:3001/elementos',datos)
  }
  const cambiarBotonClickeado= () =>{
    setClickeado("botonClickeado")
  }
  const cambiarCafeClickeado = () =>{
    
    setPuntaje(prev => {
      if (!prev) return prev
      const copia = prev.map(e => e.id == 1? {...e, puntos: e.puntos + 1} : e);
      enviarDatos(copia.find(e => e.id == 1))
      
      return copia
    })
    console.log(puntaje)
    setClickeado("cafeClickeado")
    setEleccion(true)
    window.scrollTo({
    top: 0,
    behavior: "smooth"
    });
  }
  const cambiarTeClickeado = () =>{
    
    setPuntaje(prev => {
      if (!prev) return prev
      const copia = prev.map(e => e.id == 2? {...e, puntos: e.puntos + 1} : e);
      enviarDatos(copia.find(e => e.id == 2))
      
      return copia
    })
    console.log(puntaje)
    setClickeado("teClickeado")
    setEleccion(true)
    window.scrollTo({
    top: 0,
    behavior: "smooth"
    });
  }
  const cambiarPinturaClickeado = () =>{
    setPuntaje(prev => {
      if (!prev) return prev
      const copia = prev.map(e => e.id == 3? {...e, puntos: e.puntos + 1} : e);
      enviarDatos(copia.find(e => e.id == 3))
      
      return copia
    })
    console.log(puntaje)
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
          {(estadoClick === "cafeClickeado")? <p className = "resultado">Tu y {puntaje[0].puntos} mas han elegido el cafe</p>: null}
          {(estadoClick === "teClickeado")? <p className = "resultado">Tu y {puntaje[1].puntos} mas han elegido el te</p>: null}
          {(estadoClick === "pinturaClickeado")? <p className = "resultado">Tu y {puntaje[2].puntos} mas han elegido la pintura</p>: null}
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
