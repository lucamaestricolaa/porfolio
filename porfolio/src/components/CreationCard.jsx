import React from "react";

const CreationCard = ({ creation, onAddToFavorites, onDetailsClick }) => {
  return (
    <div className="creation">
      <h3>{creation.titulo}</h3>
      {creation.imagen && <img src={creation.imagen} alt={creation.titulo} />}
      <p>Año: {creation.fecha}</p>
      <button onClick={() => onAddToFavorites(creation)}>Add to Favorites</button>
      <button onClick={() => onDetailsClick(creation)}>Details</button>
    </div>
  );
};

export default CreationCard;
