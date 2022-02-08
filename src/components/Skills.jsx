import React from 'react';
import separator from '../images/separator.png';

function Skills() {
  return (
    <section
      className="flex-col flex justify-center items-center bg-primary rounded-lg
      text-center"
    >
      <div
        className="mt-8 flex items-center justify-around w-full"
      >
        <img
          src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/terminal-icon.png"
          alt="Terminal icon"
          className="w-24 h-24 shadow-icons rounded-lg"
        />

        <ul
          type="square"
          className="list-disc text-xl text-left"
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
        className="flex items-center justify-around w-full"
      >
        <ul
          className="list-disc text-xl text-left flex flex-col w-full justify-center
          items-center"
        >
          <h2
            className="text-center text-secondary font-bold text-4xl
          mb-6"
          >Soft-skills</h2>
          <div
            className="flex w-full justify-start items-end"
          >
            <div
              className="ml-auto"
            >
              <li>Comunicação</li>
              <li><strong>Criatividade</strong></li>
            </div>
            <div>
              <img
                src="https://pngimage.net/wp-content/uploads/2018/06/soft-skill-icon-png-7.png"
                alt="Emotional Inteligence Icon"
                className="w-24 h-24 shadow-icons rounded-lg ml-auto mb-2"
              />
            </div>
          </div>
          <div>
            <li>Resolução de Problemas</li>
            <li>Liderança</li>
            <li>Inteligência Emocional</li>
            <li>Empático</li>
            <img
              className="w-36 self-center hidden"
              src={ separator }
              alt="fruit tree"
            />
          </div>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
