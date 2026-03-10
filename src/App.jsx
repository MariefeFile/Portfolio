import { useState, useEffect } from "react";
import "./App.css";


const educationData = [
  {
    period: "2021 - 2026",
    title: "College",
    school: "Cebu Institute of Technology - University",
    location: "Natalio B. Bacalso Ave, Cebu City",
    achievement: "Bachelor of Science in Computer Engineering"
  },
  {
    period: "2019 - 2021",
    label: "",
    title: "Senior High School",
    school: "Pinamungajan National High School",
    location: "Pandacan, Pinamungajan, Cebu",
    achievement: "With High Honor GAS graduate"
  },
  {
    period: "2015 - 2019",
    label: "",
    title: "Junior High School",
    school: "Pinamungajan National High School",
    location: "Pandacan, Pinamungajan, Cebu",
    achievement: "With Honor graduate"
  }
];

function EducationTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(educationData.length - 1, prev + 1));
  };

  const handleFirst = () => {
    setActiveIndex(0);
  };

  const handleLast = () => {
    setActiveIndex(educationData.length - 1);
  };

  const activeEdu = educationData[activeIndex];

  return (
    <div className="education-timeline">
      {/* Timeline Header */}
      <div className="timeline-header">
        {activeEdu.label && <span className="timeline-label">{activeEdu.label}</span>}
        {educationData.map((edu, idx) => (
          <button
            key={idx}
            className={`timeline-period ${idx === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(idx)}
          >
            {edu.period}
          </button>
        ))}
      </div>

      {/* Timeline Track */}
      <div className="timeline-track">
        <div className="timeline-line" />
        {educationData.map((edu, idx) => (
          <button
            key={idx}
            className={`timeline-dot ${idx === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(idx)}
            style={{ left: `${(idx / (educationData.length - 1)) * 100}%` }}
          />
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="timeline-controls">
        <button onClick={handleFirst} disabled={activeIndex === 0}>
          «
        </button>
        <button onClick={handlePrev} disabled={activeIndex === 0}>
          ‹
        </button>
        <button onClick={handleNext} disabled={activeIndex === educationData.length - 1}>
          ›
        </button>
        <button onClick={handleLast} disabled={activeIndex === educationData.length - 1}>
          »
        </button>
      </div>

      {/* Education Details Card */}
      <div className="education-card">
        <h4>{activeEdu.title}</h4>
        <p className="education-school">{activeEdu.school}</p>
        {activeEdu.location && <p className="education-location">{activeEdu.location}</p>}
        <p className="education-achievement">- {activeEdu.achievement}</p>
      </div>
    </div>
  );
}

function useTypewriter(text, speed = 120) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplay(text.slice(0, i));
      if (i === text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);

  return display;
}

const projects = [
  {
    title: "Smart Energy Meter",
    description:
      "IoT-based monitoring using ESP32, PZEM, Firebase and a Flutter dashboard.",
    stack: ["ESP32", "PZEM", "Firebase", "Flutter"],
    link: "https://github.com/Noturius247/Smart_Energy_System",
  },
  {
    title: "WILDCAT FIX",
    description:
      "Responsive React UI with forms, filters, and modals for campus issue tracking.",
    stack: ["React", "Vite", "CSS Modules"],
    link: "https://github.com/emmanueapura/WildcatFix",
  },
  {
    title: "WILDFIND SYSTEM ",
    description:
      "Frontend for managing lost tracking with search, filter and activity feed.",
    stack: ["React", "CSS", "REST"],
    link: "https://github.com/AspireSpartan/WILDFind_webapp.git",
  },
];

const certificates = [
  { title: "Planning & Designing Custom Software in AI", file: "/Marie_Fe_Tapales1.jpg" },
  { title: "Analysis of Algorithms", file: "/Marie_Fe_Tapales2.jpg" },
  { title: "Cybersecurity Workshop", file: "/Marie_Fe_Tapales3.pdf" },
  { title: "Transition to Fabric for a Power BI Developer", file: "/Marie_Fe_Tapales4.pdf" },
  { title: "Smart Living: Leveraging AI for Personal Productivity", file: "/Marie_Fe_Tapales5.pdf" },
  { title: "Cybersecurity for Educators", file: "/Marie_Fe_Tapales6.pdf" },
  { title: "Agile-Driven Customer Journeys", file: "/Marie_Fe_Tapales7.pdf" },
  { title: "Exploring Quantum Computing: A Glimpse into the Future of Tech", file: "/Marie_Fe_Tapales8.jpg" },
  { title: "DILAAB: Igniting Language Learning Through Project and Problem Based Approaches", file: "/Marie_Fe_Tapales9.pdf" },
  { title: "Work Less with No-Code + AI", file: "/Marie_Fe_Tapales10.jpg" },
  { title: "Future-Proof Your Business: The Economic Edge of QuickBooks Enterprise and AWS Integration", file: "/Marie_Fe_Tapales11.jpg" },
  { title: "AI AND BEYOND: Artificial Intelligence and the Future of Learning and Work", file: "/Marie_Fe_Tapales12.pdf" },
  { title: "Introduction to Ethical Hacking", file: "/Marie_Fe_Tapales13.jpg" },
  { title: "Taming Software Complexity", file: "/Marie_Fe_Tapales14.jpg" },
  { title: "Smarter Connections: Unlocking the Power of AI and IoT", file: "/Marie_Fe_Tapales15.jpg" }
];


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const typedTitle = useTypewriter("Hi, I'm Marie Fe!", 100);

  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  return (
    <div className="page">
      <header className="nav">
        <div className="nav-logo">
  <div className="nav-logo-icon">
    MT
    <span className={`status-dot ${isOnline ? "online" : "offline"}`} />
  </div>
  <span>Marie Fe E. Tapales</span>
</div>



        {/* Desktop nav */}
        <nav className="nav-links">
          <a
            href="#home"
            className={activeSection === "home" ? "active-link" : ""}
            onClick={() => handleNavClick("home")}
          >
            Home
          </a>
          <a
            href="#projects"
            className={activeSection === "projects" ? "active-link" : ""}
            onClick={() => handleNavClick("projects")}
          >
            Projects
          </a>
          <a
            href="#about"
            className={activeSection === "about" ? "active-link" : ""}
            onClick={() => handleNavClick("about")}
          >
            About Me
          </a>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active-link" : ""}
            onClick={() => handleNavClick("contact")}
          >
            Contact
          </a>
        </nav>

        <button
          className="nav-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </header>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="nav-mobile">
          <a
            href="#home"
            className={activeSection === "home" ? "active-link" : ""}
            onClick={() => handleNavClick("home")}
          >
            Home
          </a>
          <a
            href="#projects"
            className={activeSection === "projects" ? "active-link" : ""}
            onClick={() => handleNavClick("projects")}
          >
            Projects
          </a>
          <a
            href="#about"
            className={activeSection === "about" ? "active-link" : ""}
            onClick={() => handleNavClick("about")}
          >
            About Me
          </a>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active-link" : ""}
            onClick={() => handleNavClick("contact")}
          >
            Contact
          </a>
        </nav>
      )}
{/* Hero */}
<section id="home" className="hero">
  <div className="hero-left">
    <p className="hero-tag">UI/UX Design & Frontend Developer</p>
    <h1 className="hero-title typing">{typedTitle}</h1>

    <p className="hero-subtitle">
      As a Computer Engineer, I specialize in frontend development and
      UI/UX design, creating intuitive and responsive user interfaces. I
      work well in collaborative environments, effectively communicating
      ideas and contributing to team-driven projects while integrating
      smart and practical solutions.
    </p>
    <div className="hero-actions">
      <a href="#projects" className="btn primary">
        View Projects
      </a>
      <a href="#contact" className="btn ghost">
        Contact Me
      </a>
    </div>
    <div className="hero-stats">
      <span>2+ projects</span>
      <span>10+ certificates</span>
      <span>C · C++ · C# · Javascript · Access · Firebase</span>
      <span>Based in PH</span>
    </div>
   {/* Contact Info */}
<div className="hero-contact horizontal">
  <div className="contact-item">
    <span className="contact-icon">📍</span>
    <span className="contact-text">Busay, Pinamungajan, Cebu</span>
  </div>

  <div className="contact-item">
    <span className="contact-icon">✉️</span>
    <a href="mailto:mariefetapales@gmail.com" className="contact-text">
      mariefetapales@gmail.com
    </a>
  </div>

  <div className="contact-item">
    <span className="contact-icon">📞</span>
    <span className="contact-text">+63 999 973 8368</span>
  </div>

  <a
    href="https://www.linkedin.com/in/marie-fe-tapales-286161350/"
    target="_blank"
    rel="noreferrer"
    className="contact-item contact-link"
  >
    <span className="contact-icon">🔗</span>
    <span className="contact-text">LinkedIn</span>
  </a>
</div>


  </div>

  <div className="hero-right">
    <div className="hero-photo">
      <img src="/myprofile.jpg" alt="Marie Fe E. Tapales" />
    </div>
    <p className="hero-education">
      <strong>Cebu Institute of Technology University</strong>
      <br />
      S.Y.: 2025-2026
    </p>

  </div>
</section>


      {/* About + Skills */}
      <section id="about" className="about">
        {/* ABOUT */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am a Bachelor of Science in Computer Engineering graduate with a
            strong focus on frontend development and UI/UX design. I have hands-on
            experience in embedded systems, IoT applications, and power monitoring
            projects, allowing me to build complete, functional, and user-centered
            solutions. I work well in collaborative environments and continuously
            strive to improve my technical and professional skills.
          </p>

          {/* EDUCATION TIMELINE */}
          <div className="about-section">
            <h3>Education</h3>
            <EducationTimeline />
          </div>

         <div className="about-section">
  <h3>Experience</h3>

  <a
    href="/Marie_Fe_Tapales_Fusion.jpg"
    target="_blank"
    rel="noreferrer"
    className="experience-link"
  >
    <p className="experience-title">
      <strong>IT Support Intern</strong> — Fusion BPO Services Philippines Inc.
    </p>
    <p className="experience-date">May – July 2025</p>
  </a>
</div>

          {/* CERTIFICATES */}
          <div className="about-section">
            <h3>Certificates</h3>
            <ul>
  {certificates.map((cert, index) => (
    <li key={index}>
      <a
        href={cert.file}
        target="_blank"
        rel="noreferrer"
        className="certificate-link"
      >
        {cert.title}
      </a>
    </li>
  ))}
</ul>


            {/* RESUME & COVER LETTER */}
  <div className="documents-section">
    <h4>Documents</h4>
    <ul>
      <li>
        <a
          href="/Tapales__Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="certificate-link"
        >
          📄 View Resume
        </a>
      </li>
      <li>
        <a
          href="/Marie_Fe_Tapales_Cover_Letter.pdf"
          target="_blank"
          rel="noreferrer"
          className="certificate-link"
        >
          ✉️ View Cover Letter
        </a>
      </li>
    </ul>
  </div>
          </div>
        </div>

        {/* SKILLS */}
        <div className="skills">
          <h3>Skills</h3>

          <div className="skills-groups">
               {/* Frontend Development */}
    <div className="skills-group">
      <h4>Frontend Development</h4>
      <div className="skill-item">
        <img src="/react.png" alt="React" className="skill-icon"/>
        <span className="skill-name">React</span>
        <div className="skill-bar"><div className="skill-fill" style={{ width: "80%" }}></div></div>
        <span className="skill-percent">80%</span>
      </div>
      <div className="skill-item">
        <img src="/vite-logo.png" alt="Vite" className="skill-icon"/>
        <span className="skill-name">Vite</span>
        <div className="skill-bar"><div className="skill-fill" style={{ width: "85%" }}></div></div>
        <span className="skill-percent">85%</span>
      </div>
      <div className="skill-item">
        <img src="/html.jpg" alt="HTML" className="skill-icon"/>
        <span className="skill-name">HTML</span>
        <div className="skill-bar"><div className="skill-fill" style={{ width: "80%" }}></div></div>
        <span className="skill-percent">80%</span>
      </div>
      <div className="skill-item">
        <img src="/css.png" alt="CSS" className="skill-icon"/>
        <span className="skill-name">CSS</span>
        <div className="skill-bar"><div className="skill-fill" style={{ width: "80%" }}></div></div>
        <span className="skill-percent">80%</span>
      </div>
      <div className="skill-item">
        <img src="/js.png" alt="JavaScript" className="skill-icon"/>
        <span className="skill-name">JavaScript</span>
        <div className="skill-bar"><div className="skill-fill" style={{ width: "85%" }}></div></div>
        <span className="skill-percent">85%</span>
      </div>
    </div>

             {/* Embedded & IoT */}
    <div className="skills-group">
      <h4>Embedded/IoT/Languages</h4>
      <div className="skill-item">
        <img src="/esp32.png" alt="ESP32" className="skill-icon"/>
        <span className="skill-name">ESP32</span>
        <div className="skill-bar"><div className="skill-fill" style={{ width: "80%" }}></div></div>
        <span className="skill-percent">80%</span>
      </div>
      <div className="skill-item">
        <img src="/C_C++.jpg" alt="C / C++" className="skill-icon"/>
        <span className="skill-name">C & C++ </span>
        <div className="skill-bar"><div className="skill-fill" style={{ width: "85%" }}></div></div>
        <span className="skill-percent">85%</span>
      </div>
      <div className="skill-item">
        <img src="/22.png" alt="C / C++" className="skill-icon"/>
        <span className="skill-name"> C# & JavaScript </span>
        <div className="skill-bar"><div className="skill-fill" style={{ width: "85%" }}></div></div>
        <span className="skill-percent">85%</span>
      </div>
      <div className="skill-item">
        <img src="/sensor.webp" alt="Sensors" className="skill-icon"/>
        <span className="skill-name">Sensors</span>
        <div className="skill-bar"><div className="skill-fill" style={{ width: "75%" }}></div></div>
        <span className="skill-percent">75%</span>
      </div>
      <div className="skill-item">
        <img src="/pm.png" alt="Power Monitoring" className="skill-icon"/>
        <span className="skill-name">Power Monitoring</span>
        <div className="skill-bar"><div className="skill-fill" style={{ width: "75%" }}></div></div>
        <span className="skill-percent">75%</span>
      </div>
    </div>

             {/* Tools & Technologies */}
<div className="skills-group">
  <h4>Tools & Technologies</h4>

  <div className="skill-item">
    <img src="/firebase.png" alt="Firebase" className="skill-icon" />
    <span className="skill-name">Firebase</span>
    <div className="skill-bar">
      <div className="skill-fill" style={{ width: "85%" }}></div>
    </div>
    <span className="skill-percent">85%</span>
  </div>

  <div className="skill-item">
    <img src="/git.jpg" alt="Git" className="skill-icon" />
    <span className="skill-name">Git</span>
    <div className="skill-bar">
      <div className="skill-fill" style={{ width: "80%" }}></div>
    </div>
    <span className="skill-percent">80%</span>
  </div>

  <div className="skill-item">
    <img src="/github.png" alt="GitHub" className="skill-icon" />
    <span className="skill-name">GitHub</span>
    <div className="skill-bar">
      <div className="skill-fill" style={{ width: "85%" }}></div>
    </div>
    <span className="skill-percent">85%</span>
  </div>

  <div className="skill-item">
    <img src="/node.png" alt="Node.js" className="skill-icon" />
    <span className="skill-name">Node.js</span>
    <div className="skill-bar">
      <div className="skill-fill" style={{ width: "80%" }}></div>
    </div>
    <span className="skill-percent">80%</span>
  </div>

  <div className="skill-item">
    <img src="/flutter.png" alt="Flutter" className="skill-icon" />
    <span className="skill-name">Flutter</span>
    <div className="skill-bar">
      <div className="skill-fill" style={{ width: "80%" }}></div>
    </div>
    <span className="skill-percent">80%</span>
  </div>

  <div className="skill-item">
    <img src="/figma.png" alt="Figma" className="skill-icon" />
    <span className="skill-name">Figma</span>
    <div className="skill-bar">
      <div className="skill-fill" style={{ width: "80%" }}></div>
    </div>
    <span className="skill-percent">80%</span>
  </div>

  <div className="skill-item">
    <img src="/canva.jpg" alt="Canva" className="skill-icon" />
    <span className="skill-name">Canva</span>
    <div className="skill-bar">
      <div className="skill-fill" style={{ width: "80%" }}></div>
    </div>
    <span className="skill-percent">80%</span>
  </div>

  {/* NEW SKILLS */}
  <div className="skill-item">
    <img src="/filmo.webp" alt="Filmora" className="skill-icon" />
    <span className="skill-name">Wondershare Filmora</span>
    <div className="skill-bar">
      <div className="skill-fill" style={{ width: "85%" }}></div>
    </div>
    <span className="skill-percent">85%</span>
  </div>

  <div className="skill-item">
    <img src="/PR.png" alt="Adobe Editor" className="skill-icon" />
    <span className="skill-name">Adobe Creative Suite</span>
    <div className="skill-bar">
      <div className="skill-fill" style={{ width: "75%" }}></div>
    </div>
    <span className="skill-percent">75%</span>
  </div>
</div>


          {/* Soft Skills */}
<div className="skills-group">
  <h4>Soft Skills</h4>

  <div className="soft-skills">
    <div className="skill-item">
      <span className="skill-icon">🤝</span>
      <span className="skill-name">Teamwork</span>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: "90%" }}></div>
      </div>
      <span className="skill-percent">90%</span>
    </div>

    <div className="skill-item">
      <span className="skill-icon">🗣️</span>
      <span className="skill-name">Communication</span>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: "80%" }}></div>
      </div>
      <span className="skill-percent">80%</span>
    </div>

    <div className="skill-item">
      <span className="skill-icon">⏰</span>
      <span className="skill-name">Time Management</span>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: "85%" }}></div>
      </div>
      <span className="skill-percent">85%</span>
    </div>

    <div className="skill-item">
      <span className="skill-icon">📋</span>
      <span className="skill-name">Project Management</span>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: "80%" }}></div>
      </div>
      <span className="skill-percent">80%</span>
    </div>

    <div className="skill-item">
      <span className="skill-icon">🔄</span>
      <span className="skill-name">Adaptability & Flexibility</span>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: "85%" }}></div>
      </div>
      <span className="skill-percent">85%</span>
    </div>
  </div>
