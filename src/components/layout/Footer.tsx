import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ComingSoonModal from '../common/ComingSoonModal';
import logo from '../../assets/logo.png'; // ✅ update path if needed

interface FooterLink {
  label: string;
  href: string;
  isComingSoon?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface Props {
  companyName?: string;
  description?: string;
  sections?: FooterSection[];
  copyright?: string;
}

const Footer = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    companyName = 'VORMIREX',
    description = 'Making learning feel like playing. Your AI-powered education companion.',
    sections = [
      {
        title: 'Company',
        links: [
          { label: 'Features', href: '#features' },
          { label: 'Courses', href: '#', isComingSoon: true },
          { label: 'Pricing', href: '#pricing' },
          { label: 'About Us', href: '#', isComingSoon: true },
        ],
      },
      {
        title: 'Get in touch',
        links: [
          { label: '+91 8123831056', href: 'tel:+918123831056' },
          { label: 'info@vormirex.com', href: 'mailto:info@vormirex.com' },
        ],
      },
    ],
    copyright = '© 2025 Vormirex. All rights reserved.',
  } = props;

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-main">
          {/* BRAND SECTION */}
          <div className="brand-section">
            <div className="logo-wrapper">
              <div className="glow-effect"></div>
              <img src={logo} alt="Logo" className="brand-logo" />
              <span className="brand-name">{companyName}</span>
            </div>

            <p className="brand-description">{description}</p>
            {/* Kept social links as user mentioned logo and description part is good, usually these go together */}
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=61584727210742" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.linkedin.com/company/vormirex/" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>

          {/* LINKS */}
          <div className="links-grid">
            {sections.map((section, idx) => (
              <div key={idx} className="link-column">
                <h4 className="column-title">{section.title}</h4>
                <ul className="column-list">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a
                        href={link.href}
                        className="footer-link"
                        onClick={(e) => {
                          if (link.isComingSoon) {
                            e.preventDefault();
                            setIsModalOpen(true);
                          }
                        }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <div className="divider"></div>
          <p className="copyright-text">{copyright}</p>
        </div>
      </div>

      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <style>{`
        .footer-container {
          background-color: #050a14;
          color: #94a3b8;
          padding: 80px 20px 40px;
          width: 100%;
        }

        .footer-content {
          max-width: 1200px;
          margin: auto;
        }

        .footer-main {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 40px;
          margin-bottom: 60px;
          align-items: flex-start; /* Ensure alignment at top */
        }

        .brand-section {
          width: 100%;
          max-width: 380px;
          flex-shrink: 0;
        }

        .logo-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          position: relative;
        }

        .glow-effect {
          position: absolute;
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, rgba(0,255,200,0.15), transparent 70%);
          top: -40px;
          left: -40px;
        }

        .brand-logo {
          width: 44px;
          height: 44px;
          object-fit: contain;
          z-index: 1;
        }

        .brand-name {
          font-size: 20px;
          font-weight: 800;
          color: #fff;
          letter-spacing: 1px;
          z-index: 1;
        }

        .brand-description {
          font-size: 14px;
          color: #64748b;
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .social-links {
          display: flex;
          gap: 12px;
        }

        .social-icon {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(30,41,59,0.5);
          border-radius: 8px;
          color: #94a3b8;
          transition: 0.3s;
        }

        .social-icon:hover {
          background: rgba(30,41,59,0.9);
          color: #fff;
        }

        /* Group the columns together on the right */
        .links-grid {
          display: flex;
          gap: 50px; /* Large space between Company and Get in touch */
        }

        .link-column {
          min-width: 160px; 
        }

        @media (max-width: 900px) {
           .footer-main {
             gap: 60px;
           }
           .links-grid {
             gap: 60px;
           }
        }

        @media (max-width: 768px) {
          .links-grid {
            flex-wrap: wrap;
            gap: 40px;
            width: 100%;
            justify-content: flex-start;
          }
          .footer-main {
             flex-direction: column;
             gap: 40px;
          }
          .brand-section {
            max-width: 100%;
          }
          .link-column {
            flex: 1;
            min-width: 140px;
          }
        }

        .column-title {
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .column-list {
          list-style: none;
          padding: 0;
        }

        .column-list li {
          margin-bottom: 12px;
          display: flex;
          align-items: center;
        }

        .footer-link {
          color: #64748b;
          font-size: 14px;
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-link:hover {
          color: #fff;
        }

        .divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #1e293b, transparent);
          margin-bottom: 30px;
        }

        .copyright-text {
          font-size: 13px;
          color: #475569;
          text-align: center;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
