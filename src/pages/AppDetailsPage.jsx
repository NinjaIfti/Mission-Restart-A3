import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { toast } from "react-toastify";
import { getAppById } from "../data/apps";
import { installApp, isInstalled } from "../utils/storage";

function AppDetailsPage() {
  const { id } = useParams();
  const app = getAppById(id);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    setInstalled(isInstalled(id));
  }, [id]);

  if (!app) {
    return (
      <div className="not-found-card">
        <img src="/assets/App-Error.png" alt="App not found" />
        <h2>App Not Found</h2>
        <p>The app details you are looking for are unavailable.</p>
      </div>
    );
  }

  const onInstall = () => {
    installApp(app.id);
    setInstalled(true);
    toast.success(`${app.title} installed successfully`);
  };

  return (
    <section className="space-y">
      <div className="details-top">
        <img src={app.image} alt={app.title} />
        <div className="details-info">
          <h1>{app.title}</h1>
          <p>{app.companyName}</p>
          <div className="badges">
            <span>⭐ {app.ratingAvg}</span>
            <span>⬇ {app.downloads.toLocaleString()}</span>
            <span>💬 {app.reviews.toLocaleString()}</span>
          </div>
          <button className="btn" disabled={installed} onClick={onInstall}>
            {installed ? "Installed" : "Install"}
          </button>
        </div>
      </div>

      <div className="chart-wrap">
        <h2>App Review Chart</h2>
        <div className="chart">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={app.ratings}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#0ea5e9" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <article className="description">
        <h3>Description</h3>
        <p>{app.description}</p>
        <p>Size: {app.size}MB</p>
      </article>
    </section>
  );
}

export default AppDetailsPage;
