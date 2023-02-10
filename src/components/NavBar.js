import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
        <Link to="/" className='link dark-theme-font-color'>Home</Link>
        <Link to="/projects" className='link dark-theme-font-color'>Projects</Link>
    </nav>
  )
}

export default NavBar;