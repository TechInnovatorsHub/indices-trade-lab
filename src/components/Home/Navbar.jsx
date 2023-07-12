// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import "./CSS/navbar.css"
import { NavLink } from "react-router-dom"


const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (event) => {
    const link = event.target
    setActiveLink(link.href)

    if (link.href === "/") {
      document.querySelector(".navbar .iamActive").classList.remove("iamActive");
    }
  }


  return (
    <nav className={activeLink && activeLink !== "/" ? "navbar iamActive" : "navbar"}>
      {/* <div className="logo">
        <img src={logo} alt="Logo" />
        </div> */}
      <ul className="nav-links">
        <NavLink to="/">
          Home
        </NavLink>

        <NavLink to="/about" onClick={handleLinkClick}>
          About us
        </NavLink>

        <NavLink to="/plans" onClick={handleLinkClick}>
          Plans
        </NavLink>

        <NavLink to="/faqs" onClick={handleLinkClick}>
          FaQs
        </NavLink>

        <NavLink to="/support" onClick={handleLinkClick}>
          Support
        </NavLink>

        <NavLink to="/signup" className="signup" onClick={handleLinkClick}>
  SIGNUP
</NavLink>

<NavLink to="/login" className="login" onClick={handleLinkClick}>
  LOGIN
</NavLink>
   
      </ul>
    </nav>
  )
}

export default Navbar;