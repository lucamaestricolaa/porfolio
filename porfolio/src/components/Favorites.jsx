import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Favorites = ({ favorites, onDetailsClick }) => {
  return (
    <div className="favorites">
      <h2>Favorites</h2>
      <div className="favorites-list">
        {favorites ? (
          favorites.map((creation) => (
            <div className="creation" key={creation.id}>
              <h3>{creation.titulo}</h3>
              <p>{creation.descripcion}</p>
              <img src={creation.imagen} alt={creation.titulo} />
              <button onClick={() => onDetailsClick(creation)}>Details</button>
            </div>
          ))
        ) : (
          <p>No hay favoritos.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
