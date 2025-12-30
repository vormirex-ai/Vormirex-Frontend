import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import ComingSoonModal from './ComingSoonModal';
import logo from '../../assets/logo.png';
import './Navbar.css';

interface NavbarProps {
  brandName?: string;
}

const Navbar: React.FC<NavbarProps> = ({ brandName = 'VORMIREX' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  }, [location.pathname]);

  const navItems = [
    { label: 'Home', path: '/landing' },
    { label: 'Courses', path: '/courses' },
    { label: 'Pricings', path: '/pricings' },
    { label: 'About', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="nav-wrapper">
        <nav className="navbar">
          {/* LOGO */}
          <div
            className="logo"
            onClick={() => navigate('/landing')}
            style={{ cursor: 'pointer' }}
          >
            <div className="logo-glow-container">
              <img src={logo} alt="Vormirex Logo" className="logo-image" />
              <div className="logo-blur-bg"></div>
            </div>
            <span className="logo-text">{brandName}</span>
          </div>

          {/* NAV LINKS */}
          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  onClick={closeMenu}
                  className={isActive(item.path) ? 'active-link' : ''}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* MOBILE BUTTONS */}
            <li className="mobile-buttons">
              <button onClick={() => navigate('/auth')} className="btn-signin">
                Sign In
              </button>
              <button
                onClick={() => navigate('/auth/signup')}
                className="btn-start"
              >
                Start Free
              </button>
            </li>
          </ul>

          {/* DESKTOP BUTTONS */}
          <div className="nav-right-group">
            <div className="nav-buttons">
              <button onClick={() => navigate('/auth')} className="btn-signin">
                Sign In
              </button>
              <button
                onClick={() => navigate('/auth/signup')}
                className="btn-start"
              >
                Start Free
              </button>
            </div>

            <div className="hamburger" onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
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
