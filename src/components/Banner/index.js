import React, { Component } from 'react';
import './index.scss';

import imageBanner from '../../assets/images/banner.jpg';

class Banner extends Component {

  render() {
    return (
      <section id="block-banner">
        <img src={imageBanner} alt="Marvel Banner"/>
        <div className="page-limiter">
          <h1 className="titulo">CONHEÇA NOSSOS PERSONAGENS</h1>
        </div>
      </section>
    );
  }
}

export default Banner;
