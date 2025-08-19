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
    childNav: ["parihara", "adyatmikam", "samajaseva", "AshramaPuja"],
  },

  { navLink: "Vaastu", route: "/vastu" },
  { navLink: "Gallery", route: "/gallery" },
   { navLink: "Ashramas ", route: "/profilepage",
        childNav: ["Advytha Ashram Ongole", "Swarna Kamashi Ashram Sangareddy", "Tantrakali Ashram Shad Nagar", "kalkadevi Samsthan Chandigahr"],

    },

  { navLink: "Contact Us", route: "/contactus" },

];
