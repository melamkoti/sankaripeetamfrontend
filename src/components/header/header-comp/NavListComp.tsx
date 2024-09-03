// import { NavLink, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { NavListData } from "./NavListData";
// import { NavListItem } from "../../utils/types/Types";
// export default function NavListComp() {
//   const [isActivitiesOpen, setIsActivitiesOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleActivitiesClick = () => {
//     setIsActivitiesOpen(!isActivitiesOpen);
//     if (!isActivitiesOpen) {
//       navigate("/activities/parihara");
//     }
//   };

//   return (
//     <ul className="flex justify-center items-center gap-8 h-full">
//       {NavListData.map(
//         (
//           item: { route: string; navLink: string; childNav?: NavListItem[] },
//           index: number
//         ) => (
//           <li key={index} className="relative">
//             <div
//               onClick={item.childNav ? handleActivitiesClick : undefined}
//               className="cursor-pointer"
//             >
//               {item.childNav ? (
//                 item.navLink
//               ) : (
//                 <NavLink to={item.route}>{item.navLink}</NavLink>
//               )}
//             </div>
//             {item.childNav && isActivitiesOpen && (
//               <ul className="absolute top-full left-0 bg-white shadow-md">
//                 {item.childNav.map((child, childIndex) => (
//                   <li key={childIndex} className="px-4 py-2 hover:bg-gray-200">
//                     <NavLink to={child.route}>{child.navLink}</NavLink>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         )
//       )}
//     </ul>
//   );
// // }
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import downarrow from "../../../assets/svg/downarrow.svg";
// import { NavListData } from "./NavListData"; // Updated NavListData import

// export default function NavListComp({
//   openDropdown,
//   setOpenDropdown,
//   handleDropdownClick,
//   handleCloseDropdown
// }) {
//   const navigate = useNavigate();

//   const handleNavLinkClick = (item: any) => {
//     if (item.childNav) {
//       // Navigate to the first child route of the nav item by default
//       const firstChildRoute = `${item.route}/${item.childNav[0]}`;
//       setOpenDropdown(item.navLink); // Set the dropdown state
//       navigate(firstChildRoute);
//     } else {
//       navigate(item.route);
//       handleCloseDropdown(); // Close dropdown if no child nav
//     }
//   };

//   const handleChildNavClick = (child: string, parent: any) => {
//     // Navigate to the specific child route under its parent
//     const route = `${parent.route}/${child}`;
//     navigate(route);
//     handleCloseDropdown();
//   };

//   return (
//     <ul className="flex text-[#f87005] text-md font-semibold justify-center self-center items-center lg:gap-10 gap-4 h-full">
//       {NavListData.map((item, index) => (
//         <div
//           key={index}
//           className="flex items-center relative"
//         >
//           <div className="flex items-end">
//             <span
//               className="duration-300 hover:text-white cursor-pointer"
//               onClick={() => handleNavLinkClick(item)}
//             >
//               {item.navLink}
//             </span>

//             {item.childNav && (
//               <img
//                 src={downarrow}
//                 alt="downarrow"
//                 className="w-4 block ml-1"
//                 onClick={() => handleDropdownClick(item.navLink, `${item.route}/${item.childNav[0]}`)}
//               />
//             )}
//           </div>

//           {item.childNav && openDropdown === item.navLink && (
//             <div
//               className="absolute top-full left-0 shadow-xl shadow-[#f87005]/30 backdrop-blur-3xl bg-black bg-opacity-60 w-full text-white font-normal text-sm block p-4 rounded-md"
//             >
//               <ul className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 w-screen border-3 border-red-800">
//                 {item.childNav.map((child, childIndex) => (
//                   <li key={childIndex}>
//                     <span
//                       className="block border-r p-1 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-[#141414]/30 cursor-pointer"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         handleChildNavClick(child, item);
//                       }}
//                     >
//                       {child}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       ))}
//     </ul>
//   );
// }

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { NavListData } from "./NavListData";
import downarrow from "../../../assets/svg/downarrow.svg";
import { NavListItem } from "../../utils/types/Types";

export default function NavListComp() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleMouseEnter = (navLink: string) => {
    setActiveDropdown(navLink);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleNavLinkClick = (item: NavListItem) => {
    if (item.childNav) {
      // Navigate to the first child by default
      const firstChildRoute = `${item.route}/${item.childNav[0]}`;
      navigate(firstChildRoute); 
    } else {
      navigate(item.route);
    }
  };

  const handleChildNavClick = (child: string, item: NavListItem) => {
    const route = `${item.route}/${child}`;
    navigate(route);
  };
  

  return (
    <ul className="flex text-[#f87005] text-md font-semibold justify-center self-center items-center lg:gap-10 gap-4 h-full ">
      {NavListData.map((item: NavListItem, index) => (
        <div
          key={index}
          className="flex items-center"
          onMouseEnter={() => item.childNav && handleMouseEnter(item.navLink)}
        >
          <div className="flex items-end">
            <span
              className="duration-300 hover:text-white cursor-pointer"
              onClick={() => handleNavLinkClick(item)}
            >
              {item.navLink}
            </span>

            {item.childNav && (
              <img src={downarrow} alt="downarrow" className="w-4  block" />
            )}
          </div>

          {item.childNav && (
            <div
              className={`absolute top-full left-[0] shadow-xl shadow-[#f87005]/30 backdrop-blur-3xl bg-black bg-opacity-60 w-[100%] text-white font-normal text-sm ${
                item.navLink === activeDropdown ? "block" : "hidden"
              } p-4 rounded-md`}
              onMouseLeave={handleMouseLeave}
            >
              <ul className="grid lg:grid-cols-4 md:grid-cols-3  gap-4 w-screen border-3 border-red-800">
                {item.childNav.map((child: string, childIndex: number) => (
                  <li key={childIndex}>
                    <span
                      className="block border-r p-1 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-[#141414]/30 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleChildNavClick(child, item);
                      }}
                    >
                      {child}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </ul>
  );
}
