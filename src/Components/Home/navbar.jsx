import React, { useState, useRef, useEffect } from 'react';

import aicte_logo_nav from '../../Images/aicte_logo_nav.png'
import { Link , Route, Routes } from 'react-router-dom';
import Dashboard from '../../pages/dashboard'
import { userQuery } from '../../utils/data';
import { client } from '../../client';


function NavBar() {
    const [user, setUser] = useState();
    const scrollRef = useRef(null);

    const userInfo = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
    

    useEffect(() => {
        const query = userQuery(userInfo?.googleId);

        client.fetch(query).then((data) => {
        setUser(data[0]);
        });
    }, []);


    useEffect(() => {
        scrollRef.current.scrollTo(0, 0);
      });

    return(
        <div className="sticky-top">
            <nav className="navbar sticky-top navbar-expand-lg navbar-light  shadow-5-strong nav-background">
        <div className="container-fluid">
            <a className="navbar-brand" href="#home" >
            <img src={aicte_logo_nav} alt="" width="380" height="73" class="d-inline-block align-text-top"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false">
        <span className="navbar-toggler-icon"></span>
      </button>
            <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav mb-2 mb-lg-0 ms-auto gap-4">
                    <li className="nav-item">
                        <a className="nav-link " aria-current="page"  href="#landingpage" >Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link "  href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link "  href="#feature" >Feature</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#resources">Resources</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link "  href="#scholorship">Scholorship</a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link "  href="#developer" >Developer</a>
                    </li>
                    <li className="nav-item">
                        
                        <Link to={`Dashboard/${user?._id}`}>
                                <img src={user?.image} alt="user-pic" className="rounded img-thumbnail"  width="50px"/>
                        </Link>
    
                    </li>
                        <div className="pb-2 flex-1 h-screen overflow-y-scroll" ref={scrollRef}>
                            <Routes>
                                <Route exact path="/Dashboard:userId" component={<Dashboard/>} />
                                
                            </Routes>
                        </div>
                    
                </ul>
            </div>
        </div>
    </nav>
        </div>
    )

}

export default NavBar