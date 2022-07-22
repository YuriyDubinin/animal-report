import { Helmet } from "react-helmet-async";
import { useState } from "react";
import WorkActivityGraphic from "../../workActivityGraphic/WorkActivityGraphic";
import FeedingGraphic from "../../feedingGraphic/FeedingGraphic";

import defaultProfilePhoto from "../../../resources/img/default_profile_photo.jpg";

import "./personalProfilePage.scss";

const PersonalProfilePage = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Personal profile of the animal to take into account its condition" />
                <title>Animal personal profile</title>
            </Helmet>
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
                        <button title="Удалить животное">
                            <i className="fa-solid fa-trash-can"></i>
                        </button>
                        <button title="Принять изменения">
                            <i className="fa-solid fa-circle-check"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PersonalProfilePage;
