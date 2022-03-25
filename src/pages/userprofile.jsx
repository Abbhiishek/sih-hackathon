import React  , { useEffect , useState } from 'react';
import { useNavigate , useParams } from 'react-router-dom'
import {NavBar} from '../Components/UserProfile'
import Spinner from '../Components/Spinner';
import { client} from '../client'
import {userCreatedPostQuery , userLikedPostQuery , userQuery} from '../utils/data'
import{UserProfile , PostLayout} from '../Components/Layout'

const activeBtnStyles = 'btn btn-warning m-2';
const notActiveBtnStyles = ' btn btn-dark m-2';

export default function App() {

    const navigate = useNavigate();
    const [user, setUser] = useState();
    const [text, setText] = useState('Created');
    const [activeBtn, setActiveBtn] = useState('created');
    const [pins, setPins] = useState();
    const { userId} = useParams();
    

    

    useEffect(() => {
        const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
    
        if (!User) navigate('/login');
      }, [navigate]);

    useEffect(() => {
        const query = userQuery(userId);
        client.fetch(query).then((data) => {
          setUser(data[0]);
        });
      }, [userId]);

    
    

    useEffect(() => {
        if (text === 'Created') {
          const createdPostQuery = userCreatedPostQuery(userId);
    
          client.fetch(createdPostQuery).then((data) => {
            setPins(data);
          });
        } else {
          const likedPostQuery = userLikedPostQuery(userId);
    
          client.fetch(likedPostQuery).then((data) => {
            setPins(data);
          });
        }
      }, [text, userId]);

    if (!user) return <Spinner message="Loading profile" />;

  

return(
    <>
    <NavBar/>
    <UserProfile />
    <div className="container mt-5 mb-5">
          <button
            type="button"
            onClick={(e) => {
              setText(e.target.textContent);
              setActiveBtn('created');
            }}
            className={`${activeBtn === 'created' ? activeBtnStyles : notActiveBtnStyles}`}
          >
            Created
          </button>
          <button
            type="button"
            onClick={(e) => {
              setText(e.target.textContent);
              setActiveBtn('liked');
            }}
            className={`${activeBtn === 'liked' ? activeBtnStyles : notActiveBtnStyles}`}
          >
            Liked
          </button>
    </div>
    <div className="container">

            <div className="px-2">
                    {pins?.map((pin) => <PostLayout key={pin._id} post={pin} className="Post--user--profile" />)}
                    
                    
            </div>

    {pins?.length === 0 && (
        <div className="container justify-center mt-2">
          No Post Found  <span className="celebration--icon"> 😐</span>!
          
        </div>
        ) }
        

 </div>
    </>
)


}