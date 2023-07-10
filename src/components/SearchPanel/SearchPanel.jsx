import React from 'react';
import {useState} from 'react';

import './searchPanel.scss';

const SearchPanel = (props) => {
  const [term, setTerm] = useState('');

  const onUpdateSearch = (event) => {
    const value = event.target.value;

    setTerm(value);
    props.onUpdateSearch(value);
  };

  return <input type="text" placeholder="Поиск" onChange={onUpdateSearch} value={term} />;
};

export default SearchPanel;
