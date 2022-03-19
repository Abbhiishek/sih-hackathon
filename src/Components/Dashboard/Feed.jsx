import React, {useRef, useEffect ,useState } from 'react';
import Home from '../../pages/home'
import { Link , Route, Routes } from 'react-router-dom';
import { feedQuery } from '../../utils/data';
import { client } from '../../client';
import { PostLayout } from "./../Layout";


export default function App() {
    const scrollRef = useRef(null);
    const [Posts, setPosts] = useState();

    useEffect( () => {
        const query= feedQuery;
        client.fetch(query).then(
            (data)=>{
            setPosts(data)
        })
    })


    useEffect(() => {
        scrollRef.current.scrollTo(0, 0);
      });

    
    return(
        <div className="feedcontainer">
            <div className=" container dashboard--section">
                <div className=" dashboard--options container">
                    <div className="row mb-5">

                    <div className=" col-lg-3 col-md-6">
                        <Link to={`Resources`}>
                            <button href="#" className="btn btn-outline-success">Resources</button>
                        </Link>   
                    </div>
                    <div className="col-lg-3 col-md-6">
                           
                                <Link to={`Scholorship`}>
                                    <button href="#" className="btn btn-outline-success">Go To Scholorship</button>
                                </Link>
                            
                    </div>
                    <div className=" col-lg-3 col-md-6">
                            
                                <Link to={`Events`}>
                                    <button href="#" className="btn btn-outline-success">Go To Events</button>
                                </Link>
                                                  
                    </div>
                    <div className=" col-lg-3 col-md-6">
                            <Link to={`Events`}>
                                    <button href="#" className="btn btn-outline-success">Rate Us</button>
                            </Link>
                    </div>
                    </div>
                </div>

                <div className="All-post-section pt-5 pb-5"> 
                <div className="row">

                {Posts?.map((post) => <PostLayout key={post._id} post={post}/>)}

                </div>



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