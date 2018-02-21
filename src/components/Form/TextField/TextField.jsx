import React from 'react';
import './TextField.scss';

const TextField = () => (
  <div className="text-field">
    <input
      type="text"
      id="text-field"
      name="name"
      className="text-field__input"
      disabled=""
      autoComplete=""
    />
    <label htmlFor="text-field" className="text-field__label text-static-xsmall">Email</label>
    <div className="text-field__bottom-line" />
    <p className="text-field__helper-text" />
  </div>
);

export default TextField;
