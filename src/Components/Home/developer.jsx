import React, { useState, useEffect } from 'react';
import DeveloperLayout from '../../Components/Layout/developer'

import {DeveloperQuery} from '../../utils/data'
import {client} from '../../client'

export default function App() {
    const[developer , setDeveloper]= useState();

    useEffect(() => {
        const query =DeveloperQuery;
        client.fetch(query).then((data)=>
        setDeveloper(data));
    })

    return(
        <div id='developer'>
            <div className="container  py-5 px-4">
                <h1>Our Team</h1>
                <div className="row">
                    {developer && (
                        developer?.map((item) =>
                        <DeveloperLayout key={item._id} developer={item} />
                        
                    ))}
                        
                </div>    
            </div>
        </div>
    )
}