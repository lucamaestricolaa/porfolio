import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Favorites = () => {

  return (
    <div className="favorites">
      <h2>Favorites</h2>
        <div className="favorites-list">
          {favorites.map((creation) => (
            <div className="creation" key={creation.id}>
              <h3>{creation.title}</h3>
              <p>{creation.description}</p>
              <img src={creation.imageUrl} alt={creation.title} />
              <Link to={`/creations/${creation.id}`}>Details</Link>
            </div>
          ))}
        </div>
      
    </div>
  );
};

export default Favorites;
