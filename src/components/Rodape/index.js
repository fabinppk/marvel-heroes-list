import React, { Component } from 'react';
import './index.scss';

/* icones */
import iconFacebook from '../../assets/images/social-icons/facebook.svg';
import iconInstagram from '../../assets/images/social-icons/instagram.svg';
import iconSpotify from '../../assets/images/social-icons/spotify.svg';
import iconYoutube from '../../assets/images/social-icons/youtube.svg';
import logoMini from '../../assets/images/logo-mini.png';
import lastBlog from '../../assets/images/last-blog.png';

/* components */
import SecaoRodape from './SecaoRodape/index';

class Rodape extends Component {

  render() {
    return (
      <footer>
        <div className="block-rodape page-limiter">
          <img className="logo-mini" src={ logoMini } alt="logo mini"/>
          <SecaoRodape titulo="A Marvel">
            <ul>
              <li>Sobre a Marvel</li>
              <li>Ajuda</li>
              <li>Carreiras</li>
            </ul>
          </SecaoRodape>
          <SecaoRodape titulo="Mídia">
            <ul>
              <li>Filmes</li>
              <li>Quadrinhos</li>
              <li>Programas de TV</li>
              <li>Jogos</li>
            </ul>
          </SecaoRodape>
          <SecaoRodape titulo="Útima do Blog">
            <div className="block-last-blog">
              <div className="last-blog">
                <img src={ lastBlog } alt="blog"/>
                <p>Captain Marvel Challenge invadiu o tapete vermelho do Oscar</p>
              </div>
              <span>Continue lendo</span>
            </div>
          </SecaoRodape>
          <SecaoRodape titulo="Siga a Marvel">
            <img className="social-icon" src={iconFacebook} alt="Facebook"/>
            <img className="social-icon" src={iconSpotify} alt="Spotify"/>
            <img className="social-icon" src={iconInstagram} alt="Instagram"/>
            <img className="social-icon" src={iconYoutube} alt="Youtube"/>
          </SecaoRodape>
        </div>
      </footer>
    );
  }
}

export default Rodape;
