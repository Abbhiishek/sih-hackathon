
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
    })






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
                    {
                        reviews && (reviews.map((review) =>
                        <TestimonialLayout key={review._id} reviews={review}/>
                        
                        ))
                    }
                    
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
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