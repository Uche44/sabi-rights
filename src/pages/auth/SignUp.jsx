import React from "react";
import { useAccountType } from "../../context/AccountTypeContext";
import { FaPeopleGroup, FaPerson } from "react-icons/fa6";
import { useSearchParams } from "react-router-dom";
import UserSignup from "../../components/UserSignup";

const SignUp = () => {
  const { accountType } = useAccountType();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChangeType = (type) => {
    setSearchParams({ type });
  };

  return (
    <div className="w-full h-fit flex flex-col items-center">
      <img
        src="/assets/images/whoareyou.svg"
        className="w-[10rem] h-[10rem] -mt-[2rem] object-cover"
        alt=""
      />
      <h2 className="text-[1.6rem] font-bold text-[#f92fff] mb-4">
        Who Are You ?
      </h2>
      <div className="w-full h-fit p-4 bg-[#ff9ce7] rounded-[1rem]">
        <button
          onClick={() => handleChangeType("ngo")}
          className="w-full h-[4rem] bg-[#ff27ce] rounded-[0.6rem] flex items-center gap-4 px-4 cursor-pointer hover:brightness-120"
        >
          <FaPeopleGroup className="text-[2.2rem] text-white mr-2" />
          <p className="font-bold text-white text-[1.2rem]">NGO</p>
        </button>

        {/* normal user */}
        <button
          onClick={() => handleChangeType("user")}
          className="w-full h-[4rem] bg-[#ff27ce] rounded-[0.6rem] flex items-center gap-4 px-4 mt-4 cursor-pointer hover:brightness-120"
        >
          <FaPerson className="text-[2.2rem] text-white mr-2" />
          <p className="font-bold text-white text-[1.2rem]">REGULAR USER</p>
        </button>
      </div>
      {accountType === "user" && (
        <div className="w-full h-fit fixed top-0 p-4 bg-[#ff9ce7] rounded-[1rem] mt-4">
          <UserSignup />
        </div>
      )}
    </div>
  );
};

export default SignUp;
