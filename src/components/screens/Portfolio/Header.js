import React from 'react';

const Header = props => (
  <div className="portfolio__header" style={{ backgroundImage: `url(/images/${props.image})` }}>
    <div className="portfolio__header__overlay"></div>
    <div className="portfolio__header__title-wrapper">
      <h1>{ props.printedTitle }</h1>
    </div>
  </div>
);

export default Header;
