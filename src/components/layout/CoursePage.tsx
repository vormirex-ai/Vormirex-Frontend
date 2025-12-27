import React, { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './CoursePage.css';
import { COURSES, CourseId, CourseLevel } from '../../data/courses';

/* =======================
   IMAGE IMPORTS
======================= */
import CyberHero from '../../assets/cyber.png';
import DataScienceHero from '../../assets/datascience.jpg';
import DataAnalyticsHero from '../../assets/dataanalytics.jpeg';

import WhyCyber from '../../assets/cyber1.jpg';
import WhyDS from '../../assets/whylearndatascience.jpg';
import WhyDA from '../../assets/whylearndataanaltics.jpg';

import CareerCyber from '../../assets/carrerincyber.jpg';
import CareerDA from '../../assets/carrerindataanaltics.jpg';
import CareerDS from '../../assets/carrerindatascience.jpg';

import GainCyber from '../../assets/gainincyber.jpg';
import GainDS from '../../assets/gainindatascience.jpg';
import GainDA from '../../assets/gainindataanaltics.jpg';

export default function CoursePage() {
  const navigate = useNavigate();
  const { courseId } = useParams<{ courseId: CourseId }>();
  const course = courseId ? COURSES[courseId] : undefined;
  const [level, setLevel] = useState<CourseLevel>('Foundation');

  // For modal
  const [modalImage, setModalImage] = useState<string | null>(null);
  const openImage = (img: string) => setModalImage(img);
  const closeImage = () => setModalImage(null);

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
          <div className="course-hero">
            <div className="course-hero-overlay" />
            <h1 className="course-title">Course not found</h1>
            <button
              className="course-btn"
              onClick={() => navigate('/dashboard')}
            >
              Back to Dashboard
            </button>
          </div>
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

          {/* Top Navigation Row */}
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

          {/* Main Hero Content (text on image) */}
          <h1 className="course-title">{course.title}</h1>
          <p className="course-subtitle">{course.subtitle}</p>

          {levelBlock?.duration && (
            <p className="course-duration">
              Duration: <strong>{levelBlock.duration}</strong>
            </p>
          )}

          {levelBlock?.highlights && (
            <div className="course-badges">
              {levelBlock.highlights.map((h) => (
                <span key={h} className="badge">
                  {h}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Button outside the hero/image */}
        <div className="hero-action-area">
          {/* Updated shorter & mobile-friendly text */}
          <button className="course-btn main-cta">
            Enroll Now & Transform Yourself
          </button>
        </div>

        {/* ---------- INFO CARDS ---------- */}
        <section className="course-info-cards">
          <div className="info-card reveal delay-1">
            <img
              src={cardImages.whyLearn}
              alt="Why Learn"
              onClick={() => openImage(cardImages.whyLearn)}
              style={{ cursor: 'pointer' }}
            />
            <p className="info-card-title">
              {courseId === 'data-science'
                ? 'Why Data Science'
                : courseId === 'data-analytics'
                ? 'Why Data Analytics'
                : 'Why Cyber Security'}
            </p>
          </div>

          <div className="info-card reveal delay-2">
            <img
              src={cardImages.career}
              alt="Career Opportunities"
              onClick={() => openImage(cardImages.career)}
              style={{ cursor: 'pointer' }}
            />
            <p className="info-card-title">Career Opportunities</p>
          </div>

          <div className="info-card reveal delay-3">
            <img
              src={cardImages.gain}
              alt="What You’ll Gain"
              onClick={() => openImage(cardImages.gain)}
              style={{ cursor: 'pointer' }}
            />
            <p className="info-card-title">What You’ll Gain</p>
          </div>
        </section>

        {/* ---------- CURRICULUM ---------- */}
        <section className="course-content">
          <h2 className="section-title">{level} Curriculum</h2>

          <div className="modules">
            {levelBlock?.modules.map((m, idx) => (
              <details
                key={m.title}
                className="module reveal"
                style={{ animationDelay: `${idx * 100}ms` }}
                open={idx === 0}
              >
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
