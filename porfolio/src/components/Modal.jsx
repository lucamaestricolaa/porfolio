import React from "react";
import PropTypes from "prop-types";
import "../Modal.css"; // Asegúrate de tener un archivo CSS para estilizar el modal

const Modal = ({ creation, onClose }) => {
  if (!creation) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{creation.titulo}</h2>
        <p>{creation.descripcion}</p>
        {creation.imagen && <img src={creation.imagen} alt={creation.titulo} />}
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  creation: PropTypes.shape({
    titulo: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    imagen: PropTypes.string, // Puedes definir imagen como opcional si no siempre está presente
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
