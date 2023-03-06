export const GuardarEnStorage = (clave, elemento) => {
    // Conseguir los elementos que ya tenemos en Localstorage
    let elementos = JSON.parse(localStorage.getItem(clave));
    // Comprobar si es un array
    if (Array.isArray(elementos)) {
      //Agregar dentro del array un elemento nuevo
      elementos.push(elemento);
    } else {
      //Crear un array con el elemento nuevo
      elementos = [elemento];
    }
    // Guardar en el localstorage
    localStorage.setItem(clave, JSON.stringify(elementos));
    // Devolver objeto guardado
    return elemento;
  };