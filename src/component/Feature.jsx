import React, { useEffect, useRef } from 'react';
import '../Feature.css';

const Feature = () => {
  const featureCardsRef = useRef([]);
  const svgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // Add a slight delay between each card's animation
            const index = featureCardsRef.current.indexOf(entry.target);
            entry.target.style.transitionDelay = `${index * 0.1}s`;
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '-20px'
      }
    );

    featureCardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      featureCardsRef.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  useEffect(() => {
    const svgObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-text');
          } else {
            entry.target.classList.remove('animate-text');
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-50px'
      }
    );

    if (svgRef.current) {
      svgObserver.observe(svgRef.current);
    }

    return () => {
      if (svgRef.current) {
        svgObserver.unobserve(svgRef.current);
      }
    };
  }, []);

  return (
    <div className="feature-scroll-wrapper">
      <div className="svg-container" ref={svgRef}>
        <svg viewBox="0 0 500 100" className="animated-text">
          <defs>
            <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#208ceb' }} />
              <stop offset="50%" style={{ stopColor: '#4a9eff' }} />
              <stop offset="100%" style={{ stopColor: '#208ceb' }} />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="svg-text"
            filter="url(#glow)"
          >
            OUR FEATURES
          </text>
        </svg>
      </div>
      <section className="feature-grid">
        <div className="feature-card" ref={el => featureCardsRef.current[0] = el}>
          <div className="feature-icon">🔍</div>
          <h3 className="feature-title">Explore Skills</h3>
          <p className="feature-desc">Browse a wide range of skills offered by community members.</p>
        </div>
        <div className="feature-card" ref={el => featureCardsRef.current[1] = el}>
          <div className="feature-icon">✋</div>
          <h3 className="feature-title">Offer Your Skills</h3>
          <p className="feature-desc">Share your knowledge and offer help to those eager to learn.</p>
        </div>
        <div className="feature-card" ref={el => featureCardsRef.current[2] = el}>
          <div className="feature-icon">▶️</div>
          <h3 className="feature-title">Learn at Your Own Pace</h3>
          <p className="feature-desc">Access skill-based content and learn on your schedule.</p>
        </div>
        <div className="feature-card" ref={el => featureCardsRef.current[3] = el}>
          <div className="feature-icon">💬</div>
          <h3 className="feature-title">Connect with Community</h3>
          <p className="feature-desc">Engage with peers, mentors, and learners in an interactive space.</p>
        </div>
        <div className="feature-card" ref={el => featureCardsRef.current[4] = el}>
          <div className="feature-icon">🎯</div>
          <h3 className="feature-title">Track Progress</h3>
          <p className="feature-desc">Monitor your learning journey with detailed progress tracking.</p>
        </div>
        <div className="feature-card" ref={el => featureCardsRef.current[5] = el}>
          <div className="feature-icon">🏆</div>
          <h3 className="feature-title">Earn Certificates</h3>
          <p className="feature-desc">Get recognized for your achievements with skill certificates.</p>
        </div>
        <div className="feature-card" ref={el => featureCardsRef.current[6] = el}>
          <div className="feature-icon">📱</div>
          <h3 className="feature-title">Mobile Learning</h3>
          <p className="feature-desc">Learn on the go with our mobile-friendly platform.</p>
        </div>
        <div className="feature-card" ref={el => featureCardsRef.current[7] = el}>
          <div className="feature-icon">🤝</div>
          <h3 className="feature-title">Group Sessions</h3>
          <p className="feature-desc">Join group learning sessions for collaborative experiences.</p>
        </div>
      </section>
    </div>
  );
};

export default Feature; 