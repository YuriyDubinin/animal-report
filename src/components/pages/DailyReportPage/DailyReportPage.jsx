import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Formik, Field, Form, ErrorMessage as FormikErrorMessage} from 'formik';
import * as Yup from 'yup';

import './dailyReportPage.scss';

const DailyReportPage = ({type}) => {
  return (
    <>
      {type === 'animal' && (
        <div className="daily--report-wrapper">
          <Helmet>
            <meta
              name="description"
              content="Daily report on the condition of the animal and the conditions of its maintenance"
            />
            <title>Daily animal report</title>
          </Helmet>
          <Formik
            initialValues={{
              waterColor: '',
              temperature: '',
              activeChlorine: '',
              totalChlorine: '',
              hydrogen: '',
              weight1: '',
              weight2: '',
              weight3: '',
              weight4: '',
              totalWeight: '',
              light: '',
              toys: '',
              fances: '',
              workActivity: '',
              foodActivity: '',
              physicalState: '',
              note: '',
              responsible: '',
              date: '',
            }}
            validationSchema={Yup.object({
              responsible: Yup.string().required('!'),
              date: Yup.string().required('!'),
              workActivity: Yup.number().required('!'),
              foodActivity: Yup.number().required('!'),
              physicalState: Yup.string().required('!'),
              light: Yup.string().required('!'),
              toys: Yup.string().required('!'),
              fances: Yup.string().required('!'),
            })}
            onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
          >
            <Form className="daily-report">
              <h3 className="daily-report__title">Дневной отчёт</h3>
              <div className="daily-report__body">
                <div className="daily-report__item">
                  <h4 className="daily-report__subtitle">Вода</h4>

                  <div className="daily-report__label">
                    <p>Цвет:</p>
                  </div>
                  <Field type="text" name="waterColor" className="daily-report__input" />

                  <div className="daily-report__label">
                    <p>Температура (℃):</p>
                  </div>
                  <Field type="number" name="temperature" className="daily-report__input" />

                  <div className="daily-report__label">
                    <p>Активный хлор:</p>
                  </div>
                  <Field type="number" name="activeChlorine" className="daily-report__input" />

                  <div className="daily-report__label">
                    <p>Общий хлор:</p>
                  </div>
                  <Field type="number" name="totalChlorine" className="daily-report__input" />

                  <div className="daily-report__label">
                    <p>Водород (PH):</p>
                  </div>
                  <Field type="number" name="hydrogen" className="daily-report__input" />
                </div>

                <div className="daily-report__item">
                  <h4 className="daily-report__subtitle">Пайка</h4>
                  <div className="daily-report__label">
                    <p>Вид пайки :</p>
                  </div>
                  <Field
                    type="number"
                    name="weight1"
                    className="daily-report__input"
                    placeholder="вес (кг)"
                  />

                  <div className="daily-report__label">
                    <p>Вид пайки :</p>
                  </div>
                  <Field
                    type="number"
                    name="weight2"
                    className="daily-report__input"
                    placeholder="вес (кг)"
                  />

                  <div className="daily-report__label">
                    <p>Вид пайки :</p>
                  </div>
                  <Field
                    type="number"
                    name="weight3"
                    className="daily-report__input"
                    placeholder="вес (кг)"
                  />

                  <div className="daily-report__label">
                    <p>Вид пайки :</p>
                  </div>
                  <Field
                    type="number"
                    name="weight4"
                    className="daily-report__input"
                    placeholder="вес (кг)"
                  />

                  <div className="daily-report__label">
                    <p>Итого :</p>
                  </div>
                  <Field
                    type="number"
                    name="totalWeight"
                    className="daily-report__input"
                    placeholder="вес (кг)"
                  />
                </div>

                <div className="daily-report__item">
                  <h4 className="daily-report__subtitle">Условия содержания</h4>

                  <div className="daily-report__label">
                    <p>Свет:</p>
                  </div>
                  <FormikErrorMessage
                    component="div"
                    name="light"
                    className="formik-error-message"
                  />
                  <Field type="text" name="light" className="daily-report__input" />

                  <div className="daily-report__label">
                    <p>Игрушки:</p>
                  </div>
                  <FormikErrorMessage
                    component="div"
                    name="toys"
                    className="formik-error-message"
                  />
                  <Field type="text" name="toys" className="daily-report__input" />

                  <div className="daily-report__label">
                    <p>Ограждения:</p>
                  </div>
                  <FormikErrorMessage
                    component="div"
                    name="fances"
                    className="formik-error-message"
                  />
                  <Field type="text" name="fances" className="daily-report__input" />
                </div>

                <div className="daily-report__item">
                  <h4 className="daily-report__subtitle">Основное</h4>

                  <div className="daily-report__label">
                    <p>Рабочая активность (%):</p>
                  </div>
                  <FormikErrorMessage
                    component="div"
                    name="workActivity"
                    className="formik-error-message"
                  />
                  <Field type="number" name="workActivity" className="daily-report__input" />

                  <div className="daily-report__label">
                    <p>Пищевая активность (%):</p>
                  </div>
                  <FormikErrorMessage
                    component="div"
                    name="foodActivity"
                    className="formik-error-message"
                  />
                  <Field type="number" name="foodActivity" className="daily-report__input" />

                  <div className="daily-report__label">
                    <p>Физическое состояние:</p>
                  </div>
                  <FormikErrorMessage
                    component="div"
                    name="physicalState"
                    className="formik-error-message"
                  />
                  <Field type="text" name="physicalState" className="daily-report__input" />
                </div>

                <div className="daily-report__item">
                  <h4 className="daily-report__subtitle">Примечание</h4>
                  <Field
                    name="note"
                    as="textarea"
                    cols="30"
                    rows="10"
                    className="daily-report__textarea"
                  ></Field>
                </div>

                <div className="daily-report__item">
                  <div className="daily-report__label">
                    <p>Заполнил:</p>
                  </div>
                  <FormikErrorMessage
                    component="div"
                    name="responsible"
                    className="formik-error-message"
                  />
                  <Field type="text" name="responsible" className="daily-report__input" />

                  <div className="daily-report__label">
                    <p>Дата:</p>
                  </div>
                  <FormikErrorMessage
                    component="div"
                    name="date"
                    className="formik-error-message"
                  />
                  <Field type="text" name="date" className="daily-report__input" />
                </div>
              </div>
              <button type="submit" className="daily-report__submit-button" title="Отправить отчёт">
                <i className="fa-solid fa-circle-check"></i>
              </button>
            </Form>
          </Formik>
        </div>
      )}
    </>
  );
};

export default DailyReportPage;
