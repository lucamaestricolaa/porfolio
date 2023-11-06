import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CreationsContext } from "../context/CreationsContext";

const Creations = () => {
  const { creations } = useContext(CreationsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const creationsPerPage = 10;

  const indexOfLastCreation = currentPage * creationsPerPage;
  const indexOfFirstCreation = indexOfLastCreation - creationsPerPage;
  const currentCreations = creations.slice(indexOfFirstCreation, indexOfLastCreation);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="creations">
      <h2>All Creations</h2>
      <div className="creations-list">
        {currentCreations.map((creation) => (
          <div className="creation" key={creation.id}>
            <h3>{creation.title}</h3>
            <p>{creation.description}</p>
            <img src={creation.imageUrl} alt={creation.title} />
            <Link to={`/creations/${creation.id}`}>Details</Link>
          </div>
        ))}
      </div>
      <div className="pagination">
        {creations.length > creationsPerPage &&
          Array.from({ length: Math.ceil(creations.length / creationsPerPage) }, (_, index) => (
            <button key={index + 1} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Creations;
