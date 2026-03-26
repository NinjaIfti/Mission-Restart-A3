import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Header from "../shared/Header";

function RootLayout() {
  return (
    <>
      <Header />
      <main className="container page-main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
