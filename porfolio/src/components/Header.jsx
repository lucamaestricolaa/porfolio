import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="nav-link">
          Home
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
