import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Creations from "./components/Creations";
import Favorites from "./components/Favorites";
import Contact from "./components/Contact";
import { CreationsContextProvider } from "./context/CreationsContext";
import { FavoritesContextProvider } from "./context/FavoritesContext";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/creations" element={<Creations />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const WrappedApp = () => {
  return (
    <CreationsContextProvider>
      <FavoritesContextProvider>
        <App />
      </FavoritesContextProvider>
    </CreationsContextProvider>
  );
};

export default WrappedApp;
