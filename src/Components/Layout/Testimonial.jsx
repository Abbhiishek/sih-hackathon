import React from 'react'
import { urlFor } from '../../client';



export default function App({reviews}) {


    const { name , image ,  about , review} = reviews;


    return(
        <>
            
            
        <div class="carousel-item  testimonial--layout  active">
                   <h2>{review}</h2>
                        <img className="testimonial-image" src={(urlFor(image).width(250).url())} alt="Testimonial-profile"/>
                        <em>{name} , {about}</em>  
        </div>

        
        <div class="carousel-item  testimonial--layout">
                        <h2>We at Smart India Hacathon , We build Stuffs and make them scale by Time.</h2>
                        <img class="testimonial-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIcHjFYVUpl-TZrXGvW48gwJXnLyS2Hrr8sQ&usqp=CAU" alt="Testimonial-profile"/>
                        <p>Abhishek Kushwaha , CodeForCommunity</p>
        </div>
        <div class="carousel-item  testimonial--layout">
                        <h2>We at Smart India Hacathon , We build Stuffs and make them scale by Time.</h2>
                        <img class="testimonial-image" src="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture-For-Youtube.jpg" alt="Testimonial-profile"/>
                        <em>amandeep , AICTE</em>
        </div>
        <div class="carousel-item  testimonial--layout">
                        <h2>Mast Banaya hain bhai </h2>
                        <img class="testimonial-image" src="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture-For-Youtube.jpg" alt="Testimonial-profile"/>
                        <em>hola , AICTE</em>
        </div>
        </>


    )
}