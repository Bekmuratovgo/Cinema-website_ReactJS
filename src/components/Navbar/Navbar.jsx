import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { topicContext } from '../../context/TopicContext';
import "./Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const {search, searchData} = useContext(topicContext)
    const [searchValue, setSearchValue] = useState('')

    const handleValue = (e) => {
      setSearchValue(e.target.value)
      search(e.target.value)
    }
    useEffect(() =>{
      // console.log(searchData);
    },[searchData])

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            M
            <i className="fas fa-compact-disc"></i>
            VIE
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMenu}>Home</Link>
            </li>
            <li className='nav-item'><Link to='/movies' className='nav-links' onClick={closeMenu}>Movies</Link>
            </li>
            <li className='search-item'><input placeholder="Search" onChange={handleValue} />
            <div className="search-result">
              {searchData.map(item => (
                <Link to={`/details/${item.id}`}>
                  <div>{item.title}</div>
                </Link>
              ))}
            </div>
            
            </li>
            <Link to="/cart" className='nav-item'><Link to='/cart' className='nav-links' onClick={closeMenu}><i className="fas fa-shopping-cart"></i></Link>
            </Link>
             <li>
                  <Link
                      to="/signup"
                      className="nav-links"
                      onClick={closeMenu}
                  >
                      Sign Up
                  </Link>
                        </li>
                        <li>
                            <Link
                                to="/login"
                                className="nav-links"
                                onClick={closeMenu}
                            >
                                Sign In
                            </Link>
                        </li>  
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
