import React from 'react';
import separator from '../images/separator.png';

function Skills() {
  return (
    <section
      id="skills"
      className="flex-col flex justify-center items-start rounded-lg
      text-center md:flex-row mb-10 pb-10"
    >
      <div
        className="mt-8 flex items-center justify-around w-full md:w-1/2
        border-r-4 border-gray-800"
      >
        <ul
          className="list-disc text-3xl text-left"
        >
          <h2
            className="text-center text-secondary font-bold text-4xl
            mb-6"
          >
            Hard-skills
          </h2>
          <li><strong>Programação Web</strong></li>
          <li>Javascript</li>
          <li>React</li>
          <li>Redux</li>
          <li>Python</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>TailwindCSS</li>
          <li>Bootstrap</li>
          <li>Material UI</li>
          <li>Git</li>
          <li>Linux</li>
          <li>MySQL</li>
        </ul>
      </div>
      <img
        className="w-[75%] self-center my-10 md:hidden"
        src={ separator }
        alt="fruit tree"
      />
      <div
        className="mt-8 flex flex-col items-center justify-center w-full md:w-1/2"
      >
        <ul
          className="list-disc text-3xl text-left
          flex flex-wrap flex-col ml-14 mr-2"
        >
          <h2
            className="text-center text-secondary font-bold text-4xl
          mb-6"
          >
            Soft-skills
          </h2>
          <li>Comunicação</li>
          <li><strong>Criatividade</strong></li>
          <li>Resolução de Problemas</li>
          <li>Liderança</li>
          <li>Inteligência Emocional</li>
          <li>Empatia</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
