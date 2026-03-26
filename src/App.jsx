import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import AllAppsPage from "./pages/AllAppsPage";
import AppDetailsPage from "./pages/AppDetailsPage";
import HomePage from "./pages/HomePage";
import InstallationPage from "./pages/InstallationPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="apps" element={<AllAppsPage />} />
        <Route path="apps/:id" element={<AppDetailsPage />} />
        <Route path="installation" element={<InstallationPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
