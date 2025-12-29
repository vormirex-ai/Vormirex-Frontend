import React, { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './CoursePage.css';
import { COURSES, CourseId, CourseLevel } from '../../data/courses';

/* =======================
   ASSET IMPORTS
======================= */
import CyberVideo from '../../assets/cybersecurity.mp4';
import DataScienceVideo from '../../assets/datascience.mp4';
import DataAnalyticsVideo from '../../assets/dataanalytics.mp4';

import WhyCyber from '../../assets/whylearncyber.jpg';
import WhyDS from '../../assets/whylearndatascince.jpeg';
import WhyDA from '../../assets/whylearndataana.jpeg';

import CareerCyber from '../../assets/carrerincyber.jpeg';
import CareerDA from '../../assets/carrerindataana.jpeg';
import CareerDS from '../../assets/carrerindatascience.jpeg';

import GainCyber from '../../assets/gainincyber.jpeg';
import GainDS from '../../assets/gainindatascience.jpeg';
import GainDA from '../../assets/carerindataana.jpeg';

import SyllabusPDF from '../../assets/CoursesPdf (2).pdf';

export default function CoursePage() {
  const navigate = useNavigate();
  const { courseId } = useParams<{ courseId: CourseId }>();
  const course = courseId ? COURSES[courseId] : undefined;
  const [level, setLevel] = useState<CourseLevel>('Foundation');

  const [modalImage, setModalImage] = useState<string | null>(null);
  const openImage = (img: string) => setModalImage(img);
  const closeImage = () => setModalImage(null);

  const handleViewSyllabus = () => {
    window.open(SyllabusPDF, '_blank', 'noopener,noreferrer');
  };

  const levelBlock = useMemo(() => {
    if (!course) return null;
    return course.levels.find((l) => l.level === level) ?? course.levels[0];
  }, [course, level]);

  const heroVideo = useMemo(() => {
    const videoMap: Record<CourseId, string> = {
      'cyber-security': CyberVideo,
      'data-science': DataScienceVideo,
      'data-analytics': DataAnalyticsVideo,
    };
    return videoMap[courseId as CourseId] || CyberVideo;
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
        <header className="course-hero">
          <video
            key={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            className="hero-video-bg"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>

          <div className="course-hero-overlay" />

          <div className="course-hero-top">
            <button className="course-btn ghost" onClick={() => navigate(-1)}>
              ← Back
            </button>

            {/* Added conditional class for Data Science width control */}
            <div
              className={`course-level-tabs ${
                courseId === 'data-science' ? 'ds-tabs' : ''
              }`}
            >
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
