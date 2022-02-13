import React from 'react';
import Button from './Button';

function Header() {
  return (
    <header
      id="header"
    >
      <nav
        className="flex flex-col justify-around h-fit mx-auto pt-7
      md:container md:flex-row md:w-4/5"
      >
        <Button
          text="Descrição"
          href="#about"
        />
        <Button
          text="Habilidades"
          href="#skills"
        />
        <Button
          text="Portifólio"
          href="#portfolio"
        />
        <Button
          text="Contato"
          href="#contact"
        />
      </nav

      >
    </header>
  );
}

export default Header;
