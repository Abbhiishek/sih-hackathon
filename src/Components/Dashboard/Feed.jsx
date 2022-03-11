import React, {useRef, useEffect } from 'react';
import Home from '../../pages/home'
import { Link , Route, Routes } from 'react-router-dom';
import { userQuery } from '../../utils/data';
import { client } from '../../client';



export default function App() {
    const scrollRef = useRef(null);


    useEffect(() => {
        scrollRef.current.scrollTo(0, 0);
      });

    
    return(
        <div className="feedcontainer">
            <div className="parent">
                <div className="div1 ">
                    <div className="resources-feed-about">
                        
                        <p>We offer our user with a separate <b>Resources Panel</b></p>
                        <div className="row">
                            <div className="col">
                            <ul>
                            <li>E-BOOKS</li>
                            <li>Tutorials</li>
                            <li>Much More ...</li>
                        </ul>
                            </div>    
                            <div className="col">
                            <Link to={`Resources`}>
                            <button href="#" className="btn btn-outline-success mt-2">Resources</button>
                        </Link>
                            </div>    
                        </div>
                        
                           
                            
                    </div>
                    <div className="scholorship-feed-about">
                        <p>We offer our user with a separate <b>Resources Panel</b></p>
                        <div className="row">
                            <div className="col">
                                <ul>
                                    <li>E-BOOKS</li>
                                    <li>Tutorials</li>
                                    <li>Much More ...</li>
                                </ul>
                            </div>    
                            <div className="col">    
                                <Link to={`Scholorship`}>
                                    <button href="#" className="btn btn-outline-success mt-2">Go To Scholorship</button>
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                    <div className="events-feed-about">
                        <p>We offer our user with a separate <b>Resources Panel</b></p>
                        <div className="row">
                            
                            <div className="col">
                                <ul>
                                    <li>E-BOOKS</li>
                                    <li>Tutorials</li>
                                    <li>Much More ...</li>
                                </ul>
                            </div>    
                            <div className="col">
                                <Link to={`Events`}>
                                    <button href="#" className="btn btn-outline-success">Go To Events</button>
                                </Link>
                            </div>                       
                        </div>
                    </div>
                    <div className="review-feed-about">
                        <p>Rate Our Project<b>!</b></p>
                        <div className="row">
                            
                            <div className="col">
                                <p>Feel Free to express your thoughts on our project.</p>
                            </div>    
                            <div className="col">
                                <Link to={`Events`}>
                                    <button href="#" className="btn btn-outline-success">Rate Us !</button>
                                </Link>
                            </div>                       
                        </div>
                    </div>
                </div>
                <div className="div2"> 


                </div>
            </div>
            <div className="pb-2 flex-1 h-screen overflow-y-scroll" ref={scrollRef}>
            <Routes>

                {/* // here we have to create new pages and import those pages to make it route with the directory! */}
                <Route exact path="/Scholorship" component={<Home/>} />
                <Route exact path="/resources" component={<Home/>} />
                <Route exact path="/events" component={<Home/>} />
            </Routes>
            </div>
            
        </div>
    )
}