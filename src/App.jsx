import { useState, useEffect, useRef } from 'react'

const DOWNLOAD_URL = 'https://github.com/devanshuk3/Deployements/releases/download/v1.0/Printr.apk'

function useScrollAnimation() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    const els = ref.current?.querySelectorAll('.animate-on-scroll')
    els?.forEach((el) => observer.observe(el))
    return () => els?.forEach((el) => observer.unobserve(el))
  }, [])
  return ref
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])
  const close = () => setMenuOpen(false)
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#" className="navbar-brand">
        <div className="logo-icon">P</div>
        Printr
      </a>
      <div className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}>
        <a href="#contact" onClick={close}>Contact</a>
        <a href="#features" onClick={close}>Features</a>
        <a href="#architecture" onClick={close}>Architecture</a>
        <a href="#how-it-works" onClick={close}>How It Works</a>
        <a href="#tech-stack" onClick={close}>Tech Stack</a>
        <a href={DOWNLOAD_URL} className="nav-cta" download onClick={close}>Download APK</a>
      </div>
      {menuOpen && <div className="nav-overlay" onClick={close} />}
      <button
        className={`mobile-menu-btn ${menuOpen ? 'mobile-menu-btn--open' : ''}`}
        aria-label="Menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="grid-pattern" />
        <div className="radial-glow" />
      </div>
      <div className="hero-content">
        <div className="hero-badge">
          <span className="dot" />
          Now Available for Android
        </div>
        <h1>
          Print <span className="gradient-text">Smarter</span>,
          <br />Not Harder
        </h1>
        <p className="subtitle">
          Skip the queues, ditch the chaos. Printr connects you directly to local print vendors —
          upload your files, set preferences, pay online, and your prints are handled automatically. No
          more waiting in line.
        </p>
        <div className="hero-buttons">
          <a href={DOWNLOAD_URL} className="btn-primary" download>
            <span className="icon">⬇</span>
            Download APK
          </a>
          <a href="#how-it-works" className="btn-secondary">
            See How It Works →
          </a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="number">0</div>
            <div className="label">Queues</div>
          </div>
          <div className="hero-stat">
            <div className="number">100%</div>
            <div className="label">Automated</div>
          </div>
          <div className="hero-stat">
            <div className="number">1-Click</div>
            <div className="label">Print</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Problem() {
  const ref = useScrollAnimation()
  return (
    <section className="section problem-section" ref={ref}>
      <div className="section-header animate-on-scroll">
        <p className="section-label">// The Problem</p>
        <h2 className="section-title">Printing Shouldn't Be This Hard</h2>
        <p className="section-subtitle">
          Traditional print workflows are broken. Printr fixes them with structured automation.
        </p>
      </div>
      <div className="problem-grid">
        <div className="problem-old animate-on-scroll">
          <div className="problem-tag problem-tag--old">Before</div>
          <h3 className="problem-title">Traditional Workflow</h3>
          <ul className="problem-list">
            <li><span className="problem-dot problem-dot--old" />WhatsApp message</li>
            <li><span className="problem-dot problem-dot--old" />Manual instructions</li>
            <li><span className="problem-dot problem-dot--old" />Operator confusion</li>
            <li><span className="problem-dot problem-dot--old" />Wrong prints</li>
            <li><span className="problem-dot problem-dot--old" />Wasted time & money</li>
          </ul>
        </div>
        <div className="problem-new animate-on-scroll">
          <div className="problem-tag problem-tag--new">After</div>
          <h3 className="problem-title">Printr Workflow</h3>
          <ul className="problem-list">
            <li><span className="problem-dot problem-dot--new" />Structured preferences</li>
            <li><span className="problem-dot problem-dot--new" />Automated queue</li>
            <li><span className="problem-dot problem-dot--new" />One-click execution</li>
            <li><span className="problem-dot problem-dot--new" />Perfect prints</li>
            <li><span className="problem-dot problem-dot--new" />Happy customers</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

const FEATURES = [
  { icon: '📄', title: 'Smart File Upload', desc: 'Upload PDFs, images, and printable documents directly from your phone with automatic format validation.' },
  { icon: '🎨', title: 'Print Preferences', desc: 'Color/BW, duplex, copies, orientation, paper size, page ranges, and binding — all configurable in-app.' },
  { icon: '💳', title: 'Flexible Payments', desc: 'Pay online securely or choose Cash on Delivery. Complete payment integration for seamless transactions.' },
  { icon: '🖨️', title: 'One-Click Printing', desc: 'Vendors click print once. The system automatically downloads, configures, and sends the job to the printer.' },
  { icon: '📊', title: 'Live Queue Management', desc: 'Real-time order tracking with status updates. Vendors manage their print queue from an intuitive dashboard.' },
  { icon: '🔒', title: 'Enterprise Security', desc: 'JWT authentication, OTP verification, rate limiting, Helmet protection, and parameterized database queries.' },
]

function Features() {
  const ref = useScrollAnimation()
  return (
    <section className="section" id="features" ref={ref}>
      <div className="section-header animate-on-scroll">
        <p className="section-label">// Features</p>
        <h2 className="section-title">Everything You Need to Print</h2>
        <p className="section-subtitle">
          From file upload to physical print — every step is automated, secured, and optimized.
        </p>
      </div>
      <div className="features-grid">
        {FEATURES.map((f, i) => (
          <div className="feature-card animate-on-scroll" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

const ARCH_STEPS = [
  { icon: '📱', label: 'Mobile App' },
  { icon: '⚡', label: 'Backend API' },
  { icon: '🖥️', label: 'Dashboard' },
  { icon: '🔌', label: 'Electron Agent' },
  { icon: '🖨️', label: 'Printer' },
]

function Architecture() {
  const ref = useScrollAnimation()
  return (
    <section className="section" id="architecture" ref={ref}>
      <div className="section-header animate-on-scroll">
        <p className="section-label">// Architecture</p>
        <h2 className="section-title">Built for Reliability</h2>
        <p className="section-subtitle">
          A distributed system with clear separation of concerns — from mobile to physical printer.
        </p>
      </div>
      <div className="arch-flow animate-on-scroll">
        {ARCH_STEPS.map((s, i) => (
          <div key={i} className="arch-step-wrapper">
            <div className="arch-step">
              <div className="arch-icon">{s.icon}</div>
              <span className="arch-step-label">{s.label}</span>
            </div>
            {i < ARCH_STEPS.length - 1 && <span className="arch-arrow">→</span>}
          </div>
        ))}
      </div>
    </section>
  )
}

function HowItWorks() {
  const ref = useScrollAnimation()
  return (
    <section className="section" id="how-it-works" ref={ref}>
      <div className="section-header animate-on-scroll">
        <p className="section-label">// Workflow</p>
        <h2 className="section-title">How Printr Works</h2>
        <p className="section-subtitle">
          A seamless experience for both customers and vendors.
        </p>
      </div>
      <div className="workflow-container">
        <div className="workflow-side animate-on-scroll">
          <h3><span className="badge badge-customer">Customer</span> Your Side</h3>
          <div className="workflow-steps">
            {[
              { t: 'Upload Document', d: 'Select PDFs or images from your device' },
              { t: 'Set Preferences', d: 'Choose color, duplex, copies, binding, and more' },
              { t: 'Complete Payment', d: 'Pay online or select Cash on Delivery' },
              { t: 'Track Your Order', d: 'Order enters vendor queue with live status' },
            ].map((s, i) => (
              <div className="workflow-step" key={i}>
                <div className="step-number">{i + 1}</div>
                <div className="step-content"><h4>{s.t}</h4><p>{s.d}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="workflow-side animate-on-scroll">
          <h3><span className="badge badge-vendor">Vendor</span> Shop Side</h3>
          <div className="workflow-steps">
            {[
              { t: 'Receive Order', d: 'Orders appear instantly in the dashboard queue' },
              { t: 'Review Settings', d: 'Verify print configuration and customer preferences' },
              { t: 'Click Print', d: 'One click — file downloads and sends to printer' },
              { t: 'Order Complete', d: 'Status updates automatically, customer notified' },
            ].map((s, i) => (
              <div className="workflow-step" key={i}>
                <div className="step-number">{i + 1}</div>
                <div className="step-content"><h4>{s.t}</h4><p>{s.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const TECH = [
  { emoji: '⚛️', name: 'React Native', desc: 'Mobile App' },
  { emoji: '🟢', name: 'Node.js', desc: 'Backend API' },
  { emoji: '🐘', name: 'PostgreSQL', desc: 'Database' },
  { emoji: '⚡', name: 'Electron', desc: 'Desktop Agent' },
  { emoji: '🔐', name: 'JWT + OTP', desc: 'Authentication' },
  { emoji: '☁️', name: 'Cloud Storage', desc: 'File Hosting' },
  { emoji: '🛡️', name: 'Helmet + CORS', desc: 'Security Layer' },
  { emoji: '📨', name: 'Express', desc: 'API Framework' },
]

function TechStack() {
  const ref = useScrollAnimation()
  return (
    <section className="section" id="tech-stack" ref={ref}>
      <div className="section-header animate-on-scroll">
        <p className="section-label">// Tech Stack</p>
        <h2 className="section-title">Powered by Modern Tech</h2>
        <p className="section-subtitle">
          Production-grade infrastructure designed for reliability and scale.
        </p>
      </div>
      <div className="tech-grid">
        {TECH.map((t, i) => (
          <div className="tech-card animate-on-scroll" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
            <div className="tech-emoji">{t.emoji}</div>
            <h4>{t.name}</h4>
            <p>{t.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

const SECURITY = [
  { icon: '🔑', title: 'JWT Authentication', desc: 'Secure token-based auth with role-based access control for every API endpoint.' },
  { icon: '📧', title: 'OTP Verification', desc: 'Email-based one-time passwords for account verification and secure registration.' },
  { icon: '🛡️', title: 'Rate Limiting', desc: 'Protection against brute-force and DoS attacks with intelligent request throttling.' },
  { icon: '🔒', title: 'Data Protection', desc: 'Parameterized queries, transactions, signed upload URLs, and encrypted data transfer.' },
]

function Security() {
  const ref = useScrollAnimation()
  return (
    <section className="section" id="security" ref={ref}>
      <div className="section-header animate-on-scroll">
        <p className="section-label">// Security</p>
        <h2 className="section-title">Security First</h2>
        <p className="section-subtitle">
          Multiple layers of security protect your data and transactions at every step.
        </p>
      </div>
      <div className="security-grid">
        {SECURITY.map((s, i) => (
          <div className="security-card animate-on-scroll" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className="security-icon">{s.icon}</div>
            <div><h4>{s.title}</h4><p>{s.desc}</p></div>
          </div>
        ))}
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="cta-section" id="download">
      <div className="cta-content">
        <h2>Ready to Print?</h2>
        <p>Download Printr now and experience the future of automated printing.</p>
        <a href={DOWNLOAD_URL} className="cta-btn" download>
          <span className="download-icon">⬇</span>
          Download Printr APK
        </a>
        <p className="cta-note">Android • Free • v1.0</p>
      </div>
    </section>
  )
}

function Contact() {
  const ref = useScrollAnimation()
  return (
    <section className="contact-section" id="contact" ref={ref}>
      <div className="section-header animate-on-scroll">
        <p className="section-label">// Contact & Support</p>
        <h2 className="section-title">Report Bugs & Get Help</h2>
        <p className="section-subtitle">
          Found an issue or need assistance? Reach out through any of these channels.
        </p>
      </div>
      <div className="contact-grid">
        <div className="contact-card animate-on-scroll" style={{ transitionDelay: '0s' }}>
          <div className="contact-icon">💬</div>
          <h3>WhatsApp</h3>
          <p>Quick support via WhatsApp. Reach out for bugs, questions, or feedback.</p>
          <a
            href="https://wa.me/917850806883"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp →
          </a>
        </div>
        <div className="contact-card animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
          <div className="contact-icon">🐙</div>
          <h3>GitHub</h3>
          <p>Open an issue, contribute, or explore the source code on GitHub.</p>
          <a
            href="https://github.com/devanshuk3"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub →
          </a>
        </div>
        <div className="contact-card animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
          <div className="contact-icon">✉️</div>
          <h3>Email Support</h3>
          <p>Send detailed bug reports or feature requests to the Printr support team.</p>
          <a
            href="mailto:support.printr@gmail.com"
            className="contact-link"
          >
            support.printr@gmail.com →
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Printr. All rights reserved.</p>
        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
          <a href="https://github.com/devanshuk3" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:support.printr@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <Contact />
      <div className="section-divider" />
      <Problem />
      <div className="section-divider" />
      <Features />
      <div className="section-divider" />
      <Architecture />
      <div className="section-divider" />
      <HowItWorks />
      <div className="section-divider" />
      <TechStack />
      <div className="section-divider" />
      <Security />
      <div className="section-divider" />
      <CTA />
      <Footer />
    </>
  )
}
