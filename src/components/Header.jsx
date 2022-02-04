import React from 'react';
import Button from './Button';

function Header() {
  return (
    <header
      className="flex flex-col justify-around h-fit mx-auto pt-7
      sm:container sm:flex-row sm:w-4/5"
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
    </header>
  );
}

export default Header;
