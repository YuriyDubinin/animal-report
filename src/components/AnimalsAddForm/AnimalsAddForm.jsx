import React from 'react';
import {useState} from 'react';

import AnimalsService from '../../services/AnimalsService';
import Modal from '../Modal/Modal';

import './animalsAddForm.scss';

const AnimalsAddForm = ({data, setReRender}) => {
  const [name, setName] = useState(''),
    [kindOfAnimal, setKindOfAnimal] = useState(''),
    [modalActive, setModalActive] = useState(false),
    [modalMessage, setModalMessage] = useState('');

  const animalsService = new AnimalsService();

  const messageSet = {
    success: `${kindOfAnimal} по кличке '${name}' добавлен(а) в базу данных`,
    wrongInput: `Животное не добавлено: длина имени и типа животного должны состоять из 2х и более символов`,
    alreadyExists: `Животное не добавлено: уже есть животное такого вида и с таким именем`,
    failure: `Ошибка, что-то пошло не так..(`,
  };

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onKindOfAnimalChange = (event) => {
    setKindOfAnimal(event.target.value);
  };

  //returns true/false depending on check
  const checkingPossibilityOfAdiing = () => {
    //a condition that checked the general correctness of the input
    if (name.length < 2 || kindOfAnimal.length < 2) {
      //setting the message of the modal window and calling it
      setModalMessage(messageSet.wrongInput);
      setModalActive(true);

      return false;
    }

    //a condition that checks the input for correctness
    if (
      data.filter((item) => {
        if (item.name === name && item.kindOfAnimal === kindOfAnimal) {
          return item;
        }
      }).length > 0
    ) {
      //setting the message of the modal window and calling it
      setModalMessage(messageSet.alreadyExists);
      setModalActive(true);

      return false;
    }

    return true;
  };

  const onSubmit = (event) => {
    event.preventDefault();

    //validity check
    const validEntry = checkingPossibilityOfAdiing();

    //in case of successful verification
    if (validEntry) {
      //for correct setting id
      const maxId = data.slice(-1)[0].id;

      const newAnimal = {
        id: maxId + 1,
        name: name,
        kindOfAnimal: kindOfAnimal,
        treatment: false,
        specialAttention: false,
        inDangerousState: false,
      };

      const jsonData = JSON.stringify(newAnimal);

      animalsService.postData('http://localhost:3000/mainAnimalsList', jsonData);

      setReRender(true);

      //setting the message of the modal window and calling it
      setModalMessage(messageSet.success);
      setModalActive(true);
    }

    //clear form
    setName('');
    setKindOfAnimal('');
  };

  //setting modal window activity
  const onSetModalActive = (bool) => {
    setModalActive(bool);
  };

  //create modal window with message
  const createModalWindow = () => {
    return (
      <div className="animals-add-form__modal-message">
        {modalMessage}

        <i className="fa-solid fa-circle-check" onClick={() => setModalActive(false)}></i>
      </div>
    );
  };

  //conditional rendering of modal window
  const modalWindowIsShown = modalActive ? (
    <Modal onSetModalActive={onSetModalActive}>{createModalWindow()}</Modal>
  ) : null;

  return (
    <div className="animals-add-form">
      <h3>Добавить нового</h3>
      <form className="animals-add-form__add-form" onSubmit={onSubmit}>
        <input type="text" placeholder="Имя" name="name" value={name} onChange={onNameChange} />
        <input
          type="text"
          placeholder="Вид"
          name="kindOfAnimal"
          value={kindOfAnimal}
          onChange={onKindOfAnimalChange}
        />

        <button type="submit" className="btn-default">
          Добавить
        </button>
      </form>

      {modalWindowIsShown}
    </div>
  );
};

export default AnimalsAddForm;
