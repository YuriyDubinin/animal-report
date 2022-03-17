import "./app-info.css";

const AppInfo = ({ totalAnimals, animalsOnSpecialAttention, animalsOnTreatment }) => {
    return (
        <div className="app-info">
            <h1>Учет животных в компании</h1>
            <h2>Общее число животных: {totalAnimals}</h2>
            <h2>Под доп.наблюдением: {animalsOnSpecialAttention}</h2>
            <h2>На лечении: {animalsOnTreatment}</h2>
        </div>
    );
};

export default AppInfo;
