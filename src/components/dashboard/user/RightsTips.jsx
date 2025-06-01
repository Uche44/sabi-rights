import { rightsData } from "../../../lib/constants";
import { useState, useEffect } from "react";

const RightsTips = () => {
  const [rights] = useState(rightsData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        // Pick a random index different from the current
        let nextIndex;
        do {
          nextIndex = Math.floor(Math.random() * rights.length);
        } while (nextIndex === currentIndex && rights.length > 1);
        setCurrentIndex(nextIndex);
        setFade(true);
      }, 400); // match fade-out duration
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, [currentIndex, rights.length]);

  return (
    <section className="w-full h-fit bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-xl font-bold text-[#eb2fff] mb-4">
        Basic Human Rights Tips
      </h2>
      <div
        className={`transition-opacity duration-400 ${
          fade ? "opacity-100" : "opacity-0"
        } text-lg text-gray-700`}
      >
        {rights[currentIndex]?.right}
      </div>
    </section>
  );
};

export default RightsTips;
