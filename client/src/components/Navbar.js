import React from 'react';
import "bootstrap/js/src/collapse.js";
import { Link } from 'react-router-dom'
import Auth from "../utils/auth";


// import SignIn from '../pages/Login';

// const getLogin = Auth.loggedIn()
const getLogin = false

function showLogin () {
    if (getLogin) {
        return (
            <Link to="/" className="nav-link" onClick={() => Auth.logout()}>Logout</Link>
        );
    } else {
        return (
            <Link to="/signin" className="nav-link">Sign In</Link>
        );
    }
}

function showMyPlants () {
    if (getLogin) {
        return (
            <li className="nav-item">
                <Link to="/myplants" className="nav-link">My Yard</Link>
            
            </li>
        );
    }
}




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
                                {showLogin()}
                            </li>
                            <li className="nav-item">
                                <Link to="/scanner" className="nav-link" href="#">Scan</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/browse" className="nav-link">Browse Natives</Link>
                            </li>
                            {showMyPlants()}
                        </ul>  
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
