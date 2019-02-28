import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import './index.scss';

import hero_image from '../../../assets/images/marvel-logo.jpg';

class SwiperTopHeroes extends Component {

  constructor(props) {
    super(props);
    this.goNext = this.goNext.bind(this);
    this.goPrev = this.goPrev.bind(this);
    this.swiper = null;
  }

  goNext() {
    if (this.swiper) this.swiper.slideNext();
  }

  goPrev() {
    if (this.swiper) this.swiper.slidePrev();
  }

  componentDidMount () {
    setTimeout(function() {
      var resizeEvent = new Event('resize');
      window.dispatchEvent(resizeEvent);
    },100);
  }

  render() {
    const params = {
      slidesPerView: 'auto',
      spaceBetween: 30,
      freeMode: true,
      // breakpoints: {
      //   768: {
      //     slidesPerView: 3,
      //     spaceBetween: 30
      //   },
      //   640: {
      //     slidesPerView: 2,
      //     spaceBetween: 20
      //   },
      //   320: {
      //     slidesPerView: 1,
      //     spaceBetween: 10
      //   }
      // }
    }

    return(
      <div>
        <Swiper {...params} ref={(node) => { if(node) this.swiper = node.swiper } }>
          <div className="hero">
            <img src={hero_image} alt="Name"/>
            <p className="name">Nome do herói</p>
          </div>
          <div className="hero">
            <img src={hero_image} alt="Name"/>
            <p className="name">Nome do herói</p>
          </div>
          <div className="hero">
            <img src={hero_image} alt="Name"/>
            <p className="name">Nome do herói</p>
          </div>
          <div className="hero">
            <img src={hero_image} alt="Name"/>
            <p className="name">Nome do herói</p>
          </div>
          <div className="hero">
            <img src={hero_image} alt="Name"/>
            <p className="name">Nome do herói</p>
          </div>
        </Swiper>
        <button className="swiper-button-custon-prev" onClick={this.goPrev}></button>
        <button className="swiper-button-custon-next" onClick={this.goNext}></button>
      </div>
    )
  }
}

export default SwiperTopHeroes;
