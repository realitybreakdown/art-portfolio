import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class HeyHowGood extends Component {
  render() {
    return (
      <Link to="/heyhowgood">
        <div className="Hey">
          <h3>Hey How are You Good How are You Good</h3>
        </div>
      </Link>
    );
  }
}

export default HeyHowGood;