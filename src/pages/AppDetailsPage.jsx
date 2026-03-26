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
        <img src="/App-Error.png" alt="App not found" />
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
    <section className="space-y details-page">
      <div className="details-card">
        <img src={app.image} alt={app.title} className="details-cover" />
        <div className="details-head">
          <h1>{app.title}</h1>
          <p>
            Developed by <span>{app.companyName.toLowerCase()}</span>
          </p>
          <div className="details-metrics">
            <article>
              <img src="/icon-downloads.png" alt="Downloads" />
              <small>Downloads</small>
              <strong>{Math.round(app.downloads / 1000)}M</strong>
            </article>
            <article>
              <img src="/icon-ratings.png" alt="Average rating" />
              <small>Average Ratings</small>
              <strong>{app.ratingAvg}</strong>
            </article>
            <article>
              <img src="/icon-review.png" alt="Total reviews" />
              <small>Total Reviews</small>
              <strong>{Math.round(app.reviews / 1000)}K</strong>
            </article>
          </div>
          <button className="install-btn" disabled={installed} onClick={onInstall}>
            {installed ? "Installed" : `Install Now [${app.size} MB]`}
          </button>
        </div>
      </div>

      <div className="chart-wrap details-chart-wrap">
        <h2>Ratings</h2>
        <div className="chart">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[...app.ratings].reverse()} layout="vertical" margin={{ left: 12, right: 12 }}>
              <CartesianGrid horizontal={false} strokeDasharray="0" />
              <XAxis type="number" tickLine={false} axisLine={false} />
              <YAxis type="category" dataKey="name" tickLine={false} axisLine={false} width={54} />
              <Tooltip />
              <Bar dataKey="count" fill="#ff8a00" radius={[0, 0, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <article className="description details-description">
        <h3>Description</h3>
        <p>
          {app.description} This focus app takes the proven Pomodoro technique and makes it even
          more practical for modern lifestyles. Instead of just setting a timer, it builds a
          complete environment for deep work, minimizing distractions and maximizing concentration.
          Users can create custom work and break intervals, track how many sessions they complete
          each day, and review detailed statistics about their focus habits over time.
        </p>
        <p>
          A unique feature of this app is the integration of task lists with timers. You can assign
          each task to a specific Pomodoro session, making your schedule more structured. The
          built-in analytics show not only how much time you worked but also which tasks consumed
          the most energy. This allows you to reflect on your efficiency and adjust your workflow
          accordingly.
        </p>
        <p>
          For people who struggle with procrastination, the app provides motivational streaks and
          achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of
          accomplishment. Whether you are studying for exams, coding, writing, or handling office
          work, this app adapts to your routine and helps maintain productive momentum.
        </p>
      </article>
    </section>
  );
}

export default AppDetailsPage;
