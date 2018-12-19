import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class WelcomeHome extends Component {
  render() {
    return (
      <Link to="/welcomehome">
        <div className="WelcomeHome">
          <h3>Welcome Home</h3>
        </div>
      </Link>
    );
  }
}

export default WelcomeHome;