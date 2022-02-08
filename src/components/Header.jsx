import React from 'react';
import Button from './Button';

function Header() {
  return (
    <header
    >
      <nav
        className="flex flex-col justify-around h-fit mx-auto pt-7
      md:container md:flex-row md:w-4/5"
      >
        <Button
          text="Descrição"
        />
        <Button
          text="Habilidades"
        />
        <Button
          text="Portifólio"
        />
        <Button
          text="Contato"
        />
      </nav

      >
    </header>
  );
}

export default Header;
