import styles from "./readMoreLogan.module.css";
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
      staggerChildren: 0.3,
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
      delay: 0.3,
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
      delay: 0.7,
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
      delay: 1.3,
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
      delay: 1.6,
    },
  },
};
const ReadMoreLogan = () => {
  const divAnimate = useAnimation();
  const imageAnimate = useAnimation();
  const titleAnimate = useAnimation();
  const textAnimate = useAnimation();
  const linkAnimate = useAnimation();

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      divAnimate.start("show");
      imageAnimate.start("animate");
      titleAnimate.start("animate");
      textAnimate.start("animate");
      linkAnimate.start("animate");
    }
    if (!inView) {
      divAnimate.start("hidden");
      imageAnimate.start("initial");
      titleAnimate.start("initial");
      textAnimate.start("initial");
      linkAnimate.start("initial");
    }
  }, [inView]);

  return (
    <motion.div
      animate={divAnimate}
      variants={cardsShowStaggered}
      initial="hidden"
      className={styles.container}
    >
      <motion.div className={styles.cardsContainer} ref={ref}>
        <motion.div ref={ref} className={styles.image}>
          <motion.img
            variants={image}
            animate={imageAnimate}
            src="/images/logan.webp"
            className={styles.icon}
            alt=""
          />

          <div className={styles.iconDiv}>
            <motion.p
              variants={title}
              animate={titleAnimate}
              className={styles.cardTitle}
            >
              Vision
            </motion.p>
            <motion.p
              variants={text}
              animate={textAnimate}
              className={styles.cardText}
            >
              To be the leading personal trainer in body composition management
              and rehabilitation while offering the best client-focused services
              in Canada.
            </motion.p>
            <motion.div
              variants={link}
              animate={linkAnimate}
              className={styles.readLink}
            >
              <Link href="/about">
                <a>Read More</a>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ReadMoreLogan;
