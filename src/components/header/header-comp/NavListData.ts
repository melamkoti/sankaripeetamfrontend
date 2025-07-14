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
    childNav: ["parihara", "adyatmikam", "samajaseva", "pujalu"],
  },

  { navLink: "VAASTU", route: "/vastu" },
  { navLink: "GALLERY", route: "/gallery" },

  { navLink: "CONTACT US", route: "/contactus" },

  { navLink: "DONATE NOW", route: "/donate" },
];
