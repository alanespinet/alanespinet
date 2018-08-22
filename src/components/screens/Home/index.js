import React, { Component } from 'react';

import HomeHero from './HomeHero';
import HomeAbout from './HomeAbout';
import HomeWork from './HomeWork';

class Home extends Component {

  render(){
    return (
      <div className="home page">
        <HomeHero />
        <HomeAbout />
        <HomeWork />
      </div>
    );
  }
}

export default Home;
