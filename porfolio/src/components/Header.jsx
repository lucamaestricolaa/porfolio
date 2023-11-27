import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import "../Header.css";

const Header = () => {
  const [favorites, setFavorites] = React.useState([]);

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

  return (
    <header className="header">
      <nav className="navbar">
        <a></a>
        <Link to="/" className="nav-link">
          LMK
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/creations" className="nav-link">
          Creations
        </Link>
        <Link to="/favorites" className="nav-link">
          Favorites
          {favorites.length > 0 && (
            <Badge badgeContent={favorites.length} color="secondary" />
          )}
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;