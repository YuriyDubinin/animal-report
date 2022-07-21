import img from "./error.png";

const ErrorMessage = () => {
    return (
        <div className="error-message">
            <img
                style={{
                    display: "block",
                    width: "250px",
                    height: "250px",
                    objectFit: "contain",
                    margin: "0 auto",
                }}
                src={img}
                alt="error picture"
            />
        </div>
    );
};

export default ErrorMessage;
