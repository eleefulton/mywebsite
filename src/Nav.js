import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul className="Nav-bar">
          <h1 className="App-header">Ethan Fulton</h1>
          <Link to='/about'>
            <li className="Nav-button">About</li>
          </Link>
          <Link to='/more'>
            <li className="Nav-button">More</li>
          </Link>
          <Link to='/projects'>
            <li className="Nav-button">Projects</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav
