import React, { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './CoursePage.css';
import { COURSES, CourseId, CourseLevel } from '../../data/courses';

/* =======================
   IMAGE IMPORTS
======================= */
import CyberHero from '../../assets/cyber.png';
import DataScienceHero from '../../assets/datascience.jpg';
import DataAnalyticsHero from '../../assets/dataanaltics.jpg';

import WhyCyber from '../../assets/whylearncyber.jpg';
import WhyDS from '../../assets/whylearndatascince.jpeg';
import WhyDA from '../../assets/whylearndataana.jpeg';

import CareerCyber from '../../assets/carrerincyber.jpeg';
import CareerDA from '../../assets/carrerindataana.jpeg';
import CareerDS from '../../assets/carrerindatascience.jpeg';

import GainCyber from '../../assets/gainincyber.jpeg';
import GainDS from '../../assets/gainindatascience.jpeg';
import GainDA from '../../assets/carerindataana.jpeg';

/* =======================
   SINGLE PDF IMPORT
======================= */
// Import your single syllabus file here
import SyllabusPDF from '../../assets/CoursesPdf (2).pdf';

export default function CoursePage() {
  const navigate = useNavigate();
  const { courseId } = useParams<{ courseId: CourseId }>();
  const course = courseId ? COURSES[courseId] : undefined;
  const [level, setLevel] = useState<CourseLevel>('Foundation');

  const [modalImage, setModalImage] = useState<string | null>(null);
  const openImage = (img: string) => setModalImage(img);
  const closeImage = () => setModalImage(null);

  // Simple function to open the one imported PDF
  const handleViewSyllabus = () => {
    window.open(SyllabusPDF, '_blank', 'noopener,noreferrer');
  };

  const levelBlock = useMemo(() => {
    if (!course) return null;
    return course.levels.find((l) => l.level === level) ?? course.levels[0];
  }, [course, level]);

  const heroBg = useMemo(() => {
    const heroImages: Record<CourseId, string> = {
      'cyber-security': CyberHero,
      'data-science': DataScienceHero,
      'data-analytics': DataAnalyticsHero,
    };
    return heroImages[courseId as CourseId] || CyberHero;
  }, [courseId]);

  const cardImages = useMemo(() => {
    const images: Record<
      CourseId,
      { whyLearn: string; career: string; gain: string }
    > = {
      'cyber-security': {
        whyLearn: WhyCyber,
        career: CareerCyber,
        gain: GainCyber,
      },
      'data-science': { whyLearn: WhyDS, career: CareerDS, gain: GainDS },
      'data-analytics': { whyLearn: WhyDA, career: CareerDA, gain: GainDA },
    };
    return images[courseId as CourseId] || images['cyber-security'];
  }, [courseId]);

  if (!course) {
    return (
      <div className="course-page">
        <div className="course-shell">
          <button className="course-btn" onClick={() => navigate(-1)}>
            Back
          </button>
          <h1 className="course-title">Course not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="course-page">
      <div className="course-shell">
        {/* ---------- HERO SECTION ---------- */}
        <header
          className="course-hero"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="course-hero-overlay" />
          <div className="course-hero-top">
            <button className="course-btn ghost" onClick={() => navigate(-1)}>
              ← Back
            </button>
            <div className="course-level-tabs">
              <button
                className={`tab ${level === 'Foundation' ? 'active' : ''}`}
                onClick={() => setLevel('Foundation')}
              >
                Foundation
              </button>
              <button
                className={`tab ${level === 'Advanced' ? 'active' : ''}`}
                onClick={() => setLevel('Advanced')}
              >
                Advanced
              </button>
            </div>
          </div>
          <h1 className="course-title">{course.title}</h1>
          <p className="course-subtitle">{course.subtitle}</p>
          {levelBlock?.duration && (
            <p className="course-duration">
              Duration: <strong>{levelBlock.duration}</strong>
            </p>
          )}
        </header>

        {/* ---------- PDF ACTION BUTTON ---------- */}
        <div className="hero-action-area">
          <button className="course-btn main-cta" onClick={handleViewSyllabus}>
            Download Full Syllabus (PDF)
          </button>
        </div>

        {/* ---------- INFO CARDS ---------- */}
        <section className="course-info-cards">
          <div className="info-card reveal">
            <img
              src={cardImages.whyLearn}
              alt="Why Learn"
              onClick={() => openImage(cardImages.whyLearn)}
            />
            <p className="info-card-title">Why {course.title}</p>
          </div>
          <div className="info-card reveal">
            <img
              src={cardImages.career}
              alt="Career"
              onClick={() => openImage(cardImages.career)}
            />
            <p className="info-card-title">Career Path</p>
          </div>
          <div className="info-card reveal">
            <img
              src={cardImages.gain}
              alt="Gain"
              onClick={() => openImage(cardImages.gain)}
            />
            <p className="info-card-title">What You'll Gain</p>
          </div>
        </section>

        {/* ---------- CURRICULUM ---------- */}
        <section className="course-content">
          <h2 className="section-title">{level} Curriculum</h2>
          <div className="modules">
            {levelBlock?.modules.map((m, idx) => (
              <details key={m.title} className="module reveal" open={idx === 0}>
                <summary className="module-summary">
                  <span className="module-title">{m.title}</span>
                  <span className="module-meta">{m.items.length} topics</span>
                </summary>
                <ul className="module-list">
                  {m.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </section>

        {/* ---------- IMAGE MODAL ---------- */}
        {modalImage && (
          <div className="image-modal" onClick={closeImage}>
            <img src={modalImage} alt="Full View" />
          </div>
        )}
      </div>
    </div>
  );
}
