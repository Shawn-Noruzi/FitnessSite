import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { InitialTransition } from "../components/InitialTransition";
import useWindowDimensions from "./../utility/useWindowDimensions";
import Link from "next/link";
//components
import PreviewVideo from "../components/PreviewVideo";
import ParallaxImage from "../components/ParallaxImage";
import ServicesCards from "../components/ServicesCards";
import ReadMoreLogan from "../components/ReadMoreLogan";
import ContactMe from "../components/ContactMe";
import { useInView } from "react-intersection-observer";

const content = (isFirstMount) => ({
  animate: {
    transition: {
      staggerChildren: 0.8,
      delayChildren: isFirstMount ? 2.8 : 0.5,
    },
  },
});

const headerText = (isFirstMount) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: isFirstMount ? 2.9 : 1,
      staggerDirection: -1,
    },
  },
});

const fitnessText = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const headerImage = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const solutionContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.6,

      staggerChildren: 0.5,
    },
  },
};
const solutionTitle = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 1,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};
const solutionText = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const missionContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.6,

      staggerChildren: 0.5,
    },
  },
};
const missionTitle = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 1,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};
const missionText = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};
export default function IndexPage({ isFirstMount }) {
  const [refSolution, inViewSolution] = useInView();
  const [refMission, inViewMission] = useInView();
  const solutionContainerAnimation = useAnimation();
  const solutionTitleAnimation = useAnimation();
  const solutionTextAnimation = useAnimation();

  const missionContainerAnimation = useAnimation();
  const missionTitleAnimation = useAnimation();
  const missionTextAnimation = useAnimation();
  useEffect(() => {
    if (inViewSolution) {
      console.log("inview sol", inViewSolution);
      solutionContainerAnimation.start("show");
      solutionTitleAnimation.start("animate");
      solutionTextAnimation.start("animate");
    }
    if (!inViewSolution) {
      console.log("inview sol false", inViewSolution);

      solutionContainerAnimation.start("hidden");
      solutionTitleAnimation.start("initial");
      solutionTextAnimation.start("initial");
    }
  }, [inViewSolution]);

  useEffect(() => {
    if (inViewMission) {
      missionContainerAnimation.start("show");
      missionTitleAnimation.start("animate");
      missionTextAnimation.start("animate");
    }
    if (!inViewMission) {
      missionContainerAnimation.start("hidden");
      missionTitleAnimation.start("initial");
      missionTextAnimation.start("initial");
    }
  }, [inViewMission]);
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
        <motion.img
          variants={headerImage}
          alt="muscular man"
          src="/images/muscular-man.jpg"
          className="headerImage"
        />
        <motion.div
          initial="hidden"
          animate="show"
          variants={headerText(isFirstMount)}
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
                className="font-zygoregular silverTextColor text-5xl mr-0.5 withLoganText"
              >
                WITH
              </motion.p>
              <motion.p
                variants={fitnessText}
                className="font-zygoregular text-5xl text-yellow-400 withLoganText"
              >
                LOGAN
              </motion.p>
            </motion.div>
            <motion.p
              variants={fitnessText}
              className="font-zygoregular silverTextColor inspirationalText"
            >
              The perfect balance gives you a better life.
            </motion.p>
            <motion.div className={"rightArrowContainer"}>
              <motion.div className="font-zygoregular joinText">
                <Link href="/contact" className="font-zygoregular joinText">
                  <a href="/contact">Join Today</a>
                </Link>
              </motion.div>
              <motion.div className="crescentMoonContainer">
                <motion.img
                  className="rightArrowIcon"
                  src={"/images/rightArrow.png"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <PreviewVideo width={width} />
      <motion.div exit={{ opacity: 0 }} className="parallaxDiv">
        <ParallaxImage img={"/images/loganHandstand.webp"} alt="logan" />
      </motion.div>
      <motion.div
        className={"solutionDiv"}
        initial="hidden"
        variants={solutionContainer}
        animate={solutionContainerAnimation}
        exit={{ opacity: 0 }}
      >
        <motion.p
          variants={solutionTitle}
          animate={solutionTitleAnimation}
          className="solutionTitle"
        >
          TYPES OF TRAINING <br /> IS THERE A QUICK SOLUTION?
        </motion.p>
        <motion.p
          variants={solutionText}
          animation={solutionTextAnimation}
          className="solutionText"
          ref={refSolution}
        >
          There is no quick fix. Hard work and determination will lead to your
          success. If you don't plan to succeed, then you plan to fail. Proper
          training and mindful nutritional choices will get you real results.
          Together we can maximize your progress efficiently and safely to
          improve your physical and mental health. Your results are my priority!
        </motion.p>
      </motion.div>
      <ServicesCards />
      <motion.div
        className={"solutionDiv missionContainer"}
        initial="hidden"
        variants={missionContainer}
        animate={missionContainerAnimation}
        exit={{ opacity: 0 }}
      >
        <motion.p
          variants={missionTitle}
          animate={missionTitleAnimation}
          className="solutionTitle missionTitle"
        >
          {" "}
          Mission{" "}
          <img src="/images/rocket.png/" alt="rocket" className="missionIcon" />
        </motion.p>
        <motion.p
          variants={missionText}
          animation={missionTextAnimation}
          className="solutionText missionText"
          ref={refMission}
        >
          To help others enhance their quality of life through exercise and
          provide them with a strong foundation of skills and knowledge to help
          lead them toward a happier and healthier lifestyle.
        </motion.p>
      </motion.div>
      <ReadMoreLogan />
      <ContactMe />
    </motion.section>
  );
}
