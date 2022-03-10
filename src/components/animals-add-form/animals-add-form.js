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

    onValueChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    render() {
        const { name, kindOfAnimal } = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавить нового</h3>
                <form className="add-form d-flex">
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
