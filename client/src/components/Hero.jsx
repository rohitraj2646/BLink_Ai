import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import "../index.css";


const Hero = () => {
  const navigate = useNavigate();
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [nextBgIndex, setNextBgIndex] = useState(1);

  const backgrounds = [
    "/background_start.jpg",
    "/background_1.jpg",
    "/background_2.jpg",
    "/background_3.jpg",
    "/background_4.jpg",
    "/background_5.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgrounds.length);
      setNextBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[150vh] w-full overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url(${backgrounds[currentBgIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          transform: "scale(1.1)", // Slightly scale up to prevent white edges
         
          zIndex: 1,
        }}
      />
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url(${backgrounds[nextBgIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          transform: "scale(1.1)",
          
          zIndex: 0,
        }}
      />
    <div className="absolute bottom-10 left-6 z-10">
    <h1 className="text-xl sm:text-xl md:text-2xl xl:text-3xl italic font-semibold leading-[1.2] text-white">
      Create Your Imagination <br /> with{" "}
      <span className="text-[#FF6F61] not-italic font-bold">BlinkAI</span>
    </h1>
  </div>

  <div className="absolute bottom-10 right-6 z-10">
    <button
      onClick={() => navigate("/ai")}
      className="bg-[#FF6F61] text-white px-8 py-2.5 rounded-lg hover:scale-105 active:scale-95 transition cursor-pointer"
    >
      Create Now
    </button>
  </div>
</div>
  );
};

export default Hero;
