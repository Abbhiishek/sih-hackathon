import React, { useState, useEffect } from "react";

import Scholarship from './../Components/Layout/scholorship'


export default function App( ){
    const [country, setCountry]= useState([]);
    const [countryid, setCountryid]= useState('');
    const [stetes, setSat]= useState([]);

    var headers = new Headers();
    headers.append("X-CSCAPI-KEY", "API_KEY");

    var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
    };

    

    useEffect( ()=>{
        const getcountry= async ()=>{
            const req = fetch("https://api.countrystatecity.in/v1/countries", requestOptions);
          const getres= await req.json();
          console.log(getres);
          setCountry(await getres);
     
        }
        getcountry();
     
     
       },[]);
     
       const handlecountry=(event)=>{
         const getcoutryid= event.target.value;
         setCountryid(getcoutryid);
         event.preventDefault();
       }
     
       useEffect( ()=>{
     
         const getstate= async ()=>{
           const resstate= await fetch(` https://api.countrystatecity.in/v1/countries/${countryid}/states`);
           const getst= resstate.json();
           setSat(await getst);
     
         }
         getstate();
     
       },[countryid]);

    

    return(
        <>
        <div className="Scholarship--page">

            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="circle4"></div>


            <div className="hello container">


                <div className="landing--scholorship">
                    <div className="container scholorship" data-tilt="vanilla-tilt.js">
                        <h1>🎓Scholarship</h1>
                        <br />
                        <p className="code about-info-Scholorship">Finding a Scholarship where you can apply can be a tedious process.
                        But Don't worry! we got you covered.
                        Our website allows you to easily browse through Scholarships by category.We make it simple for you to search for Scholarships that you qualify for.
                        We do the work for you, All you need to do is register and complete your profile.</p>
                        <br />  
                    </div>
                </div>
            </div>
            

        </div>
        <div className="Scholarship--page">
            <div className="container pt-5">
            <form class="row gx-3 gy-2 align-items-center">
            <div class="col-sm-3">
                <label class="visually-hidden" for="specificSizeSelect">Preference</label>
                <select class="form-select" id="specificSizeSelect">
                <option selected>Select Country</option>
                {
                    country.map( (getcon)=>(
                        <option key={getcon.id} value={getcon.iso2 }> { getcon.name}</option>
                          ))
                }
                </select>
            </div>
            <div class="col-sm-3">
                <label class="visually-hidden" for="specificSizeSelect">Preference</label>
                <select class="form-select" id="specificSizeSelect">
                <option selected>Select State</option>
                {
                     stetes.map( (st,index)=>(                    
                   <option key={index}>{ st.name}</option>
                     ))
                     }
                </select>
            </div>
            <div class="col-sm-3">
                <label class="visually-hidden" for="specificSizeSelect">Preference</label>
                <select class="form-select" id="specificSizeSelect">
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </select>
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
            </form>
            </div>

        <Scholarship/>
        </div>
</>
    )
}