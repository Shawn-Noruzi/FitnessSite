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
    MEMBERSHIP SIGN UP`,
    service1Text: `Click the link below to sign up.
    Memberships start at $8 bi-weekly or $16 biweekly.
    Enjoy high-quality equipment and a fantastic atmosphere!`,
    button1Text: `Sign Me Up`,
    link1: "https://www.trevorlindenfitness.com/coquitlam/",

    service2Title: `
    BOOK A CONSULTATION`,
    service2Text: `I will contact you to book an introductory consultation.
    Consultation includes how I am going to help you achieve your goals.`,
    button2Text: `Contact`,
    link2: "/contact",

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
                IN CLUB TRAINING
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
                {`If you are interested in club training, a membership to Club 16
                Trevorlinden Fitness Coquitlam Location is required.
               `}
                <br />
                {` Follow the steps below.`}
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
