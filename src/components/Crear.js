import React, { useState } from "react";
import { GuardarEnStorage } from "../helpers/GuardarEnStorage";

const Crear = ({setListadoState}) => {
  const tituloComponente = "Añadir pelicula";
  const [peliState, setPeliState] = useState({
    titulo: "",
    descripcion: "",
  });

  const { titulo, descripcion } = peliState;

  const conseguirDatosForm = (e) => {
    e.preventDefault();

    //Conseguir datos del formulario
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    // Crear objeto de la pelicula a guardar
    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion,
    };

    //Guardar estado
    setPeliState(peli);

    // Actualizar el estado del listado principal
    setListadoState(elementos => {
      return [...elementos, peli]
    })
    // Guardar en el almacenamiento local
    //localStorage.setItem('pelis', JSON.stringify([]))
    GuardarEnStorage("pelis",peli);
  };

  

  return (
    <div className="add">
      <h3 className="title">{tituloComponente}</h3>
      <strong>
        {titulo && descripcion && "Has creado la pelicula: " + titulo}
      </strong>
      <form onSubmit={conseguirDatosForm}>
        <input type="text" placeholder="Título" id="titulo" name="titulo" />
        <textarea
          placeholder="Descripción"
          id="descripcion"
          name="descripcion"
        ></textarea>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Crear;
