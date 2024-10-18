import React from "react";
import { Link } from 'react-router-dom';
import mainLogo from'./../assets/images/logoSavfile.png';
function Navigation() {
    return( 
        <nav class="navbar navbar-expand-lg">
        <div class="container">
            <div class="navbar-brand">
                    <img src={mainLogo} class="logo-image"/>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav align-items-center ms-lg-5">
                    <li class="nav-item">
                    <Link className="nav-link" to= "/">Home</Link>
                    </li>

                    <li class="nav-item">
                    <Link className="nav-link" to= "/about">About</Link>
                    </li>

                    {/* <li class="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="pages">Pages</Link>
                        <a class="nav-link dropdown-toggle" href="#" id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>

                        <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                            <li> <Link className="dropdown-item" to= "/about">Job Listings</Link></li>
                            <li> <Link className="dropdown-item" to= "/about">Job details</Link></li>
                        </ul>
                    </li> */}

                    <li class="nav-item">
                        <Link className="nav-link" to= "/contact">Contact</Link>
                        
                    </li>

                    <li class="nav-item ms-lg-auto">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>

                    <li class="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navigation;