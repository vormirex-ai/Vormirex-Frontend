import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faFire,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { RECENT_CHATS, QA_CARDS } from "../../constants";

interface SidebarRightProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  showComingSoon: () => void;
}

const SidebarRight: React.FC<SidebarRightProps> = ({
  isOpen,
  toggleSidebar,
  showComingSoon,
}) => {
  return (
    <aside className={`sidebar-right ${isOpen ? "sidebar-open" : ""}`}>
      {/* CLOSE BUTTON – MOBILE */}
      <button
        className="sidebar-close-button close-right"
        onClick={toggleSidebar}
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
              <FontAwesomeIcon icon={faFire} className="streak-fire-icon" /> 12
            </span>
            <p>Coding Streak</p>
          </div>
        </div>
      </div>

      <div className="recent-questions">
        <h3>RECENT CHATS</h3>
        <ul>
          {RECENT_CHATS.map((chat, index) => (
            <li key={index} className="recent-item" onClick={showComingSoon}>
              <FontAwesomeIcon icon={chat.icon} /> {chat.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="qa-grid">
        {QA_CARDS.map((card, index) => (
          <div key={index} className="qa-card" onClick={showComingSoon}>
            <FontAwesomeIcon icon={card.icon} className="qa-icon" />
            <h4>{card.label}</h4>
          </div>
        ))}
      </div>

      <div className="recommended-card">
        <h3>
          <FontAwesomeIcon icon={faGraduationCap} /> RECOMMENDED
        </h3>
        <div className="exam-prep-bundle">
          <h4>Certification Prep Bundle</h4>
          <p>Master CompTIA Security+ and AWS Certified Cloud Practitioner.</p>
          <button
            className="start-learning-button primary-button"
            onClick={showComingSoon}
          >
            Start Learning
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SidebarRight;
