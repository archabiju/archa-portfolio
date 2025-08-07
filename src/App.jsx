import React from 'react';
import './App.css';

function App() {
  return (
    <>
     <nav>
  <div className="logo">A<span className="accent"> B</span></div>
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
<h1 className="hero-title animate-name">Hello, I’m <span className="highlight name-glow">Archa Biju</span></h1>
    <h2 className="hero-role text-reveal">Software Engineer | Python Developer | AI Enthusiast| Data Analyst</h2>
    
     <p className="hero-desc text-reveal">
  As a dedicated Software Engineer and Python Developer, I specialize in crafting intelligent systems and scalable solutions. With a deep interest in AI and data analysis, I strive to bridge innovation and impact through technology.
</p>
  </div>

  <div className="hero-photo">
    <img src="/ab.jpg" alt="Archa Biju" />
  </div>
</div>


      <section id="about">
        <h2>About Me</h2>
          <p>Hi! I’m <strong>Archa Biju</strong>, currently pursuing my <strong>MTech in Computer Science & Engineering at Amrita Vishwa Vidyapeetham, Coimbatore</strong>.</p>
       <p> I am passionate about bridging the gap between research and practical application. I specialize in full-stack development, AI tools, and meaningful data-driven solutions. I thrive in collaborative environments that focus on real-world impact and innovation.</p>
        <p>My experience includes internships in data analysis and network engineering, and I’ve developed several impactful projects ranging from IoT systems to stock analysis tools.</p>
      </section>

    


      <section id="academics">
      <h2>Academics</h2>
      <div className="projects-grid">
        <div className="card">
          <h3>M.Tech in Computer Science and Engineering</h3>
          <p>Amrita Vishwa Vidyapeetham, Coimbatore (2025-2027) — Pursuing</p>
        </div>
        <div className="card">
          <h3>B.Tech in Information Technology</h3>
          <p>A P J Abdul Kalam Technological University, Kerala<br />
            Government Engineering College Idukki (2020-2024) — 7.87/10 </p>
        </div>
        <div className="card">
          <h3>12th Grade</h3>
          <p>Kerala Board of Secondary Examinations, EVHSS Neduvathoor (2020) — 94.75%</p>
        </div>
        <div className="card">
          <h3>10th Grade</h3>
          <p>Kerala State Board of Public Examinations, Marthoma Girls High School, Kottarakkara (2018) — 97%</p>
        </div>
      </div>
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

       <section className="section skills fade-in-on-scroll" id="skills">
      <h2 className="section__title">Skills</h2>
      <div className="skills__grid">
        <div className="skill-item stagger-item">Python</div>
        <div className="skill-item stagger-item">C</div>
        <div className="skill-item stagger-item">Java</div>
        <div className="skill-item stagger-item">C</div>
        <div className="skill-item stagger-item">HTML</div>
        <div className="skill-item stagger-item">CSS</div>
        <div className="skill-item stagger-item">SQL</div>
        <div className="skill-item stagger-item">JavaScript</div>
        <div className="skill-item stagger-item">React</div>
        <div className="skill-item stagger-item">Node.js</div>
        <div className="skill-item stagger-item">MongoDB</div>
        <div className="skill-item stagger-item">Express.js</div>
        <div className="skill-item stagger-item">MySQL</div>
        <div className="skill-item stagger-item">Tableau</div>
        <div className="skill-item stagger-item">Pandas</div>
        <div className="skill-item stagger-item">Matplotlib</div>
        <div className="skill-item stagger-item">GitHub</div>
        <div className="skill-item stagger-item">Microsoft Excel</div>
      </div>
    </section>

      <section id="internships">
      <h2>Internships</h2>
      <div className="projects-grid">
        <div className="card">
          <h3>Data Analyst Intern</h3>
          <p><strong>Company:</strong> Unified Mentor</p>
          <p><strong>Duration:</strong> Jan 2024 – Mar 2024 | Remote</p>
          <ul>
            <li>Cleaned, analyzed, and visualized large datasets using Python, Excel, and Tableau.</li>
            <li>Created dashboards and assisted in building predictive models.</li>
            <li>Delivered insights to support key business decisions.</li>
          </ul>
        </div>

        <div className="card">
          <h3>Cisco Networking Intern</h3>
          <p><strong>Company:</strong> Network Bulls</p>
          <p><strong>Duration:</strong> Aug 2023 – Oct 2023 | Gurgaon, India</p>
          <ul>
            <li>Configured enterprise-level Cisco routers and switches.</li>
            <li>Implemented VLANs, firewall rules, and network segmentation.</li>
            <li>Troubleshot and maintained secure network infrastructure.</li>
          </ul>
        </div>
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


      

      <section id="achievements">
        <h2>Achievements & Future Plans</h2>
        <p><b>Achievements:</b> Successfully mentored juniors in programming, participated in national-level hackathons, and contributed to socially impactful projects.</p>
        <p><b>Future Plans:</b> To become a leading software architect, contribute to open-source communities, and innovate solutions in AI for healthcare and education.</p>
      </section>

    <section id="contact" className="section">
  <h2 className="section-title">Let's Connect</h2>
  <div className="contact-list">

    <a href="mailto:archambiju02@gmail.com" className="contact-btn" target="_blank" rel="noopener noreferrer">
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/gmail.svg" alt="Email" style={{ width: '20px', marginRight: '8px' }} />
      archambiju02@gmail.com
    </a>

    <a href="https://github.com/ArchaBiju" target="_blank" rel="noopener noreferrer" className="contact-btn">
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/github.svg" alt="GitHub" style={{ width: '20px', marginRight: '8px' }} />
      GitHub
    </a>

    <a href="https://twitter.com/Archa__Biju" target="_blank" rel="noopener noreferrer" className="contact-btn">
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/twitter.svg" alt="Twitter" style={{ width: '20px', marginRight: '8px' }} />
      Twitter
    </a>

    <a href="https://linkedin.com/in/archa-biju" target="_blank" rel="noopener noreferrer" className="contact-btn">
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/linkedin.svg" alt="LinkedIn" style={{ width: '20px', marginRight: '8px' }} />
      LinkedIn
    </a>

    <p className="contact-phone">📞 +91-8848106211</p>
  </div>
</section>



    <footer>
        © 2025 Archa Biju. All rights reserved.
    </footer>
    </>
  );
}

export default App;