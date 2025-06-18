import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <footer
        className="footer"
        style={{ position: "relative", overflow: "hidden" }}
      >
        {/* Background Video */}
        <video
          className="footer-video-bg"
          src="store/Hero2.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            opacity: 0.25,
            pointerEvents: "none",
          }}
        />
        <div
          className="footer-container"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div className="footer-logo">
            <h2>Skillsharing</h2>
            <p>Empowering collaborative learning and growth worldwide.</p>
          </div>

          <div className="footer-links">
            <div>
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Mentors</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Use</a></li>
              </ul>
            </div>

            <div>
              <h4>Contact Us</h4>
              <ul>
                <li>Email: support@skillsharing.fake</li>
                <li>Phone: +1 (800) 123-4567</li>
                <li>Address: 123 Innovation Drive, LearnCity, EDU 45678</li>
              </ul>
            </div>

            <div>
              <h4>Follow Us</h4>
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter (X)</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="footer-bottom"
          style={{ position: "relative", zIndex: 1 }}
        >
          <p>
            &copy; {new Date().getFullYear()} SkillBridge. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};
