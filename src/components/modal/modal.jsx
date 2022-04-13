import "./modal.scss";

const Modal = (props) => {
    const { active, onModalActive } = props;
    return (
        <div
            className={active ? "modal modal_active" : "modal"}
            onClick={() => {
                onModalActive(false);
            }}
        >
            <div
                className={active ? "modal__content modal__content_active" : "modal"}
                onClick={(event) => {
                    event.stopPropagation();
                }}
            ></div>
        </div>
    );
};

export default Modal;
