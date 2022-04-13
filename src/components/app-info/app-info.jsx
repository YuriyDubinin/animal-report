import "./app-info.scss";

const AppInfo = ({ totalAnimals, animalsOnSpecialAttention, animalsOnTreatment, inDangerousState }) => {
    return (
        <div className="app-info">
            <ul className="app-info__list">
                <li>
                    <h2>Учет животных в компании</h2>
                </li>
                <li>
                    Общее число животных: <span>{totalAnimals}</span>
                </li>
                <li>
                    Под доп.наблюдением: <span>{animalsOnSpecialAttention}</span>
                </li>
                <li>
                    На лечении: <span>{animalsOnTreatment}</span>
                </li>
                <li>
                    В опасном состоянии: <span>{inDangerousState}</span>
                </li>
            </ul>
        </div>
    );
};

export default AppInfo;
