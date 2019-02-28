import React, { Component } from 'react';
import './assets/stylesheets/style.scss';

/* components */
import Header from './components/Header/index';
import Banner from './components/Banner/index';
import TopHeroes from './components/TopHeroes/index';
import Personagens from './components/Personagens/index';
import CartaoMarvel from './components/CartaoMarvel/index';
import Newsletter from './components/Newsletter/index';
import Rodape from './components/Rodape/index';

class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <Banner/>
        <TopHeroes/>
        <Personagens/>
        <CartaoMarvel/>
        <Newsletter/>
        <Rodape/>
      </div>
    );
  }
}

export default App;
