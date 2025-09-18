import { assets } from "../assets/assets";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setShowPopup(true);
      setEmail("");
      // Hide popup after 3 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  };

  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500 mt-20">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <div className="md:max-w-96">
          <img className="h-9" src={assets.logo} alt="logo" />
          <p className="mt-6 text-sm">
            Experience the power of AI with BlinkAI. <br /> Transform you
            content creation with our suite of premium AI tools. Write articles,
            generate images, and enhance your workflow.
          </p>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20">
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/rr91022"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/rr91022"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact us
                </a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-gray-800 mb-5">
              Subscribe to our newsletter
            </h2>
            <div className="text-sm space-y-2">
              <p>
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
              <div className="flex items-center gap-2 pt-4">
                <input
                  className="border border-gray-500/30 placeholder-gray-500 focus:ring-2 ring-indigo-600 outline-none w-full max-w-64 h-9 rounded px-2"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  onClick={handleSubscribe}
                  className="bg-primary w-24 h-9 text-white rounded cursor-pointer hover:bg-primary/90 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-4 text-center text-xs md:text-sm pb-5">
        Copyright 2025 ©{" "}
        <a target="_blank" href="www.linkedin.com/in/rr91022">
          Rohit Raj
        </a>
        . All Right Reserved.
      </p>
      {/* Success Popup */}
      {showPopup && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in">
          Subscribed successfully! 🎉
        </div>
      )}
    </footer>
  );
};

export default Footer;
