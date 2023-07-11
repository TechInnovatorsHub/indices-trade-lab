// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./CSS/navbar.css"
import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <nav className='navbar'>
      {/* <div className="logo">
        <img src={logo} alt="Logo" />
      </div> */}
      <ul className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
        <Link to="/plans">Plans</Link>
        <Link to="/faqd">FaQs</Link>
        <Link to="/support">Support</Link>
        <Link to="/signup">SIGNUP</Link>
        <Link to="/login">LOGIN</Link>   
      </ul>
    </nav>
  )
}

export default Navbar;