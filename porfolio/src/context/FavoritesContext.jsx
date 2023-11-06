import React, { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();

export const FavoritesContextProvider = (props) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Cargar favoritos desde localStorage cuando se monta el componente.
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const addToFavorites = (creation) => {
    // Implementa la lógica para agregar una creación a la lista de favoritos.
    // Puedes utilizar el estado local o enviar una solicitud al servidor para actualizar los datos.
    // En este ejemplo, solo se muestra un mensaje en la consola.
    console.log(`Agregado a favoritos: ${creation.title}`);
  };

  const removeFromFavorites = (creationId) => {
    // Implementa la lógica para eliminar una creación de la lista de favoritos.
    // En este ejemplo, se filtra la creación según su ID y se actualiza la lista.
    const updatedFavorites = favorites.filter((fav) => fav.id !== creationId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {props.children}
    </FavoritesContext.Provider>
  );
};
