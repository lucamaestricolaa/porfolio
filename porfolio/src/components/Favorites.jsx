import React, { useEffect, useState } from "react";
import CreationCard from "./CreationCard";
import Modal from "./Modal";
import { FavoritesContext } from "../context/FavoritesContext";

const Favorites = () => {
  const {favorites, setFavorites} = React.useContext(FavoritesContext);
  const [usuario, setUsuario] = React.useState(null);
  const [selectedCreation, setSelectedCreation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleDetailsClick = (creation) => {
    setSelectedCreation(creation);
    setIsModalOpen(true);
  };

  const handleAddToFavorites = (creation) => {
    if (usuario) {
      if (!favorites.some((fav) => fav.id === creation.id)) {
        const newFavorites = [...favorites, creation];
        setFavorites(newFavorites);
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
      } else {
        const newFavorites = favorites.filter((fav) => fav.id !== creation.id);
        setFavorites(newFavorites);
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
      }
      console.log("Nuevo estado de favoritos:", favorites);
      console.log("Contenido de localStorage:", localStorage.getItem("favorites"));
    } else {
      alert("Debe logearse para agregar a favorito");
    }
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
      {isModalOpen && selectedCreation && (
        <Modal
          creation={selectedCreation}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Favorites;
