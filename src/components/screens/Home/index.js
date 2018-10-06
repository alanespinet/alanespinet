import React, { Component } from 'react';

import HomeHero from './HomeHero';
import HomeAbout from './HomeAbout';
import HomeWork from './HomeWork';
import HomeContact from './HomeContact';

class Home extends Component {
  render(){
    return (
      <div className="home page">
        <HomeHero />
        <HomeAbout />
        <HomeWork />
        <HomeContact />
      </div>
    );
  }
}

export default Home;
