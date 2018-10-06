import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props => (
  <div className="portfolio__header" style={{ backgroundImage: `url(/images/${props.image})` }}>
    <div className="portfolio__header__overlay"></div>

    <NavLink to="/" className="logo-image-link">
      <img src="/images/logo.png" alt="AE Lluvet Logo"/>
    </NavLink>

    <div className="portfolio__header__title-wrapper">
      <h1>{ props.printedTitle }</h1>
    </div>
  </div>
);

export default Header;
