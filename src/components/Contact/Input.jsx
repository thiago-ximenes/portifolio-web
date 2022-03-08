import React from 'react';
import InputMask from 'react-input-mask';

function Input({ name, mask, id, placeholder, type, label, onChange=null,
  value='', className=null, disabled=false }) {
  return (
    <>
      <label
        htmlFor={ id }
        className="block text-gray-700 font-bold my-3 text-2xl"
      >
        { label }
      </label>
      <InputMask
        mask={mask}
        value={ value }
        className={
          `${className} px-6 py-4 border border-gray-400 rounded-lg focus:outline-none 
            focus:border-gray-500 w-full font-medium text-lg`
        }
        id={ id }
        type={ type }
        name={ name }
        placeholder={ placeholder }
        onChange={ onChange }
        disabled={ disabled }
      />
    </>
  )
}

export default Input