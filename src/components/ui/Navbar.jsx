import React from 'react'
import {
    Link
} from "react-router-dom";

export const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/">
                    <img class="nav-link" src="../logo.jpg" alt="imagen logo" />
                </Link>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <Link to="/"><span class="nav-link"> Home </span></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/about"><span class="nav-link"> About me </span></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/watercolors"> <span class="nav-link"> Watercolors </span></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/contact"> <span class="nav-link"> Contact</span> </Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    )
}
