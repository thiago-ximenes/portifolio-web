import React from 'react';
import About from './About';
import Skills from './Skills';

function Main() {
  return (
    <main
      className="mx-auto"
    >
      <h1
        className="bg-primary rounded-lg text-center mt-4
        text-secondary md:text-7xl text-4xl font-bold font-black-ops py-2"
      >
        Thiago Ximenes Lima
      </h1>
      <About />
      <Skills />
    </main>
  );
}

export default Main;
