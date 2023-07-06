// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./CSS/navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
      {/* <div className="logo">
        <img src={logo} alt="Logo" />
      </div> */}
      <ul className="nav-links">
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/about">ABOUT US</a>
        </li>
        <li>
          <a href="/plans">PLANS</a>
        </li>
        <li>
          <a href="/faqs">FAQs</a>
        </li>
        <li>
          <a href="/support">SUPPORT</a>
        </li>
        <div>
        <li>
          <a href="/signup">SIGN UP</a>
        </li>
        <li>
          <a href="/login">LOGIN</a>
        </li>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar;