import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Blinkers extends Component {
  render() {
    return (
      <Link to="/blinkers">
        <div className="Tapestry">
          <h3>Blinkers</h3>
        </div>
      </Link>
    );
  }
}

export default Blinkers;