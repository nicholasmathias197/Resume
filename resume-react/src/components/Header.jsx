import PillNav from './PillNav';

function Header() {
  return (
    <header id="top" className="header">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0px', marginBottom: '0px' }}>
        <div className="profile-pic-container">
          <img src="/1748963612612.jpg" alt="Profile Picture" className="profile-pic" />
        </div>
        <div>
          <h1 className="name">Nicholas Mathias</h1>
          <p className="title">Full Stack Developer</p>
        </div>
        <div className="logo-container" style={{ marginLeft: '40px' }}>
          <img src="/Minimilist Design 2.jpg" alt="logo-container" className="logo" />
        </div>
      </div>
      <PillNav
        logo="/Minimilist Design 2.jpg"
        logoAlt="NM Logo"
        items={[
          { label: 'Summary', href: '#summary' },
          { label: 'Experience', href: '#experience' },
          { label: 'Education', href: '#education' },
          { label: 'Skills', href: '#skills' },
          { label: 'Projects', href: '#projects' },
          { label: 'Novel', href: '#novel' },
          { label: 'U197 Designs', href: '/u197designs' },
        ]}
        baseColor="#000000"
        pillColor="#003366"
        hoveredPillTextColor="#00d9ff"
        pillTextColor="#e0e1dd"
        ease="power2.easeOut"
        initialLoadAnimation={true}
      />
      <div className="contact-info">
        <div className="contact-item">
          <span>📧</span>
          <span>hakai197@gmail.com</span>
        </div>
        <div className="contact-item">
          <span>📱</span>
          <span>740-505-7974</span>
        </div>
        <div className="contact-item">
          <span>📍</span>
          <span>Jeffersonville, OH</span>
        </div>
        <div className="contact-item">
          <span>🔗</span>
          <a href="https://www.linkedin.com/in/nicholas-mathias-hakai197" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
            www.linkedin.com/in/nicholas-mathias-hakai197
          </a>
        </div>
        <div className="contact-item">
          <span>🔗</span>
          <a href="https://www.github.com/hakai197" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
            www.github.com/hakai197
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
