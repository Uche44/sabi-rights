import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Transition } from "@headlessui/react"; // optional
import { createProfile } from "../lib/createProfile";
import { useAuthContext } from "../context/AuthContext";
import { useAccountType } from "../context/AccountTypeContext";

const UserProfileForm = () => {
  const { user } = useAuthContext();
  const { accountType } = useAccountType();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [errors, setErrors] = useState({});

  const validateStep1 = () => {
    const errs = {};
    if (!dob) {
      errs.dob = "Date of birth is required";
    }
    return errs;
  };

  const validateStep2 = () => {
    const errs = {};
    if (!gender) {
      errs.gender = "Gender is required";
    }
    return errs;
  };

  const handleNext = () => {
    const errs = validateStep1();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStep(2);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const errs = validateStep2();
      if (Object.keys(errs).length > 0) {
        setErrors(errs);
        return;
      }
      setErrors({});

      const profile = await createProfile(user, dob, gender, accountType);
      if (profile) {
        console.log("Profile created successfully:", profile);
        navigate("/dashboard/user");
      } else {
        console.error("Profile creation failed");
      }
      // Reset form
      setDob("");
      setGender("");
      setStep(1);
    } catch (error) {
      console.error("Error creating profile:", error);
    }
  };

  return (
    <div className="w-[85%] mt-10 p-6 bg-white rounded-[1rem] shadow">
      <form onSubmit={handleSubmit}>
        {/* Step 1 */}
        <Transition
          show={step === 1}
          enter="transition-transform duration-500"
          enterFrom="-translate-x-full opacity-0"
          enterTo="translate-x-0 opacity-100"
          leave="transition-transform duration-300 absolute"
          leaveFrom="translate-x-0 opacity-100"
          leaveTo="-translate-x-full opacity-0"
        >
          <div>
            <h2 className="text-xl font-semibold text-[#f92fff] mb-4 text-center">
              Tell Us Your Date of Birth
            </h2>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full px-4 py-2 border-[#ff62d6] rounded-[5px]"
            />
            {errors.dob && (
              <p className="text-red-500 text-sm mt-1">{errors.dob}</p>
            )}
            <button
              type="button"
              onClick={handleNext}
              className="mt-4 bg-[#ff27ce] text-white px-4 py-2 rounded hover:bg-brightness-120"
            >
              Next
            </button>
          </div>
        </Transition>

        {/* Step 2 */}
        <Transition
          show={step === 2}
          enter="transition-transform duration-500"
          enterFrom="translate-x-full opacity-0"
          enterTo="translate-x-0 opacity-100"
          leave="transition-transform duration-300 absolute"
          leaveFrom="translate-x-0 opacity-100"
          leaveTo="translate-x-full opacity-0"
        >
          <div>
            <h2 className="text-xl font-semibold text-[#f92fff] mb-4 text-center">
              Tell Us Your Gender
            </h2>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-4 py-2 border-[#ff62d6] rounded-[5px]"
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
            )}

            <div className="mt-4 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="bg-[#ff9ce7] text-gray-800 px-4 py-2 rounded hover:bg-brightness-120"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-[#ff27ce] text-white px-4 py-2 rounded hover:brightness-120"
              >
                Submit
              </button>
            </div>
          </div>
        </Transition>
      </form>
    </div>
  );
};

export default UserProfileForm;
