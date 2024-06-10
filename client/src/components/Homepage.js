import React from 'react';
import { Link } from 'react-router-dom';


function Homepage() {
    return (
        <div>
            <div>
                <h1>Native Replacement</h1>
                <p>Scan plants in your yard to determine if they are native or non native. If non-native, we will find a suitable native replacement for you.</p>
            </div>
            <button class="btn">
                <Link>Scan</Link>
            </button>
        </div>
    )
}

export default Homepage;