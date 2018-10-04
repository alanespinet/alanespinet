import React from 'react';

const Service = props => (
  <div className="service">
    <h2>{ props.title }</h2>
    <i className={`fa fa-${props.icon}`} aria-hidden="true"></i>
    <ul>
      { props.descriptions.map( s => (
        <li key={s}>{s}</li>
      )) }
    </ul>
  </div>
);

export default Service;
