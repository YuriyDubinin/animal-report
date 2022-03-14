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

        const animalName = this.state.name,
            kindOfAnimal = this.state.kindOfAnimal;

        const message = {
            success: `${kindOfAnimal} по кличке '${animalName}' удален(а) из списка`,
            failure: `${kindOfAnimal} по кличке '${animalName}' не найден(а) в списке`,
        };

        //construction that removes item from the list if it exists
        if (this.props.onCheck(animalName, kindOfAnimal)) {
            this.props.onDelete(animalName, kindOfAnimal);
            console.log(message.success);
        } else {
            console.log(message.failure);
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
                <form className="add-form d-flex" onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Имя"
                        name="name"
                        value={name}
                        onChange={this.onValueChange}
                    />
                    <input
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Вид"
                        name="kindOfAnimal"
                        value={kindOfAnimal}
                        onChange={this.onValueChange}
                    />

                    <button type="submit" className="btn btn-outline-light">
                        Удалить
                    </button>
                </form>
            </div>
        );
    }
}

export default AnimalsDeleteForm;
