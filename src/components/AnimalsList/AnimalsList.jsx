import React from 'react';

import AnimalsListItem from '../AnimalsListItem/AnimalsListItem';

import './animalsList.scss';

const AnimalsList = ({data, onSetModalActive}) => {
  const elements = data.map((item) => {
    const {id, ...itemProps} = item;
    return <AnimalsListItem key={id} id={id} {...itemProps} onSetModalActive={onSetModalActive} />;
  });

  return <ul className="animals-list">{elements}</ul>;
};

export default AnimalsList;
