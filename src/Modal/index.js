import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className = "ModalBackground">
            {children}
        </div>,
        document.getElementById('modal') //aqui le decimos cual es el nodo al cual le vamos a hacer la teletransportación.
    );
}

export { Modal };