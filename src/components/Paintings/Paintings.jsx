import React, { Component } from 'react';
import './Paintings.css';

class Paintings extends Component {
  render() {
    return (
      <div className="Paintings">
        <h1>Painting</h1>
        <div className="PaintingsImg">
          <img src="../../img/Paintings/Desert.png" alt="Desert"/>
          <img src="../../img/Paintings/HandInGrass.png" alt="Grass"/>
          <img src="../../img/Paintings/Iris.png" alt="Iris"/>
          <img src="../../img/Paintings/Oil.png" alt="Oil"/>
          <img src="../../img/Paintings/Picnic.png" alt="Picnic"/>
          <img src="../../img/Paintings/Toothbrush.png" alt="Toothbrush"/>
        </div>
      </div>
    );
  }
}

export default Paintings;