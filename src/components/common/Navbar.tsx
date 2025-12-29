import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ComingSoonModal from './ComingSoonModal';
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleSignIn = () => {
    navigate('/auth');
    closeMenu();
  };

  const handleStartFree = () => {
    navigate('/auth/signup');
    closeMenu();
  };

  return (
    <>
      <header className="nav-wrapper">
        <nav className="navbar">
          <div className="logo">
            <div className="logo-glow-container">
              <img src={logo} alt="Vormirex Logo" className="logo-image" />
              <div className="logo-blur-bg"></div>
            </div>
            <span className="logo-text">VORMIREX</span>
          </div>

          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            {[
              { label: 'Features', href: '#features' },
              { label: 'Courses', href: '#', isComingSoon: true },
              { label: 'Pricing', href: '#pricing' },
              { label: 'About', href: '#', isComingSoon: true },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    if (link.isComingSoon) {
                      e.preventDefault();
                      setIsModalOpen(true);
                    }
                    closeMenu();
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}

            <li className="mobile-buttons">
              <button className="btn-signin" onClick={handleSignIn}>
                Sign In
              </button>
              <button className="btn-start" onClick={handleStartFree}>
                Start Free
              </button>
            </li>
          </ul>

          <div className="nav-right-group">
            <div className="nav-buttons">
              <button className="btn-signin" onClick={handleSignIn}>
                Sign In
              </button>
              <button className="btn-start" onClick={handleStartFree}>
                Start Free
              </button>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
              {isOpen ? (
                <X size={24} color="white" />
              ) : (
                <Menu size={24} color="white" />
              )}
            </div>
          </div>
        </nav>
      </header>

      <ComingSoonModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
