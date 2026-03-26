import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import { apps } from "../data/apps";
import AppCard from "../shared/AppCard";
import { getInstalled, uninstallApp } from "../utils/storage";

function InstallationPage() {
  const [installedIds, setInstalledIds] = useState(getInstalled());

  const installedApps = useMemo(
    () => apps.filter((app) => installedIds.includes(app.id)),
    [installedIds]
  );

  const onUninstall = (id, title) => {
    const next = uninstallApp(id);
    setInstalledIds(next);
    toast.info(`${title} uninstalled`);
  };

  return (
    <section className="space-y">
      <div className="page-title">
        <h1>My Installation</h1>
        <p>Manage your installed apps.</p>
      </div>

      {installedApps.length === 0 ? (
        <div className="not-found-card">
          <img src="/App-Error.png" alt="No installed apps" />
          <h2>No Installed Apps Yet</h2>
          <p>Install apps from the details page to see them here.</p>
        </div>
      ) : (
        <div className="app-grid">
          {installedApps.map((app) => (
            <div key={app.id} className="install-item">
              <AppCard app={app} />
              <button className="btn btn-danger" onClick={() => onUninstall(app.id, app.title)}>
                Uninstall
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default InstallationPage;
