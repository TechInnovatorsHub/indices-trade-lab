/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import "./Settings.css";
import logo from "./Assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse ,faUser ,faShieldHalved, faBell, faShield, faGlobe, faTty} from '@fortawesome/free-solid-svg-icons'

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
              <FontAwesomeIcon icon={faHouse} />
                <span className="text-nav-text">Home</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
              <FontAwesomeIcon icon={faUser} />
                <span className="text-nav-text">Account</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
              <FontAwesomeIcon icon={faShieldHalved} />
                <span className="text-nav-text">Privacy</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
              <FontAwesomeIcon icon={faBell} />
                <span className="text-nav-text">Notifications</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
              <FontAwesomeIcon icon={faShield} />
                <span className="text-nav-text">Security</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
              <FontAwesomeIcon icon={faGlobe} />
                <span className="text-nav-text">Languages</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
              <FontAwesomeIcon icon={faTty} />
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