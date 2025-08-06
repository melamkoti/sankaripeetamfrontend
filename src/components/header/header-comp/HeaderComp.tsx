import { Link, NavLink } from "react-router-dom";
import LogoImg from "../../../assets/images/footer-logo.svg";
import NavListComp from "./NavListComp";
import { Example } from "./Example.tsx";
import userImg from "../../../assets/svg/user.svg";
import { useEffect, useRef, useState, useContext } from "react";
import UserProfile from "../../user/UserProfile.tsx";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthContext.tsx";

export default function Navbar() {
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const { isAuthenticated, user, logout } = useContext(AuthContext)!; // Non-null assertion as we know it's provided

  const handlePopup = () => {
    setShowPopup((prev) => !prev);
  };

  // Close popup on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setShowPopup(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const shouldShowAuthButton = !["/login", "/signup"].includes(
    location.pathname
  );

  return (
    <div className="w-full z-50">
      {/* Top Section */}
      <div className="lg:hidden  flex gap-4 items-center px-4  py-3 bg-[#FDAE51]">
        <NavLink to="/" className="flex items-center justify-center">
          <img src={LogoImg} className="w-10" alt="Website Logo" />
        </NavLink>
        <div className="text-left font-anek">
          <h2 className="text-[15px] font-semibold ">
            Sanathana Sankari Peetam
          </h2>
          <p className="text-[11px] font-normal">Dharmam Saranam Gachchami</p>
        </div>
        <div className="flex justify-center items-center lg:hidden">
          <Example />
        </div>
      </div>

      <div className="hidden bg-[#FDAE51] lg:flex  justify-between  items-center px-4 md:px-16 py-3 ">
        {/* Left Title */}
        <div className="text-left font-anek">
          <h2 className="text-lg font-bold md:text-[30px]">
            Sanathana Sankari Peetam
          </h2>
          <p className="text-sm md:text-base md:text-[20px] mt-1">
            Dharmam Saranam Gachchami
          </p>
        </div>

        {/* Center Logo */}
        <div className="flex-shrink-0">
          <img
            src={LogoImg}
            alt="Logo"
            className="w-14 md:w-[88px]  md:h-[88px] object-contain"
          />
        </div>

        {/* Right Title (Telugu) */}
        <div className="text-left font-anek">
          <h2 className="text-lg md:text-[30px] font-bold ">
            సనాతన శాంకరీ పీఠం
          </h2>
          <p className="text-sm md:text-base md:text-[20px] mt-1">
            ధర్మం శరణం గచ్చామి
          </p>
        </div>
      </div>

      {/* Bottom Navigation Menu */}
      <div className="hidden bg-[#FDAE51] lg:flex justify-between items-center px-4 md:px-16 py-2 shadow border-t-2 border-b-2 border-[#BB4F27]">
        {/* Navigation Links */}

        <div className="hidden md:flex 2xl:pl-[600px] xl:pl-[300px]   ">
          <NavListComp />
        </div>

        {/* Buttons */}
        {shouldShowAuthButton && (
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <div className="relative">
                  <img
                    src={userImg}
                    className="w-10 h-10 rounded-full object-cover cursor-pointer right-6"
                    alt="User profile"
                    onClick={handlePopup}
                  />
                  {showPopup && (
                    <div
                      ref={popupRef}
                      className="absolute top-14 right-2 w-[280px] bg-white shadow-lg rounded-md z-50 text-black"
                    >
                      <UserProfile
                        user={user}
                        handlePopup={handlePopup}
                        logout={logout}
                      />
                    </div>
                  )}
                </div>
              </>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 bg-[#BB4F27] text-[#FAE7D0] rounded-md hover:bg-orange-700 transition whitespace-nowrap"
              >
                Login
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
