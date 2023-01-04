import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectAnimalId } from '../../../slices/animalSlice';
import AnimalsService from '../../../services/AnimalsService';
import AnimalProfileInfo from './components/AnimalProfileInfo/AnimalProfileInfo';
import AnimalProfileRation from './components/AnimalProfileRation/AnimalProfileRation';
import WorkActivityGraphic from './components/WorkActivityGraphic/WorkActivityGraphic';
import FeedingGraphic from '../AnimalProfile/components/FeedingGraphic/FeedingGraphic';

import './animalProfile.scss';

const AnimalProfile = () => {
  const [animalData, setAnimalData] = useState(useSelector(selectAnimalId));

  const animalId = useSelector(selectAnimalId);

  const animalService = new AnimalsService();

  const name = animalData?.name ? animalData.name : '*no data';
  const gender = animalData?.gender ? animalData.gender : '*no data';
  const inDangerousState = animalData?.inDangerousState ? animalData.inDangerousState : '*no data';
  const kindOfAnimal = animalData?.kindOfAnimal ? animalData.kindOfAnimal : '*no data';
  const specialAttention = animalData?.specialAttention ? animalData.specialAttention : '*no data';
  const treatment = animalData?.treatment ? animalData.treatment : '*no data';
  const age = animalData?.age ? animalData.age : '*no data';
  const weight = animalData?.weight ? animalData.weight : '*no data';

  useEffect(() => {
    animalService.getAnimalDataById(animalId).then((res) => {
      setAnimalData(res);
    });
  }, [animalId]);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Personal profile of the animal to take into account its condition"
        />
        <title>Animal personal profile</title>
      </Helmet>
      <div className="animal-profile">
        <div className="animal-profile__main">
          <div className="animal-profile__item">
            <AnimalProfileInfo
              name={name}
              gender={gender}
              inDangerousState={inDangerousState}
              kindOfAnimal={kindOfAnimal}
              specialAttention={specialAttention}
              treatment={treatment}
              age={age}
              weight={weight}
            />
          </div>
          <div className="animal-profile__item">
            <WorkActivityGraphic />
          </div>
          <div className="animal-profile__item">
            <AnimalProfileRation />
          </div>
          <div className="animal-profile__item">
            <FeedingGraphic />
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimalProfile;
