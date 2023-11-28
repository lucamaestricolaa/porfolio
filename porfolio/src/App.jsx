import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Creations from "./components/Creations";
import Favorites from "./components/Favorites";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [favorites, setFavorites] = useState(() => {
    try {
      const storedFavorites = localStorage.getItem("favorites");
      return storedFavorites ? JSON.parse(storedFavorites) : [];
    } catch (error) {
      console.error("Error al parsear los favoritos:", error);
      return [];
    }
  });

  useEffect(() => {
    console.log("Guardando favoritos:", favorites);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home favorites={favorites} setFavorites={setFavorites} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/creations"
          element={<Creations favorites={favorites} setFavorites={setFavorites} />}
        />
        <Route
          path="/favorites"
          element={<Favorites favorites={favorites} setFavorites={setFavorites} />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
