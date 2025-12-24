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
  showComingSoon: () => void; // Still kept for other items like New Chat, Settings, etc.
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
            <li onClick={() => navigate('/course/cyber-security')}>
              <FontAwesomeIcon icon={faCode} className="nav-icon" /> Cyber
              Security
            </li>
            <li onClick={() => navigate('/course/data-science')}>
              <FontAwesomeIcon icon={faDatabase} className="nav-icon" /> Data
              Science
            </li>
            <li onClick={() => navigate('/course/data-analytics')}>
              <FontAwesomeIcon icon={faChartLine} className="nav-icon" /> Data
              Analytics
            </li>
            <li onClick={showComingSoon}>
              <FontAwesomeIcon icon={faLightbulb} className="nav-icon" /> AI /
              ML
            </li>
          </ul>
        </div>

        {/* CUSTOM COURSES - NOW FULLY LINKED */}
        <div className="nav-section">
          <h3>CUSTOM COURSES</h3>
          <ul>
            <li onClick={() => navigate('/custom/booster-pack')}>
              <FontAwesomeIcon icon={faCubes} className="nav-icon" /> Booster
              Pack
            </li>
            <li onClick={() => navigate('/custom/coding-mastery')}>
              <FontAwesomeIcon icon={faLaptopCode} className="nav-icon" />{' '}
              Coding Mastery
            </li>
            <li onClick={() => navigate('/custom/exam-prep')}>
              <FontAwesomeIcon icon={faClipboardList} className="nav-icon" />{' '}
              Exam Prep
            </li>
            <li onClick={() => navigate('/custom/your-progress')}>
              <FontAwesomeIcon icon={faChartLine} className="nav-icon" /> Your
              Progress
            </li>
            <li onClick={() => navigate('/custom/saved-chats')}>
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
