import React from 'react';

// title -> string
// icon -> font awesome icon
// skills -> array of string
// customClass -> string

const SkillsBlock = props => (
  <div className={`skill-block ${props.customClass}`}>
    <h2 className="skill-block__title">{ props.title }</h2>

    <div className="skill-block__icon">
      <i className={`fa fa-${props.icon}`}></i>
    </div>

    <ul className="skill-block__skills">
      { props.skills.map( s => (
        <li key={s}>{s}</li>
      )) }
    </ul>
  </div>
);

export default SkillsBlock;
