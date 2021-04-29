import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            M
            <i class="fas fa-compact-disc"></i>
            VIE
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMenu}>Home</Link>
            </li>
            <li className='nav-item'><Link to='/coming' className='nav-links' onClick={closeMenu}>Coming soon</Link>
            </li>
            <li className='search-item'><input placeholder="Search" /></li>
            <li className='nav-item'><Link to='/cart' className='nav-links' onClick={closeMenu}><i class="fas fa-shopping-cart"></i></Link>
            </li>
            <li>
              <Link 
                to='/sign-up'
                className='nav-links'
                onClick={closeMenu}
              > 
                Sign Up
                
              </Link>
            </li>   
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;