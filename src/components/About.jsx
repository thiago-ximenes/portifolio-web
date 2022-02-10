import React from 'react';
import eu from '../images/eu.jpg';

function About() {
  return (
    <section
      className="flex md:justify-center items-center"
    >
      <div
        className="md:justify-center md:items-center md:text-center
        text-justify md:max-w-4xl"
      >
        <div
          className="flex justify-around items-center mt-4"
        >
          <h2
            className="text-center text-secondary font-bold
            text-3xl md:text-4xl m-4"
          >
                Sobre mim
          </h2>
          <a href="image/eu.jpg" target="_blank">
            <img
              className="w-36 rounded-lg mb-4 shadow-about shadow-primary
              hover:scale-105"
              src={ eu } alt="Thiago Ximenes - Foto de perfil"/>
          </a>
        </div>
        <p
          className="text-xl md:text-2xl m-4"
        >
          Sou <strong>Desenvolvedor Júnior front-end</strong>, utilizo <strong>ReactJs</strong> e sou apaixonado em <strong>programação web</strong>. No ramo de panificação <em>eu me apaixonei em entregar o melhor ao cliente</em>, acredito que meus anos de experiência em relacionamento com o cliente, equipe e stakeholder vão entregar <strong>softwares impactantes à sociedade</strong>.
        </p>
        <nav
          className="flex justify-around my-7 max-w-2xl mx-auto"
        >
          <a
            className="w-32"
            href="https://www.linkedin.com/in/thiago-ximenes/" target="_blank">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg" alt="Linkedin Profile" class="about-me-icons" />
          </a>
          <a
            className="w-32"
            href="https://github.com/thiago-ximenes" target="_blank">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="Github Profile" class="about-me-icons" />
          </a>
        </nav>
      </div>
    </section>
  );
}

export default About;
