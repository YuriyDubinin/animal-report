import { Component } from "react";

import "./animals-delete-form.css";

class AnimalsDeleteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            kindOfAnimal: "",
        };
    }

    //instant adding data from the form to the state
    onValueChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    //submitting form data
    onSubmit = (event) => {
        event.preventDefault();

        const { onModalActive, onCheck, onDelete } = this.props,
            { name, kindOfAnimal } = this.state;

        const message = {
            success: `${kindOfAnimal} по кличке '${name}' удален(а) из списка`,
            failure: `${kindOfAnimal} по кличке '${name}' не найден(а) в списке`,
        };

        //construction that removes item from the list if it exists
        if (onCheck(name, kindOfAnimal)) {
            onDelete(name, kindOfAnimal);

            console.log(message.success);

            //open modal swindow
            onModalActive(true);
        } else {
            console.log(message.failure);

            //open modal swindow
            onModalActive(true);
        }

        //clearing form after adding
        this.setState({
            name: "",
            kindOfAnimal: "",
        });
    };

    render() {
        const { name, kindOfAnimal } = this.state;

        return (
            <div className="app-add-form">
                <h3>Удалить</h3>
                <form className="add-form" onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        className=""
                        placeholder="Имя"
                        name="name"
                        value={name}
                        onChange={this.onValueChange}
                    />
                    <input
                        type="text"
                        className=""
                        placeholder="Вид"
                        name="kindOfAnimal"
                        value={kindOfAnimal}
                        onChange={this.onValueChange}
                    />

                    <button type="submit" className="btn-default">
                        Удалить
                    </button>
                </form>
            </div>
        );
    }
}

export default AnimalsDeleteForm;
