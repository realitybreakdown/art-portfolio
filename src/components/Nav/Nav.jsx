import './Nav.css';
import React , {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';


class Nav extends Component {
  render() {
    return (
    <div className="Nav">
      <NavLink to='' className='Ryan'>Ryan Arcambault</NavLink>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <NavLink to='/projects' className='NavBar-link'>Projects</NavLink>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <NavLink to='/photo' className='NavBar-link' >Photo</NavLink>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <NavLink to='/painting' className='NavBar-link'>Painting</NavLink>
      {/* &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; */}
      {/* <NavLink to='/video' className='NavBar-link'>Video</NavLink> */}
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <NavLink to='/ceramics' className='NavBar-link'>Ceramics</NavLink>
  </div>
    )
  }
};

export default Nav;