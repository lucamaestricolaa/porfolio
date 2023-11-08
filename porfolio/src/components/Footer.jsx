import React from "react";
import "../Footer.css";

const Footer = () => {
  return (
    <footer className="pie-pagina">
      <div className="grupo-1">
        <div className="box">
          <figure>
            <a href="">
              <img src="/logo.png" alt="LMK" style={{width:150}}/>
            </a>
          </figure>
        </div>
        <div className="box">
        <h2>MI CONTACTO</h2>
          <p>
            <a href="mailto:lucamaeskim3@gmail.com">lucamaeskim3@gmail.com</a>
          </p>
        </div>

        <div className="box">
          <h2>SEGUIME</h2>
          <div className="red-social" style={{ display: "flex", alignItems: "center", width: 50 }}>
  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
    <img src="/facebook.png" alt="facebook" style={{ width: "50px" }} />
  </a>
  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
    <img src="/instagram.png" alt="instagram" style={{ width: "45px" }} />
  </a>
  <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
    <img src="/twitter.png" alt="twitter" style={{ width: "45px" }} />
  </a>
  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
    <img src="/linkedin.png" alt="linkedin" style={{ width: "45px" }} />
  </a>
</div>



        </div>
      </div>
      <div className="grupo-2">
        <small>&copy; 2023 <b>LMK 😜</b> - Todos los Derechos Reservados.</small>
      </div>
    </footer>
  );
};

export default Footer;
