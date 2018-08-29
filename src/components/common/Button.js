import React from 'react';

/* props:
  - buttonColor: green or white
  - buttonOnClick: callback - Must start with e.preventDefault()
*/

const Button = props => (
  <div className={`button button--${props.buttonColor}`} id="custom-button">
    <a className={`button--${props.buttonColor}__front`} href="#" onClick={ props.buttonOnClick }><p>{ props.children }</p></a>
    <div className={`button--${props.buttonColor}__back`}></div>
  </div>
);

export default Button;
