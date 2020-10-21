import React, { Component } from 'react';

const Select = ({name, label, errors, options, ...rest}) => {
    return( 
      <div>
          <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <select name={name} id={name} {...rest} className="form-control"  >
      <option value=''></option>
      {options.map(option => (
          <option key={option._id} value={option._id}>{option.name}</option>
      ))}
    </select>
    {errors && <div className="alert alert-danger">{errors}</div>}
  </div>
   </div>
    );
};
 
export default Select;