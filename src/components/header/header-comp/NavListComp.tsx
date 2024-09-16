import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { NavListData } from "./NavListData";
import downarrow from "../../../assets/svg/downarrow.svg";
import { NavListItem } from "../../utils/types/Types";

export default function NavListComp() {
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    // Fetch the product count when the component mounts
    fetchProductCount();
  }, []);

  const fetchProductCount = async () => {
    const userId = 1;
    try {
      const response = await axios.get(
        `http://localhost:3000/cart/item/${userId}`,
        {
          params: { userId: 1 },
        }
      );

      setProductCount(response.data.productCount);
    } catch {
      console.log("Faild to fetch product");
    }
  };

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
    <ul className="flex flex-wrap w-full text-[#f87005] text-md font-semibold justify-center items-center lg:gap-10 gap-4 h-full">
      {NavListData.map((item: NavListItem, index) => (
        <li
          key={index}
          className="relative flex items-center"
          onMouseEnter={() => item.childNav && handleMouseEnter(item.navLink)}
          onMouseLeave={() => item.childNav && handleMouseLeave()}
        >
          <div className="flex items-end">
            {item.isImage ? (
              <div className="relative">
                <img
                  src={item.imageSrc}
                  alt={item.altText}
                  className="h-7 cursor-pointer"
                  onClick={() => handleNavLinkClick(item)}
                />
                {item.navLink === "CART" && productCount >= 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center text-xs">
                    {productCount}
                  </span>
                )}
              </div>
            ) : (
              <span
                className={`duration-300 hover:text-white cursor-pointer ${
                  item.navLink === "DONATE NOW"
                    ? "bg-orange-500 text-white px-4 py-2 rounded-full"
                    : ""
                }`}
                onClick={() => handleNavLinkClick(item)}
              >
                {item.navLink}
              </span>
            )}

            {item.childNav && (
              <img src={downarrow} alt="downarrow" className="w-4 block ml-2" />
            )}
          </div>

          {item.childNav && (
            <div
              className={`absolute top-full left-0 shadow-xl shadow-[#f87005]/30 backdrop-blur-3xl bg-black bg-opacity-60 min-w-[140px] w-full text-white font-normal text-sm ${
                item.navLink === activeDropdown ? "block" : "hidden"
              } p-4 rounded-md`}
              onMouseLeave={handleMouseLeave}
            >
              <ul className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 w-screen border-3 border-red-800">
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
        </li>
      ))}
    </ul>
  );
}
