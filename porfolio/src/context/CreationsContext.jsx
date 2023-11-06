import React, { createContext, useState, useEffect } from "react";

export const CreationsContext = createContext();

export const CreationsContextProvider = (props) => {
  const [creations, setCreations] = useState([]);

  useEffect(() => {
    // Aquí puedes hacer una solicitud a tu API o cargar las creaciones desde localStorage.
    // Por ejemplo, puedes utilizar fetch para cargar las creaciones desde un servidor.
    // En este ejemplo, se carga un array vacío. Puedes modificar esto según tus necesidades.
    setCreations([]);
  }, []);

  const addToFavorites = (creation) => {
    // Implementa la lógica para agregar una creación a la lista de favoritos.
    // Puedes utilizar el estado local o enviar una solicitud al servidor para actualizar los datos.
    // En este ejemplo, solo se muestra un mensaje en la consola.
    console.log(`Agregado a favoritos: ${creation.title}`);
  };

  return (
    <CreationsContext.Provider value={{ creations, addToFavorites }}>
      {props.children}
    </CreationsContext.Provider>
  );
};
