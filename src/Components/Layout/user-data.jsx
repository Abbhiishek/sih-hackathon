import React, { useState,  useEffect} from 'react'
import {userQuery} from '../../utils/data';
import { client } from '../../client';
import { useParams, useNavigate } from 'react-router-dom';
import {  GoogleLogout } from 'react-google-login';
import {  AiOutlineLogout } from 'react-icons/ai';


export default function App() {
    const { userId } = useParams();
    const [user, setuser] = useState();
    const navigate = useNavigate();
    const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
    
    useEffect(() => {
        const userquery = userQuery(userId);
        client.fetch(userquery).then((data) => {
          setuser(data[0]);
        });
    },[userId]);
    
    const logout = () => {
        localStorage.clear();
    
        navigate('/login');
      };
    

    return(
        <>
        <div className=" profile-page-about main">
        <div className="uppersection">
            <img className="background-picture img-thumbnail" src="https://source.unsplash.com/random/1200x200/?nature" alt=""/>
            <div className="profile--logout--btn">
                {userId === User.googleId && (
                    <GoogleLogout
                        clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
                        render={(renderProps) => (
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                            ><AiOutlineLogout color="black" fontSize={21} />
                                
                            </button>
                        )}
                        onLogoutSuccess={logout}
                        cookiePolicy="single_host_origin"
                    />
                )}
            </div>
        </div>
        <div className="profile">
            <img className="profilepic" src={user?.image} alt="logged-in-user-profile"/>
            <h2 className="username code">{user?.userName}</h2>
            <h6>Connect With Me : {user?.userEmail}</h6>
        </div>
    </div>
    
    </>
    )
}