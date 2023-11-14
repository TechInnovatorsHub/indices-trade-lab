/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import "./Settings.css";
import logo from "./Assets/logo.png";
import { FaHouse ,FaUser ,FaShieldHalved, FaBell, FaShield, FaGlobe, FaTty} from 'react-icons/fa6'

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}><img src={logo} /></button>
      {isOpen && (
      <div className="dropdown-content">
        <ul className="dropdown-items">
          <li className="search-bar">
              <input type="search" placeholder="Search Settings" />
            </li>
            <li className="nav-link">
              <a href="#">
              <FaHouse />
                <span className="text-nav-text">Home</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
              <FaUser />
                <span className="text-nav-text">Account</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
              <FaShieldHalved />
                <span className="text-nav-text">Privacy</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
              <FaBell />
                <span className="text-nav-text">Notifications</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
              <FaShield />
                <span className="text-nav-text">Security</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
              <FaGlobe />
                <span className="text-nav-text">Languages</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
              <FaTty />
                <span className="text-nav-text">Contacts</span>
              </a>
            </li>
        </ul>
        </div>
      )}
    </div>
  );
      };
export default Settings;
