import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleProject from './SingleProject';

class ProjectsList extends Component {

  render(){
    return (
      <div className="project-list-wrapper">
        <div className="container">
          <div className="project-list">
            {this.props.projects.map( p =>
              <SingleProject
                key={p.key}
                title={p.title}
                type={p.type}
                image={p.image}
              />
            )}
          </div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  projects: state.projects.projects
});

export default connect(mapStateToProps)(ProjectsList);
