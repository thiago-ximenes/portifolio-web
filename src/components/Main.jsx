import React from 'react';
import About from './About';
import Skills from './Skills';
import Forms from './Contact/Forms';
import SpotlightProjects from './Portifolio/SpotlightProjects';

function Main() {
  return (
    <main
      className="mx-auto"
    >
      <h1
        id="about"
        className="rounded-lg text-center mt-4
        text-secondary md:text-7xl text-4xl font-bold font-black-ops py-2"
      >
        Thiago Ximenes Lima
      </h1>
      <About />
      <Skills />
      <SpotlightProjects />
      <Forms />
    </main>
  );
}

export default Main;
