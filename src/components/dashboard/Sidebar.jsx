import { FaUser } from "react-icons/fa6";
import { useAuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { user } = useAuthContext();
  const firstName = user.displayName ? user.displayName.split(" ")[0] : "";

  return (
    <aside className="w-[50%] h-screen bg-[#ef2fff] px-5 py-8 flex items-center flex-col fixed top-0 left-0 z-50 shadow-lg">
      <div className="w-full h-[5.5rem] bg-gray-100 flex flex-col py-2 items-center justify-center gap-2 mb-4 rounded-[1rem]">
        <FaUser className="text-gray-500 text-[2.5rem]" />
        <span className="text-gray-700 text-[1.2rem] font-bold">
          {firstName}
        </span>
      </div>

      <Link className="text-gray-700 rounded-[10px] grid place-content-center w-full h-[2rem] mt-4 hover:bg-gray-200">
        Learn
      </Link>
      <Link
        to="/report"
        className="text-gray-700 rounded-[10px] grid place-content-center w-full h-[2rem] mt-4 hover:bg-gray-200"
      >
        Report
      </Link>
      <button className="text-gray-700 hover:brightness-120 bg-gray-200 w-full h-[2rem] my-4">
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
