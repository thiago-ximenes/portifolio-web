import { useNavigate } from 'react-router-dom';

const AsyncButton = ({ text, href = undefined, target = false, variant = false, children }) => {
  const navigate = useNavigate();

  async function asyncNavigate() {
    navigate('/');
  }
    
  return (
    <button
      onClick={ (e) => {
        e.preventDefault();
        asyncNavigate().then(() => {
          const element = document.querySelector(href);
          element && element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          
        })
      } }
      target={ target ? '_blank' : '' }
      type="button"
      className={`px-7 py-3 text-white font-bold ${variant ? 'bg-gray-500' : 'bg-secondary' } rounded-lg
      text-2xl md:w-9/12 w-content mx-2 mt-2 md:mt-0 text-center`}
    >
      {text}
      {children}
    </button>
  );
}

export default AsyncButton;
