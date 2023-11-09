import React, { useState } from "react";
import data from '../data/Data.json'; // Importa los datos del JSON

const Creations = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const creationsPerPage = 10;

  const indexOfLastCreation = currentPage * creationsPerPage;
  const indexOfFirstCreation = indexOfLastCreation - creationsPerPage;
  const currentCreations = data.creaciones.slice(indexOfFirstCreation, indexOfLastCreation);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="creations">
      <h2>All Creations</h2>
      <div className="creations-list">
        {currentCreations.map((creation) => (
          <div className="creation" key={creation.id}>
            <h3>{creation.titulo}</h3>
            {creation.imagen && <img src={creation.imagen} alt={creation.titulo} />}
          </div>
        ))}
      </div>
      <div className="pagination">
        {data.creaciones.length > creationsPerPage &&
          Array.from({ length: Math.ceil(data.creaciones.length / creationsPerPage) }, (_, index) => (
            <button key={index + 1} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Creations;
