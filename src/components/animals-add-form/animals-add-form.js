import { Component } from "react";

import "./animals-add-form.css";

class AnimalsAddForm extends Component {
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

    //passing data from the form to add an animal to the list
    onSubmit = (event) => {
        event.preventDefault();

        const { name, kindOfAnimal } = this.state,
            { onCheck, onAdd, onModalActive } = this.props;

        const message = {
            success: `${kindOfAnimal} по кличке '${name}' добавлен(а) в список`,
            failure: `${kindOfAnimal} по кличке '${name}' уже существует в списке, выберите другое имя или вид животного`,
        };

        //A construct that checks if there is an existing animal in the list, if so, the animal is not added
        if (onCheck(name, kindOfAnimal)) {
            console.log(message.failure);

            //open modal window
            onModalActive(true);
        } else {
            onAdd(name, kindOfAnimal);
            console.log(message.success);

            //open modal window
            onModalActive(true);
        }

        //clearing form after adding
        this.setState(() => ({
            name: "",
            kindOfAnimal: "",
        }));
    };

    render() {
        const { name, kindOfAnimal } = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавить нового</h3>
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
                        Добавить
                    </button>
                </form>
            </div>
        );
    }
}

export default AnimalsAddForm;
