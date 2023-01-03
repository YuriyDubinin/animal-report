import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectAnimalId } from '../../AnimalsListItem/animalSlice';

import WorkActivityGraphic from '../../WorkActivityGraphic/WorkActivityGraphic';
import FeedingGraphic from '../../FeedingGraphic/FeedingGraphic';
import AnimalService from '../../../services/AnimalsService';

import defaultProfilePhoto from '../../../resources/img/default_profile_photo.jpg';

import './personalProfilePage.scss';

const PersonalProfilePage = () => {
  const [animalData, setAnimalData] = useState({});

  const animalId = useSelector(selectAnimalId);

  const animalService = new AnimalService();

  const name = animalData?.name ? animalData.name : '*no data';
  const gender = animalData?.gender ? animalData.gender :'*no data';
  const inDangerousState = animalData?.inDangerousState ? animalData.inDangerousState : '*no data';
  const kindOfAnimal = animalData?.kindOfAnimal ? animalData.kindOfAnimal : '*no data';
  const specialAttention = animalData?.specialAttention ? animalData.specialAttention : '*no data';
  const treatment = animalData?.treatment ? animalData.treatment : '*no data';
  const age = animalData?.age ? animalData.age : '*no data';
  const weight = animalData?.weight ? animalData.weight: '*no data';


  useEffect(() => {
    animalService
      .getAnimalDataById(animalId)
      .then((res) => {
        setAnimalData(res);
      });
  }, [animalId]);

  console.log(animalData)
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Personal profile of the animal to take into account its condition"
        />
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
                <h3>{name}</h3>
                <p>Пол: {gender}</p>
                <p>Вид: {kindOfAnimal}</p>
                <p>Возраст: {age} лет</p>
                <p>Вес: {weight} кг</p>
              </div>
            </div>
            <div className="personal-profile__ration">
              <h3>Рацион (кг)</h3>
              <input type="text" placeholder="Название корма" />{' '}
              <input type="number" placeholder="Вес (кг)" />
              <input type="text" placeholder="Название корма" />{' '}
              <input type="number" placeholder="Вес (кг)" />
              <input type="text" placeholder="Название корма" />{' '}
              <input type="number" placeholder="Вес (кг)" />
              <input type="text" placeholder="Название корма" />{' '}
              <input type="number" placeholder="Вес (кг)" />
              <input type="text" placeholder="Название корма" />{' '}
              <input type="number" placeholder="Вес (кг)" />
              <input type="text" placeholder="Название корма" />{' '}
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
