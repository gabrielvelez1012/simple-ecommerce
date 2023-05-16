import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='nav-container'>
            <nav className='navbar'>
                <h1 className='navbar-logo'>Shopping</h1>
                <Link className='seeCarrito' to={'/cart'}>🛒</Link>
            </nav>
        </div>
    );
};

export default NavBar;