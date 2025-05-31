import React from "react";
import { Outlet } from "react-router-dom";
const Auth = () => {
  // const navigate = useNavigate();
  return (
    <section className="w-full h-screen flex flex-col px-4 py-8 items-center justify-center bg-gray-100">
      <Outlet />
    </section>
  );
};

export default Auth;
