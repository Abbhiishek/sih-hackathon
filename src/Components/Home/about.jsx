import React from 'react'
import AboutVideo from'../../Videos/overview video finished.mp4'

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
                        <p className="code">we are representing  here to represent on the Behalf of 
                            <br />
                            <b><h2>Jis University </h2></b> 
                            Problem Statement <br />

                            <em> <b>  Portal to know about various National and International scholarships </b></em> 

                            <div className="problem-statements">
                                
                                <p>
                                
                                Objective: : We need you to develop a portal where various National and International scholarships based on merit, study field, income etc. are shown up. This should be a real time data management which should be updated with the latest scholarships that are being offered.
                                </p>    
                            </div>
                        </p>
                    </div>
                </div>
            </div>      
        </div>
    )
}