import React from 'react'
import AboutVideo from'../../Videos/Romantic Mashup.mp4'

export default function App() {


    return(

        <div id="about">
            <div className="about-section container about">
           
                <div className="row">
                    <h1 className="mb-4">About Us <span className="celebration--icon">🎉</span> </h1>
                    <div className="col-lg-6">
                        <video  controls src={AboutVideo}   className="d-block w-100" alt="" />
                    </div>


                    
                    <div className="col-lg-6">
                        <p>we are representing  here to represent on the Behalf of 
                            <br />
                            <b><h3>Jis University </h3></b> <br /> 
                            we have deal with the 4+ <em>Problem Satements</em> 


                            <div className="problem-statements">
                                
                                <ul>
                                    <li>Scholorship</li>
                                    <li>Mass Email & SMS sending ...</li>
                                    <li>Resources</li>
                                    <li>Events</li>
                                    <li>Social Media ...</li>
                                </ul>    
                            </div>
                        </p>
                    </div>
                </div>
            </div>      
        </div>
    )
}