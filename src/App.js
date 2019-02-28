import React, { Component } from 'react';
import './assets/stylesheets/style.scss';

/* components */
import Header from './components/Header/index';
import Banner from './components/Banner/index';
import TopHeroes from './components/TopHeroes/index';
import Personagens from './components/Personagens/index';

class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <Banner/>
        <TopHeroes/>
        <Personagens/>
      </div>
    );
  }
}

export default App;
