import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SidebarLeft.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faPlus,
  faCog,
  faUserCircle,
  faGlobe,
  faCode,
  faDatabase,
  faLightbulb,
  faChartLine,
  faCubes,
  faLaptopCode,
  faClipboardList,
  faBookmark,
} from '@fortawesome/free-solid-svg-icons';
import logoWithoutText from '../../assets/logo.png';

interface SidebarLeftProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  showComingSoon: () => void;
}

const SidebarLeft: React.FC<SidebarLeftProps> = ({
  isOpen,
  toggleSidebar,
  showComingSoon,
}) => {
  const navigate = useNavigate();

  return (
    <aside className={`sidebar-left ${isOpen ? 'sidebar-open' : ''}`}>
      {/* Close Sidebar Button */}
      <button
        className="sidebar-close-button close-left"
        onClick={toggleSidebar}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>

      {/* Logo Section */}
      <div className="sidebar-header">
        <img
          src={logoWithoutText}
          className="sidebar-logo-img"
          alt="Vormirex Logo"
        />
        <span className="sidebar-company-name">VORMIREX</span>
      </div>

      {/* Action Buttons */}
      <button className="new-chat-button" onClick={showComingSoon}>
        <FontAwesomeIcon icon={faPlus} /> New Chat
      </button>

      <button className="new-chat-button" onClick={() => navigate('/landing')}>
        <FontAwesomeIcon icon={faGlobe} /> VORMIREX
      </button>

      {/* Navigation Sections */}
      <nav className="main-nav">
        {/* SUBJECTS */}
        <div className="nav-section">
          <h3>SUBJECTS</h3>
          <ul>
            <li onClick={showComingSoon}>
              <FontAwesomeIcon icon={faCode} className="nav-icon" /> Cyber
              Security
            </li>
            <li onClick={showComingSoon}>
              <FontAwesomeIcon icon={faDatabase} className="nav-icon" /> Data
              Science
            </li>
            <li onClick={showComingSoon}>
              <FontAwesomeIcon icon={faLightbulb} className="nav-icon" /> AI /
              ML
            </li>
            <li onClick={showComingSoon}>
              <FontAwesomeIcon icon={faChartLine} className="nav-icon" /> Data
              Analytics
            </li>
          </ul>
        </div>

        {/* CUSTOM COURSES */}
        <div className="nav-section">
          <h3>CUSTOM COURSES</h3>
          <ul>
            <li onClick={showComingSoon}>
              <FontAwesomeIcon icon={faCubes} className="nav-icon" /> Booster
              Pack
            </li>
            <li onClick={showComingSoon}>
              <FontAwesomeIcon icon={faLaptopCode} className="nav-icon" />{' '}
              Coding Mastery
            </li>
            <li onClick={showComingSoon}>
              <FontAwesomeIcon icon={faClipboardList} className="nav-icon" />{' '}
              Exam Prep
            </li>
            <li onClick={showComingSoon}>
              <FontAwesomeIcon icon={faChartLine} className="nav-icon" /> Your
              Progress
            </li>
            <li onClick={showComingSoon}>
              <FontAwesomeIcon icon={faBookmark} className="nav-icon" /> Saved
              Chats
            </li>
          </ul>
        </div>
      </nav>

      {/* Footer Links */}
      <div className="sidebar-footer">
        <div className="footer-link" onClick={showComingSoon}>
          <FontAwesomeIcon icon={faCog} /> Settings
        </div>
        <div className="footer-link" onClick={showComingSoon}>
          <FontAwesomeIcon icon={faUserCircle} /> Profile
        </div>
      </div>
    </aside>
  );
};

export default SidebarLeft;