</div>

          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects">
        <h2>Selected Projects</h2>
        <div className="project-grid">
          {projects.map((p, index) => (
            <article key={index} className="project-card">
              <h3>{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              <div className="pill-row">
                {p.stack.map((s) => (
                  <span key={s} className="pill pill-soft">
                    {s}
                  </span>
                ))}
              </div>
              <a
  href={p.link}
  className="project-link"
  target="_blank"
  rel="noopener noreferrer"
>
  View details →
</a>

            </article>
          ))}
        </div>
      </section>
{/* Contact */}
<section id="contact" className="contact">
  <div className="contact-card">
    <div className="contact-header">
      <h2>Let’s Connect</h2>
      <p>
        Open to junior embedded, frontend roles, or project collaborations.
        Let’s build something impactful together.
      </p>
    </div>

    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="input-row">
        <div className="input-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <label>Name</label>
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <label>Email</label>
        </div>
      </div>

      <div className="input-group">
        <textarea
          rows="4"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        />
        <label>Your Message</label>
      </div>

      <button type="submit" className="send-btn">
  🚀 Send Message
</button>
    </form>

    <div className="contact-links">
      <a href="mailto:mariefetapales@gmail.com">📧 Email</a>
      <a href="https://github.com/MariefeFile" target="_blank" rel="noreferrer">
        💻 GitHub
      </a>
      <a href="https://www.linkedin.com/in/marie-fe-tapales-286161350/" target="_blank" rel="noreferrer">
        🔗 LinkedIn
      </a>
    </div>
  </div>
</section>

<footer className="footer">
  © {new Date().getFullYear()} Marie Fe E. Tapales · Built with React & Vite
</footer>

    </div>
  );
}

export default App;