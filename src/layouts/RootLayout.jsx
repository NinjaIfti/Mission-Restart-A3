import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/Footer";
import Header from "../shared/Header";

function RootLayout() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 350);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <Header />
      {loading && (
        <div className="route-loading">
          <span className="loader" />
        </div>
      )}
      <main className="container page-main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
