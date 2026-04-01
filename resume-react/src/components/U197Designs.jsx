import { Link } from 'react-router-dom';
import Aurora from './Aurora';

function U197Designs() {
  return (
    <>
      <div className="aurora-bg">
        <Aurora
          colorStops={["#00d9ff", "#0066cc", "#003366"]}
          amplitude={1.0}
          blend={0.5}
          speed={0.5}
        />
      </div>
      <div className="u197-page">
        <nav className="u197-nav">
          <Link to="/" className="u197-back-link">← Back to Resume</Link>
        </nav>

        {/* Hero Section */}
        <section className="u197-hero">
          <img src="/Minimilist Design 2.jpg" alt="U197 Designs Logo" className="u197-hero-logo" />
          <h1 className="u197-hero-name">U197 Designs</h1>
          <p className="u197-tagline">
            Web Design &amp; Development Studio
          </p>
          <p className="u197-subtitle">
            Crafting clean, modern websites for small businesses, creatives, and passion projects.
          </p>
        </section>

        {/* About Section */}
        <section className="u197-section">
          <h2 className="u197-section-title">What We Do</h2>
          <p className="u197-text">
            <strong className="u197-brand">U197 Designs</strong> is a small web design studio focused on
            building fast, responsive, and visually striking websites. We specialize in custom builds
            for small businesses, personal brands, and creative projects — from concept through deployment.
            Every site is hand-crafted with modern tools like React, Vite, and Spring Boot.
          </p>
        </section>

        {/* Projects Section */}
        <section className="u197-section">
          <h2 className="u197-section-title">Our Work</h2>
          <p className="u197-section-intro">
            A selection of projects designed and built by <strong className="u197-brand">U197 Designs</strong>.
          </p>
          <div className="u197-projects-grid">
            <div className="u197-project-card">
              <h3>Crowned Mobile Detailing</h3>
              <p>A responsive site for a mobile detailing business. Custom design, branding, and deployment. <a href="https://crownedmobiledetailing.com" target="_blank" rel="noopener noreferrer" style={{ color: '#00d9ff' }}>Live Site</a> | <a href="https://github.com/hakai197/crownedmobilesite" target="_blank" rel="noopener noreferrer" style={{ color: '#00d9ff' }}>GitHub</a></p>
            </div>
            <div className="u197-project-card">
              <h3>Portfolio Site</h3>
              <p>A developer portfolio featuring animated navigation, Aurora WebGL backgrounds, and a multi-page React app with client-side routing.</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="u197-section">
          <h2 className="u197-section-title">Services</h2>
          <div className="u197-projects-grid">
            <div className="u197-project-card">
              <h3>Custom Websites</h3>
              <p>Responsive, hand-coded sites tailored to your brand — no templates, no page builders.</p>
            </div>
            <div className="u197-project-card">
              <h3>Small Business Sites</h3>
              <p>Get your business online with a clean, professional web presence that works on every device.</p>
            </div>
            <div className="u197-project-card">
              <h3>Redesigns &amp; Updates</h3>
              <p>Modernize an existing site with fresh design, better performance, and mobile-first layouts.</p>
            </div>
            <div className="u197-project-card">
              <h3>Deployment &amp; Hosting</h3>
              <p>We handle the technical side — domain setup, hosting, SSL, and ongoing support.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="u197-section">
          <h2 className="u197-section-title">Start a Project</h2>
          <p className="u197-text">
            Have an idea for a website? Let's make it happen.
          </p>
          <div className="u197-contact-links">
            <a href="mailto:hakai197@gmail.com" className="u197-contact-btn">📧 Get in Touch</a>
            <a href="https://www.github.com/hakai197" target="_blank" rel="noopener noreferrer" className="u197-contact-btn">🔗 GitHub</a>
          </div>
        </section>

        {/* Footer */}
        <footer className="u197-footer">
          <p>© 2026 <span className="u197-brand">U197 Designs</span> — All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default U197Designs;
