import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <main>
        <Outlet /> {/* This renders UserDashboard or NgoDashboard */}
      </main>
    </div>
  );
};

export default DashboardLayout;
