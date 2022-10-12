import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/orange.png'
import './Header.css'

const Header = () => {

    return (

        <nav className='header'>

            <div className='logo'>
                <img src={logo} alt="" />
                <p>e<span style={{ fontSize: '30px' }}>O</span>ranGe</p>
            </div>
            <div>
                <Link to="/home">HOME</Link>
                <Link to="/shop">SHOP</Link>
                <Link to="/orders">TRACK MY ORDER</Link>
                <Link to="/inventory">INVENTORY</Link>
                <Link to="/sell">SELL ON ORANGE</Link>
                <Link to="/about">ABOUT</Link>
            </div>

        </nav>
    );
};


export default Header;