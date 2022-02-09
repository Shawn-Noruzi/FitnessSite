import { motion } from "framer-motion";
import ServicesCards from "../../components/ServicesCards";
import styles from "./clubTraining.module.css";

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

const clubTraining = ({ isFirstMount }) => {
  const content = {
    service1Title: `
    BOOK A CONSULTATION`,
    service1Text: `Once you have contacted me, I will contact you shortly to book on in person or over the phone.
    Consultation includes how I am going to help you toward your goals and more!`,
    button1Text: `Contact`,
    link1: "/contact",

    service2Title: `
    PURCHASE EQUIPMENT`,
    service2Text: `Clients must have the following equipment for their workout:
    2 sets of dumbbells​
    Set of small loop resistance bands
    Access to carpet and tile`,
    button2Text: `Know More`,
    link2: "/",

    service3Title: `
    START TRAINING`,
    service3Text: `Start training and learn the foundational skills, knowledge, and guidance to help you succeed.
    Come with a fun attitude and a water bottle!`,
    button3Text: `Contact`,
    link3: "/contact",

    service4Title: `
    SEE REAL RESULTS`,
    service4Text: `Results take patience and consistency.
    I'll be along your side every step of your journey!
    Your results are my priority`,
    button4Text: `Testimonials`,
    link4: "/testimonials",
  };

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
                HOME TRAINING
              </motion.p>
              <motion.p
                variants={title}
                animate={"animate"}
                initial={"initial"}
                className={styles.cardTitle}
              >
                -
              </motion.p>
              <motion.p
                variants={title}
                animate={"animate"}
                initial={"initial"}
                className={styles.cardTitleService}
              >
                {`BEFORE YOU GET STARTED
               `}
                <br />
                {` Home training is perfect for retirees who want to remain healthy and active while in the comfort of their own homes. Follow the steps below.`}
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <ServicesCards serviceType content={content} />
    </motion.section>
  );
};

export default clubTraining;
