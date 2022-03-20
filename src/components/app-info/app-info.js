import "./app-info.css";

const AppInfo = ({ totalAnimals, animalsOnSpecialAttention, animalsOnTreatment }) => {
    return (
        <div className="app-info">
            <h1>Учет животных в компании</h1>
            <h3>Общее число животных: {totalAnimals}</h3>
            <h3>
                Под доп.наблюдением: <span>{animalsOnSpecialAttention}</span>
            </h3>
            <h2>
                На лечении: <span>{animalsOnTreatment}</span>
            </h2>
        </div>
    );
};

export default AppInfo;
