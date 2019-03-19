import React, { Component } from 'react';
import './Projects.css';
import {Link} from 'react-router-dom';

class Projects extends Component {
  render() {
    return (
      <div className="Sculpture">
        <div className="Projects">
          <div className="Sculpt1">
            <Link to="/blinkers">
              <h3>Blinkers</h3>
            </Link>
          </div>
          <div className="Sculpt2">
            <Link to="/welcomehome">
              <h3>Welcome Home</h3>
            </Link>
          </div>
          <div className="Sculpt3">
            <Link to="/heyhowgood">
              <h3>Hey How Are You Good How Are You Good</h3>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;

