import React from 'react';
import AsyncButton from './AsyncButton';

function Header() {
  return (
    <header
      id="header"
    >
      <nav
        className="flex flex-col justify-around h-fit mx-auto pt-7
      md:container md:flex-row md:w-4/5"
      >
        <AsyncButton
          text="Home"
          href="/"
        />
        <AsyncButton
          text="Descrição"
          href="#about"
        />
        <AsyncButton
          text="Habilidades"
          href="#skills"
        />
        <AsyncButton
          text="Portifólio"
          href="#portifolio"
        />
        <AsyncButton
          text="Contato"
          href="#contact"
        />
      </nav

      >
    </header>
  );
}

export default Header;
