// src/components/layout/AppLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar';

const AppLayout: React.FC = () => {
  const handleSignIn = () => {
    alert('Sign In clicked'); // Replace with real logic later
  };

  const handleStartFree = () => {
    alert('Start Free clicked');
  };

  return (
    <>
      <Navbar onSignIn={handleSignIn} onStartFree={handleStartFree} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
