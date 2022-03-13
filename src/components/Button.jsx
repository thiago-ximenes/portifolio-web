import React from 'react';

const Button = ({ text, href }) => {
  return (
    <a
      href={ href }
      type="button"
      className="px-7 py-3 text-white font-bold bg-secondary rounded-lg
      text-2xl md:w-9/12 w-content mx-2 mt-2 md:mt-0 text-center"
    >
      {text}
    </a>
  );
}

export default Button;
