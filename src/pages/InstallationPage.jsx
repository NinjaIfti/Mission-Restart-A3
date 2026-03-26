import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import { apps } from "../data/apps";
import { getInstalled, uninstallApp } from "../utils/storage";

function InstallationPage() {
  const [installedIds, setInstalledIds] = useState(getInstalled());
  const [sortBy, setSortBy] = useState("none");

  const installedApps = useMemo(() => {
    const list = apps.filter((app) => installedIds.includes(app.id));
    if (sortBy === "high") return [...list].sort((a, b) => b.size - a.size);
    if (sortBy === "low") return [...list].sort((a, b) => a.size - b.size);
    return list;
  }, [installedIds, sortBy]);

  const onUninstall = (id, title) => {
    const next = uninstallApp(id);
    setInstalledIds(next);
    toast.info(`${title} uninstalled`);
  };

  return (
    <section className="space-y installation-page">
      <div className="page-title installation-title">
        <h1>My Installation</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>

      {installedApps.length === 0 ? (
        <div className="not-found-card">
          <img src="/App-Error.png" alt="No installed apps" />
          <h2>No Installed Apps Yet</h2>
          <p>Install apps from the details page to see them here.</p>
        </div>
      ) : (
        <div className="installation-list-wrap">
          <div className="installation-toolbar">
            <h3>{installedApps.length} Apps Found</h3>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="none">Sort By Size</option>
              <option value="high">High-Low</option>
              <option value="low">Low-High</option>
            </select>
          </div>

          <div className="installation-list">
          {installedApps.map((app) => (
            <article key={app.id} className="install-row">
              <img src={app.image} alt={app.title} />
              <div>
                <h4>{app.title}</h4>
                <p>
                  <span>⬇ {Math.round(app.downloads / 1000)}M</span>
                  <span>⭐ {app.ratingAvg}</span>
                  <span>{app.size} MB</span>
                </p>
              </div>
              <button className="uninstall-btn" onClick={() => onUninstall(app.id, app.title)}>
                Uninstall
              </button>
            </article>
          ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default InstallationPage;
