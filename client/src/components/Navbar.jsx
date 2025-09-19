import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { ArrowRight } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();

  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 pt-4">
          {/* Logo */}
          <img
            onClick={() => navigate("/")}
            src={assets.logo}
            alt="logo"
            className="w-32 sm:w-44 cursor-pointer"
          />

          {user ? (
            <UserButton />
          ) : (
            <button
              onClick={openSignIn}
              className="bg-[#FF6F61] text-white px-6 py-2 rounded-lg hover:bg-[#FF6F61]/90 transition-colors"
            >
              Get Started
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
