import React from 'react';
import Project from './Project';

const ProjectsList = props => (
  <div className="portfolio__projects-list">
    <div className="container">
      { props.projectsList.map( p => (
        <Project
          key={p.title}
          title={p.title}
          image={p.image}
          description={p.description}
          technologies={p.technologies}
          url={p.url}
          url_text={p.url_text}
        />
      )) }
    </div>
  </div>
);

export default ProjectsList;
