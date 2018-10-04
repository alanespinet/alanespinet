import React, { Component } from 'react';
import ServicesList from './ServicesList';

class ServicesContent extends Component {

  render(){
    return (
      <div className="services-content">
        <div className="container">
          <ServicesList />
        </div>
      </div>
    );
  }
}

export default ServicesContent;
