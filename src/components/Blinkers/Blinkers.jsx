import React, { Component } from 'react';
import './Blinkers.css';


class Blinkers extends Component {
  render() {
    return (
      <div className="Tapestry">
        <h1>Blinkers</h1>
        <div className="Blinkers">
        <img src="../../img/Tapestry/Blinkers.png" alt="Blinkers"/>
        <img src="../../img/Tapestry/BlinkerDetail.png" alt="BD"/>
        <img src="../../img/Tapestry/BlinkerHorse.png" alt="BH"/>
        <img src="../../img/Tapestry/BlinkerPeople.png" alt="BP"/>
        <img src="../../img/Tapestry/BlinkerRose.png" alt="BR"/>
        </div>
      </div>
    );
  }
}

export default Blinkers;