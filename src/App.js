import React, { useEffect ,useState } from 'react';
import { Routes, Route, useNavigate  } from 'react-router-dom';

import { Login } from './Components';
import Home from './pages/home';
import CreatePost from './pages/CreatePost';
import Dashboard from './pages/dashboard';
import UserProfile from './pages/userprofile';
import Scholorship from './pages/Scholorship';
import PageNotFound from './pages/404NOTFOUND';
import {client} from './client'
import {userQuery} from './utils/data'

const App = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const userInfo = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

  useEffect(() => {
    const query = userQuery(userInfo?.googleId);

    

    client.fetch(query).then((data) => {
    setUser(data[0]);
    });
}, []);



  useEffect(() => {
    const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    if (!User) navigate('/');
  }, []);

  return (
    
    <Routes>
      <Route path="login" element={<Login/>} />
      <Route path="/*" element={<Home/>} exact />
      <Route path="/dashboard/:userId/home" element={<Home/>} exact />
      <Route path="/dashboard/:userId" element={<Dashboard/>} />
      <Route path="/userprofile/:userId" element={<UserProfile/>} />
      <Route path="/scholorship" element={<Scholorship/>} />
      <Route  path="/Create_post" element={<CreatePost user={user && user}/>} />
      <Route path="/:userId" element={<PageNotFound/>} />
    </Routes>
    
  );
};

export default App;