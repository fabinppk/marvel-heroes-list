import React, { Component } from 'react';
import './index.scss';

class CardPersonagem extends Component {

  imagePath() {
    return this.props.info.thumbnail.path + "." + this.props.info.thumbnail.extension;
  }

  render() {
    return (
      <div className="block-card-personagem">
        <div className="block-image">
          <img src={this.imagePath()} alt="Logo" />
        </div>
        <div className="block-name">
          <h4 className="name">{this.props.info.name}</h4>
        </div>
      </div>
    );
  }
}

export default CardPersonagem;
