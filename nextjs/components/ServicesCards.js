import styles from "./servicesCards.module.css";
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
      delay: 0.3,
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
      delay: 0.7,
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
      delay: 1.3,
    },
  },
};
const ServicesCards = () => {
  const divAnimate = useAnimation();
  const cardAnimate = useAnimation();
  const card2Animate = useAnimation();
  const card3Animate = useAnimation();

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      divAnimate.start("show");
      cardAnimate.start("animate");
      card2Animate.start("animate");
      card3Animate.start("animate");
    }
    if (!inView) {
      divAnimate.start("hidden");
      cardAnimate.start("initial");
      card2Animate.start("initial");
      card3Animate.start("initial");
    }
  }, [inView]);

  return (
    <motion.div
      animate={divAnimate}
      variants={cardsShowStaggered}
      initial="hidden"
      className={styles.container}
    >
      <p className={styles.servicesTitle}> Services </p>
      <motion.div className={styles.cardsContainer}
      ref={ref}>
        <motion.div
        ref={ref}
          variants={card}
          animate={cardAnimate}
          className={styles.card}
        >
          <div className={styles.iconDiv}>
            <img
              src="/images/servicesIcons/dumbell.png"
              className={styles.icon}
              alt=""
            />
            <p className={styles.cardTitle}>PERSONAL TRAINING</p>
          </div>

          <p className={styles.cardText}>
            I create a unique individualized plan based on your needs and goals.
            I make your training fun, unique and challenging. Each session will
            never be the same.
          </p>
        </motion.div>
        <motion.div
          variants={card2}
          animate={card2Animate}
          className={styles.card}
        >
          <div className={styles.iconDiv}>
            <img
              src="/images/servicesIcons/group.png"
              className={styles.icon}
              alt=""
            />
            <p className={styles.cardTitle}>SMALL GROUP TRAINING</p>
          </div>

          <p className={styles.cardText}>
            I make fitness fun and challenging to help push your limitations in
            an encouraging, fun atmosphere. With the support of a team, any task
            can be achieved
          </p>
        </motion.div>
        <motion.div
          variants={card3}
          animate={card3Animate}
          className={styles.card}
        >
          <div className={styles.iconDiv}>
            <img
              src="/images/servicesIcons/virtual.png"
              className={styles.icon}
              alt=""
            />
            <p className={styles.cardTitle}>VIRTUAL TRAINING</p>
          </div>

          <p className={styles.cardText}>
            A fun and perfect way to social distance in the comfort of your own
            home. Each training session will be fun and catered to your
            capabilities. Some equipment is required.
          </p>
        </motion.div>

        <div></div>

        <div></div>
      </motion.div>
    </motion.div>
  );
};

export default ServicesCards;
