import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../layout/Footer';

const PublicLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer /> {/* ✅ Footer added here */}
    </>
  );
};

export default PublicLayout;
