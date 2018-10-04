import React from 'react';
import PageTitle from './PageTitle';
import { NavLink } from 'react-router-dom';

const PageHero = props => (
  <div className="page-hero" style={{ backgroundImage: `url(${props.heroImage})` }}>
    <div className="page-hero__overlay"></div>

    <NavLink to="/" className="logo-image-link">
      <img src="/images/logo.png" alt="AE Lluvet Logo"/>
    </NavLink>

    <PageTitle>
      {props.children}
    </PageTitle>
  </div>
);

export default PageHero;
