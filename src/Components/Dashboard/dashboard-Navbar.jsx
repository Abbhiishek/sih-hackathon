import React, { useState, useRef, useEffect } from 'react'; 
import { Link } from 'react-router-dom'; 
import aicte_logo_nav from '../../Images/aicte_logo_nav.png' 
import {  Route, Routes , useNavigate } from 'react-router-dom'; 
import UserProfile from '../../pages/userprofile' 
import { userQuery } from '../../utils/data'; 
import { client } from '../../client'; 
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
 
 
function NavBar() { 
    const [user, setUser] = useState(); 
     
    const scrollRef = useRef(null); 
 
    const [greet, setGreet] = useState(); 
    const navigate = useNavigate(); 
 
     
 
    const userInfo = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear(); 
     
 
    useEffect(() => { 
        const query = userQuery(userInfo?.googleId); 
 
        client.fetch(query).then((data) => { 
        setUser(data[0]); 
        }); 
    }, [userInfo]); 
 
 
    useEffect(() => { 
        let day = new Date(); 
        let hr = day.getHours(); 
        if (hr >= 0 && hr < 12) { 
            setGreet("Good Morning! "); 
        } else if (hr ===12) { 
            setGreet("Good Noon!"); 
        } else if (hr >= 12 && hr <= 17) { 
            setGreet("Good Afternoon! "); 
        } else { 
            setGreet("Good Evening! "); 
        } 
    }, []); 
 
 
    useEffect(() => { 
        scrollRef.current.scrollTo(0, 0); 
      }); 
 
    return( 
        <div className="sticky-top"> 
            <nav className="navbar sticky-top navbar-expand-lg navbar-light shadow-5-strong nav-background"> 
        <div className="container-fluid"> 
             
            <a className="navbar-brand" href="#home" onClick={() => navigate('/') }> 
             
              <img src={aicte_logo_nav} alt="" width="380" height="73" className="d-inline-block align-text-top"/> 
             
            </a> 
             
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false"> 
        <span className="navbar-toggler-icon"></span> 
      </button> 
            <div className="collapse navbar-collapse" id="navbarContent"> 
                <ul className="navbar-nav mb-2 mb-lg-0 ms-auto gap-3"> 
                    <li className="nav-item"> 
                        <p className="nav-link"><b>{greet}{user?.userName}</b></p> 
                    </li> 
                    <li className="nav-item"> 
                 
                    <Link to={`/scholorship`}> 
                        <button className="btn btn-outline-success text-decoration-none"  >Scholorship</button> 
                    </Link> 
                         
                    </li> 
                    <li className="nav-item"> 
                 
                    <a href="#dashboard" className="btn btn-outline-warning">Dashboard</a> 
                         
                    </li> 
                    <li className="nav-item" onClick={() => navigate('/Create_post')}> 
                        <FontAwesomeIcon  className="btn btn-outline-dark mt-1" height="100%" alt="create a POST" icon={faCirclePlus} />  
                    </li> 
                    <li className="nav-item"> 
                         
 
                                <img src={user?.image} alt="user-pic" onClick={() => navigate(`/userprofile/${user?._id}`)} className="rounded img-thumbnail"  width="50%"/> 
                         
     
                    </li> 
                        <div className="pb-2 flex-1 h-screen overflow-y-scroll" ref={scrollRef}> 
                            <Routes> 
                                <Route  path="/userprofile:userId" component={<UserProfile/>} /> 
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