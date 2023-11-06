import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CreationsContext } from "../context/CreationsContext";

const Home = () => {
  const [selectedCreation, setSelectedCreation] = useState(null);
  const { creations, addToFavorites } = useContext(CreationsContext);

  const handleAddToFavorites = (creation) => {
    addToFavorites(creation);
  };

  return (
    <div className="home">
      <h2>Most Featured Creations</h2>
      <div className="creations-list">
        {creations.slice(0, 6).map((creation) => (
          <div className="creation" key={creation.id}>
            <h3>{creation.title}</h3>
            <p>{creation.description}</p>
            <img src={creation.imageUrl} alt={creation.title} />
            <button onClick={() => handleAddToFavorites(creation)}>Add to Favorites</button>
            <Link to={`/creations/${creation.id}`}>Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
