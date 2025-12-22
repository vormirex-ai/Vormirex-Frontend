import React from 'react';
import { Star } from 'lucide-react';

// --- Types ---
interface Testimonial {
  id: number;
  emoji: string;
  text: string;
  name: string;
  role: string;
}

interface TestimonialSectionProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
}

// --- Default Data ---
const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    emoji: '👧',
    text: '"Vormirex made learning math actually fun! The AI tutor explains things way better than my textbooks."',
    name: 'Aria Chen',
    role: 'High School Student',
  },
  {
    id: 2,
    emoji: '👨‍💻',
    text: '"I used Vormirex to learn Python and got my dream job within 3 months. The personalized path was perfect."',
    name: 'Marcus Johnson',
    role: 'Software Developer',
  },
  {
    id: 3,
    emoji: '👩',
    text: '"My kids love the gamified learning! They actually ask to study now. Best investment in their education."',
    name: 'Priya Sharma',
    role: 'Parent',
  },
  {
    id: 4,
    emoji: '👨',
    text: '"The 24/7 AI support saved me during finals. I could ask questions at 2 AM and get instant help!"',
    name: 'David Kim',
    role: 'College Student',
  },
];

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  title = 'Loved by Learners',
  subtitle = 'Join thousands of happy students transforming their learning',
  testimonials = DEFAULT_TESTIMONIALS,
}) => {
  // Helper to split title for highlighting logic
  const titleParts = title.split(' ');
  const mainTitle = titleParts.slice(0, -1).join(' ');
  const lastWord = titleParts[titleParts.length - 1];

  return (
    <section className="testimonial-container">
      <div className="header-section">
        <h2 className="title">
          {mainTitle} <span className="highlight">{lastWord}</span>
        </h2>
        <p className="subtitle">{subtitle}</p>
      </div>

      <div className="cards-grid">
        {testimonials.map((item) => (
          <div key={item.id} className="testimonial-card">
            <div className="card-header">
              <span className="emoji-avatar" aria-hidden="true">
                {item.emoji}
              </span>
              <div className="stars">
                {/* UPDATED: Stars now use brand cyan #6aece1 */}
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#6aece1" stroke="#6aece1" />
                ))}
              </div>
            </div>
            <p className="testimonial-text">{item.text}</p>
            <div className="author-info">
              <h4 className="author-name">{item.name}</h4>
              <p className="author-role">{item.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="rating-badge">
        <div className="badge-stars">
          {/* Kept Gold for the aggregate rating as per standard UI conventions */}
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={18} fill="#FFD700" stroke="#FFD700" />
          ))}
        </div>
        <span className="rating-score">4.9/5</span>
        <span className="rating-count">from 10,000+ reviews</span>
      </div>

      <style>{`
        .testimonial-container {
          background-color: #0B0E14;
          color: #FFFFFF;
          padding: 80px 20px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .header-section {
          text-align: center;
          margin-bottom: 60px;
        }

        .title {
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 16px;
          letter-spacing: -0.5px;
        }

        /* UPDATED: Highlight color */
        .highlight {
          color: #6aece1;
        }

        .subtitle {
          color: #94A3B8;
          font-size: 18px;
          max-width: 600px;
          margin: 0 auto;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          width: 100%;
          max-width: 1200px;
          margin-bottom: 60px;
        }

        .testimonial-card {
          background-color: #1A1F26;
          border: 1px solid #2D3748;
          border-radius: 24px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* UPDATED: Hover border and shadow glow */
        .testimonial-card:hover {
          transform: translateY(-8px);
          border-color: #6aece1;
          box-shadow: 0 10px 30px -10px rgba(106, 236, 225, 0.2);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .emoji-avatar {
          font-size: 28px;
        }

        .stars {
          display: flex;
          gap: 2px;
        }

        .testimonial-text {
          color: #CBD5E0;
          font-size: 15px;
          line-height: 1.6;
          margin-bottom: 24px;
          flex-grow: 1;
          font-style: italic;
        }

        .author-info {
          margin-top: auto;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 16px;
        }

        .author-name {
          font-size: 16px;
          font-weight: 600;
          margin: 0 0 4px 0;
          color: #FFFFFF;
        }

        .author-role {
          font-size: 13px;
          color: #718096;
          margin: 0;
        }

        .rating-badge {
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 12px 32px;
          border-radius: 100px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .badge-stars {
          display: flex;
          gap: 4px;
        }

        .rating-score {
          font-weight: 700;
          font-size: 20px;
          color: #FFFFFF;
        }

        .rating-count {
          color: #718096;
          font-size: 15px;
        }

        @media (max-width: 768px) {
          .title { font-size: 32px; }
          .cards-grid { grid-template-columns: 1fr; }
          .rating-badge {
            flex-direction: column;
            border-radius: 20px;
            padding: 20px;
            text-align: center;
            gap: 8px;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;
