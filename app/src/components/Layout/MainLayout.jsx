import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SiteTrafficMonitor from "../Dashboard/SiteTrafficMonitor";
import Analytics from "../../pages/Analytics";
import Settings from "../../pages/Settings";

const MainLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Header />
        <main className="p-6">
          <Routes>
            <Route path="/" element={<SiteTrafficMonitor />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
      <Sidebar />
    </div>
  );
};

export default MainLayout;
