import React from 'react';
import Main from '../components/Main';

const Home : React.FC = () => {
  return (
    <div
      className="bg-tertiary w-full font-roboto flex
      h-full justify-center items-center text-gray-800"
    >
      <div
        className="max-w-[1600px] w-11/12 mx-auto "
      >
        <Main />
      </div>
    </div>
  );
}

export default Home;
