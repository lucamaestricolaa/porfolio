import React from "react";
import { Link } from "react-router-dom";
import "../Header.css"

const Header = () => {
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
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
