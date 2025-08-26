// import { motion } from "framer-motion";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { z } from "zod";


// // navSchema.ts

// export const navSchema = z.object({
//   navLink: z.string(),
//   route: z.string(),
//   childNav: z
//     .array(
//       z.object({
//         name: z.string(),
//         route: z.string(),
//         district: z.string().optional(), // only needed for Ashramas
//       })
//     )
//     .optional(),
// });

// export type NavSchema = z.infer<typeof navSchema>;

// const variants = {
//   open: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       y: { type: "spring", stiffness: 100, velocity: -50 },
//     },
//   },
//   closed: {
//     y: 100,
//     opacity: 0,
//     transition: {
//       y: { type: "spring", stiffness: 100 },
//     },
//   },
// };

// export const MenuItem = ({
//   item,
//   closeMenu,
// }: {
//   item: NavSchema;
//   closeMenu: () => void;
// }) => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
//     if (item.childNav) {
//       e.preventDefault();
//       setIsDropdownOpen((prev) => !prev);
//     } else {
//       navigate(item.route);
//       closeMenu();
//     }
//   };

//   return (
    
//       <motion.div
//         variants={variants}
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         {/* Parent link */}
//         <NavLink
//           to={item.route}
//           className="nav-li  px-4 py-2 mb-2 block text-sm font-semibold text-[#1C1E53]"
//           onClick={handleItemClick}
//         >
//           {item.navLink}
//         </NavLink>

//         {/* Dropdown children */}
//         {item.childNav && isDropdownOpen && (
//           <div className="pl-6 border-l border-slate-200">
//             {item.childNav.map((child, index) => (
//               <NavLink
//                 key={index}
//                 to={`${item.route}/${child.route}`}
//                 className="block text-sm text-[#1C1E53] py-2 hover:pl-2 transition"
//                 onClick={closeMenu}
//               >
//                 {child.name}
//                 {child.district && (
//                   <span className="ml-2 text-xs text-gray-500">
//                     ({child.district})
//                   </span>
//                 )}
//               </NavLink>
//             ))}
//           </div>
//         )}
//       </motion.div>
    
//   );
// };


import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { z } from "zod";
// navSchema.ts
export const navSchema = z.object({
  navLink: z.string(),
  route: z.string(),
  childNav: z
    .array(
      z.object({
        name: z.string(),
        route: z.string(),
        district: z.string().optional(), // only needed for Ashramas
      })
    )
    .optional(),
});

export type NavSchema = z.infer<typeof navSchema>;


export const MenuItem = ({
  item,
  closeMenu,
}: {
  item: NavSchema;
  closeMenu: () => void;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (item.childNav) {
      e.preventDefault();
      setIsDropdownOpen((prev) => !prev);
    } else {
      navigate(item.route);
      closeMenu();
    }
  };

  return (
    <div className="mb-2 ">
      {/* Parent link */}
      <NavLink
        to={item.route}
        className="block px-4 py-2 text-sm font-semibold text-[#1C1E53] hover:bg-gray-100 rounded"
        onClick={handleClick}
      >
        {item.navLink}
      </NavLink>

      {/* Dropdown children */}
      {item.childNav && isDropdownOpen && (
        <div className="pl-6 border-l border-slate-200 mt-1">
          {item.childNav.map((child, index) => (
            <NavLink
              key={index}
              to={`${item.route}/${child.route}`}
              className="block text-sm text-[#1C1E53] py-2 hover:pl-2 transition"
              onClick={closeMenu}
            >
              {child.name}
              {child.district && (
                <span className="ml-2 text-xs text-gray-500">
                  ({child.district})
                </span>
              )}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};
