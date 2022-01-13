import React from "react";
import { motion } from "framer-motion";
import { InitialTransition } from "../components/InitialTransition";
import useWindowDimensions from "./../utility/useWindowDimensions";

const content = (isFirstMount) => ({
  animate: {
    transition: { staggerChildren: 0.8, delayChildren: isFirstMount ? 2.8 : 0 },
  },
});

const headerText = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 2.9,
      staggerDirection: -1,
    },
  },
};
const fitnessText = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function IndexPage({ isFirstMount }) {
  const { width, height } = useWindowDimensions();
  return (
    <motion.section exit={{ opacity: 0 }}>
      {isFirstMount && <InitialTransition />}

      <motion.div
        initial="initial"
        animate="animate"
        variants={content(isFirstMount)}
        className=" flex flex-column justify-center containerHeader"
      >
        <img
          alt="muscular man"
          src="/images/muscular-man.jpg"
          className="headerImage"
        />
        <motion.div
          initial="hidden"
          animate="show"
          variants={headerText}
          className="headerContentContainer "
        >
          <motion.div variants={fitnessText} className="flex flex-col w-fit">
            <motion.p
              variants={fitnessText}
              className="font-zygoregular silverTextColor fitnessText"
            >
              FITNESS
            </motion.p>
            <motion.div
              variants={fitnessText}
              className="flex headerTextContainer"
            >
              <motion.p
                variants={fitnessText}
                className="font-zygoregular silverTextColor text-5xl mr-0.5"
              >
                WITH
              </motion.p>
              <motion.p
                variants={fitnessText}
                className="font-zygoregular text-5xl text-yellow-400"
              >
                LOGAN
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.p
            variants={fitnessText}
            className="font-zygoregular silverTextColor inspirationalText"
          >
            Be with people who inspire you to become better.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
