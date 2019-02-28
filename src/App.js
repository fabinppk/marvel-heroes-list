import React, { Component } from 'react';
import './assets/stylesheets/style.scss';

/* components */
import Header from './components/Header/index';
import Banner from './components/Banner/index';

class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <Banner/>
      </div>
    );
  }
}

export default App;
