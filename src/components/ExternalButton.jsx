import { Link } from 'react-router-dom';

const ExternalButton = ({ text, href = undefined, children }) => {
    
  return (
    <a
      href={href}
      target='_blank'
      type="button"
      className='px-7 py-3 text-white font-bold bg-gray-500 rounded-lg
      text-2xl md:w-9/12 w-content mx-2 mt-2 md:mt-0 text-center'
    >
      {text}
      {children}
    </a>
  );
}

export default ExternalButton;
