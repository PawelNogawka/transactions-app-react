import React from "react";

import classes from './Input.module.scss';

const Input = ({
  label,
  type,
  name,
  placeholder,
  onChange,
  value,
  error,
  errorMessage
}) => {
  const errorEl = <span className={classes.error}>{errorMessage}</span>;

  return (
    <div className={classes.input}>
      <label htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {error && errorEl}
    </div>
  );
};

export default Input;
