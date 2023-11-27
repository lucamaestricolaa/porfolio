import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import CreationCard from "./CreationCard";
import data from '../data/Data.json';
import "../Home.css";
import Favorites from "./Favorites";

const Home = () => {
  const [selectedCreation, setSelectedCreation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [usuario, setUsuario] = useState(() => {
    const storedUsuario = localStorage.getItem("usuario");
    return storedUsuario ? JSON.parse(storedUsuario) : null;
  });

  const [loginUsuario, setLoginUsuario] = useState("");

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);
  
  useEffect(() => {
    console.log("Guardando favoritos:", favorites);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }, [usuario]);

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

  const handleLogin = () => {
    setUsuario(loginUsuario);
  };

  const logOut = () => {
    setUsuario(null);
  }
 
  return (
    <div className="home">
      {usuario ? (
        <div>
          <h1>Bienvenido {usuario}!</h1><br />
          <button onClick={logOut}>Cerrar sesión</button>
        </div>
      ) : (
        <div>
          <h1>Login</h1><br />
          <input
            type="text"
            value={loginUsuario}
            onChange={(e) => setLoginUsuario(e.target.value)}
            placeholder="Ingrese su usuario"
          /> <br /><br />
          <button onClick={handleLogin}>Iniciar sesión</button>
        </div>
      )}

      <h2>Más destacados</h2>

      <div className="creations-list">
        {data.creaciones.slice(0, 6).map((creation) => (
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

      <Favorites
        onDetailsClick={handleDetailsClick}
        onAddToFavorites={handleAddToFavorites}
      />
    </div>
  );
};

export default Home;
