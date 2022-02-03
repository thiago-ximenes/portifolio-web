import React from 'react';

function Button({ text }) {
  return (
    <button
      type="button"
      className="px-4 py-3 text-white font-bold bg-secondary rounded-lg
      text-2xl sm:w-1/3 w-full mx-2 mt-2 sm:mt-0"
    >
      {text}
    </button>
  );
}

export default Button;
