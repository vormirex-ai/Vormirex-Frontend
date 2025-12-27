import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/common/Navbar';

const Layout: React.FC = () => {
  const handleSignIn = () => {
    console.log('Sign In Clicked');
  };

  const handleStartFree = () => {
    console.log('Start Free Clicked');
  };

  return (
    <>
      <Navbar onSignIn={handleSignIn} onStartFree={handleStartFree} />
      <Outlet />
    </>
  );
};

export default Layout;
