import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App : React.FC = () => {
  return (
    <div
      className="bg-tertiary w-full font-roboto flex
      h-full justify-center items-center text-gray-800"
    >
      <div
        className="max-w-[1600px] w-11/12 mx-auto "
      >
        <Header />
        <Main />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
