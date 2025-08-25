import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChildNavItem, NavListItem } from "../../utils/types/Types";
import { NavListData } from "./NavListData";
// Navigation Component
function NavListComp() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleNavLinkClick = (item: NavListItem) => {
    if (item.childNav) {
      const firstChildRoute = `${item.route}/${item.childNav[0].route}`;
      navigate(firstChildRoute);
    } else {
      navigate(item.route);
    }
  };

  const handleChildNavClick = (child: ChildNavItem, item: NavListItem) => {
    const route = `${item.route}/${child.route}`;
    navigate(route);
    setActiveDropdown(null);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="flex flex-wrap justify-center items-center lg:gap-6 gap-2 h-full">
      {NavListData.map((item: NavListItem, index) => {
        const isActive = item.navLink === activeDropdown;

        return (
          <div key={index} className="relative flex items-center">
            <div
              className="relative group"
              onMouseEnter={() =>
                item.childNav && setActiveDropdown(item.navLink)
              }
            >
              <div className="flex items-center ">
                <span
                  className={`transition-all duration-300 hover:text-black text-[#e9e5df] cursor-pointer text-[18px] font-medium font-work hover:text-white mx-2 ${
                    isActive ? "decoration-2 underline-offset-4" : ""
                  } ${
                    item.navLink === "Donate Now"
                      ? "bg-[#5d3608] hover:bg-orange-700 text-white px-4 py-2 rounded-md no-underline hover:no-underline"
                      : ""
                  }`}
                  onClick={() => handleNavLinkClick(item)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.navLink}
                </span>
                {item.childNav && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-6 h-6 transition-transform duration-300 ${
                      isActive ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="#e9e5df"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>

              {item.childNav && (
                <div
                  className={`absolute top-full left-0 mt-2 z-20 shadow-lg shadow-[#54321c] bg-[#5d3608] text-white font-normal text-sm p-4 rounded-md min-w-[250px] transition-all duration-200 ${
                    isActive
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                  onMouseLeave={handleMouseLeave}
                >
                  <ul className="grid grid-cols-1 gap-2">
                    {item.childNav.map(
                      (child: ChildNavItem, childIndex: number) => (
                        <li key={childIndex}>
                          <span
                            className="block px-3 py-2 transition-all duration-300 cursor-pointer rounded hover:pl-4"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleChildNavClick(child, item);
                            }}
                          >
                            <span className="font-medium">{child.name}</span>
                            {child.district && (
                              <span className="italic text-amber-200 ml-2">
                                {child.district}
                              </span>
                            )}
                          </span>
                        </li>
                      )
                    )}
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

export default NavListComp;
