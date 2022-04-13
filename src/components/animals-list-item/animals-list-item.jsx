import "./animals-list-item.scss";

const AnimalsListItem = () => {
    return (
        <li className="animals-list-item">
            <div className="">
                <button type="button" className="" title="Профиль">
                    <i className="fa-solid fa-id-card-clip"></i>
                </button>
                <span className="" title="Имя животного">
                    Имя животного
                </span>
                <button type="button" className="" title="Отчёт">
                    <i className="fa-solid fa-book"></i>
                </button>
            </div>

            <div className="">
                <span className="" title="Тип животного">
                    Тип животного
                </span>
            </div>

            <ul className="animals-list-item__indicators">
                <li>
                    <i className="fa-solid fa-eye" title="Дополнительное наблюдение"></i>
                </li>
                <li>
                    <i className="fa-solid fa-comment-medical" title="Находится на лечении"></i>
                </li>
                <li>
                    <i className="fa-solid fa-bolt" title="В опасном состоянии"></i>
                </li>
            </ul>
        </li>
    );
};

export default AnimalsListItem;
