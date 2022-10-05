import React from 'react';
import img from '../../images/winter-img.jpg'
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <div >
                <h1> New Collection For Winter</h1>
                <p>Discover all the new arrivals of ready-to-wear collection</p>
                <a href='/shop'>
                    <button class="btn">
                        SHOP NOW
                    </button>
                </a>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Home;