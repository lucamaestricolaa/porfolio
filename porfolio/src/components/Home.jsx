import React, { useState } from "react";
import Modal from "./Modal";
import CreationCard from "./CreationCard";
import data from '../data/Data.json';
import "../Home.css"

const Home = () => {
  const [selectedCreation, setSelectedCreation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDetailsClick = (creation) => {
    setSelectedCreation(creation);
    setIsModalOpen(true);
  };

  const handleAddToFavorites = (creation) => {
    // Lógica para añadir a favoritos si es necesario
  };

  return (
    <div className="home">
      <h2>Más destacados</h2>
      <div className="creations-list">
        {data.creaciones.slice(0, 6).map((creation) => (
          <CreationCard
            key={creation.id}
            creation={creation}
            onAddToFavorites={handleAddToFavorites}
            onDetailsClick={handleDetailsClick}
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

export default Home;
