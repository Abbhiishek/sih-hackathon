import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';



import Scholarship from './../Components/Layout/scholorship'
import { ScholorshipQuery , ScholorshipSearchQuery } from '../utils/data';
import { client } from '../client';
import { Navbar  } from '../Components/Dashboard'
// import Spinner from '../Components/Spinner';


export default function App( ){

    const [Scholarship_data, setScholarship] = useState();
    const [SearchName, setSearchName] = useState();
    const [SearchAmount, setSearchAmount] = useState();
    // const [Scholarship_data, setScholarship] = useState();
    // const [loading, setLoading] = useState(false);
    


    

    useEffect(() => {
        if (SearchName !== '') {
        //   setLoading(true);
          const query = ScholorshipSearchQuery(SearchName.toLowerCase());
          client.fetch(query).then((data) => {
            setScholarship(data);
            // setLoading(false);
          });
        } else {
            // setLoading(true);
    
            client.fetch(ScholorshipQuery).then((data) => {
            setScholarship(data);
            // setLoading(false);
          });
        }
      }, [SearchName ]);



    //   const ideaName = SearchName || 'Scholarship';
      

    
    return(
        <>
        <Navbar />
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
        <div className="scholarship--grid--layout">

            <div className="scholarship--form p-5">
                <label className="code">Name of the Scholarship</label>
                <br />
                <input type="text"
                className="form-control" 
                onChange={(e) => setSearchName(e.target.value)}
                placeholder="Search Scholarship"
                value={SearchName}
                />
                <br/>
                {/* <label for="customRange1" class="form-label">Amount Range</label>
                <br />
                <input type="range"
                className="form-range" 
                onChange={(e) => setSearchAmount(e.target.value)}
                placeholder="Amount Scholarship"
                value={SearchAmount} 
                /> */}

            </div>

            <div className="scholarship--response">
              {/* {loading && <Spinner message={`We are adding ${ideaName}  to your feed!`} />} */}

              {Scholarship_data?.map((Scholarship_data) => <Scholarship key={Scholarship_data._id} scholorship={Scholarship_data}/>)}
            </div>



        </div>
            
</>
    )
}