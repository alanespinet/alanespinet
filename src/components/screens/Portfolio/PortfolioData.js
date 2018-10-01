import React from 'react';
import { connect } from 'react-redux';
import Portfolio from './Portfolio';

const PortfolioData = props => (
  <Portfolio
    printedTitle = { props.portfolio.printedTitle }
    image = { props.portfolio.image }
    projects = { props.portfolio.projects }
    special_note = { props.portfolio.special_note ? props.portfolio.special_note : null }
  />
);

const mapStateToProps = (state, ownState) => {
  const v_portfolio =  ownState.match.path.substring(6);
  return {
    portfolio: state.portfolios.filter( p => p.name === v_portfolio )[0]
  }
};

export default connect(mapStateToProps)(PortfolioData);
