import React from 'react';
import { Link } from 'react-router-dom';
import * as tempImages from '../assets/images/index';
import './homepage.css'


function Homepage() {
    return (
        <div>
            <div>
                <h1>Native Replacement</h1>
                <p>Scan plants in your yard to determine if they are native or non native. If non-native, we will find a suitable native replacement for you.</p>
            </div>
            <button className="btn">
                <Link>Scan</Link>
            </button>
            <div>
                <img className='homepage-image' src={tempImages.butterfy}></img>
            </div>
        </div>
    )
}

export default Homepage;