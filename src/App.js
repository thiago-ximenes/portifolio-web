import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <div
      className="bg-tertiary w-screen h-screen font-roboto flex"
    >
      <div
        className="max-w-[1600px] w-11/12 mx-auto"
      >
        <Header />
      </div>
    </div>
  );
}

export default App;
