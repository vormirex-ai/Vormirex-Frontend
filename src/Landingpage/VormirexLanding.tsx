import React, { useState, useEffect } from 'react';
import { Sparkles, Play, Circle, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

interface LandingPageProps {
  brandName?: string;
  heroSubtitle?: string;
}

const VormirexLanding: React.FC<LandingPageProps> = ({
  brandName = 'VORMIREX',
  heroSubtitle = 'Your friendly AI teacher available 24/7 to turn studying into an exciting adventure.',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const goToDashboard = () => {
    console.log('Navigating...');
    closeMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container">
      {/* Watermark Logo - Fixed Position */}
      <div className={`watermark-logo ${scrolled ? 'visible' : ''}`}>
        <img src={logo} alt="Vormirex Watermark" />
      </div>

      {/* Navigation Wrapper */}
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
              <button className="btn-signin" onClick={goToDashboard}>
                Sign In
              </button>
              <button className="btn-start" onClick={goToDashboard}>
                Start Free
              </button>
            </li>
          </ul>

          {/* Right: Desktop Buttons & Hamburger */}
          <div className="nav-right-group">
            <div className="nav-buttons">
              <button className="btn-signin" onClick={goToDashboard}>
                Sign In
              </button>
              <button className="btn-start" onClick={goToDashboard}>
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

      {/* Hero Section */}
      <main className="hero">
        <div className="glow-bg"></div>
        <div className="badge">
          <Sparkles size={14} className="cyan-text" />
          <span>AI-Powered Learning Platform</span>
        </div>{' '}
        <h1 className="hero-title">
          Learning That Feels <span className="cyan-text">Like Playing</span>
        </h1>
        <p className="hero-subtitle">{heroSubtitle}</p>
        {/* Buttons using the new color */}
        <div className="cta-group">
          <button className="btn-primary-hero large">
            <Sparkles size={18} />
            Start Free
          </button>
          <button className="btn-secondary large">
            <Play size={18} fill="currentColor" />
            Try AI Demo
          </button>
        </div>
        {/* Stats */}
        <div className="stats-container">
          <div className="stat-item">
            <h3>50K+</h3>
            <p>Active Learners</p>
          </div>
          <div className="stat-item">
            <h3>100+</h3>
            <p>Courses</p>
          </div>
          <div className="stat-item">
            <h3>4.9</h3>
            <p>User Rating</p>
          </div>
        </div>
        {/* AI Chat Card */}
        <div className="ai-card-wrapper">
          <div className="status-indicator">
            <Circle size={8} fill="#6aece1" color="#6aece1" />
            <span>24/7 AI Active</span>
          </div>
          <div className="ai-card">
            <div className="ai-card-header">
              <div className="ai-avatar">
                <Sparkles size={20} color="#000" />
              </div>
              <div className="ai-info">
                <span className="ai-name">VORMII</span>
                <span className="ai-tag">AI Tutor</span>
              </div>
            </div>
            <p className="ai-message">
              Hello! 👋 I'm Vormi, your personal AI learning companion. What
              would you like to learn today?
            </p>
            <div className="ai-suggestions">
              <button className="suggestion-chip">Math Help</button>
              <button className="suggestion-chip">Learn Python</button>
              <button className="suggestion-chip">English Practice</button>
            </div>
          </div>
        </div>
      </main>

      <style>{`
        /* RESET & BASE */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .container {
          min-height: 100vh;
          background-color: #0a0b14; /* Reverted to Dark Background */
          color: #ffffff;
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          overflow-y: auto;
        }

        /* WATERMARK LOGO */
/* WATERMARK LOGO */
.watermark-logo {
  position: fixed;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  height: 420px;
  opacity: 0;
  z-index: 0;
  pointer-events: none;
  transition: opacity 0.6s ease;
}

.watermark-logo.visible {
  opacity: 0.02; /* VERY SUBTLE */
}

.watermark-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: blur(1.2px);
}
@media (max-width: 768px) {
  .watermark-logo {
    width: 260px;
    height: 260px;
  }
}

        /* NAVBAR STYLING */
        .nav-wrapper {
          width: 100%;
          position: sticky;
          top: 0;
          z-index: 1000;
          padding-top: 12px;
          padding-bottom: 12px;
          background: linear-gradient(to bottom, rgba(10, 11, 20, 0.9), rgba(10, 11, 20, 0.8));
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .navbar {
          width: 100%;
          padding: 10px 26px;
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          position: relative;
          z-index: 10;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative;
          z-index: 2;
        }

        .logo-image {
          width: 35px;
          height: 35px;
          object-fit: contain;
          position: relative;
          z-index: 2;
        }

        .logo-glow-container {
          position: relative;
          display: flex;
          align-items: center;
        }

        .logo-blur-bg {
          position: absolute;
          width: 40px;
          height: 40px;
          /* Logo glow matches the new color */
          background: radial-gradient(circle, rgba(106, 236, 225, 0.4) 0%, transparent 70%);
          filter: blur(8px);
          z-index: 1;
        }

        .logo-text {
          font-weight: 700;
          letter-spacing: 1px;
          font-size: 1.2rem;
          color: white;
        }

        .nav-links {
          list-style: none;
          display: flex;
          justify-content: center;
          gap: 32px;
          position: relative;
          z-index: 2;
        }

        .nav-links a {
          text-decoration: none;
          color: #cbd5f5;
          font-size: 14px;
          transition: color 0.3s;
          font-weight: 500;
        }

        .nav-links a:hover {
          color: #6aece1;
        }

        .nav-right-group {
          display: flex;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .nav-buttons {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .btn-signin {
          background: transparent;
          border: none;
          color: #e5e7eb;
          font-size: 14px;
          cursor: pointer;
          font-weight: 600;
        }

        /* --- UPDATED NAVBAR BUTTON --- */
        .btn-start {
          background: #6aece1; /* YOUR REQUESTED COLOR */
          border: none;
          padding: 10px 22px;
          border-radius: 20px;
          color: #0a0b14; /* Dark text for contrast */
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .btn-start:hover {
          transform: scale(1.05);
          box-shadow: 0 0 15px rgba(106, 236, 225, 0.4);
        }

        .hamburger {
          display: none;
          cursor: pointer;
          margin-left: 15px;
        }

        .mobile-buttons {
          display: none;
        }

        /* HERO SECTION */
        .hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 92px 0 60px 0;
          position: relative;
          width: 100%;
          z-index: 2;
        }

        .glow-bg {
          position: absolute;
          top: 20%;
          width: 600px;
          height: 600px;
          /* Updated glow to match new color */
          background: radial-gradient(circle, rgba(106, 236, 225, 0.15) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
          left: 50%;
          transform: translateX(-50%);
        }

        .badge {
          background: rgba(255, 255, 255, 0.05);
          margin-top: 40px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 8px 16px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: #94a3b8;
          margin-bottom: 24px;
          position: relative;
          z-index: 2;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          max-width: 850px;
          line-height: 1.1;
          margin-bottom: 20px;
          position: relative;
          z-index: 2;
          padding: 0 20px;
        }

        /* Updated Text Accent Color */
        .cyan-text { color: #6aece1; }

        .hero-subtitle {
          color: #94a3b8;
          font-size: 1.2rem;
          max-width: 600px;
          margin-bottom: 40px;
          position: relative;
          z-index: 2;
          padding: 0 20px;
        }

        .cta-group {
          display: flex;
          gap: 20px;
          margin-bottom: 60px;
          position: relative;
          z-index: 2;
        }

        /* --- UPDATED HERO START FREE BUTTON --- */
        .btn-primary-hero {
          background: #6aece1; /* YOUR REQUESTED COLOR */
          border: none;
          color: #0a0b14; /* Dark text for contrast */
          padding: 14px 32px;
          border-radius: 12px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          position: relative;
          z-index: 2;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .btn-primary-hero:hover {
            transform: scale(1.05);
            box-shadow: 0 0 20px rgba(106, 236, 225, 0.5);
        }

        /* --- UPDATED TRY AI DEMO BUTTON --- */
        .btn-secondary {
          background: rgba(106, 236, 225, 0.05); /* Slight tint of the color */
          border: 1px solid #6aece1; /* Border is the requested color */
          color: #6aece1; /* Text is the requested color */
          padding: 14px 32px;
          border-radius: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          position: relative;
          z-index: 2;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .btn-secondary:hover {
            transform: scale(1.05);
            background: rgba(106, 236, 225, 0.15);
        }

        .stats-container {
          display: flex;
          gap: 60px;
          margin-bottom: 60px;
          position: relative;
          z-index: 2;
        }

        .stat-item h3 {
          font-size: 2.5rem;
          margin: 0;
          color: #6aece1; /* Updated to new color */
        }

        .stat-item p {
          color: #94a3b8;
          font-size: 0.9rem;
        }

        .ai-card-wrapper {
          width: 100%;
          max-width: 600px;
          position: relative;
          z-index: 2;
          padding: 0 20px;
        }

        .status-indicator {
          position: absolute;
          top: -35px;
          right: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: #94a3b8;
          z-index: 2;
        }

        .ai-card {
          background: rgba(13, 17, 28, 0.8);
          border: 1px solid rgba(106, 236, 225, 0.2); /* Border tint */
          border-radius: 24px;
          padding: 30px;
          text-align: left;
          backdrop-filter: blur(10px);
          position: relative;
          z-index: 2;
        }

        .ai-card-header {
          display: flex;
          gap: 12px;
          margin-bottom: 15px;
        }

        .ai-avatar {
          width: 40px;
          height: 40px;
          background: #6aece1; /* Updated avatar background */
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ai-name {
          font-weight: 700;
        }

        .ai-tag {
          font-size: 0.7rem;
          color: #6aece1;
          background: rgba(106, 236, 225, 0.1);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .ai-message {
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .suggestion-chip {
          background: none;
          border: 1px solid rgba(255,255,255,0.1);
          color: #94a3b8;
          padding: 8px 16px;
          border-radius: 20px;
          cursor: pointer;
          margin-right: 8px;
          font-size: 0.85rem;
          transition: all 0.2s ease;
        }

        .suggestion-chip:hover {
            background: rgba(106, 236, 225, 0.1);
            border-color: #6aece1;
            color: #6aece1;
        }

        /* MOBILE RESPONSIVENESS */
        @media (max-width: 960px) {
          .navbar {
            grid-template-columns: auto 1fr;
            width: 100%;
            padding: 10px 20px;
          }
          .nav-right-group {
              justify-content: flex-end;
          }
          .nav-buttons { display: none; }
          .hamburger { display: block; }
          .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: #0f1123;
            flex-direction: column;
            padding: 30px;
            border-radius: 20px;
            margin-top: 10px;
            border: 1px solid rgba(255,255,255,0.1);
            box-shadow: 0 10px 20px rgba(0,0,0,0.5);
          }
          .nav-links.active { display: flex; }
          .mobile-buttons {
            display: flex;
            flex-direction: column;
            gap: 15px;
            width: 100%;
            padding-top: 15px;
            border-top: 1px solid rgba(255,255,255,0.1);
          }
          .hero-title { font-size: 2.5rem; }
          .stats-container {
              flex-direction: column;
              gap: 20px;
              margin-bottom: 40px;
          }
          .hero { padding-top: 80px; }
          .watermark-logo {
            width: 300px;
            height: 300px;
          }
        }

        @media (max-width: 480px) {
          .watermark-logo {
            width: 250px;
            height: 250px;
          }
          .hero-title { font-size: 2rem; }
          .hero-subtitle { font-size: 1rem; }
          .cta-group { flex-direction: column; }
          .btn-primary-hero, .btn-secondary { width: 100%; }
          .status-indicator { display: none; }
          .ai-card-wrapper { padding: 0 10px; }
        }
      `}</style>
    </div>
  );
};

export default VormirexLanding;
