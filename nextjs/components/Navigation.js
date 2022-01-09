import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul variants={variants}>
    {itemIds.map((i) => (
      <MenuItem i={i} key={i} linkName={i.linkName} href={i.href} />
    ))}
  </motion.ul>
);

const itemIds = [
  { linkName: "HOME", href: "/", number: 0 },
  { linkName: "ABOUT", href: "/about", number: 1 },
  { linkName: "SERVICES", href: "/services", number: 2 },
  { linkName: "CONTACT", href: "/contact", number: 3 },
];

{
  /* <nav className="flex flex-wrap items-center justify-center space-x-4 text-base md:ml-auto w-1/4">
<Link href="/">
  <a
    className={`hover:text-gray-900 ${
      asPath === "/" ? "font-black text-black" : ""
    }`}
  >
    Home
  </a>
</Link>
<Link href="/">
  <a
    className={`hover:text-gray-900 ${
      asPath === "/" ? "font-black text-black" : ""
    }`}
  >
    About
  </a>
</Link>
<Link href="/">
  <a
    className={`hover:text-gray-900 ${
      asPath === "/" ? "font-black text-black" : ""
    }`}
  >
    Services
  </a>
</Link>
<Link href="/contact">
  <a
    className={
      asPath === "/contact"
        ? "font-black text-black"
        : "hover:text-gray-900"
    }
  >
    Contact Us
  </a>
</Link>
</nav> */
}
