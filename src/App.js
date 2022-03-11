import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

import { Login } from './Components';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import UserProfile from './pages/userprofile';
import PageNotFound from './pages/404NOTFOUND';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    if (!User) navigate('/login');
  }, [Home,Dashboard]);

  return (
    
    <Routes>
      <Route path="login" element={<Login/>} />
      <Route path="/" element={<Home/>} exact />
      <Route path="/dashboard/:userId" element={<Dashboard/>} />
      <Route path="/userprofile/:userId" element={<UserProfile/>} />
      <Route path="/userprofile/:userId" element={<UserProfile/>} />
      <Route path="/dashboard/:userId/userprofile/:userId" element={<UserProfile/>} />
      <Route path="/:userId" element={<PageNotFound/>} />
      
    </Routes>
    
  );
};

export default App;