import React, { Component } from 'react';

class Header extends Component {
  render() {
    const header = <h1>Sistema Solar</h1>;

    return (
      <header className="bg-dark text-light">
        {header}
      </header>
    );
  }
}

export default Header;
