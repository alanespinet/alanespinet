import React from 'react';
import PageTitle from './PageTitle';

const PageHero = props => (
  <div className="page-hero" style={{ backgroundImage: `url(${props.heroImage})` }}>
    <div className="page-hero__overlay"></div>

    <PageTitle>
      {props.children}
    </PageTitle>
  </div>
);

export default PageHero;
