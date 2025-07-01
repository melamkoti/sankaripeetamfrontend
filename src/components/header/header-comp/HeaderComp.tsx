import { NavLink } from "react-router-dom";
import LogoImg from "../../../assets/images/footer-logo.svg";
import NavListComp from "./NavListComp";
import { Example } from "./Example.tsx";
import userImg from "../../../assets/svg/user.svg";
import { useEffect, useRef, useState } from "react";
import UserProfile from "../../user/UserProfile.tsx";
import { useLocation } from "react-router-dom";
export default function Navbar() {
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

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

  return (
    <>
      <div className="w-screen relative flex justify-center items-center ">
        <nav className="shadow-xl backdrop-blur-md bg-[#080808] bg-opacity-70 fixed top-0 left-0 text-white w-[100%] text-sm p-0 m-0 flex justify-between items-center py-5 md:py-1 md:px-2 md:pr-8 ">
          <NavLink to="/">
            <div className="flex items-center justify-center">
              <div>
                <img src={LogoImg} className="w-10 md:w-16" alt="pic4" />
              </div>
            </div>
          </NavLink>
          <div className="flex justify-center items-center ">
            <div className="flex jusity-center items-center md:hidden">
              <Example />
            </div>

            <div className="hidden md:flex">
              <NavListComp />
            </div>
            {/* {location.pathname === "/login" ||
            location.pathname === "/signup" ? null : (
              <div className="md:hidden flex relative pr-14 ">
                <p>
                  <img
                    src={userImg}
                    className="w-10 "
                    alt="user page"
                    onClick={handlePopup}
                  />
                </p>
              </div>
            )} */}
            {location.pathname === "/login" ||
            location.pathname === "/signup" ? null : (
              <div className="hidden md:flex relative pl-4">
                <p>
                  <img
                    src={userImg}
                    className="w-10 "
                    alt="user page"
                    onClick={handlePopup}
                  />
                </p>
              </div>
            )}
          </div>
        </nav>
      </div>
      {showPopup && (
        <div
          ref={popupRef}
          className="absolute top-full right-4 mt-14 w-[300px] bg-white shadow-lg rounded-md z-50 "
        >
          <UserProfile handlePopup={handlePopup} />
        </div>
      )}
    </>
  );
}
