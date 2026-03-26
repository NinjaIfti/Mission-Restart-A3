import { Link } from "react-router-dom";
import { apps } from "../data/apps";
import AppCard from "../shared/AppCard";

function HomePage() {
  const topApps = [...apps].sort((a, b) => b.downloads - a.downloads).slice(0, 8);

  return (
    <section className="space-y">
      <div className="hero">
        <div className="hero-content">
          <h1>Find the best apps for your workflow</h1>
          <p>Hero IO helps you discover top-rated apps with reviews and install tracking.</p>
          <div className="hero-buttons">
            <a className="btn" href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">
              App Store
            </a>
            <a className="btn btn-dark" href="https://play.google.com/store" target="_blank" rel="noreferrer">
              Play Store
            </a>
          </div>
        </div>
        <img src="/assets/hero.png" alt="Hero section" />
      </div>

      <div className="stats">
        <article>
          <h3>{apps.length}+</h3>
          <p>Featured Apps</p>
        </article>
        <article>
          <h3>4.7</h3>
          <p>Average Rating</p>
        </article>
        <article>
          <h3>2M+</h3>
          <p>Total Downloads</p>
        </article>
      </div>

      <div className="section-head">
        <h2>Top Apps</h2>
        <Link className="btn btn-outline" to="/apps">
          Show All
        </Link>
      </div>

      <div className="app-grid">{topApps.map((app) => <AppCard key={app.id} app={app} />)}</div>
    </section>
  );
}

export default HomePage;
