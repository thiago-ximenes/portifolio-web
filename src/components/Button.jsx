import React from 'react';

const Button = ({ text, href, target = false, variant = false, children }) => {
  return (
    <a
      href={ href }
      target={ target ? '_blank' : '' }
      type="button"
      className={`px-7 py-3 text-white font-bold ${variant ? 'bg-gray-500' : 'bg-secondary' } rounded-lg
      text-2xl md:w-9/12 w-content mx-2 mt-2 md:mt-0 text-center`}
    >
      {text}
      {children}
    </a>
  );
}

export default Button;
