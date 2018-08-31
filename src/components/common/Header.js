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
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/">Work</NavLink></li>
            <li><NavLink to="/">Skills</NavLink></li>
            <li><NavLink to="/">Articles</NavLink></li>
            <li><NavLink to="/">Services</NavLink></li>
            <li><NavLink to="/">About</NavLink></li>
            <li><NavLink to="/">Contact</NavLink></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
