import React from 'react'
import './Header.css'
import {Outlet, Link } from "react-router-dom";
const Header = () => {
  return (
    <><div>
          <nav>
              <ul className='navbar'>
                  <img src='https://assets.ccbp.in/frontend/react-js/wave-logo-img.png' id='logo'></img>
                  <li id='nav'><Link to="/">HOME</Link></li>
                  <li id='nav'> <Link to="about">ABOUT</Link></li>
                  <li id='nav'><Link to="contact">CONTACT</Link></li>
              </ul>
          </nav>
      </div><Outlet /></> 
  )
}

export default Header
