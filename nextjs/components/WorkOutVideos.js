import styles from "./specialtyAreas.module.css";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ImageGalleryComponent from "./ImageGalleryComponent";
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

const WorkOutVideos = () => {
  const divAnimate = useAnimation();

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      divAnimate.start("show");
    }
    if (!inView) {
      divAnimate.start("hidden");
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
        <ImageGalleryComponent />
      </motion.div>
    </motion.div>
  );
};

export default WorkOutVideos;
