import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import './index.scss';

class SwiperTopHeroes extends Component {

  constructor(props) {
    super(props);
    this.goNext = this.goNext.bind(this);
    this.goPrev = this.goPrev.bind(this);
    this.swiper = null;
  }

  imagePath(i) {
    return this.props.topPersonagens[i].thumbnail.path + "." + this.props.topPersonagens[i].thumbnail.extension;
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
          {this.props.topPersonagens.map((personagem, index) => (
            <div className="hero" key={personagem.id}>
              <img src={this.imagePath(index)} alt={personagem.name}/>
              <p className="name">{personagem.name}</p>
            </div>
          ))}
        </Swiper>
        <button className="swiper-button-custon-prev" onClick={this.goPrev}></button>
        <button className="swiper-button-custon-next" onClick={this.goNext}></button>
      </div>
    )
  }
}

export default SwiperTopHeroes;
