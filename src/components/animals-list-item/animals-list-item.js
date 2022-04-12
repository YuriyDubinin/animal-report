import "./animals-list-item.css";

const AnimalsListItem = (props) => {
    const { name, kindOfAnimal, treatment, specialAttention, onToggleProp } = props;

    let classNames = "animals-list-item";

    if (treatment) {
        classNames += " increase";
    }

    if (specialAttention) {
        classNames += " special-attention";
    }
    return (
        <li className={classNames}>
            <div className="">
                <span className="" title="Имя животного">
                    {name}
                </span>
                <button type="button" className="btn-raport btn-sm" title="Отчёт">
                    <i className="fa-solid fa-book"></i>
                </button>
            </div>

            <div className="">
                <span className="animals-list-item-label" title="Тип животного">
                    {kindOfAnimal}
                </span>
                <button
                    type="button"
                    className="btn-set-attention btn-sm"
                    onClick={onToggleProp}
                    data-toggle="specialAttention"
                    title="Установить дополнительное наблюдение"
                >
                    <i className="fa-solid fa-eye"></i>
                </button>
            </div>

            <div className="">
                <button type="button" className="btn-treatment btn-sm " onClick={onToggleProp} data-toggle="treatment">
                    <i className="fa-solid fa-suitcase-medical" title="Индикатор лечения"></i>
                </button>

                <i className="fa-solid fa-comment-medical" title="Дополнительное наблюдение"></i>
            </div>
        </li>
    );
};

export default AnimalsListItem;
