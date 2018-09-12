import React, { Component } from 'react';
import { loadParticles } from '../../../animations/components/AHomeAbout';

import Button from '../../common/Button';

class HomeAbout extends Component {

  render(){
    return (
      <div className="home__about" id="home__about">

        <div className="home__about__animated-background">
          <div className="home__about__animated-background__box home__about__animated-background__box--1">
            <img src="/images/gray-block-background.png" alt="" />
          </div>

          <div className="home__about__animated-background__box home__about__animated-background__box--2">
            <img src="/images/gray-block-background.png" alt="" />
          </div>

          <div className="home__about__animated-background__box home__about__animated-background__box--3">
            <img src="/images/gray-block-background.png" alt="" />
          </div>
        </div>

        <div className="home__about__content">
          <div className="container">
            <h2>About Me</h2>
            <img src="/images/alan.jpg" alt="placeholder image"/>

            <div className="home__about__socials">
              <ul>
                <li><a href="https://www.linkedin.com/in/alan-espinet" target="_blank" className="home__about__socials__link home__about__socials__link--linkedin"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                <li><a href="mailto:aelluvetaa@gmail.com" target="_blank" className="home__about__socials__link home__about__socials__link--mail"><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
                <li><a href="tel:7866225314" target="_blank" className="home__about__socials__link home__about__socials__link--phone"><i className="fa fa-phone-square" aria-hidden="true"></i></a></li>
              </ul>
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis.</p>

            <div className="home__about__content__button-wrapper">
              <Button buttonColor="green" buttonOnClick={ () => { console.log('Button') } }>
                Skill List
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeAbout;
