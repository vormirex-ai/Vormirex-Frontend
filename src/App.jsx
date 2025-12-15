import React, { useState } from 'react';
import './App.css';
import logoWithoutText from './assets/logo.png'; // Ensure this path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faCode,
  faCubes,
  faLightbulb,
  faChartLine,
  faLaptopCode,
  faClipboardList,
  faBookmark,
  faCog,
  faUserCircle,
  faSearch,
  faThumbtack,
  faCircleQuestion,
  faPaperclip,
  faMicrophone,
  faBookOpen,
  faCalculator,
  faDatabase,
  faFire,
  faGraduationCap,
  faTimes,
  faBars, // <-- Added for mobile menu button
} from '@fortawesome/free-solid-svg-icons';

const ComingSoonModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const imageTag = '';

  return (
    <div className="coming-soon-modal-overlay">
      <div className="coming-soon-modal-content">
        <button className="modal-close-button" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="modal-body">
          <h2 className="modal-title">Feature Under Construction!</h2>
          {imageTag}
          <p className="modal-message">
            We are working hard to bring this exciting feature to you. **Stay
            tuned for the launch! 🚀**
          </p>
          <div className="modal-info">
            <FontAwesomeIcon icon={faLightbulb} /> Anticipated Release: Q2 2026
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false); // <-- New state
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false); // <-- New state

  const showComingSoon = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // New toggle functions
  const toggleLeftSidebar = () => {
    setIsLeftSidebarOpen(!isLeftSidebarOpen);
    setIsRightSidebarOpen(false); // Close the other one
  };

  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen);
    setIsLeftSidebarOpen(false); // Close the other one
  };

  return (
    <div className="dashboard-container">
      {/* Modal */}
      <ComingSoonModal isOpen={isModalOpen} onClose={closeModal} />

      {/* LEFT SIDEBAR - Added conditional class */}
      <aside
        className={`sidebar-left ${isLeftSidebarOpen ? 'sidebar-open' : ''}`}
      >
        <div className="sidebar-header">
          <img
            src={logoWithoutText}
            className="sidebar-logo-img"
            alt="Vormirex Logo"
          />
          <span className="sidebar-company-name">VORMIREX</span>
        </div>

        <button className="new-chat-button" onClick={showComingSoon}>
          <FontAwesomeIcon icon={faPlus} /> New Chat
        </button>

        <nav className="main-nav">
          <div className="nav-section">
            <h3>SUBJECTS</h3>
            <ul>
              <li onClick={showComingSoon}>
                <FontAwesomeIcon icon={faCode} className="nav-icon" />
                Cyber Security
              </li>
              <li onClick={showComingSoon}>
                <FontAwesomeIcon icon={faDatabase} className="nav-icon" />
                Data Science
              </li>
              <li onClick={showComingSoon}>
                <FontAwesomeIcon icon={faLightbulb} className="nav-icon" />
                AI / ML
              </li>
              <li onClick={showComingSoon}>
                <FontAwesomeIcon icon={faChartLine} className="nav-icon" />
                Data Analytics
              </li>
            </ul>
          </div>

          <div className="nav-section">
            <h3>CUSTOM COURSES</h3>
            <ul>
              <li onClick={showComingSoon}>
                <FontAwesomeIcon icon={faCubes} className="nav-icon" />
                Booster Pack
              </li>
              <li onClick={showComingSoon}>
                <FontAwesomeIcon icon={faLaptopCode} className="nav-icon" />
                Coding Mastery
              </li>
              <li onClick={showComingSoon}>
                <FontAwesomeIcon icon={faClipboardList} className="nav-icon" />
                Exam Prep
              </li>
              <li onClick={showComingSoon}>
                <FontAwesomeIcon icon={faChartLine} className="nav-icon" />
                Your Progress
              </li>
              <li onClick={showComingSoon}>
                <FontAwesomeIcon icon={faBookmark} className="nav-icon" />
                Saved Chats
              </li>
            </ul>
          </div>
        </nav>

        <div className="sidebar-footer">
          <div className="footer-link" onClick={showComingSoon}>
            <FontAwesomeIcon icon={faCog} className="nav-icon" /> Settings
          </div>
          <div className="footer-link" onClick={showComingSoon}>
            <FontAwesomeIcon icon={faUserCircle} className="nav-icon" /> Profile
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">
        <header className="top-bar">
          {/* NEW: Mobile Menu Button */}
          <button className="mobile-menu-toggle" onClick={toggleLeftSidebar}>
            <FontAwesomeIcon icon={faBars} />
          </button>

          <div className="logo-mobile">VORMIREX</div>

          <div className="search-box">
            <FontAwesomeIcon icon={faSearch} />
            <input
              type="text"
              placeholder="Search Topics, Questions..."
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  showComingSoon();
                }
              }}
            />
          </div>
          {/* Updated the Tools button to toggle the right sidebar */}
          <div className="tools-button" onClick={toggleRightSidebar}>
            Learning Tools <FontAwesomeIcon icon={faThumbtack} />
          </div>
        </header>

        <section className="ai-central-area">
          <div className="logo-with-text">
            <img src={logoWithoutText} className="logo-img" alt="Vormirex" />
            <h2 className="company-name">VORMIREX</h2>
          </div>

          <div className="quick-pill-actions">
            <button onClick={showComingSoon}>Explain My Homework</button>
            <button onClick={showComingSoon}>Teach Me Python Basics</button>
            <button onClick={showComingSoon}>Solve A Math Problem</button>
            <button onClick={showComingSoon}>Give Me A Quiz Test</button>
          </div>

          <div className="ask-box">
            <input
              type="text"
              placeholder="Ask Your Doubts..."
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault(); // Prevents any default behavior like form submit
                  showComingSoon();
                }
              }}
            />
            <div className="ask-box-icons">
              <FontAwesomeIcon icon={faPaperclip} onClick={showComingSoon} />
              <FontAwesomeIcon icon={faMicrophone} onClick={showComingSoon} />
            </div>
          </div>
        </section>

        <footer className="global-footer-note">
          VORMIREX can make mistakes. Verify important information.
        </footer>
      </main>

      {/* RIGHT SIDEBAR - Added conditional class */}
      <aside
        className={`sidebar-right ${isRightSidebarOpen ? 'sidebar-open' : ''}`}
      >
        <h2>Learning Tools</h2>

        <div className="progress-card" onClick={showComingSoon}>
          <h3>TODAY'S PROGRESS</h3>
          <div className="progress-details">
            <div className="daily-goals">
              <span className="number tech-progress">45/60</span>
              <p>Skill Points</p>
            </div>
            <div className="day-streak">
              <span className="number tech-streak">
                <FontAwesomeIcon icon={faFire} className="streak-fire-icon" />{' '}
                12
              </span>
              <p>Coding Streak</p>
            </div>
          </div>
        </div>

        <div className="recent-questions">
          <h3>RECENT CHATS</h3>
          <ul>
            <li className="recent-item" onClick={showComingSoon}>
              <FontAwesomeIcon icon={faCircleQuestion} /> SQL Joins: LEFT vs.
              INNER
            </li>
            <li className="recent-item" onClick={showComingSoon}>
              <FontAwesomeIcon icon={faCircleQuestion} /> Python Decorators
            </li>
            <li className="recent-item" onClick={showComingSoon}>
              <FontAwesomeIcon icon={faCircleQuestion} /> Cross-Site Scripting
              (XSS)
            </li>
          </ul>
        </div>

        <div className="qa-grid">
          <div className="qa-card" onClick={showComingSoon}>
            <FontAwesomeIcon icon={faBookOpen} className="qa-icon" />
            <h4>Summarize Tech Article</h4>
          </div>
          <div className="qa-card" onClick={showComingSoon}>
            <FontAwesomeIcon icon={faCircleQuestion} className="qa-icon" />
            <h4>Generate Coding Challenge</h4>
          </div>
          <div className="qa-card" onClick={showComingSoon}>
            <FontAwesomeIcon icon={faPaperclip} className="qa-icon" />
            <h4>Convert Code to Docs</h4>
          </div>
          <div className="qa-card" onClick={showComingSoon}>
            <FontAwesomeIcon icon={faCalculator} className="qa-icon" />
            <h4>Debug Step-by-Step</h4>
          </div>
        </div>

        <div className="recommended-card">
          <h3>
            <FontAwesomeIcon icon={faGraduationCap} /> RECOMMENDED
          </h3>
          <div className="exam-prep-bundle">
            <h4>Certification Prep Bundle</h4>
            <p>
              Master CompTIA Security+ and AWS Certified Cloud Practitioner.
            </p>
            <button
              className="start-learning-button primary-button"
              onClick={showComingSoon}
            >
              Start Learning
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
