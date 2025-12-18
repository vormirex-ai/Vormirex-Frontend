import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faLightbulb } from "@fortawesome/free-solid-svg-icons";

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ComingSoonModal: React.FC<ComingSoonModalProps> = ({
  isOpen,
  onClose,
}) => {
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

export default ComingSoonModal;
