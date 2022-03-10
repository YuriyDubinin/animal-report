import { Component } from "react";
import "./animals-list-item.css";

class AnimalsListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            treatment: false,
            specialAttention: false,
        };
    }

    onTreatment = () => {
        this.setState(({ treatment }) => ({
            treatment: !treatment,
        }));
    };

    onSpecialAttention = () => {
        this.setState(({ specialAttention }) => ({
            specialAttention: !specialAttention,
        }));
    };

    render() {
        const { name, kindOfAnimal } = this.props;
        const { treatment, specialAttention } = this.state;
        let classNames = "list-group-item d-flex justify-content-between";

        if (treatment) {
            classNames += " increase";
        }

        if (specialAttention) {
            classNames += " special-attention";
        }

        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={this.onSpecialAttention}>
                    {name}
                </span>
                <input type="text" className="list-group-item-input" defaultValue={kindOfAnimal} />
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button" className="btn-treatment btn-sm " onClick={this.onTreatment}>
                        <i className="fa-solid fa-suitcase-medical"></i>
                    </button>
                    <button type="button" className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fa-solid fa-comment-medical"></i>
                </div>
            </li>
        );
    }
}

export default AnimalsListItem;
