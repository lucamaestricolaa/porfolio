import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/tu-perfil-linkedin" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        {/* Agrega otros enlaces a tus redes sociales aquí */}
      </div>
      <div className="contact-info">
        <p>Contacto:</p>
        <a href="mailto:tuemail@example.com">tuemail@example.com</a>
      </div>
    </footer>
  );
};

export default Footer;
