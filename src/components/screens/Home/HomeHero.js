import React, { Component } from 'react';
import Video from '../../common/Video';

import AHomeHero from '../../../animations/components/AHomeHero';

class HomeHero extends Component {

  componentDidMount(){
    AHomeHero();
  }

  render(){
    return (
      <div className="home__hero">
        <div className="home__hero__overlay">
          <div className="container">
            <div className="home__hero__overlay__website-title">
              <div className="home__hero__overlay__website-title__shadow"></div>

              <div className="home__hero__overlay__website-title__content-wrapper">
                <h1>Alan Espinet</h1>
                <div className="home__hero__overlay__website-title__underline"></div>
                <p>web and videogames developer</p>
              </div>
            </div>

            <div className="home__hero__overlay__website-presentation">
              <div className="container">
                <p>Hello there! And welcome to my website. My name is Alan Espinet, full stack web and videogames developer at your service. Please take a look at my job and skills; you may like what I can do! ...and thank you for the visit!</p>
              </div>
            </div>

            <div className="home__hero__overlay__down-arrow home__hero__overlay__down-arrow--1">
              <a className="home_hero_overlay__down-arrow__instance" href="#"><i className="fa fa-chevron-down" aria-hidden="true"></i></a>
            </div>

            <div className="home__hero__overlay__down-arrow home__hero__overlay__down-arrow--2">
              <a className="home_hero_overlay__down-arrow__instance" href="#"><i className="fa fa-chevron-down" aria-hidden="true"></i></a>
            </div>

            <div className="home__hero__overlay__down-arrow home__hero__overlay__down-arrow--3">
              <a className="home_hero_overlay__down-arrow__instance" href="#"><i className="fa fa-chevron-down" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>

        <Video
          poster=""
          src="/videos/video-hero.mp4"
          width="100%"
        />
      </div>
    );
  }
}

export default HomeHero;
