import React, { useState, useEffect, useRef } from "react";
import "./skills.css";
import { Header } from "../component/Header";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    title: "Web Dev",
    description: "HTML, CSS, JS, React",
    img: "store/web.jpg",
  },
  { title: "UI/UX", description: "Figma, Adobe XD", img: "store/fig.jpg" },
  {
    title: "Mobile Dev",
    description: "Flutter, React Native",
    img: "store/flt.jpg",
  },
  {
    title: "Data Science",
    description: "Python, Pandas, ML",
    img: "store/ds.jpg",
  },
  {
    title: "Marketing",
    description: "SEO, SEM, Analytics",
    img: "store/mk.jpg",
  },
  {
    title: "Business Strategy",
    description: "Planning, OKRs",
    img: "store/mks.jpg",
  },
  {
    title: "DevOps",
    description: "Docker, CI/CD, AWS",
    img: "store/dev.jpg",
  },
  {
    title: "AI & ML",
    description: "TensorFlow, Scikit-learn",
    img: "store/ai.jpg",
  },
  {
    title: "Cybersecurity",
    description: "Ethical Hacking, Firewalls",
    img: "store/cbs.jpg",
  },
  {
    title: "Game Dev",
    description: "Unity, Unreal Engine",
    video: "store/unr.mp4",
  },
  {
    title: "Content Creation",
    description: "Video Editing, Scripts",
    img: "store/cc.jpg",
  },
  {
    title: "Cloud Computing",
    description: "Azure, AWS, GCP",
    img: "store/ccom.jpg",
  },
  {
    title: "Blockchain",
    description: "Solidity, Ethereum",
    img: "store/block.jpg",
  },
  {
    title: "AR/VR",
    description: "XR Interaction Design",
    img: "store/vr.jpg",
  },
  {
    title: "Animation",
    description: "2D/3D Motion Design",
    video: "store/ani.mp4",
  },
  {
    title: "Photography",
    description: "Studio & Outdoor",
    img: "store/pho.jpg",
  },
  {
    title: "Finance",
    description: "Investing, Accounting",
    img: "store/fi.jpg",
  },
  { title: "Project Mgmt", description: "Agile, Scrum", img: "store/pro.jpg" },
  {
    title: "E-Commerce",
    description: "Shopify, WooCommerce",
    img: "store/Ecom.jpg",
  },
  {
    title: "Public Speaking",
    description: "Confidence & Delivery",
    img: "store/ps.jpg",
  },
  {
    title: "Writing",
    description: "Copywriting & Blogs",
    img: "store/wri.jpg",
  },
  {
    title: "Music Production",
    description: "DAWs, Mixing",
    video: "store/music.mp4",
  },
  {
    title: "Editing",
    description: "Premiere Pro, Final Cut",
    img: "store/edit.jpg",
  },
  {
    title: "Ethical Hacking",
    description: "Pen Testing",
    img: "store/EH.jpg",
  },
  {
    title: "Soft Skills",
    description: "Communication, Empathy",
    img: "store/ssk.jpg",
  },
];

const Skills = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const skillRefs = useRef([]);

  const filteredSkills = skills.filter((skill) =>
    (skill.title + skill.description)
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    skillRefs.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 50,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: index * 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, [filteredSkills]);

  return (
    <>
      <Header />
      <section className="skill-section">
        <div className="skill-container">
          <h2>Skill Categories</h2>

          {/* 🔍 Search Box */}
          <input
            type="text"
            placeholder="Search skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="skill-search-input"
          />

          <div className="skill-grid">
            {filteredSkills.length > 0 ? (
              filteredSkills.map((skill, i) => (
                <div
                  key={i}
                  className={`skill-box box-${i + 1}`}
                  ref={(el) => (skillRefs.current[i] = el)}
                >
                  <button className="explore-btn">
                    Explore
                    <span className="explore-icon" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <path
                          d="M7 5l5 5-5 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                  {skill.video ? (
                    <video
                      className="skill-img"
                      src={skill.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img
                      className="skill-img"
                      src={skill.img}
                      alt={skill.title}
                    />
                  )}
                  <div className="skill-content">
                    <h3>{skill.title}</h3>
                    <p>{skill.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No matching skills found.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
