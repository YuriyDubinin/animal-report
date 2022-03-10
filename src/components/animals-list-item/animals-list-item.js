import { Component } from "react";
import "./animals-list-item.css";

class AnimalsListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            specialAttention: false,
            treatment: false,
        };
    }

    onSpecialAttention = () => {
        this.setState(({ specialAttention }) => ({
            specialAttention: !specialAttention,
        }));
    };

    onTreatment = () => {
        this.setState(({ treatment }) => ({
            treatment: !treatment,
        }));
    };

    render() {
        const { name, type } = this.props;
        const { specialAttention, treatment } = this.state;
        let classNames = "list-group-item d-flex justify-content-between";

        if (specialAttention) {
            classNames += " increase";
        }

        if (treatment) {
            classNames += " like";
        }

        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={this.onTreatment}>
                    {name}
                </span>
                <input type="text" className="list-group-item-input" defaultValue={type} />
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button" className="btn-special-attention btn-sm " onClick={this.onSpecialAttention}>
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
