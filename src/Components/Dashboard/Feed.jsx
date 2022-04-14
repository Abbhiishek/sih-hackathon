import React, {useRef, useEffect ,useState } from 'react';
import { feedQuery } from '../../utils/data';
import { client } from '../../client';
import { PostLayout } from "./../Layout";


export default function App() {
    const [Posts, setPosts] = useState();

    useEffect( () => {
        const query= feedQuery;
        client.fetch(query).then(
            (data)=>{
            setPosts(data)
        })
    },[])


    
    
    return(
        <div className="feedcontainer">
            <div className=" container dashboard--section">
                

                <div className=" pt-5 pb-5"> 
                <div className="row">

                {Posts?.map((post) => <PostLayout key={post._id} post={post}/>)}

                </div>



                </div>
            </div>
            
            
        </div>
    )
}