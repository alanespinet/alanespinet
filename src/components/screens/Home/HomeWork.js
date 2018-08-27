import React, { Component } from 'react';
import AHomeWork from '../../../animations/components/AHomeWork';
import ProjectsList from '../../common/ProjectsList';

class HomeWork extends Component {

  componentDidMount(){
    AHomeWork();
  }

  render(){
    return (
      <div className="home__work" id="home__work">
        <div className="container">
          <h2>My Work</h2>
          <ProjectsList />
        </div>
      </div>
    );
  }
}

export default HomeWork;
