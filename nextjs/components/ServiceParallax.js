import { Parallax } from "react-parallax";
import styles from "./serviceParallax.module.css";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const parallaxDivAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delay: 0.3, duration: 0.3, ease: "easeOut" },
  },
};

const ServiceParallax = ({ content }) => {
  const parralaxDivAnimate = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      parralaxDivAnimate.start("show");
    }
    if (!inView) {
      parralaxDivAnimate.start("hidden");
    }
  }, [inView]);
  return (
    <div className={styles.container}>
      <Parallax style={{ height: "100%", width: "100%" }} strength={300}>
        <motion.div
          variants={parallaxDivAnimation}
          initial="hidden"
          animate={parralaxDivAnimate}
          className={styles.contentTop}
        >
          <span ref={ref} className={styles.imgText}>
            {content.title}
          </span>
        </motion.div>
        <motion.div
          variants={parallaxDivAnimation}
          initial="hidden"
          animate={parralaxDivAnimate}
          className={styles.contentBottom}
        >
          <span ref={ref} className={styles.imgText}>
            {content.text}
          </span>
        </motion.div>
        <ReactPlayer
          width="100%"
          height="100%"
          playing={true}
          loop={true}
          muted={true}
          url={content.video}
          style={{ pointerEvents: "none" }}
        />
      </Parallax>
    </div>
  );
};

export default ServiceParallax;
