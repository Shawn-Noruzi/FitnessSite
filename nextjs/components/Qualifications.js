import styles from "./qualifications.module.css";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const cardsShowStaggered = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const card = {
  initial: { opacity: 0, translateX: -30 },
  animate: {
    opacity: 1,
    translateX: 0,
    transition: {
      duration: 0.5,
      delay: 0.1,
    },
  },
};

const card2 = {
  initial: { opacity: 0, translateX: -30 },
  animate: {
    opacity: 1,
    translateX: 0,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
};

const card3 = {
  initial: { opacity: 0, translateX: -30 },
  animate: {
    opacity: 1,
    translateX: 0,
    transition: {
      duration: 0.5,
      delay: 1,
    },
  },
};

const card4 = {
  initial: { opacity: 0, translateX: -30 },
  animate: {
    opacity: 1,
    translateX: 0,
    transition: {
      duration: 0.5,
      delay: 0.7,
    },
  },
};

const card5 = {
  initial: { opacity: 0, translateX: -30 },
  animate: {
    opacity: 1,
    translateX: 0,
    transition: {
      duration: 0.5,
      delay: 1,
    },
  },
};

const Qualifications = () => {
  const divAnimate = useAnimation();
  const cardAnimate = useAnimation();
  const card2Animate = useAnimation();
  const card3Animate = useAnimation();
  const card4Animate = useAnimation();
  const card5Animate = useAnimation();

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      divAnimate.start("show");
      cardAnimate.start("animate");
      card2Animate.start("animate");
      card3Animate.start("animate");
      card4Animate.start("animate");
      card5Animate.start("animate");
    }
    if (!inView) {
      divAnimate.start("hidden");
      cardAnimate.start("initial");
      card2Animate.start("initial");
      card3Animate.start("initial");
      card4Animate.start("initial");
      card5Animate.start("initial");
    }
  }, [inView]);

  return (
    <motion.div
      animate={divAnimate}
      variants={cardsShowStaggered}
      initial="hidden"
      className={styles.container}
    >
      <p className={styles.servicesTitle}>Qualifications</p>
      <motion.div className={styles.cardsContainer} ref={ref}>
        <motion.div
          ref={ref}
          variants={card}
          animate={cardAnimate}
          className={styles.card}
        >
          <div className={styles.iconDiv}>
            <img
              src="/images/servicesIcons/book.png"
              className={styles.icon}
              alt=""
            />
            <p className={styles.cardTitle}>EDUCATION</p>
          </div>

          <p className={styles.cardText}>UFV Bachelors in Kinesiology</p>
        </motion.div>
        <motion.div
          variants={card2}
          animate={card2Animate}
          className={styles.card}
        >
          <div className={styles.iconDiv}>
            <img
              src="/images/servicesIcons/dumbell.png"
              className={styles.icon}
              alt=""
            />
            <p className={styles.cardTitle}>FITNESS COACH</p>
          </div>

          <p className={styles.cardText}>PTAG Certified Personal Trainer</p>
        </motion.div>
        <motion.div
          variants={card3}
          animate={card3Animate}
          className={styles.card}
        >
          <div className={styles.iconDiv}>
            <img
              src="/images/servicesIcons/nutrition.png"
              className={styles.icon}
              alt=""
            />
            <p className={styles.cardTitle}>NUTRITIONIST</p>
          </div>

          <p className={styles.cardText}>
            Precision Nutrition Level 1 Certification
          </p>
        </motion.div>

        <motion.div
          variants={card4}
          animate={card4Animate}
          className={styles.card}
        >
          <div className={styles.iconDiv}>
            <img
              src="/images/servicesIcons/trx.png"
              className={styles.icon}
              alt=""
            />
            <p className={styles.cardTitle}>TRX CERTIFIED</p>
          </div>

          <p className={styles.cardText}>TRX Qualified Trainer</p>
        </motion.div>

        <motion.div
          variants={card5}
          animate={card5Animate}
          className={styles.card}
        >
          <div className={styles.iconDiv}>
            <img
              src="/images/servicesIcons/queen.png"
              className={styles.icon}
              alt=""
            />
            <p className={styles.cardTitle}>QUEENAX CERTIFIED</p>
          </div>

          <p className={styles.cardText}>Functional Trainer Queenax</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Qualifications;
