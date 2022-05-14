import { useState } from "react";
import WorkActivityGraphic from "../work-activity-graphic/work-activity-graphic";
import FeedingGraphic from "../feeding-graphic/feeding-graphic";

import defaultProfilePhoto from "../../resources/img/default-profile-photo.jpg";

import "./personal-profile.scss";

const PersonalProfile = (props) => {
    const [animal, setAnimal] = useState(props.animal);

    const { id, name, kindOfAnimal, inDangerousState, treatment, specialAttention } = animal;

    return (
        <div className="personal-profile">
            <div className="personal-profile__main">
                <div className="personal-profile__data">
                    <div className="personal-profile__info">
                        <div className="personal-profile__left-info-block">
                            <div className="personal-profile__photo">
                                <img src={defaultProfilePhoto} alt="Animal photo" />
                            </div>
                            <div className="personal-profile__health-bar">
                                <button title="Дополнительное наблюдение">
                                    <i className="fa-solid fa-eye"></i>
                                </button>
                                <button title="Находится на лечении">
                                    <i className="fa-solid fa-comment-medical"></i>
                                </button>
                                <button title="В опасном состоянии">
                                    <i className="fa-solid fa-bolt"></i>
                                </button>
                            </div>
                        </div>
                        <div className="personal-profile__right-info-block">
                            <h3>'Кличка'</h3>
                            <p>Пол: Самец</p>
                            <p>Вид: Байкальская нерпа</p>
                            <p>Возраст: 9 лет</p>
                            <p>Вес: 56 кг</p>
                        </div>
                    </div>
                    <div className="personal-profile__ration">
                        <h3>Рацион (кг)</h3>
                        <input type="text" placeholder="Название корма" />{" "}
                        <input type="number" placeholder="Вес (кг)" />
                        <input type="text" placeholder="Название корма" />{" "}
                        <input type="number" placeholder="Вес (кг)" />
                        <input type="text" placeholder="Название корма" />{" "}
                        <input type="number" placeholder="Вес (кг)" />
                        <input type="text" placeholder="Название корма" />{" "}
                        <input type="number" placeholder="Вес (кг)" />
                        <input type="text" placeholder="Название корма" />{" "}
                        <input type="number" placeholder="Вес (кг)" />
                        <input type="text" placeholder="Название корма" />{" "}
                        <input type="number" placeholder="Вес (кг)" />
                        <div className="personal-profile__ration-total">
                            Итого: <span>14кг</span>
                        </div>
                    </div>
                </div>
                <div className="personal-profile__graphics">
                    <div className="personal-profile__top-graphic">
                        <WorkActivityGraphic />
                    </div>
                    <div className="personal-profile__bot-graphic">
                        <FeedingGraphic />
                    </div>
                </div>
                <div className="personal-profile__main-button-bar">
                    <button title="Закрыть без изменений">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                    <button title="Удалить животное">
                        <i className="fa-solid fa-trash-can"></i>
                    </button>
                    <button title="Принять изменения">
                        <i className="fa-solid fa-circle-check"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PersonalProfile;
