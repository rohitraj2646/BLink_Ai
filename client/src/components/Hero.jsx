import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-20 xl:p-32 relative inline-flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen">
      {/* Heading + Sub */}
      <div className="text-center mb-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]">
          Shape Your Imagination <br /> In a{" "}
          <span className="text-[#FF6F61]">Blink</span>
        </h1>
        <p className="mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-600">
          Enhance your content creation with our advanced BLinKAI . — craft articles, generate images, and streamline your workflow.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs">
        <button
          onClick={() => navigate("/ai")}
          className="bg-primary text-white px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer"
        >
           Create Now
        </button>
        
      </div>

      {/* Trusted Section */}
      <div className="flex items-center gap-4 mt-8 mx-auto text-gray-600">
        <p> Trusted By Users </p>
      </div>

      {/* Logos Marquee */}
      <div className="overflow-hidden mt-16 w-full">
        <div className="w-full">
          <div className="flex gap-12 animate-marquee whitespace-nowrap px-4">
            <span className="text-lg font-medium text-gray-700 border border-gray-200 rounded-md px-4 py-2 bg-[#FF6F61]/10 whitespace-nowrap">Blog Titles</span>
            <span className="text-lg font-medium text-gray-700 border border-gray-200 rounded-md px-4 py-2 bg-[#FF6F61]/10 whitespace-nowrap">Images</span>
            <span className="text-lg font-medium text-gray-700 border border-gray-200 rounded-md px-4 py-2 bg-[#FF6F61]/10 whitespace-nowrap">Articles</span>
            <span className="text-lg font-medium text-gray-700 border border-gray-200 rounded-md px-4 py-2 bg-[#FF6F61]/10 whitespace-nowrap">Background Remove</span>
            <span className="text-lg font-medium text-gray-700 border border-gray-200 rounded-md px-4 py-2 bg-[#FF6F61]/10 whitespace-nowrap">Remove Object</span>
            <span className="text-lg font-medium text-gray-700 border border-gray-200 rounded-md px-4 py-2 bg-[#FF6F61]/10 whitespace-nowrap">AI Chat</span>

            {/* Duplicate for seamless loop */}
            <span className="text-lg font-medium text-gray-700 border border-gray-200 rounded-md px-4 py-2 bg-[#FF6F61]/10 whitespace-nowrap">Blog Titles</span>
            <span className="text-lg font-medium text-gray-700 border border-gray-200 rounded-md px-4 py-2 bg-[#FF6F61]/10 whitespace-nowrap">Images</span>
            <span className="text-lg font-medium text-gray-700 border border-gray-200 rounded-md px-4 py-2 bg-[#FF6F61]/10 whitespace-nowrap">Articles</span>
            <span className="text-lg font-medium text-gray-700 border border-gray-200 rounded-md px-4 py-2 bg-[#FF6F61]/10 whitespace-nowrap">Background Remove</span>
            <span className="text-lg font-medium text-gray-700 border border-gray-200 rounded-md px-4 py-2 bg-[#FF6F61]/10 whitespace-nowrap">Remove Object</span>
            <span className="text-lg font-medium text-gray-700 border border-gray-200 rounded-md px-4 py-2 bg-[#FF6F61]/10 whitespace-nowrap">AI Chat</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
