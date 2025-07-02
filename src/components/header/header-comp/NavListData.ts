// import { Outlet } from "react-router-dom";
// import cartImg from "../../../assets/svg/cart.svg";
//import wishlistImg from "../../../assets/svg/wishlist.png";
export const NavListData = [
  { navLink: "HOME", route: "/" },
  { navLink: "ABOUT", route: "/aboutus" },
  {
    navLink: "EVENTS",
    route: "/events",
    childNav: ["previousevents", "upcomingevents"],
  },
  {
    navLink: "ACTIVITIES",
    route: "/activities",
    childNav: ["parihara", "adyatmikam", "samajaseva", "poojalu"],
  },

  { navLink: "VAASTU", route: "/vastu" },
  { navLink: "GALLERY", route: "/gallery" },

  { navLink: "CONTACT US", route: "/contactus" },
  // {
  //   navLink: "USER",
  //   isImage: true,
  //   imageSrc: userImg,
  //   altText: "Image Description",
  //   route: "/user",
  // },

  // {
  //   navLink: "CART",
  //   isImage: true,
  //   imageSrc: cartImg,
  //   altText: "Image Description",
  //   route: "/cart",
  // },
  // {
  //   navLink: "WISHLIST",
  //   isImage: true,
  //   imageSrc: wishlistImg,
  //   altText: "Image Description",
  //   route: "/wishlist",
  // },
  { navLink: "DONATE NOW", route: "/donate" },
];
