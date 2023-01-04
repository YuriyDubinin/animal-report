import defaultProfilePhoto from '../../../../resources/img/default_profile_photo.jpg?jsx';

import './animalProfileInfo.scss';

const AnimalProfileInfo = ({    
    name,
    gender,
    inDangerousState,
    kindOfAnimal,
    specialAttention,
    treatment,
    age,
    weight }) => {
        
  
    return (
        <div className="animal-profile-info">
            <div className="animal-profile-info__left-info-block">
                <div className="animal-profile-info__photo">
                    <img src={defaultProfilePhoto} alt="Animal photo" />
                </div>
                <div className="animal-profile-info__health-bar">
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
            <div className="animal-profile-info__right-info-block">
                <h3>{name}</h3>
                <div className="animal-profile-info__right_info_block_body">
                    <div className="animal-profile-info__right-info-block-item">
                        <p>Пол:</p>
                        <span>{gender}</span>
                    </div>
                    <div className="animal-profile-info__right-info-block-item">
                        <p>Вид:</p>
                        <span>{kindOfAnimal}</span>
                    </div>
                    <div className="animal-profile-info__right-info-block-item">
                        <p>Возраст (лет):</p>
                        <span>{age}</span>
                    </div>
                    <div className="animal-profile-info__right-info-block-item">
                        <p>Вес (кг):</p>
                        <span>{weight}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimalProfileInfo;