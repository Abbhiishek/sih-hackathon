import React from 'react' 
import { urlFor } from '../../client'; 
 
 
 
export default function App({reviews}) { 
 
 
    const { name , image ,  about , review} = reviews; 
 
 
    return( 
        <> 
        <div className="carousel-item  testimonial--layout "> 
                   <h2>{review}</h2> 
                        <img className="testimonial-image" src={(urlFor(image).width(250).url())} alt="Testimonial-profile"/> 
                        <em>{name} , {about}</em>   
        </div> 
        </> 
 
 
    ) 
}