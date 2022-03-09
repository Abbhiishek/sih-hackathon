import React from 'react'
import Home from '../pages/home'
import aicte_logo_nav from '../Images/aicte_logo_nav.png'

function NavBar() {

    return(
        <div>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" onClick={Home} >
            <img src={aicte_logo_nav} alt="" width="380" height="73" class="d-inline-block align-text-top"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false">
        <span className="navbar-toggler-icon"></span>
      </button>
            <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav mb-2 mb-lg-0 ms-auto gap-4">
                    <li className="nav-item">
                        <a className="nav-link " aria-current="page"  href="#landingpage" onClick={Home}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#Resources">Resources</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#Scholorship">Scholorship</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link "  href="#Forum" >Forum</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#Developer" >Developer</a>
                    </li>
                    <li className="nav-item">
                        <button href="#ctc" className="btn btn-outline-warning">
                Contact Us
              </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        </div>
    )

}

export default NavBar