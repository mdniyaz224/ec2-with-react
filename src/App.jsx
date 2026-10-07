import './App.css'

const deploymentSteps = [
  { number: '01', name: 'Source', detail: 'GitHub · main', status: 'Connected' },
  { number: '02', name: 'Build', detail: 'Vite · production', status: 'Ready' },
  { number: '03', name: 'Hosting', detail: 'EC2 · Nginx', status: 'Online' },
]

const features = [
  {
    number: '01',
    title: 'Built with React',
    description: 'A fast, component-based frontend, bundled for production with Vite.',
    icon: 'R',
    className: 'feature-icon--react',
  },
  {
    number: '02',
    title: 'Shipped automatically',
    description: 'GitHub Actions builds the app and deploys it whenever main is updated.',
    icon: '↗',
    className: 'feature-icon--deploy',
  },
  {
    number: '03',
    title: 'Served from EC2',
    description: 'Nginx serves the production files from an Amazon Linux instance.',
    icon: '☁',
    className: 'feature-icon--cloud',
  },
]

function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Cloudcraft home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none">
              <path
                d="M8 21.5h15.2a5.3 5.3 0 0 0 .2-10.6A8 8 0 0 0 8.2 13a4.3 4.3 0 0 0-.2 8.5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="m13 18 3-4 3 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span>cloudcraft<span className="brand-period">.</span></span>
        </a>
        <nav className="header-nav" aria-label="Main navigation">
          <a href="#deployment">Deployment</a>
          <a href="#stack">Tech stack</a>
          <a
            className="nav-link-github"
            href="https://github.com/mdniyaz224/ec2-with-react"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main id="home">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="live-dot" />
              A REACT APP, LIVE ON AWS
            </div>
            <h1 id="hero-title">
              From local
              <br />
              code to <span>cloud.</span>
            </h1>
            <p className="hero-description">
              A little React project with a big milestone: built automatically
              and served from an EC2 instance.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#deployment">
                See how it ships <span aria-hidden="true">↓</span>
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/mdniyaz224/ec2-with-react"
                target="_blank"
                rel="noreferrer"
              >
                Explore the code <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="hero-note">
              <span className="note-check" aria-hidden="true">✓</span>
              <span>Deployed with GitHub Actions</span>
            </div>
          </div>

          <div className="deployment-card" id="deployment">
            <div className="card-topline">
              <div className="window-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span className="card-label">DEPLOYMENT OVERVIEW</span>
              <span className="card-menu" aria-hidden="true">•••</span>
            </div>
            <div className="deployment-heading">
              <div>
                <p className="card-kicker">PRODUCTION PIPELINE</p>
                <h2>Everything in its place.</h2>
              </div>
              <span className="online-badge"><span /> Online</span>
            </div>
            <div className="pipeline-list">
              {deploymentSteps.map((step, index) => (
                <div className="pipeline-step" key={step.number}>
                  <div className={`step-number ${index === 2 ? 'step-number--active' : ''}`}>
                    {index === 2 ? '✓' : step.number}
                  </div>
                  {index < deploymentSteps.length - 1 && <span className="step-connector" />}
                  <div className="step-content">
                    <div className="step-title-row">
                      <h3>{step.name}</h3>
                      <span>{step.status}</span>
                    </div>
                    <p>{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="card-footer">
              <span className="footer-indicator" />
              <span>All systems looking good</span>
              <span className="footer-time">READY TO SHIP</span>
            </div>
          </div>
          <div className="hero-decoration hero-decoration--one" aria-hidden="true" />
          <div className="hero-decoration hero-decoration--two" aria-hidden="true" />
        </section>

        <section className="stack-section" id="stack" aria-labelledby="stack-title">
          <div className="section-heading">
            <div>
              <p className="section-kicker">THE STACK</p>
              <h2 id="stack-title">Small stack. Real deployment.</h2>
            </div>
            <p className="section-intro">
              A simple path from writing code to making it available on the web.
            </p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.number}>
                <div className={`feature-icon ${feature.className}`} aria-hidden="true">
                  {feature.icon}
                </div>
                <span className="feature-number">{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark" aria-hidden="true">✳</span>
          <span>cloudcraft<span className="brand-period">.</span></span>
        </a>
        <p>Made with React. Deployed to the cloud.</p>
        <div className="footer-links">
          <a href="https://react.dev/" target="_blank" rel="noreferrer">React docs</a>
          <a href="https://vite.dev/" target="_blank" rel="noreferrer">Vite docs</a>
        </div>
      </footer>
    </div>
  )
}

export default App
