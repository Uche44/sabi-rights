import { Outlet } from "react-router-dom";
// import Sidebar from "../components/dashboard/Sidebar";

import Sidebar from "../components/dashboard/Sidebar";
// import { useState } from "react";

const DashboardLayout = () => {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main>
        <Outlet /> {/* This renders UserDashboard or NgoDashboard */}
      </main>
    </div>
  );
};

export default DashboardLayout;
