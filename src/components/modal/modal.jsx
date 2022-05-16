import { useState, useEffect } from "react";

import "./modal.scss";

//Modal, must accept props.onSetModalActive as a prop, and the component calling the modal window must have a modalActive state & a setModalActive method that changes this state
const Modal = (props) => {
    const [modalActive, setModalActive] = useState(true);

    useEffect(() => {
        window.addEventListener("keydown", closeModalByEsc);

        return () => {
            window.removeEventListener("keydown", closeModalByEsc);
        };
    }, [modalActive]);

    //sets vale of state "modalActive" itself, and the component that called it
    const onSetModalActive = (bool) => {
        setModalActive(bool);
        props.onSetModalActive(bool);
    };

    //closing modal window when user press "Esc"
    const closeModalByEsc = (event) => {
        if (event.key === "Escape") {
            onSetModalActive(false);
        }
    };

    return (
        <div
            className={modalActive ? "modal modal_active" : "modal"}
            onClick={() => {
                onSetModalActive(false);
            }}
        >
            <div
                className={modalActive ? "modal__content active" : "modal"}
                onClick={(event) => {
                    event.stopPropagation();
                }}
            >
                {props.children}
                <div className="modal__close-btn">
                    <button
                        title="Закрыть"
                        onClick={() => {
                            onSetModalActive(false);
                        }}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
