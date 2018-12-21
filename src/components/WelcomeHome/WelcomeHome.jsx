import React, { Component } from 'react';
import './WelcomeHome.css';


class WelcomeHome extends Component {
  render() {
    return (
        <div className="WelcomeHome">
          <h1>Welcome Home</h1>
          <div className="WelcomeImg">
            <img src="../../img/WelcomeHome/PersonSnake.png" alt="Snake"/>
            <img src="../../img/WelcomeHome/SofaTable.png" alt="Sofa"/>
            <img src="../../img/WelcomeHome/SpitoonIris.png" alt="Iris"/>
            <img src="../../img/WelcomeHome/SpitoonRoom.png" alt="Room"/>
            <img src="../../img/WelcomeHome/Sofa.png" alt="SofaRoom"/>
          </div>
        </div>
    );
  }
}

export default WelcomeHome;