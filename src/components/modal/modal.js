import "./modal.css";

const Modal = (props) => {
    const { active, onModalActive } = props;
    return (
        <div
            className={active ? "modal active" : "modal"}
            onClick={() => {
                onModalActive(false);
            }}
        >
            <div
                className={active ? "modal__content active" : "modal"}
                onClick={(event) => {
                    event.stopPropagation();
                }}
            ></div>
        </div>
    );
};

export default Modal;
