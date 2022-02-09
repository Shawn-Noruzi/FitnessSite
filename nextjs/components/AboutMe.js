import styles from "./aboutMe.module.css";
import { motion } from "framer-motion";
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

const link = {
  initial: { opacity: 0, translateY: 30 },
  animate: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.5,
      delay: 0.7,
    },
  },
};
const AboutMe = ({
  transform,
  isFirstMount,
  aboutTitle,
  aboutText,
  button,
  imageHeader,
}) => {
  if (transform) {
    return (
      <motion.div
        initial="hidden"
        animate="show"
        variants={cardsShowStaggered(isFirstMount)}
        className={styles.containerService}
      >
        <motion.div className={styles.cardsContainerService}>
          <motion.div className={styles.image}>
            <motion.div
              initial="hidden"
              animate="show"
              variants={headerText(isFirstMount)}
              className={styles.iconDivService}
            >
              <motion.p
                variants={title}
                animate={"animate"}
                initial={"initial"}
                className={styles.cardTitleService}
              >
                {aboutTitle}
              </motion.p>
              <motion.p
                variants={text}
                animate={"animate"}
                initial={"initial"}
                className={styles.cardTextService}
              >
                {aboutText}
              </motion.p>
              <motion.div
                variants={link}
                initial={"initial"}
                animate={"animate"}
                className={styles.readLink}
              >
                <Link href="/contact">
                  <a>{button}</a>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  } else {
    return (
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
                {aboutTitle}
              </motion.p>
              <motion.p
                variants={text}
                animate={"animate"}
                initial={"initial"}
                className={styles.cardText}
              >
                {aboutText}
              </motion.p>
              <motion.div
                variants={link}
                initial={"initial"}
                animate={"animate"}
                className={styles.readLink}
              >
                <Link href="/contact">
                  <a>{button}</a>
                </Link>
              </motion.div>
            </motion.div>
            <motion.img
              variants={image}
              animate={"animate"}
              initial={"initial"}
              src={imageHeader}
              className={styles.icon}
              alt=""
            />
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }
};

export default AboutMe;
