import React from 'react';
import * as PropTypes from 'prop-types';
import style from './Button.module.css';

const Button = ({ text, onClick, ...props }) => (
  <button {...props} onClick={onClick} type="button" className={style.Button}>{text}</button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
