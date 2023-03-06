import React from "react";

const Editar = ({ peli, conseguirPeliculas, setEditar, setListadoState }) => {
  const tituloComponente = "Editar Pelicula";
  const guardarEdicion = (e, id) => {
    e.preventDefault();
    let target = e.target;
    const pelisAlmacenadas = conseguirPeliculas();
    //Buscar el indice del objeto de la pelicula a actualizar
    const index = pelisAlmacenadas.findIndex((peli) => peli.id === id);

    //Crear objeto con ese indice
    let peli_actualizada = {
      id,
      titulo: target.titulo.value,
      descripcion: target.descripcion.value,
    };

    //Actualizar el elemento con ese indice
    pelisAlmacenadas[index] = peli_actualizada;

    //Guardar el nuevo array de objetos en el localstorage
    localStorage.setItem("pelis", JSON.stringify(pelisAlmacenadas));

    // y actualizar estados
    setListadoState(pelisAlmacenadas);
    setEditar(0);
  };

  return (
    <div className="edit_form">
      <h3 className="title">{tituloComponente}</h3>
      <form onSubmit={(e) => guardarEdicion(e, peli.id)}>
        <input
          type="text"
          name="titulo"
          className="tituloEditado"
          defaultValue={peli.titulo}
        />

        <textarea
          name="descripcion"
          defaultValue={peli.descripcion}
          className="descripcionEditada"
        />

        <input type="submit" className="editar" value="Actualizar" />
      </form>
    </div>
  );
};

export default Editar;
