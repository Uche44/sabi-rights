import { FaUser } from "react-icons/fa6";
import { useAuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { user } = useAuthContext();
  const firstName = user.displayName ? user.displayName.split(" ")[0] : "";

  return (
    <aside className="w-[50%] h-screen bg-pink-600 px-5 py-8 flex items-center flex-col">
      <div className="w-full h-[5rem] bg-gray-100 flex flex-col">
        <FaUser className="text-gray-500 text-[2.5rem]" />
        <span className="text-gray-700">{firstName}</span>
      </div>

      <Link className="text-gray-700 hover:underline bg-gray-200 w-full h-[2rem] my-4">
        Learn
      </Link>
      <Link className="text-gray-700 hover:underline bg-gray-200 w-full h-[2rem] my-4">
        Report
      </Link>
      <button className="text-gray-700 hover:underline bg-gray-200 w-full h-[2rem] my-4">
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
