import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <nav className='header'>
            <div>
                <a href="/"><img src={logo} alt="" /></a>
            </div>
            <div>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/orders">Orders</a>
                <a href="/contact">Contact</a>
            </div>
        </nav>
    );
};

export default Header;