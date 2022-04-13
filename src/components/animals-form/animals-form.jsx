import "./animals-form.scss";

const AnimalsForm = () => {
    return (
        <div className="app-add-form">
            <h3>Добавить нового</h3>
            <form className="add-form">
                <input type="text" placeholder="Имя" name="name" defaultValue="" />
                <input type="text" placeholder="Вид" name="kindOfAnimal" defaultValue="" />

                <button type="submit" className="btn-default">
                    Добавить
                </button>
            </form>
        </div>
    );
};

export default AnimalsForm;
