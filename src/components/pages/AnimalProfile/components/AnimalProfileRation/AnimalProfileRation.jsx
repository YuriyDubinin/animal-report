import AnimalProfileRationItem from '../AnimalProfileRationItem/AnimalProfileRationItem';

import './animalProfileRation.scss';

const AnimalProfileRation = () => {
  const ration = [
    {
      name: 'Рыба',
      weight: 5,
    },
    {
      name: 'Рыба',
      weight: 5,
    },
    {
      name: 'Рыба',
      weight: 5,
    },
    {
      name: 'Рыба',
      weight: 5,
    },
  ];
  return (
    <div className="animal-profile-ration">
      <h3 className="animal-profile-ration__title">Рацион (кг): 11</h3>
      <div className="animal-profile-ration__list">
        <div className="animal-profile-ration__list-header">
          <div className="animal-profile-ration__list-header-item">Наименование</div>
          <div className="animal-profile-ration__list-header-item">Вес (кг)</div>
        </div>
        <div className="animal-profile-ration__list-body">
          {ration.map((item, i) => {
            return <AnimalProfileRationItem item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AnimalProfileRation;
