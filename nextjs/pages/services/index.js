import { motion } from "framer-motion";
import AboutMe from "../../components/AboutMe";
import ServicesCards from "../../components/ServicesCards";
import styles from "./services.module.css";
import Link from "next/link";
const cardsShowStaggered = (isFirstMount) => ({
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
const title = {
  initial: { opacity: 0, translateY: 30 },
  animate: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
};
const text = {
  initial: { opacity: 0, translateY: 30 },
  animate: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
};

const image = {
  initial: { opacity: 0, translateY: 30 },
  animate: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.5,
      delay: 0.1,
    },
  },
};

const link = {
  initial: { opacity: 0, translateY: 30 },
  animate: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
};
const AboutPage = ({ isFirstMount }) => {
  const aboutMe = {
    aboutTitle: `
    16 WEEK ULTIMATE TRANSFORMATION PLAN`,
    aboutText: `The ultimate program is constructed to learn, practice, and perfect the basic fundamentals of weight lifting in order to progress efficiently and safely. The program is broken into 3 phases: sensorimotor, power & hypertrophy, and speed & fat loss. Each phase has different goals aimed to allow you to progress in a linear pattern to avoid hitting a plateau. Each duration of the phases is dependant on the clients ability to learn movements and effort level. I will be here to guide you step by step to success.`,
    button: `TRANSFORM NOW`,
    imageHeader: "/images/loganWeights.webp",
  };
  // const [refMission, inViewMission] = useInView();
  // const solutionContainerAnimation = useAnimation();

  // useEffect(() => {
  //   if (inViewSolution) {
  //     console.log("inview sol", inViewSolution);
  //     solutionContainerAnimation.start("show");
  //     solutionTitleAnimation.start("animate");
  //     solutionTextAnimation.start("animate");
  //   }
  //   if (!inViewSolution) {
  //     console.log("inview sol false", inViewSolution);

  //     solutionContainerAnimation.start("hidden");
  //     solutionTitleAnimation.start("initial");
  //     solutionTextAnimation.start("initial");
  //   }
  // }, [inViewSolution]);

  return (
    <motion.section exit={{ opacity: 0 }}>
      <motion.div
        initial="hidden"
        animate="show"
        variants={cardsShowStaggered(isFirstMount)}
        className={styles.container}
      >
        <motion.div className={styles.cardsContainer}>
          <motion.div className={styles.image}>
            <motion.div
              initial="hidden"
              animate="show"
              variants={headerText(isFirstMount)}
              className={styles.iconDiv}
            >
              <motion.p
                variants={title}
                animate={"animate"}
                initial={"initial"}
                className={styles.cardTitle}
              >
                GET FIT WITH LOGAN
              </motion.p>
            </motion.div>
            <motion.img
              variants={image}
              animate={"animate"}
              initial={"initial"}
              src={"/images/plank.webp"}
              className={styles.icon}
              alt="planking logan"
            />
          </motion.div>
        </motion.div>
      </motion.div>
      <ServicesCards services />
      <ServicesCards packages />
      <AboutMe
        aboutTitle={aboutMe.aboutTitle}
        aboutText={aboutMe.aboutText}
        button={aboutMe.button}
        imageHeader={aboutMe.imageHeader}
        isFirstMount={isFirstMount}
      />
    </motion.section>
  );
};

export default AboutPage;
