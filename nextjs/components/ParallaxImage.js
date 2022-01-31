import { Parallax } from "react-parallax";
import styles from "./ParallaxImage.module.css";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
const parallaxDivAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delay: 0.7, duration: 0.5, ease: "easeOut" },
  },
};

const ParallaxImage = ({ img }) => {
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
    <Parallax
      bgClassName={"react-parallax-bgimage " + styles.parallaxImage}
      className={styles.image}
      blur={0}
      bgImage={img}
      strength={800}
      bgImageStyle={{ minHeight: "100vh" }}
    >
      <motion.div
        variants={parallaxDivAnimation}
        initial="hidden"
        animate={parralaxDivAnimate}
        className={styles.content}
      >
        <span ref={ref} className={styles.imgText}>
          GUARANTEED RESULTS WITH YOUR 100% EFFORT
        </span>
      </motion.div>
    </Parallax>
  );
};

export default ParallaxImage;
