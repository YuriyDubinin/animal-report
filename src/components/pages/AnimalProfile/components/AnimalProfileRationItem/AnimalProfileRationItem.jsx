import './animalProfileRationItem.scss';

const AnimalProfileRationItem = ({ item }) => {
  return (
    <div className="animal-profile-ration-item">
      <div className="animal-profile-ration-item__item">{item.name}</div>
      <div className="animal-profile-ration-item__item">{item.weight}</div>
    </div>
  );
};

export default AnimalProfileRationItem;
