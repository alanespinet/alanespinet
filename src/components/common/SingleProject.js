import React from 'react';

const SingleProject = props => (
  <div className="project-list__single-project">
    <a className="project-list__single-project__link">
      <div className="project-list__single-project__image" style={{ backgroundImage: `url(/images/projects/${props.image})` }}></div>
      <div className="project-list__single-project__shadow"></div>
      <div className="project-list__single-project__white"></div>

      <div className="project-list__single-project__overlay">
        <h3>{props.title}</h3>
        <p>{props.type}</p>
      </div>
    </a>
  </div>
);

export default SingleProject;
