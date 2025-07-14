// import {  NavLink } from "react-router-dom";
// import LogoImg from "../../../assets/images/footer-logo.svg";
// import NavListComp from "./NavListComp";
// import { Example } from "./Example.tsx";
// import userImg from "../../../assets/svg/user.svg";
// import { useEffect, useRef, useState } from "react";
// import UserProfile from "../../user/UserProfile.tsx";
// import { useLocation } from "react-router-dom";
// export default function Navbar() {
//   const location = useLocation();
//   const [showPopup, setShowPopup] = useState(false);
//   const popupRef = useRef<HTMLDivElement>(null);

//   const handlePopup = () => {
//     setShowPopup((prev) => !prev);
//   };

//   // Close popup on outside click
//   useEffect(() => {
//     const handleClickOutside = (e: MouseEvent) => {
//       if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
//         setShowPopup(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <>
//       <div className="w-screen relative flex justify-center items-center ">
//         <nav className="shadow-xl backdrop-blur-md bg-[#080808] bg-opacity-70 fixed top-0 left-0 text-white w-[100%] text-sm p-0 m-0 flex justify-between items-center py-5 md:py-1 md:px-2  md:pr-8 ">
//           <div className="flex justify-center items-center px-2">
//             <NavLink to="/">
//               <div className="flex items-center justify-center ">
//                 <div>
//                   <img src={LogoImg} className="w-10 md:w-16" alt="pic4" />
//                 </div>
//               </div>
//             </NavLink>
//             <div className="flex jusity-center items-center md:hidden ">
//               <Example />
//             </div>
//           </div>

//           <div className="flex justify-center items-center ">
//             {/* <div className="flex jusity-center items-center md:hidden">
//               <Example />
//             </div> */}

//             <div className="hidden md:flex">
//               <NavListComp />
//             </div>
             
//             {location.pathname === "/login" ||
//             location.pathname === "/signup" ? null : (
//               <div className="hidden md:flex relative pl-4 cursor-pointer">
//                 <p>
//                   <img
//                     src={userImg}
//                     className="w-10 "
//                     alt="user page"
//                     onClick={handlePopup}
//                   />
//                 </p>
//               </div>
//             )} 
           
//           </div>
//         </nav>
//       </div>

//       {showPopup && (
//         <div
//           ref={popupRef}
//           className="absolute top-full right-4 mt-14 w-[300px] bg-white shadow-lg rounded-md z-50 "
//         >
//           <UserProfile handlePopup={handlePopup} />
//         </div>
//       )}
//     </>
//   );
// }

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

  const shouldShowAuthButton = !["/login", "/signup"].includes(location.pathname);

  return (
    <div className="w-full relative">
      <nav className="shadow-xl backdrop-blur-md bg-[#080808] bg-opacity-70 fixed top-0 left-0 text-white w-full text-sm p-0 m-0 flex justify-between items-center py-5 md:py-1 md:px-2 md:pr-8 z-40">
        <div className="flex justify-center items-center px-2">
          <NavLink to="/">
            <div className="flex items-center justify-center">
              <img src={LogoImg} className="w-10 md:w-16" alt="Website Logo" />
            </div>
          </NavLink>
          <div className="flex justify-center items-center md:hidden">
            <Example />
          </div>
        </div>

        <div className="flex justify-center items-center gap-4">
          <div className="hidden md:flex">
            <NavListComp />
          </div>

          {shouldShowAuthButton && (
            <div className="hidden md:flex items-center gap-4">
              {isAuthenticated ? (
                <>
                  <div className="relative">
                    <img
                      src={userImg}
                      className="w-10 h-10 rounded-full object-cover cursor-pointer"
                      alt="User profile"
                      onClick={handlePopup}
                    />
                    {showPopup && (
                      <div
                        ref={popupRef}
                        className="fixed top-20 right-4 w-[300px] bg-white shadow-lg rounded-md z-50 text-black"
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
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition whitespace-nowrap"
                >
                  Login
                </Link>
              )}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}