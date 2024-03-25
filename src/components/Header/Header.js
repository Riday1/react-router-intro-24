import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <nav className='header'>
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/orders">Orders</a>
            <a href="/contact">Contact</a>
        </nav>
    );
};

export default Header;