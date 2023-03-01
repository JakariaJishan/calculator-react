import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <header>
        <Link to="/" className="brand">Calculator</Link>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/calculator">Calculator</NavLink>
            </li>
            <li>
              <NavLink to="/quote">Quote</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
