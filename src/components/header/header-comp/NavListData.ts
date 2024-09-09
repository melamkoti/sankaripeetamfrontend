import cartImg from "../../../assets/svg/cart.svg";
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
  { navLink: "PRODUCTS", route: "/products" },
  { navLink: "CONTACT US", route: "/contactus" },
  {
    navLink: "CART",
    isImage: true,
    imageSrc: cartImg,
    altText: "Image Description",
    route: "/cart",
  },
  { navLink: "DONATE NOW", route: "/donate" },
];
