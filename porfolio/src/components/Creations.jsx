import React, {useState, useEffect} from "react";
import data from '../data/Data.json'; 
import CreationCard from "./CreationCard";
import Modal from "./Modal";

const Creations = () => {
  const [selectedCreation, setSelectedCreation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [usuario, setUsuario] = useState(() => {
    const storedUsuario = localStorage.getItem("usuario");
    return storedUsuario ? JSON.parse(storedUsuario) : null;
  });

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
  
  useEffect(() => {
    console.log("Guardando favoritos:", favorites);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

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
