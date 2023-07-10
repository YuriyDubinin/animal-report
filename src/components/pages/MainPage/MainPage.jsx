import React from 'react';
import {useState, useEffect} from 'react';
import {Helmet} from 'react-helmet-async';

import AnimalsService from '../../../services/AnimalsService';
import AnimalsInfo from '../../AnimalsInfo/AnimalsInfo';
import AnimalsList from '../../AnimalsList/AnimalsList';
import AnimalsFilter from '../../AnimalsFilter/AnimalsFilter';
import Sidebar from '../../Sidebar/Sidebar';

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
    <>
      <Helmet>
        <meta
          name="description"
          content="Animal Report App - animal control and accounting system"
        />
        <title>Animal Report App</title>
      </Helmet>
      <Sidebar />
      <div className="main-page">
        <AnimalsInfo data={animalsList} />
        <AnimalsFilter filterMode={filterMode} onUpdateFilter={onUpdateFilter} />
        <AnimalsList data={animalsList} />
      </div>
    </>
  );
};

export default MainPage;
