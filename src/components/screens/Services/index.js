import React, { Component } from 'react';

import PageHero from '../../common/PageHero';
import ServicesContent from './ServicesContent';

class Services extends Component {

  render(){
    return (
      <div className="services page">
        <PageHero heroImage="/images/services_background.jpg" title="Services">
          <span className="page-title__big-letter">M</span>y <span className="page-title__big-letter">S</span>ervices
        </PageHero>

        <ServicesContent />
      </div>
    );
  }
}

export default Services;
