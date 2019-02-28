import React, { Component } from 'react';
import './index.scss';

class Newsletter extends Component {

  render() {
    return (
      <section id="newsletter" className="page-limiter">
        <div className="block-chamada">
          RECEBA AS NOVIDADES DA MARVEL
        </div>
        <div className="block-cadastro">
          <p>Cadastre-se para receber nossas notícias em primeira mão<span>!</span></p>
          <div className="form">
            <label>SEU MELHOR E-MAIL</label>
            <input className="input" type="text" placeholder="Informe seu melhor e-mail"/>
            <button className="button">ENVIAR</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Newsletter;
