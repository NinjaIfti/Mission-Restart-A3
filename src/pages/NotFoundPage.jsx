import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="full-center">
      <div className="not-found-card">
        <img src="/assets/error-404.png" alt="404" />
        <h2>Page Not Found</h2>
        <p>The page you requested does not exist.</p>
        <Link className="btn" to="/">
          Go Home
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
