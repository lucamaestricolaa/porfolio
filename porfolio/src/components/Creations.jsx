import React, {useState, useEffect} from "react";
import data from '../data/Data.json'; 
import CreationCard from "./CreationCard";
import Modal from "./Modal";
import { FavoritesContext } from "../context/FavoritesContext";

const Creations = () => {
  const {favorites, setFavorites} = React.useContext(FavoritesContext);
  const [selectedCreation, setSelectedCreation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [usuario, setUsuario] = useState(() => {
    const storedUsuario = localStorage.getItem("usuario");
    return storedUsuario ? JSON.parse(storedUsuario) : null;
  });

  const handleDetailsClick = (creation) => {
    setSelectedCreation(creation);
    setIsModalOpen(true);
  };

  const handleAddToFavorites = (creation) => {
    if (usuario) {
      if (!favorites.some((fav) => fav.id === creation.id)) {
        const newFavorites = [...favorites, creation];
        setFavorites(newFavorites);
      } else {
        const newFavorites = favorites.filter((fav) => fav.id !== creation.id);
        setFavorites(newFavorites);
      }
      console.log("Nuevo estado de favoritos:", favorites);
      console.log("Contenido de localStorage:", localStorage.getItem("favorites"));
    } else {
      alert("Debe logearse para agregar a favorito");
    }
  };
  return (
    <div className="creations">
      <h2>All Creations</h2>
      <div className="creations-list">
        {data.creaciones.map((creation) => (
          <CreationCard
          key={creation.id}
          creation={creation}
          onAddToFavorites={handleAddToFavorites}
          onDetailsClick={handleDetailsClick}
          isFavorite={favorites.some((fav) => fav.id === creation.id)}
        />
        ))}
      </div>
      {isModalOpen && selectedCreation && (
        <Modal
          creation={selectedCreation}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Creations;
