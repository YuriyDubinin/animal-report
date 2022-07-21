import Modal from "../modal/Modal";

import "./animalsListItem.scss";

const AnimalsListItem = ({
    id,
    name,
    kindOfAnimal,
    treatment,
    specialAttention,
    inDangerousState,
    onSetModalActive,
}) => {
    //Adding a passivity class to indicators depending on a property
    const styleDistributor = (property) => {
        const className = property ? null : "passive-health-indicator";
        return className;
    };

    return (
        <li className="animals-list-item">
            <div className="">
                <button
                    type="button"
                    className=""
                    title="Профиль"
                    data-work-tab="profile"
                    onClick={(event) => {
                        console.log(id);
                        onSetModalActive(true, event.currentTarget.getAttribute("data-work-tab"));
                    }}
                >
                    <i className="fa-solid fa-id-card-clip"></i>
                </button>
                <button
                    type="button"
                    className=""
                    title="Отчёт"
                    data-work-tab="report"
                    onClick={(event) => {
                        onSetModalActive(true, event.currentTarget.getAttribute("data-work-tab"));
                    }}
                >
                    <i className="fa-solid fa-book"></i>
                </button>
                <span className="" title="Имя животного">
                    {name}
                </span>
            </div>

            <div className="">
                <span className="" title="Тип животного">
                    {kindOfAnimal}
                </span>
            </div>

            <ul className="animals-list-item__health-indicators">
                <li className={styleDistributor(specialAttention)}>
                    <i className="fa-solid fa-eye" title="Дополнительное наблюдение"></i>
                </li>
                <li className={styleDistributor(treatment)}>
                    <i className="fa-solid fa-comment-medical" title="Находится на лечении"></i>
                </li>
                <li className={styleDistributor(inDangerousState)}>
                    <i className="fa-solid fa-bolt" title="В опасном состоянии"></i>
                </li>
            </ul>
        </li>
    );
};

export default AnimalsListItem;
