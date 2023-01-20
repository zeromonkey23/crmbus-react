import React, { useEffect } from 'react';
import { Outlet, redirect, useNavigate } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Sidenav from './components/Sidenav/Sidenav';
import Toolbar from './components/Toolbar/Toolbar';
import { getToken } from './helpers/AuthFunction';

import './App.css';

function App() {
  const navigate = useNavigate();
  const loader = async () => {
    const user = getToken();

    if (!user) {
      localStorage.clear();
      return navigate('/SSO');
    }
  };

  useEffect(() => {
    loader();
  }, []);

  return (
    <>
      <div className='flex'>
        <div className='bg-white w-72 shadow-md border-r-2'>
          <Sidenav />
        </div>
        <div className='bg-gray-100 w-full min-h-screen flex-col'>
          <Toolbar />
          <div className='p-3 mt-2'>
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
