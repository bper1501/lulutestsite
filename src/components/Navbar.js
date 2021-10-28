import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css';



function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960)
    {
      setButton(false);
    }else
      {
        setButton(true);
      }
  };

    window.addEventListener('resize', showButton);

    useEffect(() => {
      showButton()
    }, []);
  
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
        <Link to="/">
          <img className="navbar-logo" src="/logo.png" alt="logo-img" onClick={closeMobileMenu} />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to='/Portfolio' className='nav-links' onClick={closeMobileMenu}>Portfolio</Link>
            </li>
            <li className='nav-item'>
              <Link to='/Services' className='nav-links' onClick={closeMobileMenu}>Services</Link>
            </li>
            <li className='nav-item'>
              <Link to='/Gallery' className='nav-links' onClick={closeMobileMenu}>Gallery</Link>
            </li>
            <li className='nav-item'>
              <Link to='/Team' className='nav-links' onClick={closeMobileMenu}>Our Team</Link>
            </li>
            <li className='nav-item'>
              <Link to='/Contact' className='nav-links-mobile' onClick={closeMobileMenu}>Contact</Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Contact</Button> }
        </div>
      </nav>
    </>
  );
}

export default Navbar;
