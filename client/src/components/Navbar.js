import React from 'react';
import "bootstrap/js/src/collapse.js";
import { Link } from 'react-router-dom'

// import SignIn from '../pages/Login';

function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Native Replacement!</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Sign In</a>
                            </li>
                            <li className="nav-item">
                                <Link to="/scanner" className="nav-link" href="#">Scan</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/browse" className="nav-link">Browse Natives</Link>
                            </li>
                            if (signedin) {
                                <li className="nav-item">
                                    <Link to="/myplants" className="nav-link">My Yard</Link>
                                </li>
                            }
                        </ul>  
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
