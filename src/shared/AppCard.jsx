import { Link } from "react-router-dom";

function AppCard({ app }) {
  return (
    <Link className="app-card" to={`/apps/${app.id}`}>
      <img src={app.image} alt={app.title} />
      <h4>{app.title}</h4>
      <div className="meta">
        <span>⬇ {Math.round(app.downloads / 1000)}M</span>
        <span>⭐ {app.ratingAvg}</span>
      </div>
    </Link>
  );
}

export default AppCard;
