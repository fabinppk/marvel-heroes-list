import React, { Component } from 'react';
import './index.scss';

import image from '../../../assets/images/banner.jpg';

class CardPersonagem extends Component {

  render() {
    return (
      <div className="block-card-personagem">
        <div className="block-image">
          <img src={image} alt="Logo" />
        </div>
        <div className="block-name">
          <h4 className="name">Nome do cara</h4>
        </div>
      </div>
    );
  }
}

export default CardPersonagem;
