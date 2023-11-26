import React, { useEffect } from "react";
import CreationCard from "./CreationCard";

const Favorites = ({ favorites, onDetailsClick, onAddToFavorites }) => {
  const [usuario, setUsuario] = React.useState(() => {
    const storedUsuario = localStorage.getItem("usuario");
    return storedUsuario ? JSON.parse(storedUsuario) : null;
  });

  useEffect(() => {
    const storedUsuario = localStorage.getItem("usuario");
    if (storedUsuario) {
      setUsuario(JSON.parse(storedUsuario));
    }
  }, []);

  const handleAddToFavorites = (creation) => {
    onAddToFavorites(creation); // Utiliza la función pasada como prop
  };

  return (
    <div>
      <h2>Favoritos</h2>
      {favorites && favorites.length > 0 ? (
        <div className="creations-list">
          {favorites.map((creation) => (
            <CreationCard
              key={creation.id}
              creation={creation}
              onDetailsClick={onDetailsClick} // Asegúrate de pasar la función correcta
              onAddToFavorites={handleAddToFavorites}
              isFavorite={true}
              usuario={usuario}
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
