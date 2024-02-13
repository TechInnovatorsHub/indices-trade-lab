// eslint-disable-next-line no-unused-vars
import React, { useState, useContext, useRef } from 'react'
import logo from './assets/logo.png'
import userLogo from './assets/user.svg'
import { NavLink } from "react-router-dom"
import AuthContext from '../../action/AuthContext'
import { FaBars } from 'react-icons/fa6';

export default function Navbar() {
  const navref = useRef(null)
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

  window.addEventListener("scroll", function () {
    if (window.scrollY <= 1) {
        navref.current.classList = "fixed w-[100%] pb-6 h-[fit-content] z-40 px-2 py-2";
    } else {
        navref.current.classList = "border-b border-white/20 fixed w-[100%] pb-6 h-[fit-content] z-40 px-2 py-2 bg-zinc-950/90 backdrop-blur-sm";
    }
})

  const links = [
    { path: '/', name: 'Home' },
    { path: 'about', name: 'About us' },
    { path: 'plans', name: 'Plans' },
    { path: 'faqs', name: 'Faqs' },
    { path: 'support', name: 'Support' },
  ]

  return (
    <>
      <nav className="fixed w-[100%] pb-6 h-[fit-content] z-40 px-2 py-2" ref={navref}>
        <div className="px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex items-center justify-between lg:w-auto lg:static lg:block lg:justify-start mt-2">
            <NavLink to={'/'}
              className="text-sm text-left font-bold flex items-center leading-relaxed mr-4 py-1 whitespace-nowrap uppercase text-white"
            >
              <img src={logo} alt="logo" className='w-[30%] md:w-[50%] lg:w-[3rem]' /> 
              <p 
                className="relative left-3 text-2xl bg-clip-text text-transparent bg-gradient-to-t from-red-600 via-white to-green-600">
                FTS
              </p>
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
            <ul className="flex flex-col lg:flex-row items-center list-none lg:ml-auto relative right-4">
              {links.map(link =>
                <li key={link.name} className="nav-item">
                  <NavLink to={link.path} onClick={() => { handleLinkClick; setNavbarOpen(!navbarOpen) }} className="px-3 py-2 text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    {link.name}
                  </NavLink>
                </li>
              )}
              {user ?
                <div className='inline-flex flex-col gap-1 bottom-2'>
                  <button 
                    className='p-1 text-white text-sm border-2 border-yellow-500 rounded-full w-[6rem] text-center hover:bg-yellow-500 hover:text-black' 
                    onClick={() => { 
                      localStorage.clear()
                      sessionStorage.clear()
                      window.location.href="/"
                    }}
                  >
                      logout
                  </button>
                </div>
                :
                <div className='flex mt-5 lg:mt-0 gap-1'>

                  <NavLink 
                    to="/signup" 
                    className="signup bg-[#FC5B3F] w-[7rem] relative mr-5 ml-5 text-center p-[0.4rem] rounded-full hover:bg-transparent hover:text-[#FC5B3F] hover:border hover:border-[#FC5B3F]" 
                    onClick={() => { handleLinkClick; setNavbarOpen(!navbarOpen) }}
                  >
                    Get Started
                  </NavLink>

                  <NavLink to="/login" className="login p-1 text-sm h-[fit-content]" onClick={() => { handleLinkClick; setNavbarOpen(!navbarOpen) }}>
                    <img src={userLogo} className="w-[2rem]"/>
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
