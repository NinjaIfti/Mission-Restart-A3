import { Link } from "react-router-dom";
import { apps } from "../data/apps";
import AppCard from "../shared/AppCard";

function HomePage() {
  const topApps = [...apps].sort((a, b) => b.downloads - a.downloads).slice(0, 8);

  return (
    <section className="space-y home-page">
      <div className="hero hero-home">
        <div className="hero-content hero-home-content">
          <h1>
            We Build
            <br />
            <span>Productive</span> Apps
          </h1>
          <p>
            At HERO IO, we craft innovative apps designed to make everyday life simpler, smarter,
            and more exciting. Our goal is to turn your ideas into digital experiences that truly
            make an impact.
          </p>
          <div className="hero-buttons home-store-buttons">
            <a className="store-btn" href="https://play.google.com/store" target="_blank" rel="noreferrer">
              Google Play
            </a>
            <a className="store-btn" href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">
              App Store
            </a>
          </div>
        </div>
        <img src="/hero.png" alt="Hero section" className="hero-phone" />
      </div>

      <div className="stats home-stats-band">
        <h2>Trusted By Millions, Built For You</h2>
        <article>
          <small>Total Downloads</small>
          <h3>29.6M</h3>
          <p>29.6M More Than Last Month</p>
        </article>
        <article>
          <small>Total Reviews</small>
          <h3>906K</h3>
          <p>40% More Than Last Month</p>
        </article>
        <article>
          <small>Active Apps</small>
          <h3>132+</h3>
          <p>31 More This Month</p>
        </article>
      </div>

      <div className="home-trending-head">
        <h2>Trending Apps</h2>
        <p>Explore all trending apps on the market developed by us</p>
      </div>

      <div className="app-grid">{topApps.map((app) => <AppCard key={app.id} app={app} />)}</div>

      <div className="home-show-all-wrap">
        <Link className="btn home-show-all" to="/apps">
          Show All
        </Link>
      </div>
    </section>
  );
}

export default HomePage;
