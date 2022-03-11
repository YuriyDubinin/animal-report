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
                <div className="d-flex justify-content-center align-items-center">
                    <span className="list-group-item-label" title="Имя животного">
                        {name}
                    </span>
                    <button type="button" className="btn-raport btn-sm " title="Отчёт">
                        <i className="fa-solid fa-book"></i>
                    </button>
                </div>

                <div className="d-flex justify-content-center align-items-center">
                    <span className="list-group-item-label" title="Тип животного">
                        {kindOfAnimal}
                    </span>
                    <button
                        type="button"
                        className="btn-set-attention btn-sm "
                        onClick={this.onSpecialAttention}
                        title="Установить дополнительное наблюдение"
                    >
                        <i className="fa-solid fa-eye"></i>
                    </button>
                </div>

                <div className="d-flex justify-content-center align-items-center">
                    <button type="button" className="btn-treatment btn-sm " onClick={this.onTreatment}>
                        <i className="fa-solid fa-suitcase-medical" title="Индикатор лечения"></i>
                    </button>

                    <i className="fa-solid fa-comment-medical" title="Дополнительное наблюдение"></i>
                </div>
            </li>
        );
    }
}

export default AnimalsListItem;
