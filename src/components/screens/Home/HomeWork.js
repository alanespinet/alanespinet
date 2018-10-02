import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import ProjectsList from '../../common/ProjectsList';
import { history } from '../../App';

import Button from '../../common/Button';

class HomeWork extends Component {

  onWebsitesPortfolioClick(e){
    e.preventDefault();
    history.push('/work/websites');
  }

  onWebAppsPortfolioClick(e){
    e.preventDefault();
    history.push('/work/webapplications');
  }

  onGamesPortfolioClick(e){
    e.preventDefault();
    history.push('/work/videogames');
  }

  render(){
    return (
      <div className="home__work" id="home__work">
        <img src="/images/white-single-gear.png" className="home__work__gear-image" alt="" />
        <div className="container">
          <h2>My Work</h2>
          <p className="home__work__intro-text">I tend to divide my work in three main groups: <span className="red">web applications</span>, <span className="red">websites</span> and <span className="red">videogames</span>. Next you can see a sample of each group, as a quick taste of what I can do. To check all my work, however, please visit my <NavLink className="green-bg-link" to="/work">work page</NavLink> or any dedicated portfolio you could be interested on.</p>

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
