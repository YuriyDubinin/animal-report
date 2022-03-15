import { Component } from "react";

import "./modal.css";

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { active, onModalActive } = this.props;
        return (
            <div
                className={active ? "modal active" : "modal"}
                onClick={() => {
                    onModalActive(false);
                }}
            >
                <div
                    className={active ? "modal__content active" : "modal"}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                ></div>
            </div>
        );
    }
}

export default Modal;
