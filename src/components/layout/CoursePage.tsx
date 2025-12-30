import React, { useMemo, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './CoursePage.css';
import { COURSES, CourseId, CourseLevel } from '../../data/courses';

/* ASSETS */
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

  // Enrollment form dropdown states
  const [selectedCourse, setSelectedCourse] = useState<string>(
    course?.title || ''
  );
  const [selectedLevel, setSelectedLevel] = useState<CourseLevel>(level);

  const openImage = (img: string) => setModalImage(img);
  const closeImage = () => setModalImage(null);

  const handleViewSyllabus = () =>
    window.open(SyllabusPDF, '_blank', 'noopener,noreferrer');

  const handleEnrollSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');

    alert(
      `Enrollment Submitted!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCourse: ${selectedCourse}\nLevel: ${selectedLevel}`
    );

    e.currentTarget.reset();
  };

  useEffect(() => {
    document.title = course
      ? `${course.title} | Vormirex`
      : 'Explore Courses | Vormirex';

    if (course) {
      setSelectedCourse(course.title); // default course
      setSelectedLevel(level); // default level
    }
  }, [course, level]);

  // Image Mapping
  const getCatalogImage = (id: string) => {
    const map: Record<string, string> = {
      'data-science': WhyDS,
      'data-analytics': WhyDA,
      'cyber-security': WhyCyber,
    };
    return map[id] || WhyCyber;
  };

  const heroVideo = useMemo(() => {
    const videoMap: Record<string, string> = {
      'cyber-security': CyberVideo,
      'data-science': DataScienceVideo,
      'data-analytics': DataAnalyticsVideo,
    };
    return courseId ? videoMap[courseId] : CyberVideo;
  }, [courseId]);

  const detailImages = useMemo(() => {
    const images: Record<string, { career: string; gain: string }> = {
      'cyber-security': { career: CareerCyber, gain: GainCyber },
      'data-science': { career: CareerDS, gain: GainDS },
      'data-analytics': { career: CareerDA, gain: GainDA },
    };
    return courseId && images[courseId]
      ? images[courseId]
      : { career: WhyCyber, gain: GainCyber };
  }, [courseId]);

  const levelBlock = useMemo(() => {
    if (!course) return null;
    return course.levels.find((l) => l.level === level) ?? course.levels[0];
  }, [course, level]);

  const courseOptions = Object.values(COURSES).map((c) => c.title);
  const levelOptions: CourseLevel[] = ['Foundation', 'Advanced'];

  /* =========================
     VIEW 1: COURSE CATALOG
     ========================= */
  if (!courseId) {
    return (
      <div className="course-list-page">
        <header className="course-list-header">
          <h1>Explore Our Courses</h1>
          <p>
            Unlock your potential with our expert-led courses designed to launch
            your career in tech.
          </p>
        </header>

        <div className="course-grid">
          {Object.values(COURSES).map((courseItem) => (
            <div
              key={courseItem.id}
              className="course-card"
              onClick={() => navigate(`/course/${courseItem.id}`)}
            >
              <img
                src={getCatalogImage(courseItem.id)}
                alt={courseItem.title}
                className="course-card-img"
              />
              <div className="course-card-content">
                <h3>{courseItem.title}</h3>
                <p className="course-card-desc">{courseItem.description}</p>
                <button className="course-card-btn">View Details →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* =========================
     VIEW 2: ERROR STATE
     ========================= */
  if (!course) {
    return (
      <div className="course-page">
        <div style={{ textAlign: 'center', padding: '100px 0' }}>
          <h1>Course not found</h1>
          <button
            className="course-btn main-cta"
            onClick={() => navigate('/courses')}
          >
            Back to Catalog
          </button>
        </div>
      </div>
    );
  }

  /* =========================
     VIEW 3: COURSE DETAIL
     ========================= */
  return (
    <div className="course-page">
      <div className="course-shell">
        <header className="course-hero">
          <video autoPlay muted loop playsInline className="hero-video-bg">
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="course-hero-overlay" />
          <div className="course-hero-top">
            <button
              className="course-btn ghost"
              onClick={() => navigate('/courses')}
            >
              ← All Courses
            </button>
            <div
              className={`course-level-tabs ${
                courseId === 'data-science' ? 'ds-tabs' : ''
              }`}
            >
              <button
                className={`tab ${level === 'Foundation' ? 'active' : ''}`}
                onClick={() => {
                  setLevel('Foundation');
                  setSelectedLevel('Foundation');
                }}
              >
                Foundation
              </button>
              <button
                className={`tab ${level === 'Advanced' ? 'active' : ''}`}
                onClick={() => {
                  setLevel('Advanced');
                  setSelectedLevel('Advanced');
                }}
              >
                Advanced
              </button>
            </div>
          </div>
        </header>

        <div className="hero-action-area">
          <button className="course-btn main-cta" onClick={handleViewSyllabus}>
            Download Full Syllabus (PDF)
          </button>
        </div>

        <section className="course-info-cards">
          <div className="info-card">
            <img
              src={getCatalogImage(courseId)}
              onClick={() => openImage(getCatalogImage(courseId))}
              alt="Why"
            />
            <p className="info-card-title">Why {course.title}</p>
          </div>
          <div className="info-card">
            <img
              src={detailImages.career}
              onClick={() => openImage(detailImages.career)}
              alt="Career"
            />
            <p className="info-card-title">Career Path</p>
          </div>
          <div className="info-card">
            <img
              src={detailImages.gain}
              onClick={() => openImage(detailImages.gain)}
              alt="Gain"
            />
            <p className="info-card-title">What You'll Gain</p>
          </div>
        </section>

        <section className="course-content">
          <h2 className="section-title">{level} Curriculum</h2>
          <div className="modules">
            {levelBlock?.modules.map((m, idx) => (
              <details key={m.title} className="module" open={idx === 0}>
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

        {/* =========================
           ENROLLMENT FORM
        ========================= */}
        <div className="enroll-form-wrapper">
          <h2>Enroll for a Course</h2>
          <form onSubmit={handleEnrollSubmit}>
            <input name="name" required placeholder="Full Name" />
            <input
              name="email"
              type="email"
              required
              placeholder="Email Address"
            />
            <input name="phone" required placeholder="Phone Number" />

            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Course
              </option>
              {courseOptions.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value as CourseLevel)}
              required
            >
              <option value="" disabled>
                Select Level
              </option>
              {levelOptions.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>

            <button type="submit" className="course-btn main-cta">
              Submit Enrollment
            </button>
          </form>
        </div>

        {modalImage && (
          <div className="image-modal" onClick={closeImage}>
            <img src={modalImage} alt="Enlarged" />
          </div>
        )}
      </div>
    </div>
  );
}
