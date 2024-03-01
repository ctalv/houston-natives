import React from 'react';

function Header() {
    return (
        <header>
            <div>
                <div className='row'>
                    <h1 className='col'>Native Replacement!</h1>
                    <div className='sign-in col'><a href='#'>Sign In</a></div>
                </div>
                <nav>
                    <div className='navbar-nav'>
                        <div><a href='#'>Identify</a></div>
                        <div><a href='#'>Browse Natives</a></div>
                        {/* <div>Favorites</div> */}
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;
