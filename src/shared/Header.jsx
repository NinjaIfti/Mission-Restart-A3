import { NavLink, Link } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/apps", label: "Apps" },
  { to: "/installation", label: "Installation" },
];
const contributionUrl = import.meta.env.VITE_GITHUB_PROFILE || "https://github.com/";

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo-wrap">
          <img src="/assets/logo.png" alt="Hero IO" className="logo" />
          <span>Hero IO</span>
        </Link>

        <nav className="nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              end={item.to === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <a
          className="btn btn-outline"
          href={contributionUrl}
          target="_blank"
          rel="noreferrer"
        >
          Contribution
        </a>
      </div>
    </header>
  );
}

export default Header;
