import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  const navigate = useNavigate();

  const handleSignIn = () => navigate('/auth');
  const handleStartFree = () => navigate('/auth/signup');

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <Navbar onSignIn={handleSignIn} onStartFree={handleStartFree} />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
