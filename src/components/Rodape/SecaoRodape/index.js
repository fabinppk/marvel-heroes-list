import React, { Component } from 'react';
import './index.scss';

class SecaoRodape extends Component {

  render() {
    return (
      <div className="block-secao-rodape">
        <h4 className="titulo">{ this.props.titulo }</h4>
        { this.props.children }
      </div>
    );
  }
}

export default SecaoRodape;
