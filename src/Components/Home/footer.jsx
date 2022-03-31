import React from 'react'

export default function Footer() {


    return (
        <>
        
        <div className="footer--section mt-5 " id="footer">
            <footer>
                <div className="wave">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave3"></div>
                    <div className="wave" id="wave4"></div>
                </div>
                <ul className="footer-items">
                   
                    <li  className= "jis--University--footer-item"> @2022 | JIS University </li>
                    <li className="cfc--footer-item"> Code For Community | all rights reserved </li>
                    <li className="cfc--footer-item code"> 
                    <a
                    className="code text-light" 
                            href="https://codeforcommunity.codes">
                        codeforcommunity.codes
                        </a> 
                    </li>
                </ul>
            </footer>
        </div>
        </>
    )

}
        
