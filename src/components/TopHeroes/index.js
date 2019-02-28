import React, { Component } from 'react';
import './index.scss';

/* Components */
import SwiperTopHeroes from './SwiperTopHeroes/index';

class TopHeroes extends Component {

  render() {
    return (
      <section className="page-limiter" id="block-top-heroes">
        <h3 className="titulo-secao">PERSONAGENS EM DESTAQUE</h3>
        <SwiperTopHeroes/>
      </section>
    );
  }
}

export default TopHeroes;
