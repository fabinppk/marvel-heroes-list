import React, { Component } from 'react';
import './index.scss';

/* components */
import CardPersonagem from './CardPersonagem/index';

class Personagens extends Component {

  render() {
    return (
      <section id="block-personagens">
        <div className="page-limiter">
          <h3 className="titulo-secao">LISTA DE PERSONAGENS DA MARVEL</h3>
          <div className="block-card">
            <CardPersonagem/>
            <CardPersonagem/>
            <CardPersonagem/>
            <CardPersonagem/>
            <CardPersonagem/>
            <CardPersonagem/>
            <CardPersonagem/>
            <CardPersonagem/>
          </div>
        </div>
      </section>
    );
  }
}

export default Personagens;
