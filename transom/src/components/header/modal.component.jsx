import React from "react";
import ReactDOM from "react-dom";
import './modal.style.scss'
import Hamburger from 'hamburger-react'

const Modal = ({ visible, toggle }) => visible ? ReactDOM.createPortal(
    // const [isOpen, setOpen] = useState(false)

    <div className="modal">
        <div className={`modal-pop ${visible ? "show" : ""}`}
            role="dialog" aria-modal="true">
            <h3>Hello World</h3>
            <p>Et sit saepe velit tenetur et consequatur in. Nihil doloribus nulla nulla rem. Soluta illo et asperiores numquam earum nesciunt. Vero odio voluptatem sunt sunt laboriosam.</p>
            <button type="button" onClick={toggle}>x</button>
        </div>
        <div
            className={`modal-overlay ${visible ? "show" : ""}`}
            onClick={toggle}
        ></div>
    </div>, document.body
) : null;

export default Modal;