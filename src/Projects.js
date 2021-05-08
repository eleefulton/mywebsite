import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';

class Projects extends Component {
  render() {
    return (
    <div>
      <nav>
        <ul>
          <Link to='/about'>
            <li className="Projects-button">Independent Research Project</li>
          </Link>
          <Link to='/more'>
            <li className="Projects-button">Balance Budget App (Android)</li>
          </Link>
          <Link to='/projects'>
            <li className="Projects-button">Workorder Database</li>
          </Link>
        </ul>
      </nav>
    </div>
    );
  }
}

export default Projects;
