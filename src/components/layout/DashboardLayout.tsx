import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faThumbtack,
  faPaperclip,
  faMicrophone,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import logoWithoutText from "../../assets/logo.png";

interface DashboardLayoutProps {
  toggleLeftSidebar: () => void;
  toggleRightSidebar: () => void;
  showComingSoon: () => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  toggleLeftSidebar,
  toggleRightSidebar,
  showComingSoon,
}) => {
  return (
    <main className="main-content">
      {/* 🔥 NEW WATERMARK ELEMENT 🔥 */}
      <div className="watermark-logo"></div>
      {/* --------------------------- */}
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
              e.key === "Enter" && (e.preventDefault(), showComingSoon())
            }
          />
        </div>

        <div className="tools-button" onClick={toggleRightSidebar}>
          Learning Tools <FontAwesomeIcon icon={faThumbtack} />
        </div>
      </header>

      <section className="ai-central-area">
        <div className="logo-with-text">
          <img src={logoWithoutText} className="logo-img" alt="Vormirex Logo" />
          <span className="company-name">VORMIREX</span>
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
              e.key === "Enter" && (e.preventDefault(), showComingSoon())
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
  );
};

export default DashboardLayout;
