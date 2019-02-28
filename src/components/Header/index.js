import React, { Component } from 'react';
import './index.scss';

import logo from '../../assets/images/marvel-logo.jpg';

class Header extends Component {

  render() {
    return (
      <nav>
        <img src={logo} alt="Marvel"/>
        <ul>
          <li>Filmes</li>
          <li>Quadrinhos</li>
          <li>Programas de TV</li>
          <li>Jogos</li>
        </ul>
      </nav>
    );
  }
}

export default Header;
