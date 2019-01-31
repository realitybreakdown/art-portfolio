import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './components/Home/Home'
import Ceramics from './components/Ceramics/Ceramics';
import Photos from './components/Photos/Photos';
import Projects from './components/Projects/Projects';
import Paintings from './components/Paintings/Paintings';
import Video from './components/Video/Video';
import Nav from './components/Nav/Nav';
import Blinkers from './components/Blinkers/Blinkers';
import WelcomeHome from './components/WelcomeHome/WelcomeHome';
import HeyHowGood from './components/HeyHowGood/HeyHowGood';
import About from './components/About/About';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
            <Route exact path="/" component={Home}/>
            <Route path="/ceramics" component={Ceramics}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/photo" component={Photos}/>
            <Route path="/painting" component={Paintings}/>
            <Route path="/video" component={Video}/>
            <Route path="/blinkers" component={Blinkers}/>
            <Route path="/welcomehome" component={WelcomeHome}/>
            <Route path="/heyhowgood" component={HeyHowGood}/>
            <Route path="/about" component={About}/>
        </div>
      </Router>
      
    );
  }
}

export default App;
