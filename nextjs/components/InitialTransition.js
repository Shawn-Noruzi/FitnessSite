import React, { useState } from "react";
import { motion } from "framer-motion";
const blackBox = {
  initial: {
    height: "100%",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
    },
  },
};

const text = {
  initial: {
    y: -30,
  },
  animate: {
    y: 125,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

export const InitialTransition = () => {
  // Scroll user to top to avoid showing the footer
  useState(() => {
    typeof windows !== "undefined" && window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="absolute z-50 flex items-center justify-center w-full bg-black"
      initial="initial"
      animate="animate"
      variants={blackBox}
      onAnimationStart={() => document.body.classList.add("overflow-hidden")}
      onAnimationComplete={() =>
        document.body.classList.remove("overflow-hidden")
      }
    >
      <motion.svg
        variants={textContainer}
        className="absolute z-50 flex w-full"
      >
        <pattern
          id="pattern"
          patternUnits="userSpaceOnUse"
          width={1500}
          height={1500}
          className="text-white w-full"
        >
          <rect className="w-full h-full fill-current" />
          <motion.rect
            variants={text}
            className="w-full h-full text-gray-600 fill-current"
          />
        </pattern>

        <text
          className="text-4xl font-bold initTransitionText font-zygoregular"
          textAnchor="middle"
          x="50%"
          y="75%"
          style={{ fill: "url(#pattern)" }}
        >
          FITNESS
        </text>

        <text
          className="text-4xl font-bold font-zygoregular"
          textAnchor="middle"
          x="50%"
          y="45%"
          style={{ fill: "url(#pattern)" }}
        >
          -
        </text>

        <text
          className="text-4xl font-bold initTransitionText font-zygoregular"
          textAnchor="middle"
          x="50%"
          y="20%"
          style={{ fill: "url(#pattern)" }}
        >
          LOGAN WONG
        </text>
      </motion.svg>
    </motion.div>
  );
};
