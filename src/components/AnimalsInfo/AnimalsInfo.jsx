import React from 'react';

import './animalsInfo.scss';

const AnimalsInfo = ({data}) => {
  const totalAnimals = data?.length,
    underSpecialAttention = data.filter((item) => item?.specialAttention).length,
    onTreatment = data.filter((item) => item?.treatment).length,
    inDangerous = data.filter((item) => item?.inDangerousState).length;

  return (
    <div className="animals-info">
      <ul className="animals-info__list">
        <li>
          <h2>Учет животных в компании</h2>
        </li>
        <li>
          Общее число животных: <span>{totalAnimals}</span>
        </li>
        <li>
          Под доп.наблюдением: <span>{underSpecialAttention}</span>
        </li>
        <li>
          На лечении: <span>{onTreatment}</span>
        </li>
        <li>
          В опасном состоянии: <span>{inDangerous}</span>
        </li>
      </ul>
    </div>
  );
};

export default AnimalsInfo;
