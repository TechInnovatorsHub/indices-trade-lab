// eslint-disable-next-line no-unused-vars
import React from 'react'

const Navbar = () => {
  return (
    <nav>
      {/* <div className="logo">
        <img src={logo} alt="Logo" />
      </div> */}
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;