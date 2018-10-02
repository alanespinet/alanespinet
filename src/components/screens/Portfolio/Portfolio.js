import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import ProjectsList from './ProjectsList';

class Portfolio extends Component {

  render(){
    return (
      <div className="portfolio">
        <Header
          printedTitle={ this.props.printedTitle }
          image={ this.props.image }
        />

        { this.props.special_note &&
          <div className="portfolio__special-note">
            <div className="container">
              <p>{ this.props.special_note }</p>
            </div>
          </div>
        }

        <ProjectsList projectsList={ this.props.projects }/>

        <NavLink to="/work" className="portfolio__back-link">My Work</NavLink>
      </div>
    );
  }
}

export default Portfolio;
