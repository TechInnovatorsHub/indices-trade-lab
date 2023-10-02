// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import logo from './assets/logo.svg'
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
    <nav className={`${activeLink && activeLink !== "/" ? "navbar iamActive" : "navbar"} border-b-2 border-yellow-700 bg-black text-white h-[5rem]`}>
      <div className="logo inline-flex relative">
        <img src={logo} alt="Logo" className="w-[6rem] relative bottom-1" />
        <p className="text-white text-2xl w-[9rem] text-right relative left-[-3rem] top-3 font-bold">Forex Trade Sacco</p>
        </div>
      <ul className="nav-links relative top-6">
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
        <div className='inline-flex flex-col gap-1 relative bottom-6'>
        <NavLink to="/signup" className="signup p-1 text-sm border-2 border-yellow-500 rounded-full w-[6rem] text-center hover:bg-yellow-500 hover:text-black" onClick={handleLinkClick}>
          SIGNUP
        </NavLink>

        <NavLink to="/login" className="login p-1 text-sm border-2 border-yellow-500 rounded-full w-[6rem] text-center hover:bg-yellow-500 hover:text-black" onClick={handleLinkClick}>
          LOGIN
        </NavLink>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar;