// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from 'react'
import logo from './assets/logo.svg'
import "./CSS/navbar.css"
import { NavLink } from "react-router-dom"
import AuthContext from '../../action/AuthContext'
import { FaBars } from 'react-icons/fa6';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const { user, logoutUser } = useContext(AuthContext);

  const handleLinkClick = (event) => {
    const link = event.target
    setActiveLink(link.href)

    if (link.href === "/") {
      document.querySelector(".navbar .iamActive").classList.remove("iamActive");
    }
  }

  const links = [
    { path: '/', name: 'Home' },
    { path: 'about', name: 'About us' },
    { path: 'plans', name: 'Plans' },
    { path: 'faqs', name: 'Faqs' },
    { path: 'support', name: 'Support' },
  ]

  return (
    <>
      <nav className={`${activeLink && activeLink !== "/" ? "navbar iamActive" : "navbar"} relative px-2 py-2 bg-black`}>
        <div className="px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex items-center justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink to={'/'}
              className="text-sm text-left font-bold flex items-center leading-relaxed mr-4 py-1 whitespace-nowrap uppercase text-white"
            >
              <img src={logo} alt="logo" className='w-[30%] md:w-[50%]' /> Forex<br /> Trade <br />Sacco
            </NavLink>
            <FaBars
              className="w-5 h-5 text-white cursor-pointer leading-none border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            />
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="mainNavbar"
          >
            <ul className="flex flex-col lg:flex-row items-center list-none lg:ml-auto">
              {links.map(link =>
                <li key={link.name} className="nav-item">
                  <NavLink to={link.path} onClick={() => { handleLinkClick; setNavbarOpen(!navbarOpen) }} className="px-3 py-2 text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    {link.name}
                  </NavLink>
                </li>
              )}
              {user ?
                <div className='inline-flex flex-col gap-1 bottom-2'>
                  <button className='p-1 text-white text-sm border-2 border-yellow-500 rounded-full w-[6rem] text-center hover:bg-yellow-500 hover:text-black' onClick={() => { logoutUser; setNavbarOpen(!navbarOpen) }}>logout</button>
                </div>
                :
                <div className='flex flex-col mt-5 lg:mt-0 gap-1'>

                  <NavLink to="/signup" className="signup text-white p-1 text-sm border-2 border-yellow-500 rounded-full w-[6rem] text-center hover:bg-yellow-500 hover:text-black" onClick={() => { handleLinkClick; setNavbarOpen(!navbarOpen) }}>
                    SIGNUP
                  </NavLink>

                  <NavLink to="/login" className="login text-white p-1 text-sm border-2 border-yellow-500 rounded-full w-[6rem] text-center hover:bg-yellow-500 hover:text-black" onClick={() => { handleLinkClick; setNavbarOpen(!navbarOpen) }}>
                    LOGIN
                  </NavLink>
                </div>
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
