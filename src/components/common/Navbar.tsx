import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png';
import './Navbar.css';

interface NavbarProps {
  brandName?: string;
  onSignIn: () => void;
  onStartFree: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  brandName = 'VORMIREX',
  onSignIn,
  onStartFree,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="nav-wrapper">
      <nav className="navbar">
        {/* Left: Logo Section */}
        <div className="logo">
          <div className="logo-glow-container">
            <img src={logo} alt="Vormirex Logo" className="logo-image" />
            <div className="logo-blur-bg"></div>
          </div>
          <span className="logo-text">{brandName}</span>
        </div>

        {/* Center: Desktop Nav Links / Mobile Drawer */}
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <a href="#features" onClick={closeMenu}>
              Features
            </a>
          </li>
          <li>
            <a href="#courses" onClick={closeMenu}>
              Courses
            </a>
          </li>
          <li>
            <a href="#pricing" onClick={closeMenu}>
              Pricing
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>

          {/* Mobile-only Buttons */}
          <li className="mobile-buttons">
            <button
              className="btn-signin"
              onClick={() => {
                onSignIn();
                closeMenu();
              }}
            >
              Sign In
            </button>
            <button
              className="btn-start"
              onClick={() => {
                onStartFree();
                closeMenu();
              }}
            >
              Start Free
            </button>
          </li>
        </ul>

        {/* Right: Desktop Buttons & Hamburger */}
        <div className="nav-right-group">
          <div className="nav-buttons">
            <button className="btn-signin" onClick={onSignIn}>
              Sign In
            </button>
            <button className="btn-start" onClick={onStartFree}>
              Start Free
            </button>
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            {isOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
