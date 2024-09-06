import { useRef, useEffect, useState, RefObject } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./UseDimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Example = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef: RefObject<HTMLDivElement> = useRef(null);
  const { height } = useDimensions(containerRef);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const targetNode = event.target as Node;
      if (
        containerRef.current &&
        !containerRef.current.contains(targetNode) &&
        isOpen
      ) {
        toggleOpen();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [containerRef, isOpen, toggleOpen]);

  const onAnimationStart = () => {
    setIsAnimating(true);
  };

  const onAnimationComplete = () => {
    setIsAnimating(false);
  };

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="absolute top-4 right-0"
      onAnimationStart={onAnimationStart}
      onAnimationComplete={onAnimationComplete}
    >
      <motion.div className="background" variants={sidebar} />
      {isOpen || isAnimating ? <Navigation closeMenu={toggleOpen} /> : null}
      <MenuToggle toggle={toggleOpen} />
    </motion.nav>
  );
};
