import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Link to="/about">
          <p>About</p>
        </Link>
      </div>
    );
  }
}

export default Home;