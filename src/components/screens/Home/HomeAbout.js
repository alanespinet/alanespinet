import React, { Component } from 'react';
import { loadParticles } from '../../../animations/components/AHomeAbout';
import { connect } from 'react-redux';

import Button from '../../common/Button';
import SkillsBlock from './SkillsBlock';

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

            <p>I consider myself a guy who always wants to have a higher knowledge about what I do. I enjoy a lot studying, investigating and learning every day new things related with my line of work, in order to grasp how to create new things, how to use new tools and frameworks and, of course, with the clear goal to provide the highest quality in every of my services. I am never afraid of any challenge. I understood a long time ago that there is no better way to improve your skills than pushing your own limits.</p>

            <p>Talking about skills, here is what I have to offer:</p>

            <div className="home__about__skills-list">
              <SkillsBlock
                title="General Skills"
                icon="globe"
                skills={this.props.skills.general}
              />

              <SkillsBlock
                title="Front-End Skills"
                icon="css3"
                skills={this.props.skills.front_end}
                customClass="third-rendered third-rendered--first"
              />

              <SkillsBlock
                title="Back-End Skills"
                icon="database"
                skills={this.props.skills.back_end}
                customClass="third-rendered third-rendered--second"
              />

              <SkillsBlock
                title="Video Games Skills"
                icon="gamepad"
                skills={this.props.skills.videogames}
                customClass="third-rendered third-rendered--third"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  skills: state.skills
});

export default connect(mapStateToProps)(HomeAbout);
