import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home/Home'
import Ceramics from './components/Ceramics/Ceramics';
import Photos from './components/Photos/Photos';
import Sculpture from './components/Sculpture/Sculpture';
import Paintings from './components/Paintings/Paintings';

class App extends Component {
  render() {
    return (
     <Router>
        <div className="App">
          <nav>
            <Link to="/">Ryan Archambault</Link>{' '}
            <Link to="/ceramics">Ceramics</Link>
            <Link to="/paintings">Paintings</Link>
            <Link to="/sculpture">Sculpture</Link>
            <Link to="/photos">Photos</Link>
          </nav>
            <Route exact path="/" component={Home}/>
            <Route path="/ceramics" component={Ceramics}/>
            <Route path="/sculpture" component={Sculpture}/>
            <Route path="/photos" component={Photos}/>
            <Route path="/paintings" component={Paintings}/>
        </div>
      </Router>
    );
  }
}

export default App;
