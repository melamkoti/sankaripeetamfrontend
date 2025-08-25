import { Link, NavLink } from "react-router-dom";
import LogoImg from "../../../assets/images/footer-logo.svg";
import NavListComp from "./NavListComp";
import { Example } from "./Example.tsx";
import { useEffect, useRef, useState, useContext } from "react";
import UserProfile from "../../user/UserProfile.tsx";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthContext.tsx";

export default function Navbar() {
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const { isAuthenticated, user, logout } = useContext(AuthContext)!;

  const handlePopup = () => {
    setShowPopup((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setShowPopup(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 140);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const shouldShowAuthButton = !["/login", "/signup"].includes(
    location.pathname
  );

  return (
    <div className="fixed  top-0 left-0 right-0 z-50">
      {/* Container to constrain width to 1440px */}
      <div className="mx-auto max-w-[1440px] relative">
        {/* Top Section - Mobile */}
        <div className="lg:hidden flex gap-4 items-center px-4 py-3 bg-[#FDAE51]">
          <NavLink to="/" className="flex items-center justify-center">
            <img
              src={LogoImg}
              className="w-[44px] h-[44px]"
              alt="Website Logo"
            />
          </NavLink>
          <div className="text-left">
            <h2
              style={{ fontFamily: "Oswald" }}
              className="text-[15px] font-normal font-oswald"
            >
              Sanathana Sankari Peetam
            </h2>
            <p className="text-[11px] font-normal">Dharmam Saranam Gachchami</p>
          </div>
          <div className="flex justify-center items-center lg:hidden">
            <Example />
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:block ">
          {/* Top Title Section - Will hide on scroll */}
          <div
            className={`bg-[#FDAE51] flex justify-between items-center px-4 md:px-16 py-3 h-[146px] transition-all duration-300 ${
              isScrolled
                ? "opacity-0 -translate-y-full absolute"
                : "opacity-100 translate-y-0"
            }`}
          >
            {/* Left Title */}
            <div className="text-left flex flex-col gap-[2px] mt-[-8px]">
              <h2
                style={{ fontFamily: "Oswald" }}
                className="text-lg font-medium md:text-[30px] mb-[3px] font-oswald"
              >
                Sanathana Sankari Peetam
              </h2>
              <p className="text-sm md:text-[18px] mt-1 font-medium">
                Dharmam Saranam Gachchami
              </p>
            </div>

            {/* Center Logo */}
            <div className="flex-shrink-0">
              <img
                src={LogoImg}
                alt="Logo"
                className="w-14 md:w-[88px] md:h-[88px] object-contain"
              />
            </div>

            {/* Right Title (Telugu) */}
            <div className="text-left font-anek">
              <h2 className="text-lg md:text-[30px] font-semibold mb-[3px]">
                సనాతన శాంకరీ పీఠం
              </h2>
              <p className="text-sm md:text-[20px] mt-1 font-medium">
                ధర్మం శరణం గచ్చామి
              </p>
            </div>
          </div>

          {/* Navigation Menu - Always stays fixed at top */}
          <div className="bg-[#8e512c] flex justify-between items-center px-4 md:px-16 py-2 shadow">
            {/* Nav Links Centered */}
            <div className="flex flex-1 justify-center mx-auto">
              <NavListComp />
            </div>

            {/* Right Side Auth Buttons */}
            {shouldShowAuthButton && (
              <div className="flex items-center gap-4">
                {isAuthenticated ? (
                  <div className="relative">
                    <div className="flex gap-2">
                      <Link
                        to="/donate"
                        className="px-4 py-1 bg-[#5d3608] text-[18px] text-[#FAE7D0] rounded-md hover:bg-orange-700 transition whitespace-nowrap font-medium cursor-pointer"
                      >
                        Donate
                      </Link>
                      <span
                        onClick={handlePopup}
                        className="px-4 py-1 bg-[#5d3608] text-[18px] text-[#FAE7D0] rounded-md hover:bg-orange-700 transition whitespace-nowrap font-medium cursor-pointer"
                      >
                        Profile
                      </span>
                    </div>
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
                ) : (
                  <>
                    <Link
                      to="/donate"
                      className="px-4 py-2 bg-[#BB4F27] text-[18px] text-[#FAE7D0] rounded-md hover:bg-orange-700 transition whitespace-nowrap font-medium cursor-pointer"
                    >
                      Donate
                    </Link>
                    <Link
                      to="/login"
                      className="px-4 py-2 bg-[#BB4F27] text-[18px] text-[#FAE7D0] rounded-md hover:bg-orange-700 transition whitespace-nowrap font-medium cursor-pointer"
                    >
                      Login
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
