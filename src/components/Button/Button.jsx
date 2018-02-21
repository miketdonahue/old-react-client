import React from 'react';
import propTypes from 'prop-types';
import './Button.scss';

const Button = props => (
  <button
    type="button"
    name="button"
    className={props.className}
    value="button"
    disabled=""
  >
    {props.children}
  </button>
);

Button.propTypes = {
  className: propTypes.string,
  children: propTypes.node.isRequired,
};

Button.defaultProps = {
  className: 'button',
};

export default Button;
