import React, { useState } from 'react';
import './App.css';
import logoWithoutText from './assets/logo.png';
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
  faBars,
} from '@fortawesome/free-solid-svg-icons';

/* ---------------- MODAL ---------------- */
const ComingSoonModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="coming-soon-modal-overlay">
      <div className="coming-soon-modal-content">
        <button className="modal-close-button" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <div className="modal-body">
          <h2 className="modal-title">Feature Under Construction!</h2>
          <img src="https://via.placeholder.com/150" alt="Coming Soon" />
          <p className="modal-message">
            We are working hard to bring this exciting feature to you. Stay
            tuned for the launch! 🚀
          </p>
          <div className="modal-info">
            <FontAwesomeIcon icon={faLightbulb} /> Anticipated Release: Q2 2026
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- APP ---------------- */
export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  const showComingSoon = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleLeftSidebar = () => {
    setIsLeftSidebarOpen(!isLeftSidebarOpen);
    setIsRightSidebarOpen(false);
  };

  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen);
    setIsLeftSidebarOpen(false);
  };

  return (
    <div className="dashboard-container">
      <ComingSoonModal isOpen={isModalOpen} onClose={closeModal} />

      {/* LEFT SIDEBAR */}
      <aside
        className={`sidebar-left ${isLeftSidebarOpen ? 'sidebar-open' : ''}`}
      >
        <button
          className="sidebar-close-button close-left"
          onClick={toggleLeftSidebar}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

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
                <FontAwesomeIcon icon={faCode} /> Cyber Security
              </li>
              <li onClick={showComingSoon}>
                <FontAwesomeIcon icon={faDatabase} /> Data Science
              </li>
              <li onClick={showComingSoon}>
                <FontAwesomeIcon icon={faLightbulb} /> AI / ML
              </li>
              <li onClick={showComingSoon}>
                <FontAwesomeIcon icon={faChartLine} /> Data Analytics
              </li>
            </ul>
          </div>

          <div className="nav-section">
            <h3>CUSTOM COURSES</h3>
            <ul>
              <li onClick={showComingSoon}>
                <FontAwesomeIcon icon={faCubes} /> Booster Pack
              </li>
              <li onClick={showComingSoon}>
                <FontAwesomeIcon icon={faLaptopCode} /> Coding Mastery
              </li>
              <li onClick={showComingSoon}>
                <FontAwesomeIcon icon={faClipboardList} /> Exam Prep
              </li>
              <li onClick={showComingSoon}>
                <FontAwesomeIcon icon={faChartLine} /> Your Progress
              </li>
              <li onClick={showComingSoon}>
                <FontAwesomeIcon icon={faBookmark} /> Saved Chats
              </li>
            </ul>
          </div>
        </nav>

        <div className="sidebar-footer">
          <div className="footer-link" onClick={showComingSoon}>
            <FontAwesomeIcon icon={faCog} /> Settings
          </div>
          <div className="footer-link" onClick={showComingSoon}>
            <FontAwesomeIcon icon={faUserCircle} /> Profile
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">
        <header className="top-bar">
          <button className="mobile-menu-toggle" onClick={toggleLeftSidebar}>
            <FontAwesomeIcon icon={faBars} />
          </button>

          <div className="logo-mobile">VORMIREX</div>

          <div className="search-box">
            <FontAwesomeIcon icon={faSearch} />
            <input
              type="text"
              placeholder="Search Topics, Questions..."
              onKeyDown={(e) =>
                e.key === 'Enter' && (e.preventDefault(), showComingSoon())
              }
            />
          </div>

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
              onKeyDown={(e) =>
                e.key === 'Enter' && (e.preventDefault(), showComingSoon())
              }
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

      {/* RIGHT SIDEBAR */}
      <aside
        className={`sidebar-right ${isRightSidebarOpen ? 'sidebar-open' : ''}`}
      >
        <button
          className="sidebar-close-button close-right"
          onClick={toggleRightSidebar}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

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
                <FontAwesomeIcon icon={faFire} /> 12
              </span>
              <p>Coding Streak</p>
            </div>
          </div>
        </div>

        <div className="recent-questions">
          <h3>RECENT CHATS</h3>
          <ul>
            <li className="recent-item" onClick={showComingSoon}>
              <FontAwesomeIcon icon={faCircleQuestion} /> SQL Joins: LEFT vs
              INNER
            </li>
            <li className="recent-item" onClick={showComingSoon}>
              <FontAwesomeIcon icon={faCircleQuestion} /> Python Decorators
            </li>
            <li className="recent-item" onClick={showComingSoon}>
              <FontAwesomeIcon icon={faCircleQuestion} /> XSS (Cross-Site
              Scripting)
            </li>
          </ul>
        </div>

        <div className="qa-grid">
          <div className="qa-card" onClick={showComingSoon}>
            <FontAwesomeIcon icon={faBookOpen} />
            <h4>Summarize Tech Article</h4>
          </div>
          <div className="qa-card" onClick={showComingSoon}>
            <FontAwesomeIcon icon={faCircleQuestion} />
            <h4>Generate Coding Challenge</h4>
          </div>
          <div className="qa-card" onClick={showComingSoon}>
            <FontAwesomeIcon icon={faPaperclip} />
            <h4>Convert Code to Docs</h4>
          </div>
          <div className="qa-card" onClick={showComingSoon}>
            <FontAwesomeIcon icon={faCalculator} />
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
