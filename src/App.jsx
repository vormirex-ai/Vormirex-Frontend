import React, { useState } from "react";
import "./App.css";
import logoWithoutText from "./assets/logo.png"; // Make sure this path is correct
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  const handleFeatureClick = () => {
    setShowModal(true);
  };

  const handleInputSubmit = (e) => {
    if (e.key === "Enter") {
      setShowModal(true);
    }
  };

  return (
    <div className="dashboard-container">
      {/* LEFT SIDEBAR */}
      <aside className="sidebar-left">
        <div className="sidebar-header">
          <img
            src={logoWithoutText}
            className="sidebar-logo-img"
            alt="Vormirex Logo"
          />
          <span className="sidebar-company-name">VORMIREX</span>
        </div>

        <button className="new-chat-button" onClick={handleFeatureClick}>
          <FontAwesomeIcon icon={faPlus} /> New Chat
        </button>

        <nav className="main-nav">
          <div className="nav-section">
            <h3>SUBJECTS</h3>
            <ul>
              <li onClick={handleFeatureClick}>
                <FontAwesomeIcon icon={faCode} className="nav-icon" />
                Cyber Security
              </li>
              <li onClick={handleFeatureClick}>
                <FontAwesomeIcon icon={faDatabase} className="nav-icon" />
                Data Science
              </li>
              <li onClick={handleFeatureClick}>
                <FontAwesomeIcon icon={faLightbulb} className="nav-icon" />
                AI / ML
              </li>
              <li onClick={handleFeatureClick}>
                <FontAwesomeIcon icon={faChartLine} className="nav-icon" />
                Data Analytics
              </li>
            </ul>
          </div>

          <div className="nav-section">
            <h3>CUSTOM COURSES</h3>
            <ul>
              <li onClick={handleFeatureClick}>
                <FontAwesomeIcon icon={faCubes} className="nav-icon" /> Booster
                Pack
              </li>
              <li onClick={handleFeatureClick}>
                <FontAwesomeIcon icon={faLaptopCode} className="nav-icon" />{" "}
                Coding Mastery
              </li>
              <li onClick={handleFeatureClick}>
                <FontAwesomeIcon icon={faClipboardList} className="nav-icon" />{" "}
                Exam Prep
              </li>
              <li onClick={handleFeatureClick}>
                <FontAwesomeIcon icon={faChartLine} className="nav-icon" /> Your
                Progress
              </li>
              <li onClick={handleFeatureClick}>
                <FontAwesomeIcon icon={faBookmark} className="nav-icon" /> Saved
                Chats
              </li>
            </ul>
          </div>
        </nav>

        <div className="sidebar-footer">
          <div className="footer-link" onClick={handleFeatureClick}>
            <FontAwesomeIcon icon={faCog} className="nav-icon" /> Settings
          </div>
          <div className="footer-link" onClick={handleFeatureClick}>
            <FontAwesomeIcon icon={faUserCircle} className="nav-icon" /> Profile
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">
        <header className="top-bar">
          <div className="logo-mobile">VORMIREX</div>
          <div className="search-box">
            <FontAwesomeIcon icon={faSearch} />
            <input
              type="text"
              placeholder="Search Topics, Questions..."
              onKeyDown={handleInputSubmit}
            />
          </div>
          <div className="tools-button">
            Learning Tools <FontAwesomeIcon icon={faThumbtack} />
          </div>
        </header>

        <section className="ai-central-area">
          <div className="logo-with-text">
            <img src={logoWithoutText} className="logo-img" alt="Vormirex" />
            <h2 className="company-name">VORMIREX</h2>
          </div>

          <div className="quick-pill-actions">
            <button onClick={handleFeatureClick}>Explain My Homework</button>
            <button onClick={handleFeatureClick}>Teach Me Python Basics</button>
            <button onClick={handleFeatureClick}>Solve A Math Problem</button>
            <button onClick={handleFeatureClick}>Give Me A Quiz Test</button>
          </div>

          <div className="ask-box">
            <input
              type="text"
              placeholder="Ask Your Doubts..."
              onKeyDown={handleInputSubmit}
            />
            <div className="ask-box-icons">
              <FontAwesomeIcon icon={faPaperclip} />
              <FontAwesomeIcon icon={faMicrophone} />
            </div>
          </div>
        </section>

        <footer className="global-footer-note">
          VORMIREX can make mistakes. Verify important information.
        </footer>
      </main>

      {/* RIGHT SIDEBAR */}
      <aside className="sidebar-right">
        <h2>Learning Tools</h2>

        <div className="progress-card">
          <h3>TODAY'S PROGRESS</h3>
          <div className="progress-details">
            <div className="daily-goals">
              <span className="number">3/5</span>
              <p>Daily Goals</p>
            </div>
            <div className="day-streak">
              <span className="number">12</span>
              <p>Day Streak</p>
            </div>
          </div>
        </div>

        <div className="recent-questions">
          <h3>RECENT QUESTIONS</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCircleQuestion} /> Quadratic Equation
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleQuestion} /> Photosynthesis
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleQuestion} /> Python Loops
            </li>
          </ul>
        </div>

        <div className="qa-grid">
          <div className="qa-card" onClick={handleFeatureClick}>
            <FontAwesomeIcon icon={faBookOpen} className="qa-icon" />
            <h4>Summarize Topic</h4>
          </div>
          <div className="qa-card" onClick={handleFeatureClick}>
            <FontAwesomeIcon icon={faCircleQuestion} className="qa-icon" />
            <h4>Create Quiz</h4>
          </div>
          <div className="qa-card" onClick={handleFeatureClick}>
            <FontAwesomeIcon icon={faPaperclip} className="qa-icon" />
            <h4>Convert to Notes</h4>
          </div>
          <div className="qa-card" onClick={handleFeatureClick}>
            <FontAwesomeIcon icon={faCalculator} className="qa-icon" />
            <h4>Step-by-Step</h4>
          </div>
        </div>

        <div className="recommended-card">
          <h3>RECOMMENDED</h3>
          <div className="exam-prep-bundle">
            <h4>Exam Prep Bundle</h4>
            <p>Comprehensive Preparation For Upcoming Exams.</p>
            <button
              className="start-learning-button"
              onClick={handleFeatureClick}
            >
              Start Learning
            </button>
          </div>
        </div>
      </aside>

      {/* COMING SOON MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-[#1e1e1e] text-white p-16 rounded-2xl shadow-2xl border border-gray-700 relative w-full max-w-2xl text-center">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
            <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
            <p className="text-gray-300 text-base mb-8">
              We are working hard to bring this feature to you!
            </p>
            <div className="text-xs text-[#6aece1] font-semibold tracking-widest uppercase">
              By Vormirex
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
