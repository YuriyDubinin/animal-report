import React from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Formik, Field, Form, ErrorMessage as FormikErrorMessage} from 'formik';
import * as Yup from 'yup';

import UsersService from '../../services/UsersService';
import Modal from '../Modal/Modal';

import './auth.scss';

const Auth = () => {
  const [modalActive, setModalActive] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const navigate = useNavigate();

  const messageSet = {
    failure: `Логин или пароль неверный, в доступе отказано`,
  };

  const authHandler = (values, navigate) => {
    const usersService = new UsersService();

    usersService.getMainUsersList().then((res) => {
      const loginMatched = values.login === res[0]?.login;
      const passwordMatched = values.password === +res[0]?.password;

      if (loginMatched && passwordMatched) {
        navigate('/main-page');
      }

      setModalMessage(messageSet.failure);
      setModalActive(true);
    });
  };

  return (
    <>
      <Formik
        initialValues={{
          login: '',
          password: '',
        }}
        validationSchema={Yup.object({
          login: Yup.string().required('!'),
          password: Yup.number().required('!'),
        })}
        onSubmit={(values) => {
          authHandler(values, navigate);
        }}
      >
        <Form className="auth">
          <h3 className="auth__title">Вход в систему</h3>
          <div className="auth__body">
            <div className="auth__item">
              <Field type="string" name="login" className="auth__input" placeholder="Логин" />
              <FormikErrorMessage component="div" name="login" className="formik-error-message" />
            </div>
            <div className="auth__item">
              <Field type="number" name="password" className="auth__input" placeholder="Пароль" />
              <FormikErrorMessage
                component="div"
                name="password"
                className="formik-error-message"
              />
            </div>
          </div>
          <button type="submit" className="auth__submit-button">
            <i className="fa-solid fa-circle-check"></i>
          </button>
        </Form>
      </Formik>
      {modalActive && <Modal showModal={setModalActive} modalMessage={modalMessage}></Modal>}
    </>
  );
};

export default Auth;
