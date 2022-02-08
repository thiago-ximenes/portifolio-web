import React from 'react';
import separator from '../images/separator.png';

function Skills() {
  return (
    <section
      className="justify-center items-center bg-primary rounded-lg"
    >
      <div>
        <img
          src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/terminal-icon.png"
          alt="Terminal icon"
          class="icons"
        />
        <h2>Hard-skills</h2>

        <ul type="square">
          <li id="destaque" class="tam2"><strong>Programação Web</strong></li>
          <li>Python</li>
          <li>Django</li>
          <li>Javascript</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Git</li>
          <li>WordPress</li>
          <li>Linux</li>
          <li>MySQL</li>
        </ul>
      </div>
      <div>
        <img
          src="https://pngimage.net/wp-content/uploads/2018/06/soft-skill-icon-png-7.png"
          alt="Emotional Inteligence Icon"
          className="w-20"
        />

        <h2 class="soft">Soft-skills</h2>

        <ul>
          <li><strong>Comunicativo</strong></li>
          <li>Resolução de Problemas</li>
          <li>Liderança</li>
          <li>Inteligência Emocional</li>
          <li>Empático</li>
          <img src={ separator } alt="fruit tree" />
        </ul>
      </div>
    </section>
  );
}

export default Skills;
