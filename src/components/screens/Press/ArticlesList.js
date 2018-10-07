import React, { Component } from 'react';
import { connect } from 'react-redux';

class ArticlesList extends Component {
  render(){
    const notEmpty = this.props.articles.length !== 0;
    return (
      <div className="articles-list">
        { notEmpty ? (
          <div>
            Lista
          </div>
        ) : (
          <div className="articles-list__empty">
            <h2><span>Sorry.</span> There is no Article to show right now. Articles will be available <span>very soon!</span></h2>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articles
});

export default connect(mapStateToProps)(ArticlesList);
