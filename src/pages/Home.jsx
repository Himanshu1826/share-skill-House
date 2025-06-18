import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Home.css";
import { Header } from "../component/Header";
import { Footer } from "../component/Footer";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    gsap.to(".hero h1, .hero p, .hero .cta-btn", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    gsap.to(".feature", {
      scrollTrigger: {
        trigger: ".features",
        start: "top 80%",
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });

    gsap.to(".content-box", {
      scrollTrigger: {
        trigger: ".more-content",
        start: "top 85%",
      },
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });

    gsap.to(".testimonials blockquote", {
      scrollTrigger: {
        trigger: ".testimonials",
        start: "top 85%",
      },
      opacity: 1,
      x: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });

    gsap.to(".call-to-action", {
      scrollTrigger: {
        trigger: ".call-to-action",
        start: "top 85%",
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
    });
    gsap.to(".footer", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top 90%",
  },
  opacity: 1,
  y: 0,
  duration: 1.2,
  ease: "power3.out",
});

  }, []);

  return (
    <>
      <Header />
      <div className="home">
        {/* Hero Section */}
        <section className="hero">
          {/* Background Video */}
          <video className="hero-video" autoPlay muted loop playsInline>
            <source src="store/Hero2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Hero Content */}
          <div className="hero-overlay">
            <h1>Empower Your Learning Journey</h1>
            <p>
              Discover, share, and grow your skills through collaborative
              learning experiences.
            </p>
            <button className="cta-btn">Get Started</button>
          </div>
        </section>

        {/* Features */}
        <section className="section">
          <h2>Why Choose Our Platform</h2>
          <div className="features">
            <div className="feature">
              <video
                src="store/c1one.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  marginBottom: "1rem",
                }}
              />
              <h3>Interactive Learning</h3>
              <p>Engage with hands-on projects and real-world challenges.</p>
            </div>
            <div className="feature">
              <video
                src="store/c2one.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  marginBottom: "1rem",
                }}
              />
              <h3>Expert Mentors</h3>
              <p>Learn from industry professionals and seasoned experts.</p>
            </div>
            <div className="feature">
              <video
                src="store/c3one.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  marginBottom: "1rem",
                }}
              />
              <h3>Global Community</h3>
              <p>Connect with learners and mentors around the world.</p>
            </div>
          </div>
        </section>

        {/* Skill Categories */}
        <section className="section">
          <h2>Explore Popular Skill Categories</h2>
          <div className="category-marquee">
            <div className="marquee-row">
              <div className="marquee-content">
                {[
                  "Web Development",
                  "UI/UX Design",
                  "Digital Marketing",
                  "Data Science",
                  "Photography",
                  "Writing",
                  "Public Speaking",
                  "Finance",
                  "Business Strategy",
                  "Leadership",
                ].flatMap((skill, i) => [
                  <span key={`top1-${i}`}>{skill}</span>,
                  <span key={`top2-${i}`}>{skill}</span>,
                ])}
              </div>
            </div>
            <div className="marquee-row reverse">
              <div className="marquee-content">
                {[
                  "Graphic Design",
                  "Product Management",
                  "Animation",
                  "Mobile Apps",
                  "Game Development",
                  "Machine Learning",
                  "Content Creation",
                  "Negotiation",
                  "Time Management",
                  "AI Tools",
                ].flatMap((skill, i) => [
                  <span key={`bottom1-${i}`}>{skill}</span>,
                  <span key={`bottom2-${i}`}>{skill}</span>,
                ])}
              </div>
            </div>
          </div>
        </section>

        {/* Extra Content Section */}
        <section className="sectionn">
          <h2>Unlock More Possibilities</h2>
          <div className="more-content">
            <div className="content-box">
              <h4>Track Your Progress</h4>
              <p>
                Monitor your learning milestones and stay motivated with your
                personal dashboard.
              </p>
            </div>
            <div className="content-box">
              <h4>Earn Certificates</h4>
              <p>
                Receive official recognition as you complete skills and courses
                successfully.
              </p>
            </div>
            <div className="content-box">
              <h4>Join Live Events</h4>
              <p>
                Participate in webinars, workshops, and Q&A sessions with
                industry leaders.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section">
          <h2>What Our Users Say</h2>
          <div className="testimonials">
            <blockquote>
              <div className="testimonial-user">
                <img src="store/g1.jpg" alt="Aisha M." />
              </div>
              “This platform helped me level up my coding skills in no time!”
              <span>- Aisha M.</span>
            </blockquote>
            <blockquote>
              <div className="testimonial-user">
                <img src="store/b1.jpg" alt="Rahul K." />
              </div>
              “The mentorship and community here are outstanding.”
              <span>- Rahul K.</span>
            </blockquote>
          </div>
        </section>

        {/* Call To Action */}
        <section className="call-to-action">
          <h2>Start Your Journey Today</h2>
          <p>Join thousands of learners and mentors making a difference.</p>
          <button className="cta-btn">Join Now</button>
        </section>
      </div>
      <Footer/>
      {/* Footer */}
    </>
  );
};

export default Home;
