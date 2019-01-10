import React, { Component } from 'react';
import './Paintings.css';

class Paintings extends Component {
  render() {
    return (
      <div className="Paintings">
        <div className="PaintingsImg">
          <div className="Paint">
            <img src="../../img/Paintings/Desert.png" alt="Desert"/>
            <p><i>Desert</i> 2015, Acrylic</p>
          </div>
          <div className="Paint">
            <img src="../../img/Paintings/HandInGrass.png" alt="Grass"/>
            <p><i>Hand</i> 2015, Astro Turf, Acrylic, Wood, Metal Wire</p>
          </div>
          <div className="Paint">
            <img src="../../img/Paintings/Oil.png" alt="Oil"/>
            <p><i>Oil Spill</i> 2015, Oil paint, Shop Rag</p>
          </div>
          <div className="Paint">
            <img src="../../img/Paintings/Picnic.png" alt="Picnic"/>
            <p><i>Picnic</i> 2016, Acrylic, Yarn</p>
          </div>
          <div className="Paint">
            <img src="../../img/Paintings/Toothbrush.png" alt="Toothbrush"/>
            <p><i>Toothbrush</i> 2015, Acrylic, Laminate, Wood, Metal Wire</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Paintings;