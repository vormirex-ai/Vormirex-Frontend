import React, { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './CoursePage.css';
import { COURSES, CourseId, CourseLevel } from '../../data/courses';

export default function CoursePage() {
  const navigate = useNavigate();
  const { courseId } = useParams<{ courseId: CourseId }>();

  const course = courseId ? COURSES[courseId] : undefined;
  const [level, setLevel] = useState<CourseLevel>('Foundation');

  const levelBlock = useMemo(() => {
    if (!course) return null;
    return course.levels.find((l) => l.level === level) ?? course.levels[0];
  }, [course, level]);

  // Hero Backgrounds
  const heroBg = useMemo(() => {
    if (!courseId) return '';
    const images: Record<CourseId, string[]> = {
      'cyber-security': [
        'https://content.kaspersky-labs.com/se/com/content/en-global/images/repository/isc/2017-images/What-is-Cyber-Security/What-is-Cyber-Security.jpg',
      ],
      'data-science': [
        'https://stl.tech/wp-content/uploads/2022/12/data-science22.jpg',
      ],
      'data-analytics': [
        'https://www.shutterstock.com/image-photo/displaying-overlay-on-dark-blur-600nw-2642780447.jpg',
        'https://www.shutterstock.com/image-illustration/multiple-digital-dashboards-colorful-charts-260nw-2570483443.jpg',
        'https://thumbs.dreamstime.com/b/business-analytics-dashboard-data-visualization-charts-graphs-modern-dark-blue-visualizing-key-performance-indicators-384611160.jpg',
      ],
    };
    const options = images[courseId] || images['cyber-security'];
    return options[Math.floor(Math.random() * options.length)];
  }, [courseId]);

  // Bottom Card Images
  const cardImages = useMemo(() => {
    const getRandom = (arr: string[]) =>
      arr[Math.floor(Math.random() * arr.length)];

    const allImages: Record<
      CourseId,
      { whyLearn: string[]; career: string[]; gain: string[] }
    > = {
      'cyber-security': {
        whyLearn: [
          'https://marvel-b1-cdn.bc0a.com/f00000000310757/www.fortinet.com/content/dam/fortinet/images/cyberglossary/4-common-cyber-threats.png',
        ],
        career: ['https://miro.medium.com/1*ziYL9ayXs5zO8wrnuXif6Q.jpeg'],
        gain: [
          'https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/2/c/2c34cafa480e68e3a6830c40ab2a4cff93fb1e0501a7fbd24661387a00787b8b/cybersecurity-skills-mc-slide1.png',
        ],
      },
      'data-science': {
        whyLearn: [
          'https://jaro-website.s3.ap-south-1.amazonaws.com/2025/02/The-Ultimate-Guide-to-Data-Science-Everything-You-Need-to-Know-in-2025.jpg',
          'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_Data_Science.jpg',
          'https://staticcdn.mbzuai.ac.ae/mbzuaiwpprd01/2025/06/stats-banner-img1.jpg',
        ],
        career: [
          'https://thumbs.dreamstime.com/b/futuristic-user-interface-set-hud-future-infographic-elements-technology-science-theme-analysis-system-scanning-graphs-waves-108344996.jpg',
          'https://thumbs.dreamstime.com/b/business-infographic-charts-futuristic-graphs-holographic-bar-ui-panels-dark-theme-vector-template-illustration-dashboard-digital-182460738.jpg',
          'https://thumbs.dreamstime.com/b/futuristic-holographic-interface-displaying-complex-data-molecular-structures-dark-abstract-background-futuristic-421077862.jpg',
        ],
        gain: [
          'http://nirvacana.com/thoughts/wp-content/uploads/2018/01/RoadToDataScientist1.png',
          'https://365datascience.com/resources/blog/thumb@1024_e17qstf4da7-required-cloud-skills-for-data-scientists-2025.webp',
          'https://miro.medium.com/1*mGweBeCpQcaZXisggX8J1w.png',
        ],
      },
      'data-analytics': {
        whyLearn: [
          'https://cdn.dribbble.com/userupload/43507872/file/original-df7180b18e97f8487d50bd65cba0a013.png',
          'https://i0.wp.com/blog.happyfox.com/wp-content/uploads/2020/12/Screenshots-02.png?resize=940%2C587&ssl=1',
          'https://miro.medium.com/v2/resize:fit:1400/1*0aQBwcNUui76a-uqjxagUg.jpeg',
        ],
        career: [
          'https://cdn.dribbble.com/userupload/45969034/file/392b2a90c9e64a739e4966a45ff8ef4b.png?format=webp&resize=400x300&vertical=center',
          'https://cdn.dribbble.com/userupload/17901228/file/original-de5ab5345e2514feeb06f876470f85fc.png?resize=752x&vertical=center',
          'https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/simglfz68lkvfoasitif/set-up-professional-data-analytics-solutions.png',
        ],
        gain: [
          'https://www.classcentral.com/report/wp-content/uploads/2022/07/ibm-cognitive-class-courses-e1658150162565.png',
          'https://www.sans.org/_next/image?url=https%3A%2F%2Fimages.contentstack.io%2Fv3%2Fassets%2Fbltabe50a4554f8e97f%2Fblt58b2bbf49247b5d7%2F69021292d462799894049766%2FCyber_Ranges_Thumbnail.png&w=2560&q=75',
          'https://www.edx.org/_next/image?url=https%3A%2F%2Fprod-discovery.edx-cdn.org%2Forganization%2Flogos%2Fa7e2febc-e366-4b23-9fc3-5659cf53d452-8f8e75936e00.png&w=384&q=75',
        ],
      },
    };

    const selected =
      allImages[courseId as CourseId] || allImages['cyber-security'];

    return {
      whyLearn: getRandom(selected.whyLearn),
      career: getRandom(selected.career),
      gain: getRandom(selected.gain),
    };
  }, [courseId]);

  if (!course) {
    return (
      <div className="course-page">
        <div className="course-shell">
          <div className="course-hero">
            <h1>Course not found</h1>
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
        {/* ---------- HERO ---------- */}
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
          <p className="course-desc">{course.description}</p>

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

        {/* ---------- BOTTOM IMAGE CARDS ---------- */}
        <div className="course-info-cards">
          <div className="info-card">
            <img src={cardImages.whyLearn} alt="Why Learn" />
            <p className="info-card-title">
              {courseId === 'data-science'
                ? 'Why Learn Data Science'
                : courseId === 'data-analytics'
                ? 'Why Learn Data Analytics'
                : 'Why Learn Cyber'}
            </p>
          </div>

          <div className="info-card">
            <img src={cardImages.career} alt="Career Opportunities" />
            <p className="info-card-title">Career Opportunities</p>
          </div>

          <div className="info-card">
            <img src={cardImages.gain} alt="What You'll Gain" />
            <p className="info-card-title">What You'll Gain</p>
          </div>
        </div>

        {/* ---------- CURRICULUM ---------- */}
        <section className="course-content">
          <h2 className="section-title">{level} Curriculum</h2>

          <div className="modules">
            {levelBlock?.modules.map((m, idx) => (
              <details
                key={m.title}
                className="module reveal"
                style={{ animationDelay: `${idx * 60}ms` }}
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
      </div>
    </div>
  );
}
