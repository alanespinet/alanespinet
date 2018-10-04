import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { menuEntry, menuOut } from '../../animations/components/AHeader';


class Header extends Component {
  state = {
    menu_open: false
  };

  toggleMenu = () => {
    this.setState({ menu_open: !this.state.menu_open });
    if(!this.state.menu_open){
      menuEntry();
    } else {
      menuOut();
    }
  }

  onMenuClose = () => {
    this.setState({ menu_open: false });
    menuOut();
  }

  render(){
    return (
      <div className={ this.state.menu_open ? "header open" : "header" }>
        <div className="header__button" onClick={ this.toggleMenu }>
          <div className="header__button__bar header__button__bar--1"></div>
          <div className="header__button__bar header__button__bar--2"></div>
          <div className="header__button__bar header__button__bar--3"></div>
        </div>

        <div className="header__menu">
        </div>

        <div className="header__options">
          <ul>
            <li><NavLink onClick={this.onMenuClose} to="/">Home</NavLink></li>
            <li><a onClick={this.onMenuClose} href="/#home__about">About</a></li>
            <li><NavLink onClick={this.onMenuClose} to="/work">Work</NavLink></li>
            <li><NavLink onClick={this.onMenuClose} to="/articles">Articles</NavLink></li>
            <li><NavLink onClick={this.onMenuClose} to="/services">Services</NavLink></li>
            <li><a onClick={this.onMenuClose} href="/#home__contact-us">Contact</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
