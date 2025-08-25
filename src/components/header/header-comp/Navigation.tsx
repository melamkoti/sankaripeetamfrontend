import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { NavListData } from "./NavListData";
import closeIcon from "../../../assets/svg/closeicon.svg"
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    opacity: 1,
    display: "block",
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
    opacity: 0,
    display: "none",
  },
};

export const Navigation = ({ closeMenu }: { closeMenu: () => void }) => (
  <>

  <motion.ul
    variants={variants}
    className="  border border-slate-150 absolute h-screen  right-0   w-[280px] bg-white "
  >
    <p className="absolute right-2 p-4 cursor-pointer" onClick={closeMenu}><img src={closeIcon} alt="image not set" /> </p>

    {NavListData.map((item, index: number) => (
      <MenuItem item={item} key={index} closeMenu={closeMenu} />
    ))}
  </motion.ul>
  </>
);
