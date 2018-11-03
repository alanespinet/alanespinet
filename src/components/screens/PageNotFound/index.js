import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import PageHero from '../../common/PageHero';

class PageNotFound extends Component {

  render(){
    return (
      <div className="articles page">
        <PageHero heroImage="/images/articles_background.jpg" title="404 - Page Not Found">
          <span className="page-title__big-letter">P</span>age <span className="page-title__big-letter">N</span>ot <span className="page-title__big-letter">F</span>ound
        </PageHero>

        <div className="container">
          <div className="not-found-page">
            <h2><span>404 - Sorry!</span> The page you are trying to reach does <span>not</span> exist.</h2>
            <h2>Maybe you would like to return <NavLink to="/">Home</NavLink></h2>
          </div>
        </div>
      </div>
    );
  }
}

export default PageNotFound;
