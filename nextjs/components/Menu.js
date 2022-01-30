import React, { useEffect } from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

const sidebar = {
  open: (height = 1000) => ({
    height: "100vh",
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    height: "0vh",
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 40,
    },
  },
};

export const Menu = ({ setMenuOpen }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  useEffect(() => {
    setMenuOpen(isOpen);
  }, [isOpen]);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation isOpen={isOpen} toggle={() => toggleOpen()} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
