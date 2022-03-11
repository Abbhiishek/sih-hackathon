import React from 'react'

export default function Footer() {

    return (
        <div>
            <footer className="footer">
                <div className="footer-details">
                    <h3>Smart India Hackathon</h3>
                    <p>@2022 | JIS University</p> 

                    <div className="container">
                       <div className="row pt-4 pb-4 ps-4 pe-4">

                        <div className="col-md-6"> 
                            
                            <p>Submitted By : <br />
                            Jis University
                            
                            
                            </p>
                            
                            
                        </div>   
                        <div className="col-md-6">

                            <form action="#" method="post">
                            <h2>Contact Us</h2>
                            <br />
                            <input type="text" name="your name" id="usernam" placeholder='Enter your Name' required/>
                            <br />
                            <br />
                            <input type="email" name="your email" id="useremail" placeholder='Enter your email' required/>  
                            <br />  
                            <br />  
                            <input type="tel" name="your telephone" id="usertel" placeholder='Enter your TelePhone no.' required /> 
                            <br />
                            <br />
                            <br />
                            <input type="submit" value="Submit" className="btn btn-outline-success" />   
                                
                                
                            </form>
                            
                        </div>   
                           
                        </div> 
                    </div>
                    
                </div>
            </footer>
        </div>
    )

}
        
