import React from 'react'
import{urlFor } from '../../client'


export default function App({ developer }) {


    const { name, image,  about , experience , social} = developer;
    return(
        <>
        <div className="col-lg-4 col-md-6">
            <div className="developer-card mb-4">
                 <img alt={developer.name} src={(urlFor(image).width(250).url())} className="developer--photo mt-5 mb-4"/>
                 <h2>{name}</h2>
                 <p>{about}</p>
                 
                 <p className="code">{experience}</p>
                 <div className="mb-4">
                     <a href={social}className="btn btn-lg btn-outline-dark">GitHub</a>
                 </div>
            </div>
        </div>
        </>

        
    )
}