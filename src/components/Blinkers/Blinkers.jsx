import React, { Component } from 'react';
import './Blinkers.css';


class Blinkers extends Component {
  render() {
    return (
      <div className="Tapestry">
        <h1>Blinkers</h1>
        <div className="Blinkers">
          <div className="Blink">
            <img src="../../img/Tapestry/Blinkers.png" alt="Blinkers"/>
          </div>
          <div className="Blink">
            <img src="../../img/Tapestry/BlinkerDetail.png" alt="BD"/>
          </div>
          <div className="Blink">
            <img src="../../img/Tapestry/BlinkerPeople.png" alt="BP"/>
            <p><i>People</i>, 2017 Canvas</p>
          </div>
          <div className="Blink">
            <img src="../../img/Tapestry/BlinkerHorse.png" alt="BH"/>
            <p><i>Horse</i>, 2017 Canvas, felt, thread</p>
          </div>
          <div className="Blink">
            <img src="../../img/Tapestry/BlinkerRose.png" alt="BR"/>
            <p><i>Rose</i>, 2017 Canvas, felt, thread</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Blinkers;