import React from "react";
import { Component } from "./Navbar";
import { Link } from "react-router-dom";
import {
  FaBook,
  FaFilePen,
  FaScaleBalanced,
  FaBookOpenReader,
} from "react-icons/fa6";

import { useAuthContext } from "../context/AuthContext";

const Hero = () => {
  const { user } = useAuthContext();

  return (
    <section className="w-full h-[85vh] flex flex-col items-center justify-center bg-gray-100">
      {/* <Component /> */}
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-[1.5rem] not-only: text-gray-600">For</p>
        <h2 className="logo text-4xl mt-4 font-bold text-[#eb2fff] animate-pulse transform -skew-y-4">
          SabiMyRIghts,
        </h2>
        <p className="mt-4 text-[1.5rem] text-gray-600">we go help you</p>
        <h2 className="text-[1.8rem] font-bold">Sabi your Rights</h2>
        <Link
          to={user ? "/dashboard/user" : "/auth/signup"}
          className="mt-6 px-4 py-2 bg-[#d40eeb] text-white rounded hover:brightness-120"
        >
          Oya put body
        </Link>
      </div>
      <footer className="border-t-[#c605b1] border-t-1 h-[6rem] w-full flex items-center justify-around">
        <a
          href=""
          className="flex flex-col items-center justify-center h-full"
        >
          <FaBook className="text-2xl text-[#c605b1] mr-2" />
          <p className="text-[0.7rem] text-gray-600">Rights wiki</p>
        </a>

        <a
          href=""
          className="flex flex-col items-center justify-center h-full"
        >
          <FaFilePen className="text-2xl text-[#c605b1] mr-2" />
          <p className="text-[0.7rem] text-gray-600">Report Violation</p>
        </a>

        <a
          href=""
          className="flex flex-col items-center justify-center h-full"
        >
          <FaScaleBalanced className="text-2xl text-[#c605b1] mr-2" />
          <p className="text-[0.7rem] text-gray-600">Get Aid</p>
        </a>

        <a
          href=""
          className="flex flex-col items-center justify-center h-full"
        >
          <FaBookOpenReader className="text-2xl text-[#c605b1] mr-2" />
          <p className="text-[0.7rem] text-gray-600">Learn and Play</p>
        </a>
      </footer>
    </section>
  );
};

export default Hero;
