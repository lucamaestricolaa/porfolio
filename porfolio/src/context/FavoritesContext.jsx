import React, {useState, useEffect} from 'react';

export const FavoritesContext = React.createContext();

const FavoritesProvider = (props) => {
    const [favorites, setFavorites] = useState(() => {
        try {
          const storedFavorites = localStorage.getItem("favorites");
          return storedFavorites ? JSON.parse(storedFavorites) : [];
        } catch (error) {
          console.error("Error al parsear los favoritos:", error);
          return [];
        }
      });
    
      useEffect(() => {
        console.log("Guardando favoritos:", favorites);
        localStorage.setItem("favorites", JSON.stringify(favorites));
      }, [favorites]);

    return <FavoritesContext.Provider value={{favorites, setFavorites}}>{props.children}</FavoritesContext.Provider>
}

export default FavoritesProvider;