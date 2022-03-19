import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Navbar , Feed } from '../Components/Dashboard'

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    if (!User) navigate('/login');
  }, []);

  return (
      <div>
          <Navbar/>
          <Feed/>
      </div>
    
  );
};
export default App;