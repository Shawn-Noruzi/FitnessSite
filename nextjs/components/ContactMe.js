import styles from "./contactMe.module.css";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const cardsShowStaggered = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
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
      delay: 0.5,
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
const ContactMe = () => {
  const divAnimate = useAnimation();
  const cardAnimate = useAnimation();
  const card2Animate = useAnimation();
  const card3Animate = useAnimation();
  const card4Animate = useAnimation();

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      divAnimate.start("show");
      cardAnimate.start("animate");
      card2Animate.start("animate");
      card3Animate.start("animate");
      card4Animate.start("animate");
    }
    if (!inView) {
      divAnimate.start("hidden");
      cardAnimate.start("initial");
      card2Animate.start("initial");
      card3Animate.start("initial");
      card4Animate.start("initial");
    }
  }, [inView]);

  return (
    <motion.div
      animate={divAnimate}
      variants={cardsShowStaggered}
      initial="hidden"
      className={styles.container}
    >
      <p className={styles.servicesTitle}> Get In Touch </p>
      <motion.div className={styles.cardsContainer} ref={ref}>
        <div></div>
        <motion.div
          ref={ref}
          variants={card}
          animate={cardAnimate}
          className={styles.card}
        >
          <Link href="https://www.facebook.com" className={styles.iconDiv}>
            <img src="/images/social/fb.png" className={styles.icon} alt="" />
          </Link>
        </motion.div>
        <motion.div
          variants={card2}
          animate={card2Animate}
          className={styles.card}
        >
          <Link href="https://www.instagram.com" className={styles.iconDiv}>
            <img
              src="/images/social/insta.png"
              className={styles.icon}
              alt=""
            />
          </Link>
        </motion.div>
        <motion.div
          variants={card3}
          animate={card3Animate}
          className={styles.card}
        >
          <Link href="https://www.linkedin.com" className={styles.iconDiv}>
            <img
              src="/images/social/linked.png"
              className={styles.icon}
              alt=""
            />
          </Link>
        </motion.div>

        <motion.div
          variants={card4}
          animate={card4Animate}
          className={styles.card}
        >
          <Link href="/contact">
            <a className={styles.contactText}>Send A Message</a>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactMe;
