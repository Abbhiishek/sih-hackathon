import React, { useState, useEffect } from 'react'; 
import {client} from '../../client' 
import {TestimonialLayout} from '../Layout' 
import {TestimonialQuery} from '../../utils/data' 
 
export default function App(){ 
 
     
    const[reviews , setdreviews]= useState(); 
 
     
    useEffect(() => { 
        const query =TestimonialQuery; 
 
 
        client.fetch(query).then((data)=> 
        setdreviews(data)); 
    },[]) 
 
    return ( 
        <> 
         
 
        <section id="testimonials"> 
                    <div className="container"> 
                        <h1 className="code"> TESTIMONIALS</h1> 
                        <p>What does the community have to say about us?</p> 
                        <br/> 
                        <br/> 
                        <div id="carouselExampleControls" className="carousel slide mt-3" data-bs-ride="carousel"> 
                            <div className="carousel-inner"> 
 
                            <div className="carousel-item  testimonial--layout  active"> 
                                    <h2>If you Found This Project HelpFul Feel Free To Drop A Review 🙌🏻</h2> 
                                    <img className="testimonial-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIcHjFYVUpl-TZrXGvW48gwJXnLyS2Hrr8sQ&usqp=CAU" alt="Testimonial-profile"/> 
                                    <em>Abhishek Kushwaha , Developer</em>   
                            </div> 
                                { 
                                    reviews && (reviews.map((review) => 
                                    <TestimonialLayout key={review._id} reviews={review}/> 
                                     
                                    )) 
                                } 
                                 
                            </div> 
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev"> 
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span> 
                    <span className="visually-hidden">Previous</span> 
                    </button> 
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next"> 
                    <span className="carousel-control-next-icon" aria-hidden="true"></span> 
                    <span className="visually-hidden">Next</span> 
                    </button> 
                        </div> 
                    </div> 
 
                     
                     
        </section> 
         
         
        </> 
    ) 
}