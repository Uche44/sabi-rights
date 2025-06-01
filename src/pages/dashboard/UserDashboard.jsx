import { useAuthContext } from "../../context/AuthContext";
import RightsTips from "../../components/dashboard/user/RightsTips";
import Categories from "../../components/dashboard/user/Categories";
import Sidebar from "../../components/dashboard/Sidebar";
import { useState } from "react";

const UserDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const { user } = useAuthContext();
  const firstName = user.displayName ? user.displayName.split(" ")[0] : "";
  return (
    <>
      {isSidebarOpen && <Sidebar />}

      <div className="w-full min-h-screen px-4 py-8 flex flex-col items-center bg-gray-100">
        <button
          className="fixed top-4 left-4 z-50 p-2 bg-gray-200 rounded-full shadow-md"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? "Close" : "Open"}
        </button>
        <div className="w-full h-[8rem] flex items-center justify-between bg-white shadow-md px-4 rounded-[1rem] border-[#eb2fff] border-dashed border-1">
          <h1 className="text-3xl text-[#eb2fff] font-bold">Hi, {firstName}</h1>
          <img
            src="/assets/rights.svg"
            alt=""
            className="h-[9rem] w-[9rem] object-cover rounded-full shadow-lg"
          />
        </div>
        <RightsTips />
        <Categories />
      </div>
    </>
  );
};

export default UserDashboard;
