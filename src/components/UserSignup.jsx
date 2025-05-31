import { signUpWithGoogle } from "../lib/auth/signup";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const UserSignup = () => {
  const { setUser } = useAuthContext();
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const userData = await signUpWithGoogle();
      setUser(userData);
      console.log("User signed up: ", userData);
      if (userData) {
        // localStorage.setItem("user", JSON.stringify(userData));
        navigate("/user-profile");
      }
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  return (
    <div className="bg-[#ff9ce7] w-full h-screen fixed top-0 right-0 flex items-center justify-center">
      <button
        onClick={handleSignUp}
        className="w-[70%] bg-white h-[3rem] rounded-[0.5rem] text-gray-600 font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 ease-in-out"
      >
        <p className="">Sign Up with Google</p>
        <FcGoogle className="text-2xl" />
      </button>
    </div>
  );
};

export default UserSignup;
