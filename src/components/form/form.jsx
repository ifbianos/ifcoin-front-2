import React from 'react';
import './form.css';

const Form = (props) => {
  const {
    handleChange,
    label,
    name,
    type,
    value
  } = props;

  return (
    <div className={`form-container ${value.length || type === 'date' ? 'input' : ''}`}>
      {value.length || type === 'date' ?
        <p>{label}</p>
      : null}
      <input placeholder={label} type={type} name={name} value={value} onChange={handleChange}/>
    </div>
  );
}

export default Form;