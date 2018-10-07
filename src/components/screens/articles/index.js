import React, { Component } from 'react';

import PageHero from '../../common/PageHero';
import ArticlesContent from './ArticlesContent';

class Articles extends Component {

  render(){
    return (
      <div className="articles page">
        <PageHero heroImage="/images/articles_background.jpg" title="Articles">
          <span className="page-title__big-letter">M</span>y <span className="page-title__big-letter">A</span>rticles
        </PageHero>

        <ArticlesContent />
      </div>
    );
  }
}

export default Articles;
