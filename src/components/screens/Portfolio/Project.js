import React, { Component } from 'react';
import Button from '../../common/Button';

class Project extends Component {

  onButtonCallback = e => {
    e.preventDefault();
    const win = window.open(this.props.url, '_blank');
    win.focus();
  }

  render() {
    return (
      <div className="project">
        <div className="project__image">
          <img className="img-responsive" src={this.props.image} alt="" />
        </div>

        <div className="project__content">
          <h2 className="project__title">{this.props.title}</h2>
          <p className="project__description">{this.props.description}</p>
          <p className="project__technologies">Technologies used: <span className="teal">{this.props.technologies}</span></p>
          <Button buttonColor="green" buttonOnClick={this.onButtonCallback}>
            {this.props.url_text}
          </Button>
        </div>
      </div>
    );
  }
}

export default Project;
