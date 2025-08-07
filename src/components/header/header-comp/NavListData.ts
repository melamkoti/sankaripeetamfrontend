export const NavListData = [
  { navLink: "Home", route: "/" },
  // { navLink: "ABOUT", route: "/aboutus" },
  {
    navLink: "About",
    route: "/about",
    childNav: ["peetam", "peetadhipathi"],
  },
  {
    navLink: "Events",
    route: "/events",
  },
  {
    navLink: "Activities",
    route: "/activities",
    childNav: ["parihara", "adyatmikam", "samajaseva", "pujalu"],
  },

  { navLink: "Vaastu", route: "/vastu" },
  { navLink: "Gallery", route: "/gallery" },

  { navLink: "Contact Us", route: "/contactus" },

  { navLink: "Donate Now", route: "/donate" },
];
