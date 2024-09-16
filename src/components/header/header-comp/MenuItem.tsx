import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { z } from "zod";

export const navSchema = z.object({
  navLink: z.string(),
  route: z.string(),
  childNav: z.string().array().optional(),
});

type NavSchema = z.infer<typeof navSchema>;

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { type: "spring", stiffness: 100, velocity: -50 },
    },
  },
  closed: {
    y: 100,
    opacity: 0,
    transition: {
      y: { type: "spring", stiffness: 100 },
    },
  },
};

export const MenuItem = ({
  item,
  closeMenu,
}: {
  item: NavSchema;
  closeMenu: () => void;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (item.childNav) {
      e.preventDefault();
      setIsDropdownOpen((prev) => !prev);
      const firstChildRoute = `${item.route}/${item.childNav[0]}`;
      navigate(firstChildRoute);
    } else {
      navigate(item.route);
      closeMenu();
    }
  };

  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <NavLink
        to={item.route}
        className="nav-li shadow-md px-4 py-2 mb-4 text-sm font-semibold text-[#1C1E53]"
        onClick={handleItemClick}
      >
        {item.navLink}
      </NavLink>

      {item.childNav && isDropdownOpen && (
        <div className="pl-4">
          {item.childNav.map((child, index) => (
            <NavLink
              key={index}
              to={`${item.route}/${child}`}
              className="block text-sm text-[#1C1E53] p-2 border-slate-400"
              onClick={closeMenu}
            >
              {child}
            </NavLink>
          ))}
        </div>
      )}
    </motion.div>
  );
};
