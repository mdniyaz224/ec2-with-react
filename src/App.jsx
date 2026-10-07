import { Link, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'

const deploymentSteps = [
  { number: '01', name: 'Source', detail: 'GitHub · main', status: 'Connected' },
  { number: '02', name: 'Build', detail: 'Vite · production', status: 'Ready' },
  { number: '03', name: 'Hosting', detail: 'EC2 · Nginx', status: 'Online' },
]

const features = [
  {
    number: '01',
    title: 'React',
    description: 'Build the interface from reusable components and keep the experience responsive.',
    icon: 'R',
    className: 'feature-icon--react',
    detail: 'UI library',
  },
  {
    number: '02',
    title: 'Vite',
    description: 'Run a quick local development server and bundle optimized static assets.',
    icon: 'V',
    className: 'feature-icon--vite',
    detail: 'Build tool',
  },
  {
    number: '03',
    title: 'GitHub Actions',
    description: 'Install dependencies, check the code, build the app, and deploy on pushes to main.',
    icon: '↗',
    className: 'feature-icon--deploy',
    detail: 'CI/CD',
  },
  {
    number: '04',
    title: 'Amazon EC2',
    description: 'Host the site on an Amazon Linux virtual server that you can manage.',
    icon: '☁',
    className: 'feature-icon--cloud',
    detail: 'Compute',
  },
  {
    number: '05',
    title: 'Nginx',
    description: 'Serve the built files from the existing web root to visitors over HTTP.',
    icon: 'N',
    className: 'feature-icon--nginx',
    detail: 'Web server',
  },
]

function Brand() {
  return (
    <span className="brand">
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
    </span>
  )
}

function Header() {
  return (
    <header className="site-header">
      <Link className="brand-link" to="/" aria-label="Cloudcraft home">
        <Brand />
      </Link>
      <nav className="header-nav" aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/deployment">Deployment</NavLink>
        <NavLink to="/stack">Tech stack</NavLink>
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
  )
}

function PipelineCard() {
  return (
    <div className="deployment-card">
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
  )
}

function PageIntro({ eyebrow, title, description }) {
  return (
    <div className="page-intro">
      <p className="section-kicker">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

function HomePage() {
  return (
    <main>
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
            <Link className="button button-primary" to="/deployment">
              See how it ships <span aria-hidden="true">→</span>
            </Link>
            <Link className="button button-secondary" to="/stack">
              Explore the stack <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="hero-note">
            <span className="note-check" aria-hidden="true">✓</span>
            <span>Deployed with GitHub Actions</span>
          </div>
        </div>
        <PipelineCard />
        <div className="hero-decoration hero-decoration--one" aria-hidden="true" />
        <div className="hero-decoration hero-decoration--two" aria-hidden="true" />
      </section>
      <section className="home-bottom">
        <div>
          <p className="section-kicker">A SMALL PROJECT WITH A FULL JOURNEY</p>
          <h2>One commit can take it all the way to the cloud.</h2>
        </div>
        <Link className="text-link" to="/deployment">Explore the deployment <span aria-hidden="true">→</span></Link>
      </section>
    </main>
  )
}

function DeploymentPage() {
  return (
    <main className="inner-page">
      <PageIntro
        eyebrow="AUTOMATED DELIVERY"
        title="From commit to website."
        description="A push to main starts the workflow: it checks the project, creates a production build, and transfers the result to the EC2 web server."
      />
      <div className="deployment-page-grid">
        <PipelineCard />
        <div className="deployment-details">
          <article className="detail-card">
            <span className="detail-icon detail-icon--source">01</span>
            <p className="card-kicker">STEP ONE</p>
            <h2>Push your changes</h2>
            <p>GitHub Actions starts when a commit is pushed to the main branch.</p>
          </article>
          <article className="detail-card">
            <span className="detail-icon detail-icon--build">02</span>
            <p className="card-kicker">STEP TWO</p>
            <h2>Build the site</h2>
            <p>The workflow installs packages, runs lint, and creates static files in <code>dist/</code>.</p>
          </article>
          <article className="detail-card">
            <span className="detail-icon detail-icon--ship">03</span>
            <p className="card-kicker">STEP THREE</p>
            <h2>Serve with Nginx</h2>
            <p>The build files are copied to the existing Nginx web root on Amazon Linux EC2.</p>
          </article>
        </div>
      </div>
      <div className="deployment-note">
        <span className="note-check" aria-hidden="true">i</span>
        <p>Deployment uses SSH secrets configured in the GitHub repository. Keep private keys out of source code.</p>
      </div>
    </main>
  )
}

function TechStackPage() {
  return (
    <main className="inner-page">
      <PageIntro
        eyebrow="TOOLS THAT POWER THE SITE"
        title="A small stack, working together."
        description="Each tool has a clear role, from the components you build to the web server that delivers them."
      />
      <div className="stack-page-grid">
        {features.map((feature) => (
          <article className="feature-card stack-feature-card" key={feature.number}>
            <div className={`feature-icon ${feature.className}`} aria-hidden="true">
              {feature.icon}
            </div>
            <span className="feature-number">{feature.detail}</span>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
      <div className="stack-summary">
        <span className="summary-label">THE FLOW</span>
        <p><span>React</span><b>→</b><span>Vite build</span><b>→</b><span>GitHub Actions</span><b>→</b><span>EC2 + Nginx</span></p>
      </div>
    </main>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <Link className="brand-link footer-brand-link" to="/" aria-label="Cloudcraft home">
        <Brand />
      </Link>
      <p>Made with React. Deployed to the cloud.</p>
      <div className="footer-links">
        <a href="https://react.dev/" target="_blank" rel="noreferrer">React docs</a>
        <a href="https://vite.dev/" target="_blank" rel="noreferrer">Vite docs</a>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="page-shell">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/deployment" element={<DeploymentPage />} />
        <Route path="/stack" element={<TechStackPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
