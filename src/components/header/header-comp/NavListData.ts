import { NavListItem } from "../../utils/types/Types";

// Data
export const NavListData: NavListItem[] = [
  { navLink: "Home", route: "/" },
  {
    navLink: "About",
    route: "/about",
    childNav: [
      { name: "Peetam", route: "peetam" },
      { name: "Peetadhipathi", route: "peetadhipathi" },
    ],
  },
  {
    navLink: "Events",
    route: "/events",
  },
  {
    navLink: "Activities",
    route: "/activities",
    childNav: [
      { name: "Parihara", route: "parihara" },
      { name: "Adyatmikam", route: "adyatmikam" },
      { name: "Samaja Seva", route: "samajaseva" },
      { name: "Ashrama Puja", route: "AshramaPuja" },
    ],
  },
  { navLink: "Vaastu", route: "/vastu" },
  { navLink: "Gallery", route: "/gallery" },
  {
    navLink: "Ashramas",
    route: "/branch",
    childNav: [
      {
        name: "Advytha Ashram",
        route: "Advytha_Ashram_Ongole",
        district: "Ongole",
      },
      {
        name: "Swarna Kamashi Ashram",
        route: "Swarna_Kamashi_Ashram",
        district: "Sangareddy",
      },
      {
        name: "Tantrakali Ashram",
        route: "Tantrakali_Ashram",
        district: "Shad Nagar",
      },
      {
        name: "Kalkadevi Samsthan",
        route: "kalkadevi_Samsthan",
        district: "Chandigarh",
      },
    ],
  },
  { navLink: "Contact Us", route: "/contactus" },
];
