import React from 'react';
import img from './error.png';

import './errorMessageWindow.scss';

const ErrorMessageWindow = () => {
  return (
    <div className="error-message-window">
      <img src={img} alt="error picture" />
      <p>
        <span>ERROR!</span>
        Какие-то неполадки с сервером..
      </p>
    </div>
  );
};

export default ErrorMessageWindow;
