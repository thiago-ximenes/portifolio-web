import React from 'react';
import Button from './Button';

function Header() {
  return (
    <header
      className="flex flex-col justify-around w-2/3 h-fit mx-auto pt-7
      sm:container sm:flex-row sm:max-w-6xl"
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
    </header>
  );
}

export default Header;
