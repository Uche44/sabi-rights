import { useAuthContext } from "../context/AuthContext";

import UserProfileForm from "../components/UserProfileForm";

const SetUserProfile = () => {
  const { user } = useAuthContext();

  return (
    <section className="w-full h-screen flex flex-col items-center bg-gray-100 p-4">
      <h2 className="text-[1.8rem] font-bold text-[#f92fff] mb-4 text-center">
        Welcome, {user?.displayName || user?.email}!
      </h2>

      <p className="text-gray-600">
        Take a few seconds to complete your profile..
      </p>

      <UserProfileForm />
    </section>
  );
};

export default SetUserProfile;
