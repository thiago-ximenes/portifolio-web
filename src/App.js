import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Forms from './components/Contact/Forms';

function App() {
  return (
    <div
      className="bg-tertiary w-screen font-roboto flex
      h-full justify-center items-center"
    >
      <div
        className="max-w-[1600px] w-11/12 mx-auto "
      >
        <Header />
        <Main />
        <Forms />
        <Footer />
      </div>
    </div>
  );
}

export default App;
