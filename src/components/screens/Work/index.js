import React, { Component } from 'react';

import PageHero from '../../common/PageHero';
import WorkContent from './WorkContent';

class Work extends Component {

  render(){
    return (
      <div className="work page">
        <PageHero heroImage="/images/work_background.jpg"title="My Work">
          <span className="page-title__big-letter">M</span>y <span className="page-title__big-letter">W</span>ork
        </PageHero>

        <WorkContent />
      </div>
    );
  }
}

export default Work;
