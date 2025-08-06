import React from 'react';
import './App.css';

function App() {
  return (
    <>
     <nav>
  <div className="logo">ARCHA <span className="accent"> BIJU</span></div>
  <ul>
    <li><a href="#about">About</a></li>
    <li><a href="#academics">Academics</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
    <li>
      <a
        href="/Archa_biju_resume.pdf"
        download
        className="nav-download"
      >
       Download CV
      </a>
    </li>
  </ul>
</nav>


      <div className="hero">
  <div className="hero-text">
    <h1>Hello, I’m Archa Biju</h1>
    <p>
      A passionate Software Engineer with a vision to build meaningful,
      high-impact tech solutions. Skilled in full-stack development and driven
      by curiosity.
    </p>
  </div>

  <div className="hero-photo">
    <img src="/ab.jpg" alt="Archa Biju" />
  </div>
</div>


      <section id="about">
        <h2>About Me</h2>
        <p>Hi! I’m Archa Biju, currently pursuing my <b>MTech in Computer Science & Engineering at Amrita Vishwa Vidyapeetham, Coimbatore.</b></p>
        <p className="summary">
          <strong>Professional Summary:</strong> I’m passionate about bridging the gap between research and practical application.
          I love collaborating on projects that create real-world impact and help shape the future of tech.
        </p>
      </section>

      <section id="family">
        <h2>Family</h2>
        <p><strong>Family:</strong> I’m blessed with a supportive family — my father, my mother, my loving sibling, and our adorable dog, Diana, who’s truly part of the family.</p>
      </section>

      <section id="Hobbies">
        <h2>Hobbies</h2>
        <p><strong>Hobbies:</strong> I enjoy reading, traveling, and exploring new tech tools. When I’m not coding, you’ll probably find me spending time with Diana!</p>
      </section>

      <section id="academics">
        <h2>Academics</h2>
        <ul>
          <li><b>M.Tech in Computer Science and Engineering: Amrita Vishwa Vidyapeetham, Coimbatore (2025-2027)— Pursuing</b></li>
          <li><b>B.Tech in Information Technology: Government Engineering College Idukki(2020-2024), CGPA-7.87</b></li>
          <li><b>12th: Kerala Board of Secondary Examinations, EVHSS, Neduvathoor(2020), 94.75%</b></li>
          <li><b>10th: Kerala State Board of Public Examinations, Marthoma girls high school ,Kottarakkara(2018), 97%</b></li>
        </ul>
      </section>

      <section id="certifications">
        <h2>Certifications</h2>
        <ul>
          <li>Data Analyst Certification – OneRoadmap</li>
          <li>Data Analytics Virtual Experience – Deloitte Forage</li>
          <li>SQL for Data Science – IBM</li>
          <li>ASAP Work Readiness Program</li>
          <li>Introduction to Career Skills in Data Analytics – LinkedIn</li>
        </ul>
      </section>

      <section id="achievements">
        <h2>Achievements & Future Plans</h2>
        <p><b>Achievements:</b> Successfully mentored juniors in programming, participated in national-level hackathons, and contributed to socially impactful projects.</p>
        <p><b>Future Plans:</b> To become a leading software architect, contribute to open-source communities, and innovate solutions in AI for healthcare and education.</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="card">
            <h3>IoT-based LiDAR Pothole Detection System</h3>
            <p>Prototype using LiDAR to detect potholes and map road surfaces.</p>
          </div>
          <div className="card">
            <h3>Green Destination: Employee Attrition Analysis</h3>
            <p>Data analysis project with Python & Tableau for HR insights.</p>
          </div>
          <div className="card">
            <h3>Coca-Cola Stock Analysis</h3>
            <p>ML prediction system for Coca-Cola stock trends.</p>
          </div>
          <div className="card">
            <h3>Travel Website</h3>
            <p>Responsive site for booking and destination guides.</p>
          </div>
        </div>
      </section>

      <section id="skills">
        <h2>Skills & Tech Stack</h2>
        <p><strong>Languages:</strong> Python, Java, C, SQL, JavaScript</p>
        <p><strong>Web:</strong> HTML, CSS, React.js</p>
        <p><strong>Database:</strong> MySQL, MongoDB</p>
        <p><strong>Tools:</strong> Tableau, Power BI, Excel, Jupyter</p>
        <p><strong>Soft Skills:</strong> Critical Thinking, Communication, Teamwork</p>
        <p><strong>Languages Known:</strong> English, Malayalam, Hindi</p>
      </section>

      <section id="internships">
        <h2>Internships</h2>
        <div className="internship">
          <h3>Data Analyst Intern — Unified Mentor</h3>
          <p><strong>Jan 2024 – Mar 2024 | Remote</strong></p>
          <ul>
            <li>Cleaned, analyzed, and visualized large datasets using Python, Excel, and Tableau.</li>
            <li>Created exploratory dashboards and supported predictive model development.</li>
            <li>Worked closely with mentors to deliver data-driven insights for business decisions.</li>
          </ul>
        </div>

        <div className="internship">
          <h3>Cisco Networking Intern — Network Bulls</h3>
          <p><strong>Aug 2023 – Oct 2023 | Gurgaon, India</strong></p>
          <ul>
            <li>Configured real-time enterprise-level Cisco network setups, including routers and switches.</li>
            <li>Implemented firewall rules, VLAN segmentation, and network security measures.</li>
            <li>Gained hands-on experience troubleshooting and maintaining robust network infrastructures.</li>
          </ul>
        </div>
      </section>

      <section id="products">
        <h2>Products</h2>
        <div className="projects-grid">
          <div className="card">
            <h3>IoT-based LiDAR Pothole Detection</h3>
            <p>
              A deployable prototype that uses LiDAR sensors to map road surfaces,
              detect potholes in real time, and alert authorities or drivers for safer, smarter roads.
            </p>
          </div>
        </div>
      </section>

    <section id="contact">
  <h2>Contact Info</h2>
  <div className="contact-list">
    <a href="mailto:archambiju02@gmail.com" className="contact-btn">📧 archambiju02@gmail.com</a>
    <a href="https://github.com/ArchaBiju" target="_blank" rel="noreferrer" className="contact-btn">🐱 GitHub</a>
    <a href="https://twitter.com/Archa__Biju" target="_blank" rel="noreferrer" className="contact-btn">🐦 Twitter</a>
    <a href="https://linkedin.com/in/archa-biju" target="_blank" rel="noreferrer" className="contact-btn">🔗 LinkedIn</a>
    <p>📞 +91-8848106211</p>
  </div>
</section>

    <footer>
        © 2025 Archa Biju. All rights reserved.
    </footer>
    </>
  );
}

export default App;