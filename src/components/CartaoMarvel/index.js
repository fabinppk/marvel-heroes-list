import React, { Component } from 'react';
import './index.scss';

import cartoes from '../../assets/images/cards-fan-desktop.png';

class CartaoMarvel extends Component {

  render() {
    return (
      <section id="block-cartao">
        <h2>MARVEL MASTERCARD</h2>
        <h2 className="small">Desbloqueie seus super poderes</h2>
        <img src={cartoes} alt="Cartões Marvel"/>
        <div className="block-buttons">
          <button className="button">Cadastre-se agora</button>
          <button className="button link">Entenda como funciona</button>
        </div>
      </section>
    );
  }
}

export default CartaoMarvel;
