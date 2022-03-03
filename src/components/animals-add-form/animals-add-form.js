import "./animals-add-form.css";

const AnimalsAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Добавить нового</h3>
            <form className="add-form d-flex">
                <input type="text" className="form-control new-post-label" placeholder="Имя" />
                <input type="number" className="form-control new-post-label" placeholder="Вид" />

                <button type="submit" className="btn btn-outline-light">
                    Добавить
                </button>
            </form>
        </div>
    );
};

export default AnimalsAddForm;
