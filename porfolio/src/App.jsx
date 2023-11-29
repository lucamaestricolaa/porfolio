import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Creations from "./components/Creations";
import Favorites from "./components/Favorites";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FavoritesProvider from "./context/FavoritesContext";

const App = () => {
  

  return (
    <BrowserRouter>
    <FavoritesProvider>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home/>}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/creations"
          element={<Creations/>}
        />
        <Route
          path="/favorites"
          element={<Favorites/>}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      </FavoritesProvider>
    </BrowserRouter>
  );
};

export default App;
