import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import AnimalsService from '../../../services/AnimalsService';
import AnimalsList from '../../AnimalsList/AnimalsList';
import AnimalsFilter from '../../AnimalsFilter/AnimalsFilter';

import './mainPage.scss';

const MainPage = () => {
  const [animalsList, setAnimalsList] = useState([]);
  const [filterMode, setFilterMode] = useState('Все');

  const animalsService = new AnimalsService();

  useEffect(() => {
    animalsService.getFilteredList(filterMode).then((res) => {
      setAnimalsList(res);
    });
  }, [filterMode]);

  const onUpdateFilter = (filterMode) => {
    setFilterMode(filterMode);
  };

  return (
    <div className="main-page">
      <Helmet>
        <meta
          name="description"
          content="Animal Report App - animal control and accounting system"
        />
        <title>Animal Report App</title>
      </Helmet>
      <AnimalsFilter filterMode={filterMode} onUpdateFilter={onUpdateFilter} />
      <AnimalsList data={animalsList} />
    </div>
  );
};

export default MainPage;
