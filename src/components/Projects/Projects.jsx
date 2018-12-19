import React, { Component } from 'react';
import './Projects.css';
import Blinkers from '../Blinkers/Blinkers';
import WelcomeHome from '../WelcomeHome/WelcomeHome';
import HeyHowGood from '../HeyHowGood/HeyHowGood';
// import {Link, Route, BrowserRouter as Router} from 'react-router-dom';

class Projects extends Component {
  render() {
    return (
      <div className="Sculpture">
        <div className="Projects">
          <div className="Sculpt">
            <Blinkers />
          </div>
          <div className="Sculpt">
            <WelcomeHome />
          </div>
          <div className="Sculpt">
            <HeyHowGood />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;

