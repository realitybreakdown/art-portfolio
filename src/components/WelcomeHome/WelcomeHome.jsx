import React, { Component } from 'react';
import './WelcomeHome.css';


class WelcomeHome extends Component {
  render() {
    return (
        <div className="WelcomeHome">
          <h1>Welcome Home</h1>
          <div className="Welcome">
            <div className="Wel">
              <img src="../../img/WelcomeHome/Sofa.png" alt="SofaRoom"/>
              <p><i>Sofa</i>, 2016 Steel, <i>Spitoon 1</i> 2016, Ceramics, <i>Table</i> 2016, Resin and glass, <i>Brick</i> 2016, Linoleum and concrete</p>
            </div>
            <div className="Wel">
              <img src="../../img/WelcomeHome/picnic.png" alt="PicnicDetail"/>
              <p><i>Picnic</i>, 2016 Acrylic and yarn</p>
            </div>
            <div className="Wel">
              <img src="../../img/WelcomeHome/SofaTable.png" alt="Sofa"/>
            </div>
            <div className="Wel">
              <img src="../../img/WelcomeHome/PersonSnake.png" alt="Snake"/>
            </div>
            <div className="Wel">
              <img src="../../img/WelcomeHome/snake.png" alt="Snake"/>
              <p><i>Snake</i>, 2016 Wood relief, acrylic and oil</p>
            </div>
            <div className="Wel">
              <img src="../../img/WelcomeHome/SpitoonIris.png" alt="Iris"/>
            </div>
            <div className="Wel">
              <img src="../../img/Paintings/Iris.png" alt="IrisDetail"/>
              <p><i>Iris</i>, 2016 Plaster, wood and oil</p>
            </div>
            <div className="Wel">
              <img src="../../img/WelcomeHome/SpitoonRoom.png" alt="Room"/>
            </div>
            <div className="Wel"> 
              <img src="../../img/WelcomeHome/room.png" alt="Room"/>
              <p><i>Room</i>, 2016 Acrylic</p>
            </div>
          </div>
        </div>
    );
  }
}

export default WelcomeHome;