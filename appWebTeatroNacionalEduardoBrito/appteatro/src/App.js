import './App.css';

function App() {
  return (
    <div className="App">
      <nav className='barraNav'>
        <ul className='ulDeUsuario'>
          <li className="linkDeNav">Mi cuenta</li>
          <li className="linkDeNav">Mi calendario</li>
        </ul>
        <ul className='ulDelBuscador'>
          <li className="linkDeNav">Categorias</li>
          <li className="linkDeNav"><input placeholder='Buscar...'></input></li>
        </ul>
        <p className='logoNav'>Teatro Nacional Eduardo Brito </p>
      </nav>
      <section id='seccionTitulo'>
        <h1 id='tituloInicio'>Teatro Nacional Eduardo Brito  </h1>
        <p id="descripcionInicio">El epicentro del arte y la cultura dominicana. Explora nuestra cartelera, vive experiencias artísticas inolvidables y adquiere tus boletas en línea de forma rápida y segura.</p>
        <p id='botonInicio'>Ver Cartelera y Comprar Boletas</p>
        <img id="imagenInicio"alt='Una fotografía espectacular en alta resolución de la fachada iluminada del Teatro Nacional'></img>
      </section>
      <section id='seccionFuncionalidades'>
        <h2 id='tituloFuncionalidades'>Tu experiencia en el teatro empieza aquí</h2>
        <div id='divMapa'>
          <h3 id='tituloMapa'>CElige tu asiento en un clic</h3>
          <p id='descripcionMapa'>Diseñamos un mapa interactivo para que explores las salas y elijas exactamente desde dónde quieres ver la función. Compra de forma segura y lleva tus entradas directamente en el celular.</p>
          <img id="imagenMapa" alt='Un primer plano estético de una obra teatral o ballet en escena.'></img>
        </div>
        <div id='divGaleria'>
          <h3 id='tituloGaleria'>Revive los mejores momentos</h3>
          <p id='descripcionGaleria'>El espectáculo no termina cuando cae el telón. Entra a nuestras galerías para disfrutar de fotografías exclusivas, entrevistas con los artistas y videos de lo que pasa tras bambalinas.</p>
          <img id='imagenGaleria'></img>
        </div>
        <div id='divAlquilar'>
          <h3 id='tituloAlquilar'>Alquila nuestros espacios</h3>
          <p id='descripcionAlquilar'>Si eres productor o buscas el escenario perfecto para un evento especial, nuestras salas históricas y un equipo técnico de primer nivel están a tu disposición. Envíanos tu propuesta.</p>
          <img id='imagenAlquilar'></img>
        </div>
      </section>
      <section id='seccionComunidad'>
        <h2 id='tituloComunidad'>Forma parte de nuestra comunidad</h2>
        <div id='divComunidad'>
          <div id='divCorreo'>
            <h3 id='tituloCorreo'>Entérate antes que nadie</h3>
            <p id='descripcionCorreo'>Déjanos tu correo y sé de los primeros en conocer los próximos estrenos, temporadas especiales y acceso a preventas exclusivas para que nunca te quedes sin tu lugar.</p>
          </div>
          <div id='divStaff'>
            <h3 id='tituloStaff'>Detrás de cada función</h3>
            <p id='descripcionStaff'>Desde los técnicos de sonido y luces hasta el personal de acomodación, trabajamos en equipo para que cada noche sea mágica, segura e inolvidable.</p>
          </div>
          <div id="divCultura">
            <h3 id='tituloCultura'>Un espacio para todos</h3>
            <p id='descripcionCultura'>Creemos firmemente que la cultura transforma vidas. Por eso, este portal nace para derribar distancias y conectar a cada dominicano y visitante con lo mejor del arte nacional e internacional.</p>
          </div>
        </div>
        <div id='divImagenComunidad'>
          <img id='imagenComunidad' alt='Una foto expresiva y cercana: una bailarina ajustándose las zapatillas en la penumbra del backstage o el plano detalle de las manos de un pianista antes de tocar la primera nota'></img>
        </div>
      </section>

    </div>
  );
}

export default App;
