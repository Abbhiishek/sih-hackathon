import React from 'react';
import {NavBar,About , Footer ,GiveReview,Techstack, Landingpage , Developer , Newsletter , Testimonial , AiChatBot , Overview} from '../Components/Home'



export default function App() {

    return(
        <div>
        <NavBar/>
        <Landingpage/>
        <About/>
        <Overview/>
        <Developer/>
        <Newsletter/>
        <Testimonial/>
        <Techstack/>
        <GiveReview/>
        <AiChatBot/>
        <Footer/>
        </div>
        
    )

}