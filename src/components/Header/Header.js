import React from 'react';
import logo from '../../images/orange.png'
import './Header.css'

const Header = () => {
  
    return (
        
        <nav className='header'>

            <div className='logo'>
                <img src={logo} alt="" />
                <p><span style={{ fontSize: '30px' }}>O</span>ranGe</p>
            </div>
            <div>
                <a href="/shop">SHOP</a>
                <a href="/orders">TRACK MY ORDER</a>
                <a href="/inventory">INVENTORY</a>
                <a href="/sell">SELL ON ORANGE</a>
                <a href="/about">ABOUT</a>
            </div>

        </nav>
    );
};


export default Header;