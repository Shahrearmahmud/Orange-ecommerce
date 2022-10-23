import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/orange.png'
import './Header.css'

const Header = () => {
const [user] = useAuthState(auth);
const handleSignOut =()=>{
    signOut(auth);
}
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
                {
                    user?
                   <button  onClick={handleSignOut} className='btn-signOut'>LOG OUT</button>
                   :
                    <Link to= "/login">LOGIN </Link>}

            </div>

        </nav>
    );
};


export default Header;