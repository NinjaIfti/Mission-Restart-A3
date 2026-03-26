import { useEffect, useMemo, useState } from "react";
import { apps } from "../data/apps";
import AppCard from "../shared/AppCard";

function AllAppsPage() {
  const [search, setSearch] = useState("");
  const [liveSearch, setLiveSearch] = useState("");
  const [sortBy, setSortBy] = useState("none");
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    setSearchLoading(true);
    const timer = setTimeout(() => {
      setLiveSearch(search);
      setSearchLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);

  const filteredApps = useMemo(() => {
    const normalized = liveSearch.trim().toLowerCase();
    let list = apps.filter((app) => app.title.toLowerCase().includes(normalized));
    if (sortBy === "high") list = [...list].sort((a, b) => b.downloads - a.downloads);
    if (sortBy === "low") list = [...list].sort((a, b) => a.downloads - b.downloads);
    return list;
  }, [liveSearch, sortBy]);

  return (
    <section className="space-y">
      <div className="page-title">
        <h1>All Apps</h1>
        <p>Browse all apps and quickly search by title.</p>
      </div>

      <div className="search-row">
        <p>{filteredApps.length} apps found</p>
        <div className="search-controls">
          <input
            type="text"
            placeholder="Search apps..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="none">Sort by downloads</option>
            <option value="high">High-Low</option>
            <option value="low">Low-High</option>
          </select>
        </div>
      </div>

      {searchLoading ? (
        <div className="search-loading">
          <span className="loader" />
          <p>Searching apps...</p>
        </div>
      ) : filteredApps.length === 0 ? (
        <div className="no-result">
          <img src="/assets/App-Error.png" alt="No app found" />
          <h3>No App Found</h3>
        </div>
      ) : (
        <div className="app-grid">{filteredApps.map((app) => <AppCard key={app.id} app={app} />)}</div>
      )}
    </section>
  );
}

export default AllAppsPage;
