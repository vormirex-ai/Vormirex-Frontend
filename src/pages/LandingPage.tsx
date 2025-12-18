import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChild,
  faBookOpen,
  faLaptopCode,
  faBars,
  faTimes,
  faLanguage,
  faBriefcase,
  faBolt,
  faStopwatch,
  faGlobe,
  faUserTie,
  faHeart,
  faRocket,
  faSmile,
  faStar,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const LandingPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const goToDashboard = () => navigate("/");

  return (
    <>
      {/* NAVBAR OUTSIDE ANY CONTAINER */}
      <header className="nav-wrapper">
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="Vormirex Logo" className="logo-image" />
            <span className="logo-text">VORMIREX</span>
          </div>

          {/* Added dynamic class 'active' based on state */}
          <ul className={isOpen ? "nav-links active" : "nav-links"}>
            <li>
              <a href="#" onClick={() => setIsOpen(false)}>
                Features
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsOpen(false)}>
                Courses
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsOpen(false)}>
                Pricing
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsOpen(false)}>
                About
              </a>
            </li>
          </ul>

          <div className="nav-buttons">
            <button className="btn-signin" onClick={goToDashboard}>
              Sign In
            </button>
            <button className="btn-start" onClick={goToDashboard}>
              Start Free
            </button>

            {/* The Hamburger Icon */}
            <div className="menu-icon" onClick={toggleMenu}>
              {isOpen ? (
                <FontAwesomeIcon icon={faTimes} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </div>
          </div>
        </nav>
      </header>
      {/* Hero Section */}
      <div className="hero">
        <div className="badge">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 2L10 6L14 6.5L11 9.5L11.5 14L8 12L4.5 14L5 9.5L2 6.5L6 6L8 2Z"
              fill="#06B6D4"
            />
          </svg>
          <span>AI-Powered Learning Platform</span>
        </div>
        <h1 className="hero-title">
          Learning That Feels
          <span className="gradient-text">
            Like
            <br />
            Playing
          </span>
        </h1>
        <p className="hero-subtitle">
          Your friendly AI teacher available 24/7 to turn studying into
          <br />
          an exciting adventure.
        </p>
        <div className="cta-buttons">
          <button className="btn-primary" onClick={goToDashboard}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 2L12 8L18 8.5L13 13L14 19L10 16L6 19L7 13L2 8.5L8 8L10 2Z"
                fill="white"
              />
            </svg>
            Start Free
          </button>
          <button className="btn-secondary">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M8 5L13 10L8 15V5Z" fill="white" />
            </svg>
            Try AI Demo
          </button>
        </div>
        {/* Stats */}
        <div className="stats">
          <div className="stat-item">
            <div className="stat-number">50K+</div>
            <div className="stat-label">Active Learners</div>
          </div>
          <div className="stat-item">
            <div className="stat-number purple">100+</div>
            <div className="stat-label">Courses</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4.9</div>
            <div className="stat-label">User Rating</div>
          </div>
        </div>
        {/* Chat Interface */}
        <div className="chat-container">
          <div className="chat-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect
                x="4"
                y="4"
                width="16"
                height="16"
                rx="2"
                stroke="#9333EA"
                strokeWidth="2"
              />
              <line
                x1="8"
                y1="10"
                x2="16"
                y2="10"
                stroke="#9333EA"
                strokeWidth="2"
              />
              <line
                x1="8"
                y1="14"
                x2="12"
                y2="14"
                stroke="#9333EA"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="chat-box">
            <div className="chat-header">
              <div className="chat-avatar">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="16" fill="#9333EA" />
                  <path
                    d="M12 14L16 10L20 14M12 18L16 22L20 18"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="chat-info">
                <div className="chat-name">
                  VORMI <span className="chat-status">● Online</span>
                </div>
                <div className="chat-message">
                  Hello! 👋 I'm Vormi, your personal AI learning companion. What
                  would you like to learn today? I can help you with math,
                  science, languages, coding, and so much more!
                </div>
              </div>
              <div className="status-badge">
                <span className="status-dot"></span>
                24/7 AI Active
              </div>
            </div>
            <div className="chat-tags">
              <span className="tag">Math Help</span>
              <span className="tag">Learn Python</span>
              <span className="tag">English Practice</span>
            </div>
          </div>
        </div>
        {/* Decorative Icons */}
        <div className="floating-icon icon-1">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="18" stroke="#06B6D4" strokeWidth="2" />
            <path d="M20 12v16M12 20h16" stroke="#06B6D4" strokeWidth="2" />
          </svg>
        </div>
        <div className="floating-icon icon-2">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path
              d="M20 8L24 16L32 17L26 23L27 32L20 28L13 32L14 23L8 17L16 16L20 8Z"
              fill="#9333EA"
            />
          </svg>
        </div>
      </div>

      {/* Sound Familiar */}
      <div className="vrx-hero-section">
        <div className="vrx-container">
          <h1 className="vrx-main-heading">
            Sound <span className="vrx-gradient-text">Familiar?</span>
          </h1>
          <p className="vrx-subtitle">
            We've all been there. Traditional learning just doesn't cut it
            anymore.
          </p>
          <div className="vrx-cards-grid">
            <div className="vrx-card">
              <div className="vrx-icon-wrapper">
                <svg
                  className="vrx-icon"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="9" y1="9" x2="15" y2="15"></line>
                  <line x1="15" y1="9" x2="9" y2="15"></line>
                </svg>
              </div>
              <h3 className="vrx-card-title">Boring Studies</h3>
              <p className="vrx-card-description">
                Traditional learning feels like a chore
              </p>
            </div>
            <div className="vrx-card">
              <div className="vrx-icon-wrapper">
                <svg
                  className="vrx-icon"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
              <h3 className="vrx-card-title">Confusing Content</h3>
              <p className="vrx-card-description">
                Hours wasted on random videos
              </p>
            </div>
            <div className="vrx-card">
              <div className="vrx-icon-wrapper">
                <svg
                  className="vrx-icon"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="vrx-card-title">No Personal Help</h3>
              <p className="vrx-card-description">
                Group classes leave you behind
              </p>
            </div>
            <div className="vrx-card">
              <div className="vrx-icon-wrapper">
                <svg
                  className="vrx-icon"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="vrx-card-title">Time Wasted</h3>
              <p className="vrx-card-description">
                Endless searching for answers
              </p>
            </div>
          </div>
          <div className="vrx-cta-wrapper">
            <button className="vrx-cta-button" onClick={goToDashboard}>
              <span className="vrx-cta-text">With Vormirex</span>
              <svg
                className="vrx-arrow-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
              <span className="vrx-cta-highlight">Learning becomes fun!</span>
            </button>
          </div>
        </div>
      </div>

      {/* Chat + What is Vormirex */}
      <div className="vrx-chat-container">
        <div className="vrx-chat-section">
          <div className="vrx-chat-window">
            <div className="vrx-chat-header">
              <div className="vrx-avatar"></div>
              <div className="vrx-header-info">
                <div className="vrx-chat-title">Chat with VORMI</div>
                <div className="vrx-status">
                  <span className="vrx-status-dot"></span>
                  <span className="vrx-status-text">Active now</span>
                </div>
              </div>
            </div>
            <div className="vrx-chat-messages">
              <div className="vrx-message vrx-user-message">
                Hey Vormi, I'm stuck on quadratic equations! 😕
              </div>
              <div className="vrx-message vrx-bot-message">
                No worries! Let's break it down step by step. Think of it like
                solving a puzzle! 🧩
              </div>
              <div className="vrx-message vrx-user-message-purple">
                That sounds easier! Can you show me?
              </div>
              <div className="vrx-message vrx-bot-message">
                Of course! Let's use a real-world example with throwing a ball.
                Ready? ⚾
              </div>
              <div className="vrx-typing-indicator">
                <span className="vrx-dot"></span>
                <span className="vrx-dot"></span>
                <span className="vrx-dot"></span>
                <span className="vrx-typing-text">Vormi is typing...</span>
              </div>
            </div>
          </div>
        </div>

        {/* WhatIsVormirex */}
        <div className="vrx-info-section">
          <h1 className="vrx-main-title">
            What is <span className="vrx-highlight">VORMIREX</span>?
          </h1>
          <p className="vrx-description">
            Vormirex is your personal AI-powered learning companion that makes
            studying feel like playing your favorite game. Our friendly AI
            tutor, Vormi, is available 24/7 to help you learn anything.
          </p>
          <div className="vrx-features">
            <div className="vrx-feature-item">
              <div className="vrx-feature-icon"></div>
              <div className="vrx-feature-text">
                Personalized learning paths tailored to your pace
              </div>
            </div>
            <div className="vrx-feature-item">
              <div className="vrx-feature-icon"></div>
              <div className="vrx-feature-text">
                Interactive conversations that make concepts stick
              </div>
            </div>
            <div className="vrx-feature-item">
              <div className="vrx-feature-icon"></div>
              <div className="vrx-feature-text">
                Gamified progress with rewards and achievements
              </div>
            </div>
            <div className="vrx-feature-item">
              <div className="vrx-feature-icon"></div>
              <div className="vrx-feature-text">
                Available anytime, anywhere - no scheduling needed
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Built for Everyone */}
      <div className="vrx-bfe-section">
        {/* Header */}
        <div className="vrx-bfe-header">
          <h1 className="vrx-bfe-title">
            Built for <span className="vrx-bfe-highlight">Everyone</span>
          </h1>
          <p className="vrx-bfe-subtitle">
            Whether you're 8 or 80, Vormirex adapts to your learning style
          </p>
        </div>

        {/* Cards */}
        <div className="vrx-bfe-cards">
          {/* 1. School Kids */}
          <div className="vrx-bfe-card">
            <div className="vrx-bfe-icon vrx-bfe-pink">
              <FontAwesomeIcon icon={faChild} size="lg" color="white" />
            </div>
            <h3 className="vrx-bfe-card-title">School Kids</h3>
            <p className="vrx-bfe-card-desc">Fun learning for young minds</p>
          </div>

          {/* 2. Exam Learners */}
          <div className="vrx-bfe-card">
            <div className="vrx-bfe-icon vrx-bfe-blue">
              <FontAwesomeIcon icon={faBookOpen} size="lg" color="white" />
            </div>
            <h3 className="vrx-bfe-card-title">Exam Learners</h3>
            <p className="vrx-bfe-card-desc">Ace your tests with strategy</p>
          </div>

          {/* 3. Coding Students */}
          <div className="vrx-bfe-card">
            <div className="vrx-bfe-icon vrx-bfe-green">
              <FontAwesomeIcon icon={faLaptopCode} size="lg" color="white" />
            </div>
            <h3 className="vrx-bfe-card-title">Coding Students</h3>
            <p className="vrx-bfe-card-desc">Master programming easily</p>
          </div>

          {/* 4. English Learners */}
          <div className="vrx-bfe-card">
            <div className="vrx-bfe-icon vrx-bfe-purple">
              <FontAwesomeIcon icon={faLanguage} size="lg" color="white" />
            </div>
            <h3 className="vrx-bfe-card-title">English Learners</h3>
            <p className="vrx-bfe-card-desc">Speak fluently with practice</p>
          </div>

          {/* 5. Job Seekers */}
          <div className="vrx-bfe-card">
            <div className="vrx-bfe-icon vrx-bfe-orange">
              <FontAwesomeIcon icon={faBriefcase} size="lg" color="white" />
            </div>
            <h3 className="vrx-bfe-card-title">Job Seekers</h3>
            <p className="vrx-bfe-card-desc">Upskill for career growth</p>
          </div>
        </div>
      </div>

      {/* Powerful Features */}
      <div className="vrx-features-section">
        <div className="vrx-features-container">
          <h1 className="vrx-features-heading">
            Powerful{" "}
            <span className="vrx-features-gradient-text">Features</span>
          </h1>
          <p className="vrx-features-subtitle">
            Everything you need for an amazing learning experience
          </p>
          <div className="vrx-features-grid">
            <div className="vrx-feature-card">
              <div className="vrx-feature-icon vrx-feature-purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="vrx-feature-title">24/7 AI Teacher</h3>
              <p className="vrx-feature-description">
                Your personal tutor never sleeps. Get instant help whenever you
                need it.
              </p>
            </div>
            <div className="vrx-feature-card">
              <div className="vrx-feature-icon vrx-feature-cyan">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="9"
                    cy="7"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M1 21V19C1 17.9 2.9 15 5 15H13C15.1 15 17 17.9 17 19V21"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="vrx-feature-title">Group Learning Rooms</h3>
              <p className="vrx-feature-description">
                Study with friends in virtual rooms. Collaborate and learn
                together.
              </p>
            </div>
            <div className="vrx-feature-card">
              <div className="vrx-feature-icon vrx-feature-pink">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="vrx-feature-title">Personalized Paths</h3>
              <p className="vrx-feature-description">
                AI creates custom learning journeys based on your goals and
                pace.
              </p>
            </div>
            <div className="vrx-feature-card">
              <div className="vrx-feature-icon vrx-feature-blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6.5 2H20V22H6.5C5.1 22 4 20.9 4 19.5V4.5C4 3.1 5.1 2 6.5 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="vrx-feature-title">All Subjects</h3>
              <p className="vrx-feature-description">
                From math to music, coding to cooking. One platform, endless
                possibilities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Unlock Your Potential */}
      <div className="uxc-container">
        <div className="uxc-header">
          <h1 className="uxc-title">
            Unlock Your <span className="uxc-gradient-text">Potential</span>
          </h1>
          <p className="uxc-subtitle">
            Explore our curated courses designed to transform your learning
            journey
          </p>
        </div>
        <div className="uxc-courses-grid">
          {/* 1 */}
          <div className="uxc-course-card">
            <div className="uxc-icon-wrapper uxc-blue-bg">
              <FontAwesomeIcon icon={faBolt} size="lg" color="white" />
            </div>
            <h3 className="uxc-course-title">Smart School Booster</h3>
            <p className="uxc-learners-count">12K+ learners</p>
          </div>

          {/* 2 */}
          <div className="uxc-course-card">
            <div className="uxc-icon-wrapper uxc-pink-bg">
              <FontAwesomeIcon icon={faStopwatch} size="lg" color="white" />
            </div>
            <h3 className="uxc-course-title">Exam Prep Kit</h3>
            <p className="uxc-learners-count">8K+ learners</p>
          </div>

          {/* 3 */}
          <div className="uxc-course-card">
            <div className="uxc-icon-wrapper uxc-green-bg">
              <FontAwesomeIcon icon={faLaptopCode} size="lg" color="white" />
            </div>
            <h3 className="uxc-course-title">Coding Master</h3>
            <p className="uxc-learners-count">15K+ learners</p>
          </div>

          {/* 4 */}
          <div className="uxc-course-card">
            <div className="uxc-icon-wrapper uxc-orange-bg">
              <FontAwesomeIcon icon={faGlobe} size="lg" color="white" />
            </div>
            <h3 className="uxc-course-title">English Fluency</h3>
            <p className="uxc-learners-count">20K+ learners</p>
          </div>

          {/* 5 */}
          <div className="uxc-course-card">
            <div className="uxc-icon-wrapper uxc-red-bg">
              <FontAwesomeIcon icon={faUserTie} size="lg" color="white" />
            </div>
            <h3 className="uxc-course-title">Digital Skills</h3>
            <p className="uxc-learners-count">6K+ learners</p>
          </div>

          {/* 6 */}
          <div className="uxc-course-card">
            <div className="uxc-icon-wrapper uxc-pink-red-bg">
              <FontAwesomeIcon icon={faHeart} size="lg" color="white" />
            </div>
            <h3 className="uxc-course-title">Life Skills</h3>
            <p className="uxc-learners-count">4K+ learners</p>
          </div>

          {/* 7 */}
          <div className="uxc-course-card">
            <div className="uxc-icon-wrapper uxc-purple-bg">
              <FontAwesomeIcon icon={faRocket} size="lg" color="white" />
            </div>
            <h3 className="uxc-course-title">Career Accelerator</h3>
            <p className="uxc-learners-count">9K+ learners</p>
          </div>

          {/* 8 */}
          <div className="uxc-course-card">
            <div className="uxc-icon-wrapper uxc-yellow-bg">
              <FontAwesomeIcon icon={faSmile} size="lg" color="white" />
            </div>
            <h3 className="uxc-course-title">Kids Bundle</h3>
            <p className="uxc-learners-count">7K+ learners</p>
          </div>

          {/* 9 */}
          <div className="uxc-course-card">
            <div className="uxc-icon-wrapper uxc-purple-light-bg">
              <FontAwesomeIcon icon={faStar} size="lg" color="white" />
            </div>
            <h3 className="uxc-course-title">AI Custom Path</h3>
            <p className="uxc-learners-count">5K+ learners</p>
          </div>

          {/* 10 */}
          <div className="uxc-course-card">
            <div className="uxc-icon-wrapper uxc-teal-bg">
              <FontAwesomeIcon icon={faUsers} size="lg" color="white" />
            </div>
            <h3 className="uxc-course-title">Study With Friends</h3>
            <p className="uxc-learners-count">11K+ learners</p>
          </div>
        </div>

        <div className="uxc-button-wrapper">
          <button className="uxc-explore-button">Explore All Courses →</button>
        </div>
      </div>

      {/* How It Works */}
      <div className="hiw-container">
        <div className="hiw-header">
          <h1 className="hiw-title">
            How It <span className="hiw-highlight">Works</span>
          </h1>
          <p className="hiw-subtitle">
            Start your learning journey in just a few simple steps
          </p>
        </div>
        <div className="hiw-steps">
          <div className="hiw-step-card">
            <div className="hiw-step-badge">1</div>
            <div className="hiw-step-icon">👤</div>
            <h3 className="hiw-step-title">Sign Up</h3>
            <p className="hiw-step-desc">Create your free account in seconds</p>
            <div className="hiw-arrow">→</div>
          </div>
          <div className="hiw-step-card">
            <div className="hiw-step-badge">2</div>
            <div className="hiw-step-icon">📚</div>
            <h3 className="hiw-step-title">Join Sessions</h3>
            <p className="hiw-step-desc">Attend live or recorded lessons</p>
            <div className="hiw-arrow">→</div>
          </div>
          <div className="hiw-step-card">
            <div className="hiw-step-badge">3</div>
            <div className="hiw-step-icon">🤖</div>
            <h3 className="hiw-step-title">Ask AI</h3>
            <p className="hiw-step-desc">Get instant answers from Vorms</p>
            <div className="hiw-arrow">→</div>
          </div>
          <div className="hiw-step-card">
            <div className="hiw-step-badge">4</div>
            <div className="hiw-step-icon">🎮</div>
            <h3 className="hiw-step-title">Play Quizzes</h3>
            <p className="hiw-step-desc">Test your knowledge with fun games</p>
            <div className="hiw-arrow">→</div>
          </div>
          <div className="hiw-step-card">
            <div className="hiw-step-badge">5</div>
            <div className="hiw-step-icon">📈</div>
            <h3 className="hiw-step-title">Track Progress</h3>
            <p className="hiw-step-desc">Watch yourself grow every day</p>
          </div>
        </div>
        <div className="hiw-progress">
          <div className="hiw-progress-label">Your Progress</div>
          <div className="hiw-progress-bar">
            <div className="hiw-progress-fill"></div>
          </div>
          <div className="hiw-progress-value">60%</div>
        </div>
      </div>

      {/* Stats & Trusted By */}
      <div className="vr-stats-wrapper">
        <div className="vr-stats-grid">
          <div className="vr-stat-card vr-card-cyan">
            <div className="vr-stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="9"
                  cy="7"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="vr-stat-number">50,000+</div>
            <div className="vr-stat-label">Active Learners</div>
          </div>
          <div className="vr-stat-card vr-card-purple">
            <div className="vr-stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2V3z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7V3z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="vr-stat-number">100+</div>
            <div className="vr-stat-label">Interactive Courses</div>
          </div>
          <div className="vr-stat-card vr-card-magenta">
            <div className="vr-stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="vr-stat-number">4.9/5</div>
            <div className="vr-stat-label">User Rating</div>
          </div>
          <div className="vr-stat-card vr-card-teal">
            <div className="vr-stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <polyline
                  points="12 6 12 12 16 14"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="vr-stat-number">24/7</div>
            <div className="vr-stat-label">AI Support</div>
          </div>
        </div>
        <div className="vr-trusted-section">
          <div className="vr-trusted-text">Trusted by learners from</div>
          <div className="vr-trusted-brands">
            <span>MIT</span>
            <span>Stanford</span>
            <span>Harvard</span>
            <span>Google</span>
            <span>Microsoft</span>
          </div>
        </div>
      </div>

      {/* Simple Pricing */}
      <div className="vr-pricing-container">
        <div className="vr-header">
          <h1 className="vr-title">
            Simple <span className="vr-highlight">Pricing</span>
          </h1>
          <p className="vr-subtitle">
            Choose the plan that fits your learning goals
          </p>
        </div>
        <div className="vr-pricing-cards">
          {/* Free Plan */}
          <div className="vr-card">
            <h3 className="vr-plan-name">Free</h3>
            <div className="vr-price-section">
              <span className="vr-price">$0</span>
              <span className="vr-period">/forever</span>
            </div>
            <p className="vr-plan-description">Perfect for trying out</p>
            <ul className="vr-features">
              <li className="vr-feature-item">
                <svg
                  className="vr-check-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>5 AI generations per day</span>
              </li>
              <li className="vr-feature-item">
                <svg
                  className="vr-check-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Access to 10 free courses</span>
              </li>
              <li className="vr-feature-item">
                <svg
                  className="vr-check-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Basic email support</span>
              </li>
              <li className="vr-feature-item">
                <svg
                  className="vr-check-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Community forum access</span>
              </li>
            </ul>
            <button className="vr-cta-button" onClick={goToDashboard}>
              Start Free
            </button>
          </div>

          {/* Pro Plan */}
          <div className="vr-card vr-card-pro">
            <div className="vr-popular-badge">Most Popular</div>
            <h3 className="vr-plan-name">Pro</h3>
            <div className="vr-price-section">
              <span className="vr-price">$12</span>
              <span className="vr-period">/month</span>
            </div>
            <p className="vr-plan-description">For serious learners</p>
            <ul className="vr-features">
              <li className="vr-feature-item">
                <svg
                  className="vr-check-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Unlimited AI generations</span>
              </li>
              <li className="vr-feature-item">
                <svg
                  className="vr-check-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Access to all 500+ courses</span>
              </li>
              <li className="vr-feature-item">
                <svg
                  className="vr-check-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Priority support</span>
              </li>
              <li className="vr-feature-item">
                <svg
                  className="vr-check-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Offline downloads</span>
              </li>
              <li className="vr-feature-item">
                <svg
                  className="vr-check-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Progress tracking</span>
              </li>
            </ul>
            <button className="vr-cta-button vr-cta-button-pro">
              Start Pro Trial
            </button>
          </div>

          {/* Team Plan */}
          <div className="vr-card">
            <h3 className="vr-plan-name">Team</h3>
            <div className="vr-price-section">
              <span className="vr-price">$29</span>
              <span className="vr-period">/month</span>
            </div>
            <p className="vr-plan-description">For schools & groups</p>
            <ul className="vr-features">
              <li className="vr-feature-item">
                <svg
                  className="vr-check-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Everything in Pro</span>
              </li>
              <li className="vr-feature-item">
                <svg
                  className="vr-check-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Up to 10 team members</span>
              </li>
              <li className="vr-feature-item">
                <svg
                  className="vr-check-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Admin dashboard</span>
              </li>
              <li className="vr-feature-item">
                <svg
                  className="vr-check-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Team analytics</span>
              </li>
              <li className="vr-feature-item">
                <svg
                  className="vr-check-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Custom learning tracks</span>
              </li>
              <li className="vr-feature-item">
                <svg
                  className="vr-check-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Dedicated support</span>
              </li>
            </ul>
            <button className="vr-cta-button">Contact Sales</button>
          </div>
        </div>
        <p className="vr-disclaimer">
          14-day money-back guarantee • No credit card required for free plan
        </p>
      </div>

      {/* Loved by Learners */}
      <div className="vx-testimonials-section">
        <div className="vx-container">
          <h1 className="vx-main-heading">
            Loved by <span className="vx-highlight">Learners</span>
          </h1>
          <p className="vx-subtitle">
            Join thousands of happy students transforming their learning
          </p>
          <div className="vx-testimonials-grid">
            <div className="vx-testimonial-card">
              <div className="vx-card-header">
                <span className="vx-emoji">🧑‍🎓</span>
                <div className="vx-stars">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="vx-quote">
                "Vomirex made learning math actually fun! The AI tutor explains
                things way better than my textbooks."
              </p>
              <p className="vx-name">Ana Chen</p>
              <p className="vx-role">High School Student</p>
            </div>
            <div className="vx-testimonial-card">
              <div className="vx-card-header">
                <div className="vx-stars">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="vx-quote">
                "I used Vomirex to learn Python and got my dream job within 4
                months. The personalized path was perfect."
              </p>
              <p className="vx-name">Marcus Johnson</p>
              <p className="vx-role">Software Developer</p>
            </div>
            <div className="vx-testimonial-card">
              <div className="vx-card-header">
                <span className="vx-emoji">👩‍💼</span>
                <div className="vx-stars">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="vx-quote">
                "My kids love the gamified learning! They actually ask to study
                now. Best investment in their education."
              </p>
              <p className="vx-name">Priya Sharma</p>
              <p className="vx-role">Parent</p>
            </div>
            <div className="vx-testimonial-card">
              <div className="vx-card-header">
                <div className="vx-stars">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="vx-quote">
                "The 24/7 AI support saved me during finals. I could ask
                questions at 2 AM and get instant help!"
              </p>
              <p className="vx-name">David Kim</p>
              <p className="vx-role">College Student</p>
            </div>
          </div>
          <div className="vx-rating-summary">
            <span className="vx-rating-stars">⭐⭐⭐⭐⭐</span>
            <span className="vx-rating-score">4.9/5</span>
            <span className="vx-rating-count">from 10,000+ reviews</span>
          </div>
        </div>
      </div>

      {/* Ready To Transform */}
      <div className="vx-hero-container">
        <div className="vx-hero-card">
          <div className="vx-badge">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 1L10.5 6L16 6.75L12 10.5L13 16L8 13.25L3 16L4 10.5L0 6.75L5.5 6L8 1Z"
                fill="currentColor"
              />
            </svg>
            Start Learning Today
          </div>
          <h1 className="vx-hero-title">
            Ready to Transform Your
            <br />
            <span className="vx-gradient-text">Learning?</span>
          </h1>
          <p className="vx-hero-subtitle">
            Join 50,000+ learners already using Vomirex to make studying fun and
            <br />
            effective. Your AI tutor is waiting!
          </p>
          <div className="vx-cta-buttons">
            <button className="vx-btn-primary" onClick={goToDashboard}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 1L10.5 6L16 6.75L12 10.5L13 16L8 13.25L3 16L4 10.5L0 6.75L5.5 6L8 1Z"
                  fill="currentColor"
                />
              </svg>
              Start Free Now
            </button>
            <button className="vx-btn-secondary">Watch Demo</button>
          </div>
          <div className="vx-download-buttons">
            <button className="vx-download-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M17.05 20.28C16.03 21.23 14.76 21.08 13.55 20.54C12.26 19.99 11.09 19.96 9.73 20.54C8.04 21.27 7.09 21.08 6.21 20.28C1.61 15.54 2.33 8.46 7.5 8.17C8.76 8.24 9.65 8.89 10.41 8.94C11.59 8.69 12.73 8.01 14 8.09C15.55 8.2 16.73 8.81 17.5 9.92C14.16 11.88 14.91 16.3 17.05 20.28ZM10.35 8.09C10.18 5.95 11.95 4.22 13.97 4C14.24 6.48 11.73 8.31 10.35 8.09Z"
                  fill="currentColor"
                />
              </svg>
              <div className="vx-download-text">
                <span className="vx-download-label">Download on the</span>
                <span className="vx-download-store">App Store</span>
              </div>
            </button>
            <button className="vx-download-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.5 12.92 20.16 13.19L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81ZM6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z"
                  fill="currentColor"
                />
              </svg>
              <div className="vx-download-text">
                <span className="vx-download-label">Get it on</span>
                <span className="vx-download-store">Google Play</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* footer */}
      <footer className="vr-footer-container">
        <div className="vr-footer-content">
          <div className="vr-footer-main">
            {/* Brand & Logo */}
            <div className="vr-footer-brand">
              <div className="vr-logo">
                <img src={logo} alt="VORMIREX Logo" className="vr-logo-img" />
                <span className="vr-logo-text">VORMIREX</span>
              </div>
              <p className="vr-tagline">
                Making learning feel like playing. Your AI-powered education
                companion.
              </p>
              <div className="vr-social-icons">
                <a href="#" className="vr-social-icon">
                  {/* Twitter icon */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a href="#" className="vr-social-icon">
                  {/* Instagram icon */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path
                      d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
                      fill="#0F1729"
                    />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="#0F1729" />
                  </svg>
                </a>
                <a href="#" className="vr-social-icon">
                  {/* YouTube icon */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
                    <polygon
                      points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
                      fill="#0F1729"
                    />
                  </svg>
                </a>
                <a href="#" className="vr-social-icon">
                  {/* LinkedIn icon */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
            {/* Footer Links */}
            <div className="vr-footer-links">
              <div className="vr-link-column">
                <h3>Product</h3>
                <ul>
                  <li>
                    <a href="#">Features</a>
                  </li>
                  <li>
                    <a href="#">Courses</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">AI Tutor</a>
                  </li>
                  <li>
                    <a href="#">Mobile App</a>
                  </li>
                </ul>
              </div>
              <div className="vr-link-column">
                <h3>Company</h3>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Press Kit</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="vr-link-column">
                <h3>Resources</h3>
                <ul>
                  <li>
                    <a href="#">Help Center</a>
                  </li>
                  <li>
                    <a href="#">Community</a>
                  </li>
                  <li>
                    <a href="#">Tutorials</a>
                  </li>
                  <li>
                    <a href="#">API Docs</a>
                  </li>
                  <li>
                    <a href="#">Status</a>
                  </li>
                </ul>
              </div>
              <div className="vr-link-column">
                <h3>Legal</h3>
                <ul>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Cookies</a>
                  </li>
                  <li>
                    <a href="#">Licenses</a>
                  </li>
                  <li>
                    <a href="#">Security</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="vr-footer-bottom">
            <p>© 2025 Vormirex. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
