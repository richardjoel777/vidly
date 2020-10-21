import React from 'react';

const Input = ({ name, label, errors, ...rest}) => {
    return  <div className="ui form mb-3">
         <label htmlFor={name}>{label}</label>
    <input 
      {...rest}
      name={name}
      id={name} 
      className="field"/>
      {errors && <div className="ui negative message">{errors}</div>}
    </div>
}
 
export default Input;