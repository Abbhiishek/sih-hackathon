import React from 'react'
import { client , urlFor} from '../../client';



export default function App({scholorship}) {

    



    const { name, image, about  , eligibility , amount} = scholorship;
    return(

        <>
       
        <div className="Scholarship--layout container mt-3">
            <div className="container">
                <div className="row mt-2">
                    <div className="col-md-4 scholorship--image">
                            {image && (
                        <img className="rounded-lg" src={(urlFor(image).width(250).url())} alt="user-post" /> )}
                    </div>
                    <div className="col-md-8">
                        <h5 className="text-start mt-3 text-decoration-underline">
                            <a href={scholorship?.link}>
                                {scholorship?.name}
                            </a>
                            <br />
                            <br />
                        </h5>

                        <p className="text-start">
                            Eligibility <br />
                            {scholorship?.eligibility?.slice(0,100)}....
                            
                        </p>

                        <p className="text-start">
                            About <br />
                            {scholorship?.about?.slice(0,100)}...

                        </p>
                        <p className="text-start">
                            Amount <br />
                            {scholorship?.amount?.slice(0,100)}....
                        </p>

                    </div>

                </div>
            </div>
        </div>
    </>
    )
}