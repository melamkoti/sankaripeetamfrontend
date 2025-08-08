import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { NavListData } from "./NavListData";
import downarrow from "../../../assets/svg/downarrow.svg";
import uparrow from "../../../assets/svg/samajaseva0.svg";
import { NavListItem } from "../../utils/types/Types";

export default function NavListComp() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleNavLinkClick = (item: NavListItem) => {
    if (item.childNav) {
      const firstChildRoute = `${item.route}/${item.childNav[0]}`;
      navigate(firstChildRoute);
    } else {
      navigate(item.route);
    }
  };

  const handleChildNavClick = (child: string, item: NavListItem) => {
    const route = `${item.route}/${child}`;
    navigate(route);
    setActiveDropdown(null);
  };
  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    
    <div className="flex flex-wrap w-full justify-center items-center lg:gap-6 gap-2 h-full">
  {NavListData.map((item: NavListItem, index) => {
    const isActive = item.navLink === activeDropdown;

    return (
      <div key={index} className="relative flex items-center">
        {/* Wrapper for hover area */}
        <div
          className="relative group" // Added group for potential future hover states
          onMouseEnter={() =>
            item.childNav && setActiveDropdown(item.navLink)
          }
        >
          {/* Main link */}
          <div className="flex items-center"> {/* Removed duplicate items-end */}
            <span
              className={`transition-all duration-300 hover:text-black text-[#201711] cursor-pointer text-[18px] font-medium font-work ${
                isActive 
                  ? "underline decoration-2 underline-offset-4" 
                  : "hover:underline hover:decoration-2 hover:underline-offset-4"
              } ${
                item.navLink === "Donate Now"
                  ? "bg-[#BB4F27] hover:bg-orange-700 text-[#FAE7D0] px-4 py-2 rounded-full no-underline hover:no-underline"
                  : ""
              }`}
              onClick={() => handleNavLinkClick(item)}
            >
              {item.navLink}
            </span>

            {/* Arrow Icon */}
            {item.childNav && (
              <img
                src={isActive ? downarrow : uparrow}
                alt="dropdown arrow"
                className={`w-4 ml-2 transition-transform duration-300 ${
                  isActive ? "rotate-180" : ""
                }`}
              />
            )}
          </div>

          {/* Dropdown menu */}
          {item.childNav && (
            <div
              className={`absolute top-full left-0 mt-2 z-20 shadow-xl shadow-[#f87005]/30 backdrop-blur-3xl bg-black/60 text-white font-normal text-sm p-4 rounded-md min-w-[200px] transition-all duration-200 ${
                isActive 
                  ? "opacity-100 visible translate-y-0" 
                  : "opacity-0 invisible -translate-y-2"
              }`}
              onMouseLeave={handleMouseLeave}
            >
              <ul className="grid grid-cols-1 gap-2">
                {item.childNav.map((child: string, childIndex: number) => (
                  <li key={childIndex}>
                    <span
                      className="block px-3 py-2 transition-all duration-300 hover:bg-[#f87005]/80 cursor-pointer rounded hover:pl-4"
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
      </div>
    );
  })}
</div>
  );
}
