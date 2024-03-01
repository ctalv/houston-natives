import React from 'react';

function Header() {
    return (
        <header>
            <h1 className='border'>Native Replacement!</h1>
            <nav>
                <div className='sign-in'>
                    Sign In
                </div>
                <div className='nav'>
                    <ul>
                        <li>Identify</li>
                        <li>Browse Natives</li>
                        {/* <li>Favorites</li> */}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;
