import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Creations from "./components/Creations";
import Favorites from "./components/Favorites";
import Contact from "./components/Contact";
import UsuarioProvider from "./context/ContextUsuario";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <UsuarioProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/creations" element={<Creations />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </UsuarioProvider>
  );
};

export default App;
