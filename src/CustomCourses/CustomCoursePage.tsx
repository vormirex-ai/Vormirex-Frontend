import React from 'react';
import './CustomCoursePage.css';

interface CustomCoursePageProps {
  title: string;
  description: string;
  benefits: string[];
  testimonials?: { name: string; text: string }[];
  heroImageUrl: string;
  featureImages: string[];
}

const CustomCoursePage: React.FC<CustomCoursePageProps> = ({
  title,
  description,
  benefits,
  testimonials = [],
  heroImageUrl,
  featureImages,
}) => {
  return (
    <main className="custom-course-main">
      <section
        className="custom-hero"
        style={{ backgroundImage: `url(${heroImageUrl})` }}
      >
        <div className="hero-content">
          <h1 className="custom-title animate-fade-in">{title}</h1>
          <p className="custom-desc animate-fade-in delay-1">{description}</p>
          <button className="hero-cta animate-fade-in delay-2">
            Enroll Now & Transform Your Future
          </button>
        </div>
      </section>

      <section className="benefits-section">
        <h2 className="section-title animate-fade-in delay-3">
          Why Thousands of Students Choose This
        </h2>
        <div className="benefits-grid">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className={`benefit-card animate-slide-up delay-${idx + 4}`}
            >
              {featureImages[idx] && (
                <img
                  src={featureImages[idx]}
                  alt={benefit}
                  className="benefit-img"
                />
              )}
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {testimonials.length > 0 && (
        <section className="testimonials-section">
          <h2 className="section-title animate-fade-in delay-7">
            What Our Students Are Saying
          </h2>
          <div className="testimonials-grid">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className={`testimonial-card animate-slide-up delay-${idx + 8}`}
              >
                <p className="testimonial-text">"{t.text}"</p>
                <p className="testimonial-name">— {t.name}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="final-cta-section">
        <h2 className="animate-fade-in delay-9">
          Ready to Unlock Your Potential?
        </h2>
        <p>
          Join over 50,000+ learners mastering tech skills with VORMIREX AI.
        </p>
        <button className="final-cta-button animate-fade-in delay-10">
          Start Learning Today – It's Free to Begin!
        </button>
      </section>
    </main>
  );
};

export default CustomCoursePage;
