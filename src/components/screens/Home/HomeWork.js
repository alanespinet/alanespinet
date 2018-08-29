import React, { Component } from 'react';
import AHomeWork from '../../../animations/components/AHomeWork';
import ProjectsList from '../../common/ProjectsList';

import Button from '../../common/Button';

class HomeWork extends Component {

  componentDidMount(){
    AHomeWork();
  }

  onWebsitesPortfolioClick(e){
    e.preventDefault();
    console.log('websites portfolio');
  }

  onWebAppsPortfolioClick(e){
    e.preventDefault();
    console.log('web apps portfolio');
  }

  onGamesPortfolioClick(e){
    e.preventDefault();
    console.log('games portfolio');
  }

  render(){
    return (
      <div className="home__work" id="home__work">
        <img src="/images/white-single-gear.png" className="home__work__gear-image" alt="" />
        <div className="container">
          <h2>My Work</h2>
          <p className="home__work__intro-text">I tend to divide my work in three main groups: <span className="red">web applications</span>, <span className="red">websites</span> and <span className="red">videogames</span>. Next you can see a sample of each group, as a quick taste of what I can do. To check all my work, however, please visit my <a className="green-bg-link" href="#">work page</a> or any dedicated portfolio you could be interested on.</p>

          <ProjectsList />

          <div className="home__work__portfolio-buttons">
            <div className="home__work__portfolio-buttons__button-wrapper">
              <Button buttonColor="white" buttonOnClick={this.onWebAppsPortfolioClick}>
                Web Apps Portfolio
              </Button>
            </div>

            <div className="home__work__portfolio-buttons__button-wrapper">
              <Button buttonColor="white" buttonOnClick={this.onWebsitesPortfolioClick}>
                Websites Portfolio
              </Button>
            </div>

            <div className="home__work__portfolio-buttons__button-wrapper">
              <Button buttonColor="white" buttonOnClick={this.onGamesPortfolioClick}>
                Games Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeWork;
