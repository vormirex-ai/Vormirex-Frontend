import React from 'react';
import { Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';
import logo from '../../assets/logo.png'; // ✅ update path if needed

interface FooterLink {
  label: string;
  href: string;
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
  const {
    companyName = 'VORMIREX',
    description = 'Making learning feel like playing. Your AI-powered education companion.',
    sections = [
      {
        title: 'Product',
        links: [
          { label: 'Features', href: '#' },
          { label: 'Courses', href: '#' },
          { label: 'Pricing', href: '#' },
          { label: 'AI Tutor', href: '#' },
          { label: 'Mobile App', href: '#' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About Us', href: '#' },
          { label: 'Careers', href: '#' },
          { label: 'Press Kit', href: '#' },
          { label: 'Blog', href: '#' },
          { label: 'Contact', href: '#' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'Help Center', href: '#' },
          { label: 'Community', href: '#' },
          { label: 'Tutorials', href: '#' },
          { label: 'API Docs', href: '#' },
          { label: 'Status', href: '#' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy', href: '#' },
          { label: 'Terms', href: '#' },
          { label: 'Cookies', href: '#' },
          { label: 'Licenses', href: '#' },
          { label: 'Security', href: '#' },
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

            <div className="social-links">
              <a href="#" className="social-icon">
                <Twitter size={18} />
              </a>
              <a href="#" className="social-icon">
                <Instagram size={18} />
              </a>
              <a href="#" className="social-icon">
                <Youtube size={18} />
              </a>
              <a href="#" className="social-icon">
                <Linkedin size={18} />
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
                      <a href={link.href} className="footer-link">
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

      {/* STYLES */}
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
        }

        .brand-section {
          max-width: 320px;
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

        .links-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          flex: 1;
        }

        @media (max-width: 768px) {
          .links-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .links-grid {
            grid-template-columns: 1fr;
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
        }

        .footer-link {
          color: #64748b;
          font-size: 14px;
          text-decoration: none;
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
        }
      `}</style>
    </footer>
  );
};

export default Footer;
