import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faPlus,
  faCog,
  faUserCircle,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import logoWithoutText from "../../assets/logo.png";
import { SUBJECTS, CUSTOM_COURSES } from "../../constants";

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
    <aside className={`sidebar-left ${isOpen ? "sidebar-open" : ""}`}>
      <button
        className="sidebar-close-button close-left"
        onClick={toggleSidebar}
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

      <button className="new-chat-button" onClick={() => navigate("/")}>
        <FontAwesomeIcon icon={faGlobe} /> VORMIREX
      </button>

      <nav className="main-nav">
        <div className="nav-section">
          <h3>SUBJECTS</h3>
          <ul>
            {SUBJECTS.map((item, index) => (
              <li key={index} onClick={showComingSoon}>
                <FontAwesomeIcon icon={item.icon} /> {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-section">
          <h3>CUSTOM COURSES</h3>
          <ul>
            {CUSTOM_COURSES.map((item, index) => (
              <li key={index} onClick={showComingSoon}>
                <FontAwesomeIcon icon={item.icon} /> {item.label}
              </li>
            ))}
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
  );
};

export default SidebarLeft;
