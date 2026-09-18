
import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Headphones,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Search,
  Server,
  Settings,
  ShieldCheck,
  Sun,
  UserRound,
  Workflow,
  X,
} from "lucide-react";
import profileImage from "./images/profile.jpg";
import dashboardImage from "./images/dashboard.png";
import posImage from "./images/POS.png";
import technicalImage from "./images/technical.png";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode((current) => {
      const next = !current;

      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("portfolio-theme", next ? "dark" : "light");

      return next;
    });
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "What I Do", id: "services" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  const skills = [
    "Technical Support",
    "Customer Support",
    "Operations Support",
    "Problem Solving",
    "Data Entry & Verification",
    "Documentation & Records",
    "Email & Chat Support",
    "Scheduling & Follow-up",
    "Excel & Google Sheets",
    "Python",
    "JavaScript / TypeScript",
    "SQL",
    "React",
    "FastAPI & REST APIs",
    "n8n Automation",
    "Git & GitHub",
  ];

  const services = [
    {
      icon: <Headphones size={24} />,
      title: "Technical Support",
      text: "Investigating application issues, authentication problems, API errors and other technical issues while keeping communication clear and practical.",
    },
    {
      icon: <BriefcaseBusiness size={24} />,
      title: "Customer & Operations Support",
      text: "Handling day-to-day requests, follow-ups, records, coordination and operational tasks with attention to accuracy and completion.",
    },
    {
      icon: <Database size={24} />,
      title: "Data & Reporting",
      text: "Working with spreadsheets, structured information, data verification, documentation and reporting to keep information reliable and useful.",
    },
    {
      icon: <Workflow size={24} />,
      title: "Workflow Automation",
      text: "Building practical workflows with APIs, n8n, Google Sheets and software integrations to reduce repetitive work.",
    },
  ];

  const projects = [
    {
      image: posImage ,
      type: "image",
      title: "Business Management & POS Application",
      category: "Software Development",
      description:
        "A progressive-web-based business management and point-of-sale application covering sales, inventory, employees, expenses and notifications. easy to navigate mobile ui and can be used to monitor business and increase it fficiency",
      tools: [
        "React",
        "TypeScript",
        "Python",
        "FastAPI",
        "PostgreSQL",
      ],
      icon: <Code2 size={22} />,
    },
    {
      image: technicalImage,
      type: "image",
      title: "Application Troubleshooting & API Support",
      category: "Technical Support",
      description:
        "Hands-on troubleshooting of authentication, CORS, API method, database and deployment issues while developing and maintaining web applications.",
      tools: [
        "REST APIs",
        "JWT",
        "FastAPI",
        "PostgreSQL",
        "Debugging",
      ],
      icon: <Server size={22} />,
    },
    {
  image: dashboardImage,
  type: "image",
  title: "Sales Performance Dashboard",
  category: "Data & Analysis",
  description:
    "Practical work with structured data, spreadsheets, SQL, interactive Excel dashboard to analyze stationery sales across product categories and regions. It helps identify revenue patterns, compare regional performance, and turn raw sales data into clearer business insights.",
  tools: [
    "Excel",
    "Data Analysis",
    "Data Visualization",
    "Reporting",
  ],
  icon: <Database size={22} />,
},
     
    {
      image: "/images/j.jpg",
      title: "sustomer suport project",
      category: "support",
      description:
        "Exploring automated workflows that connect business processes, APIs and data sources to reduce repetitive manual tasks.",
      tools: [
        "n8n",
        "APIs",
        "Google Sheets",
        "Webhooks",
        "Automation",
      ],
      icon: <Workflow size={22} />,
    },
  ];

  const experience = [
    {
      period: "Apr 2024 – Jul 2026",
      role: "Medical Assistant",
      company: "Navy Reference Hospital, Calabar, Nigeria",
      points: [
        "Worked with electronic patient records and checked information for accuracy and completeness.",
        "Maintained spreadsheet-based inventory records and supported routine documentation.",
        "Prepared and reviewed audit and report documents while handling confidential information carefully.",
        "Identified data issues, made corrections and followed up on administrative tasks.",
        "Worked across multiple responsibilities in a busy environment while maintaining accurate records.",
      ],
    },
    {
      period: "Nov 2021 – Nov 2022",
      role: "Science Laboratory Assistant — NYSC",
      company:
        "Federal College of Education (Special), Oyo State, Nigeria",
      points: [
        "Supported laboratory schedules, materials and day-to-day activities.",
        "Handled communication and follow-up with students and staff.",
        "Provided assistance with both online and in-person requests.",
        "Maintained organized records and helped keep activities running smoothly.",
      ],
    },
    {
      period: "Sept 2020 – Aug 2021",
      role: "Administrative Support Intern",
      company: "Primary Health Care Centre",
      points: [
        "Maintained equipment and administrative records.",
        "Reported issues and followed up on technical or operational requests.",
        "Assisted with documentation and routine administrative tasks.",
        "Helped keep information organized and accessible for day-to-day work.",
      ],
    },
    {
      period: "Ongoing",
      role: "Full-Stack Developer — Independent Projects",
      company: "Software Development & Technical Learning",
      points: [
        "Build and troubleshoot web applications using React, JavaScript, Python, FastAPI and PostgreSQL.",
        "Work with REST APIs, authentication, databases, deployment and application debugging.",
        "Build practical projects focused on business operations, automation and data handling.",
      ],
    },
  ];

  const education = [
    {
      title: "HND Microbiology",
      institution: "Federal Polytechnic Auchi",
      year: "2021",
    },
    {
      title: "Google Data Analytics Professional Certificate",
      institution: "Coursera",
      year: "Completed",
    },
    {
      title: "Meta Front-End Developer Certificate",
      institution: "Meta",
      year: "Completed",
    },
    {
      title: "Programming with Python and JavaScript",
      institution: "Meta",
      year: "Completed",
    },
    {
      title: "Introduction to Databases for Back-End Development",
      institution: "Meta",
      year: "Completed",
    },
    {
      title: "National Youth Service Corps",
      institution: "NYSC",
      year: "Completed",
    },
  ];

  return (
    <div className="portfolio">
      {/* =========================
          NAVIGATION
      ========================== */}
      <header className="navbar">
        <div className="nav-container">
          <button
            className="brand"
            onClick={() => scrollToSection("home")}
            aria-label="Go to home"
          >
            <span className="brand-mark">GB</span>

            <span className="brand-text">
              <strong>Grace Sasere</strong>
              <small>Technical Support</small>
            </span>
          </button>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}

            <a
              href="/Grace-Bamidele-Sasere-CV.pdf"
              className="nav-cv"
              target="_blank"
              rel="noreferrer"
            >
              <Download size={16} />
              CV
            </a>
          </nav>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
              title={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? <Sun size={19} /> : <Moon size={19} />}
            </button>

            <button
              className="mobile-menu"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* =========================
            HOME
        ========================== */}
        <section id="home" className="hero section">
          <div className="hero-container">
            <div className="hero-content">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Available for remote opportunities
              </div>

              <p className="hero-intro">Hello, I'm</p>

              <h1>
                Grace Bamidele
                <span>Sasere</span>
              </h1>

              <h2>Technical Customer Support & Operations</h2>

              <p className="hero-focus">
                Customer Support <span>•</span> Operations <span>•</span> Data{" "}
                <span>•</span> Software Support
              </p>

              <p className="hero-description">
                I have experience working with people, information, electronic
                systems and day-to-day operations, with a growing technical
                background in software and web applications. I enjoy
                investigating problems, keeping information accurate,
                following up on issues and finding practical ways to get work
                moving again.
              </p>

              <div className="hero-actions">
                <button
                  className="btn btn-primary"
                  onClick={() => scrollToSection("projects")}
                >
                  View My Work
                  <ArrowRight size={18} />
                </button>

                <button
                  className="btn btn-secondary"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact Me
                </button>
              </div>

              <div className="hero-links">
                <a
                  href="https://github.com/saseregrace358-dot"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <Github size={19} />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/grace-sasere/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <ExternalLink size={18} />
                  LinkedIn
                </a>

                <a href="mailto:sseun3568@gmail.com">
                  <Mail size={18} />
                  Email
                </a>
              </div>
            </div>

            <div className="hero-side">
              <div className="profile-card">
                <div className="profile-image-wrap">
                  <img
                    src={profileImage}
                    alt="Grace Bamidele Sasere"
                    className="profile-image"
                  />

                  <span className="availability-badge">
                    <span />
                    Open to work
                  </span>
                </div>

                <div className="profile-card-content">
                  <p className="profile-label">Based in</p>
                  <div className="profile-location">
                    <MapPin size={17} />
                    Nigeria · Remote
                  </div>

                  <div className="profile-divider" />

                  <p className="profile-label">Focus</p>
                  <p className="profile-focus">
                    Technical support, operations, data and software
                    troubleshooting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            ABOUT SUMMARY
        ========================== */}
        <section id="about" className="about-summary section">
          <div className="section-container">
            <div className="section-heading">
              <div>
                <span className="section-kicker">A little about my work</span>
                <h2>Practical support with a technical mindset.</h2>
              </div>

              <span className="section-number">01</span>
            </div>

            <div className="about-summary-grid">
              <div className="about-summary-text">
                <p>
                  My background combines customer-facing support,
                  administration, data handling and technology. I've worked
                  with electronic records, documentation, spreadsheets and
                  operational processes, while also developing practical
                  skills in software development and troubleshooting.
                </p>

                <p>
                  I enjoy understanding what is causing a problem,
                  communicating clearly with the people involved and following
                  an issue through until there is a practical next step.
                </p>
              </div>

              <div className="about-meta">
                <div className="meta-item">
                  <div className="meta-icon">
                    <MapPin size={19} />
                  </div>

                  <div>
                    <strong>Nigeria</strong>
                    <span>Available for remote opportunities</span>
                  </div>
                </div>

                <div className="meta-item">
                  <div className="meta-icon">
                    <BriefcaseBusiness size={19} />
                  </div>

                  <div>
                    <strong>Open to</strong>
                    <span>Support, Operations & Data Roles</span>
                  </div>
                </div>

                <div className="meta-item">
                  <div className="meta-icon">
                    <ShieldCheck size={19} />
                  </div>

                  <div>
                    <strong>Work style</strong>
                    <span>Accurate, responsive and solution-focused</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            WHAT I DO
        ========================== */}
        <section id="services" className="services section">
          <div className="section-container">
            <div className="section-heading">
              <div>
                <span className="section-kicker">What I do</span>
                <h2>Where I can add value.</h2>
              </div>

              <span className="section-number">02</span>
            </div>

            <div className="services-intro">
              <p>
                My work sits between people, processes, information and
                technology. These are the areas where my experience and
                technical skills come together.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service, index) => (
                <article className="service-card" key={service.title}>
                  <div className="service-top">
                    <span className="service-number">
                      0{index + 1}
                    </span>

                    <div className="service-icon">{service.icon}</div>
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.text}</p>

                  <span className="service-arrow">
                    <ChevronRight size={18} />
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================
            SKILLS
        ========================== */}
        <section id="skills" className="skills section">
          <div className="section-container">
            <div className="section-heading">
              <div>
                <span className="section-kicker">Skills & tools</span>
                <h2>Technical and operational skills.</h2>
              </div>

              <span className="section-number">03</span>
            </div>

            <div className="skills-layout">
              <div className="skills-summary">
                <div className="skills-summary-icon">
                  <Settings size={25} />
                </div>

                <h3>A combination of support and technology.</h3>

                <p>
                  I bring practical experience with records, operations,
                  communication and customer-facing work alongside hands-on
                  technical skills in web development, APIs, databases and
                  automation.
                </p>
              </div>

              <div className="skills-list">
                {skills.map((skill) => (
                  <span className="skill-pill" key={skill}>
                    <CheckCircle2 size={15} />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            PROJECTS
        ========================== */}
        <section id="projects" className="projects section">
          <div className="section-container">
            <div className="section-heading">
              <div>
                <span className="section-kicker">Selected work</span>
                <h2>Projects that show how I solve problems.</h2>
              </div>

              <span className="section-number">04</span>
            </div>

            <div className="projects-intro">
              <p>
                A selection of software, troubleshooting, data and automation
                work that demonstrates how I approach practical technical
                problems.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <article className="project-card" key={project.title}>
            <div className="project-image-wrap">
          {project.type === "video" ? (
            <video
              src={project.image}
              className="project-image"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
          )}

          <span className="project-category">
            {project.category}
          </span>

          <span className="project-index">
            0{index + 1}
          </span>
        </div>
                  <div className="project-content">
                    <div className="project-title-row">
                      <div className="project-icon">{project.icon}</div>

                      <h3>{project.title}</h3>
                    </div>

                    <p>{project.description}</p>

                    <div className="project-tools">
                      {project.tools.map((tool) => (
                        <span key={tool}>{tool}</span>
                      ))}
                    </div>

                    <button
                      className="project-link"
                      onClick={() => scrollToSection("contact")}
                    >
                      Discuss this work
                      <ArrowRight size={17} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================
            EXPERIENCE
        ========================== */}
        <section id="experience" className="experience section">
          <div className="section-container">
            <div className="section-heading">
              <div>
                <span className="section-kicker">Experience</span>
                <h2>Experience built across support, operations and technology.</h2>
              </div>

              <span className="section-number">05</span>
            </div>

            <div className="experience-layout">
              <div className="experience-list">
                {experience.map((item) => (
                  <article className="experience-item" key={item.role}>
                    <div className="experience-period">
                      {item.period}
                    </div>

                    <div className="experience-main">
                      <div className="experience-heading">
                        <div>
                          <h3>{item.role}</h3>
                          <p>{item.company}</p>
                        </div>

                        <CheckCircle2 size={20} />
                      </div>

                      <ul>
                        {item.points.map((point) => (
                          <li key={point}>
                            <span>
                              <ChevronRight size={15} />
                            </span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>

              <aside className="experience-side">
                <div className="education-card">
                  <div className="education-header">
                    <div className="education-icon">
                      <GraduationCap size={23} />
                    </div>

                    <div>
                      <span className="card-kicker">Education & training</span>
                      <h3>Learning & development</h3>
                    </div>
                  </div>

                  <div className="education-list">
                    {education.map((item) => (
                      <div className="education-item" key={item.title}>
                        <div>
                          <strong>{item.title}</strong>
                          <span>{item.institution}</span>
                        </div>

                        <small>{item.year}</small>
                      </div>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* =========================
            CONTACT
        ========================== */}
        <section id="contact" className="contact section">
          <div className="section-container">
            <div className="contact-card">
              <div className="contact-content">
                <span className="section-kicker">Let's connect</span>

                <h2>
                  Looking for someone who can combine support with technical
                  problem-solving?
                </h2>

                <p>
                  I'm open to remote opportunities in technical customer
                  support, operations support, data-related roles and software
                  support.
                </p>

                <div className="contact-actions">
                  <a
                    href="mailto:sseun3568@gmail.com"
                    className="btn btn-primary"
                  >
                    <Mail size={18} />
                    Send Me an Email
                  </a>

                  <a
                    href="https://www.linkedin.com/in/grace-sasere/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                  >
                    LinkedIn
                    <ExternalLink size={17} />
                  </a>
                </div>
              </div>

              <div className="contact-details">
                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <Mail size={19} />
                  </div>

                  <div>
                    <span>Email</span>
                    <a href="mailto:sseun3568@gmail.com">
                      sseun3568@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <Phone size={19} />
                  </div>

                  <div>
                    <span>Phone</span>
                    <a href="tel:+2348109761271">
                      +234 810 976 1271
                    </a>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <MapPin size={19} />
                  </div>

                  <div>
                    <span>Location</span>
                    <strong>Nigeria · Remote</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =========================
          FOOTER
      ========================== */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-brand">
              <button
                className="footer-logo"
                onClick={() => scrollToSection("home")}
              >
                GB
              </button>

              <div>
                <strong>Grace Bamidele Sasere</strong>
                <span>Technical Support Specialist</span>
              </div>
            </div>

            <p className="footer-tagline">
              Reliable work. Clear communication. Practical solutions.
            </p>

            <div className="footer-socials">
              <a
                href="https://github.com/saseregrace358-dot"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/grace-sasere/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <ExternalLink size={18} />
              </a>

              <a
                href="mailto:sseun3568@gmail.com"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Grace Bamidele Sasere
            </span>

            <div className="footer-links">
              <button onClick={() => scrollToSection("home")}>
                Home
              </button>

              <button onClick={() => scrollToSection("services")}>
                What I Do
              </button>

              <button onClick={() => scrollToSection("projects")}>
                Projects
              </button>

              <button onClick={() => scrollToSection("experience")}>
                Experience
              </button>

              <button onClick={() => scrollToSection("contact")}>
                Contact
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
