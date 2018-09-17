import React, { Component } from 'react';
import Button from './Button';

// props:
// type: "left" or "right": "left" = "image to the left"
// image: "url"
// title: "text"
// buttonText: "text"
// route: "route to"

class WorkSection extends Component {

  onButtonClick = e => {
    e.preventDefault();
  }

  render(){
    return (
      <div className={`work-section work-section--${this.props.type}`}>
        <div className="work-section__image-wrapper">
          <img src={ this.props.image } alt="" />
        </div>

        <div className="work-section__content-wrapper">
          <h2>{ this.props.title }</h2>
          <p>{ this.props.children }</p>

          <Button buttonColor="green" buttonOnClick={this.onButtonClick}>
            { this.props.buttonText }
          </Button>
        </div>
      </div>
    );
  }
}

export default WorkSection;
