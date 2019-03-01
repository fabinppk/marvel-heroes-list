import React, { Component } from 'react';
import "isomorphic-fetch";
import './index.scss';

//import { public_key, private_key } from '../../marvel';
import { topPersonagens } from '../../data';

/* Components */
import SwiperTopHeroes from './SwiperTopHeroes/index';

class TopHeroes extends Component {

  constructor(props){
    super(props);
    this.state = {
      json: topPersonagens
    }
  }

  render() {
    return (
      <section className="page-limiter" id="block-top-heroes">
        <h3 className="titulo-secao">PERSONAGENS EM DESTAQUE</h3>
        <SwiperTopHeroes topPersonagens={this.state.json[0].data.results}/>
      </section>
    );
  }
}

export default TopHeroes;
