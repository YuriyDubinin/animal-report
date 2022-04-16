import defaultProfilePhoto from "../../resources/img/default-profile-photo.jpg";

import "./personal-profile.scss";

const PersonalProfile = () => {
    return (
        <div className="personal-profile">
            <div className="personal-profile__main">
                <div className="personal-profile__left-column">
                    <div className="personal-profile__photo">
                        <img src={defaultProfilePhoto} alt="photo of animal" />
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

                <div className="personal-profile__right-column">
                    <h3>Животное 'Кличка'</h3>

                    <div className="personal-profile__basic">
                        <p>Пол:</p> <input type="text" defaultValue="самец/самка" />
                        <p>Дата рождения: </p> <input type="text" defaultValue="18.03.2009" />
                    </div>

                    <h4>Рацион</h4>

                    <div className="personal-profile__ration">
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
                        <p>Итого:</p> <input type="number" placeholder="Вес (кг)" defaultValue="2.2" />
                    </div>
                    <div className="personal-profile__main-button-bar">
                        <button>
                            <i className="fa-solid fa-trash-can"></i>
                        </button>
                        <button>
                            <i className="fa-solid fa-circle-check"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalProfile;
