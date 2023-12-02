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
    { path: 'aboutus', name: 'About us' },
    { path: 'plans', name: 'Plans' },
    { path: 'faqs', name: 'Faqs' },
    { path: 'support', name: 'Support' },
  ]

  return (
    <>
      <nav className={`${activeLink && activeLink !== "/" ? "navbar iamActive" : "navbar"} relative px-2 py-2 bg-black`}>
        <div className="px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex items-center justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm text-left font-bold flex items-center leading-relaxed mr-4 py-1 whitespace-nowrap uppercase text-white"
              href="/"
            >
              <img src={logo} alt="logo" className='w-[30%] md:w-[50%]' /> Forex<br /> Trade <br />Sacco
            </a>
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
                  <NavLink to={link.path} onClick={handleLinkClick} className="px-3 py-2 text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    {link.name}
                  </NavLink>
                </li>
              )}
              {user ?
                <div className='inline-flex flex-col gap-1 bottom-2'>
                  <button className='p-1 text-white text-sm border-2 border-yellow-500 rounded-full w-[6rem] text-center hover:bg-yellow-500 hover:text-black' onClick={logoutUser}>logout</button>
                </div>
                :
                <div className='flex flex-col mt-5 lg:mt-0 gap-1'>

                  <NavLink to="/signup" className="signup text-white p-1 text-sm border-2 border-yellow-500 rounded-full w-[6rem] text-center hover:bg-yellow-500 hover:text-black" onClick={handleLinkClick}>
                    SIGNUP
                  </NavLink>

                  <NavLink to="/login" className="login text-white p-1 text-sm border-2 border-yellow-500 rounded-full w-[6rem] text-center hover:bg-yellow-500 hover:text-black" onClick={handleLinkClick}>
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


//   return (
//     <nav className={`${activeLink && activeLink !== "/" ? "navbar iamActive" : "navbar"} border-b-2 border-yellow-700 bg-black text-white h-[5rem]`}>
//       <div className="logo flex align-center">
//         <img src={logo} alt="Logo" className="w-[6rem]" />
//         <p className="text-white text-2xl w-[9rem] text-right relative left-[-3rem] top-3 font-bold">Forex Trade Sacco</p>
//       </div>
//       <ul className="nav-links relative top-6">
//         <NavLink to="/">
//           Home
//         </NavLink>

//         <NavLink to="/about" onClick={handleLinkClick}>
//           About us
//         </NavLink>

//         <NavLink to="/plans" onClick={handleLinkClick}>
//           Plans
//         </NavLink>

//         <NavLink to="/faqs" onClick={handleLinkClick}>
//           FaQs
//         </NavLink>

//         <NavLink to="/support" onClick={handleLinkClick}>
//           Support
//         </NavLink>
//         {user ?
//           <div className='inline-flex flex-col gap-1 relative bottom-2'>
//             <button className='p-1 text-sm border-2 border-yellow-500 rounded-full w-[6rem] text-center hover:bg-yellow-500 hover:text-black' onClick={logoutUser}>logout</button>
//           </div>
//           :
//           <div className='inline-flex flex-col gap-1 relative bottom-6'>

//             <NavLink to="/signup" className="signup p-1 text-sm border-2 border-yellow-500 rounded-full w-[6rem] text-center hover:bg-yellow-500 hover:text-black" onClick={handleLinkClick}>
//               SIGNUP
//             </NavLink>

//             <NavLink to="/login" className="login p-1 text-sm border-2 border-yellow-500 rounded-full w-[6rem] text-center hover:bg-yellow-500 hover:text-black" onClick={handleLinkClick}>
//               LOGIN
//             </NavLink>
//           </div>
//         }
//       </ul>
//     </nav>
//   )
// }

// export default Navbar;
