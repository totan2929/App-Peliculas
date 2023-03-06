import { useState } from "react";
import Buscador from "./components/Buscador";
import Crear from "./components/Crear";
import Listado from "./components/Listado";

function App() {
   const [listadoState, setListadoState] = useState([]);


  return (
    <div className="layout">
        {/* Cabecera */}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            <h1>Mis Películas</h1>
        </header>
        {/* Barra de Navegación */}
        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Películas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>
        </nav>
        {/* contenido Principal */}
        <section className="content">
           {/* Aqui va la lista de Peliculas */}
            <Listado listadoState={listadoState} setListadoState={setListadoState}/>
        </section>

        {/* Barra Lateral */}
        <aside className="lateral">
            <Buscador listadoState={listadoState} setListadoState={setListadoState}/>

            <Crear setListadoState={setListadoState}/>
        </aside>

        
        {/* Pie de pagina */}
        <footer className="footer">&copy; JCS - <a href="https://totan2929.github.io/CV-JCS" target="_blank" rel="noopener noreferrer">totan2929.github.io/CV-JCS"</a>
        </footer>
    </div>
  );
}

export default App;
