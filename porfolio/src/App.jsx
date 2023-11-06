import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Creations from "./components/Creations";
import Favorites from "./components/Favorites";
import Contact from "./components/Contact";
import { CreationsContextProvider } from "./context/CreationsContext";
import {FavoritesContextProvider} from "./context/FavoritesContext";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/creations" component={Creations} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/contact" component={Contact} />
        </Switch>
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
