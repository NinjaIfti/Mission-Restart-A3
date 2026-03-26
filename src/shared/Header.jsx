import { NavLink, Link } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/apps", label: "Apps" },
  { to: "/installation", label: "Installation" },
];

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
          href="https://github.com/"
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
