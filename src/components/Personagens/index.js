import React, { Component } from 'react';
import "isomorphic-fetch";
import './index.scss';

import { public_key, private_key } from '../../marvel';
import { data } from '../../data';

/* components */
import CardPersonagem from './CardPersonagem/index';

class Personagens extends Component {

  constructor(props){
    super(props);
    this.state = {
      json: data
    }
  }

  componentDidMount() {
    this.getPersonagens();
  }

  makeParams() {
    var md5 = require('md5');
    let params = [];
    let timestamp = Date.now();
    let hash = md5(timestamp + private_key + public_key);
    params.push(timestamp);
    params.push(public_key)
    params.push(hash);
    return params;
  }

  async getPersonagens() {
    const params = this.makeParams();
    const requisicao =  {
                      url: `https://gateway.marvel.com/v1/public/characters?ts=${params[0]}&apikey=${public_key}&hash=${params[2]}`,
                      object: {
                        method: 'GET',
                        async: true,
                        crossDomain: true,
                        // mode:"no-cors",
                        headers: {
                          'Accept': '*',
                          'Content-Type': 'application/json',
                          "Access-Control-Allow-Origin": "*",
                          "Access-Control-Allow-Methods": "*",
                          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
                        }
                      }
                    };

    fetch(requisicao.url, requisicao.object)
    .then(response => {
      const users = response.json();
      console.log("API WORKS!");
      this.setState({
        json: users
      })
    })
    .catch((error) => {
      console.log("API NOT WORKS!");
    });
  }

  render() {
    return (
      <section id="block-personagens">
        <div className="page-limiter">
          <h3 className="titulo-secao">LISTA DE PERSONAGENS DA MARVEL</h3>
          <div className="block-card">
            {this.state.json[0].data.results.map(personagem => (
                <CardPersonagem key={personagem.id} info={personagem}/>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Personagens;
