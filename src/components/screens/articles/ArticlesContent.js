import React, { Component } from 'react';
import ArticlesList from './ArtclesList';

class ArticlesContent extends Component {

  render(){
    return (
      <div className="articles-content">
        <div className="container">
          <div className="container">
            <ArticlesList />
          </div>
        </div>
      </div>
    );
  }
}

export default ArticlesContent;
