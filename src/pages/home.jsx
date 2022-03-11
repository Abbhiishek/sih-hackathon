import React from 'react';
import {NavBar,About , Footer , Landingpage , Developer , Newsletter , Testimonial , AiChatBot , Overview} from '../Components/Home'



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
        <AiChatBot/>
        <Footer/>
        </div>
        
    )

}