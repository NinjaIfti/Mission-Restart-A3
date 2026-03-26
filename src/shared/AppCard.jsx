import { Link } from "react-router-dom";

function AppCard({ app }) {
  return (
    <Link className="app-card" to={`/apps/${app.id}`}>
      <img src={app.image} alt={app.title} />
      <h4>{app.title}</h4>
      <p>{app.companyName}</p>
      <div className="meta">
        <span>⬇ {app.downloads.toLocaleString()}</span>
        <span>⭐ {app.ratingAvg}</span>
      </div>
    </Link>
  );
}

export default AppCard;
