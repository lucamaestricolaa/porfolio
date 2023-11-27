import React, { useEffect } from "react";
import CreationCard from "./CreationCard";

const Favorites = ({ onDetailsClick, onAddToFavorites }) => {
  const [usuario, setUsuario] = React.useState(null);
  const [favorites, setFavorites] = React.useState([]);

  useEffect(() => {
    try {
      const storedUsuario = localStorage.getItem("usuario");
      if (storedUsuario !== null) {
        const parsedUsuario = JSON.parse(storedUsuario);
        setUsuario(parsedUsuario);
      }
    } catch (error) {
      console.error("Error al parsear el usuario:", error);
    }
  }, []);

  useEffect(() => {
    try {
      const storedFavorites = localStorage.getItem("favorites");
      if (storedFavorites !== null) {
        const parsedFavorites = JSON.parse(storedFavorites);
        setFavorites(parsedFavorites);
      }
    } catch (error) {
      console.error("Error al parsear los favoritos:", error);
    }
  }, []);

  const handleAddToFavorites = (creation) => {
    onAddToFavorites(creation);
  };

  const handleDetailsClick = (creation) => {
    onDetailsClick(creation);
  };

  return (
    <div>
      <h2>Favoritos de {usuario}</h2>
      {favorites && favorites.length > 0 ? (
        <div className="creations-list">
          {favorites.map((creation) => (
            <CreationCard
              key={creation.id}
              creation={creation}
              onAddToFavorites={handleAddToFavorites}
              onDetailsClick={handleDetailsClick}
              isFavorite={true}
            />
          ))}
        </div>
      ) : (
        <p>No hay favoritos.</p>
      )}
    </div>
  );
};

export default Favorites;