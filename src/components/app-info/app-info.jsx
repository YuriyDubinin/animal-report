import "./app-info.scss";

const AppInfo = () => {
    return (
        <div className="app-info">
            <ul className="app-info__list">
                <li>
                    <h2>Учет животных в компании</h2>
                </li>
                <li>
                    Общее число животных: <span>#</span>
                </li>
                <li>
                    Под доп.наблюдением: <span>#</span>
                </li>
                <li>
                    На лечении: <span>#</span>
                </li>
                <li>
                    В опасном состоянии: <span>#</span>
                </li>
            </ul>
        </div>
    );
};

export default AppInfo;
