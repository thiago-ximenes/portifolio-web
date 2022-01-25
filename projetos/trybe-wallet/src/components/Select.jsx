import React from 'react';

const Select = ({value, name, handleChange, optionValue, optionName=''}) => {
  return (
    <select
        value={ value }
        name={ name }
        onChange={ handleChange }
      >
        <option value="">{optionName}</option>
        { optionValue.length > 0 && optionValue.map((option) => (
          <option
            key={ option }
            value={ option }
          >
            { option }
          </option>
        )) }
      </select>
  );
}

export default Select;
