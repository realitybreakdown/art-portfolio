import React, { Component } from 'react';
import HeyHowGood from '../HeyHowGood/HeyHowGood';
import Tapestry from '../Tapestry/Tapestry';
import WelcomeHome from '../WelcomeHome/WelcomeHome';

class Photos extends Component {
  render() {
    return (
      <div className="Sculpture">
        <h1>Sculpture</h1>
        <WelcomeHome />
        <Tapestry />
        <HeyHowGood />
      </div>
    );
  }
}

export default Photos;