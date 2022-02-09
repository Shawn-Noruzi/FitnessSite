import styles from "./servicesCards.module.css";
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
const card4 = {
  initial: { opacity: 0, translateX: -30 },
  animate: {
    opacity: 1,
    translateX: 0,
    transition: {
      duration: 0.5,
      delay: 1.5,
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
      delay: 1.7,
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
const ServicesCards = ({
  services,
  packages,
  programs,
  serviceType,
  content,
  threeSections,
}) => {
  console.log("services and packages", services, packages);
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
      if (programs) {
        card4Animate.start("animate");
        card5Animate.start("animate");
      }
    }
    if (!inView) {
      divAnimate.start("hidden");
      cardAnimate.start("initial");
      card2Animate.start("initial");
      card3Animate.start("initial");
      if (programs) {
        card4Animate.start("initial");
        card5Animate.start("initial");
      }
    }
  }, [inView]);

  if (services) {
    return (
      <motion.div
        animate={divAnimate}
        variants={cardsShowStaggered}
        initial="hidden"
        className={styles.container}
      >
        <p className={styles.servicesTitle}> SERVICES </p>
        <motion.div className={styles.cardsContainer} ref={ref}>
          <motion.div
            ref={ref}
            variants={card}
            animate={cardAnimate}
            className={styles.card}
          >
            <div className={styles.iconDiv}>
              <p className={styles.cardTitle + " " + styles.noMarginLeft}>
                IN-CLUB TRAINING
              </p>
            </div>

            <p className={styles.cardText + " " + styles.marginBottom}>
              I create a unique individualized plan based on your needs and
              goals. I make your training fun, unique and challenging. Each
              session will never be the same.
            </p>

            <motion.div
              variants={link}
              initial={"initial"}
              animate={"animate"}
              className={styles.readLink}
            >
              <Link href="/services/ultimate-transformation">
                <a>Learn More</a>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            variants={card2}
            animate={card2Animate}
            className={styles.card}
          >
            <div className={styles.iconDiv}>
              <p className={styles.cardTitle + " " + styles.noMarginLeft}>
                HOME TRAINING
              </p>
            </div>

            <p className={styles.cardText + " " + styles.marginBottom}>
              I make fitness fun and challenging to help push your limitations
              in the comfort of your own home. A workout at home is the most
              convenient place to break a sweat.
            </p>
            <motion.div
              variants={link}
              initial={"initial"}
              animate={"animate"}
              className={styles.readLink}
            >
              <Link href="/services/ultimate-transformation">
                <a>Learn More</a>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            variants={card3}
            animate={card3Animate}
            className={styles.card}
          >
            <div className={styles.iconDiv}>
              <p className={styles.cardTitle + " " + styles.noMarginLeft}>
                VIRTUAL TRAINING
              </p>
            </div>

            <p className={styles.cardText + " " + styles.marginBottom}>
              A perfect way to social distance in the comfort of your own home.
              Each training session will be fun and catered to your
              capabilities. Some equipment is required.
            </p>
            <motion.div
              variants={link}
              initial={"initial"}
              animate={"animate"}
              className={styles.readLink}
            >
              <Link href="/services/ultimate-transformation">
                <a>Learn More</a>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  } else if (packages) {
    return (
      <motion.div
        animate={divAnimate}
        variants={cardsShowStaggered}
        initial="hidden"
        className={styles.container}
      >
        <p className={styles.servicesTitle}> PACKAGES </p>
        <motion.div className={styles.cardsContainer} ref={ref}>
          <motion.div
            ref={ref}
            variants={card}
            animate={cardAnimate}
            className={styles.card}
          >
            <div className={styles.iconDiv}>
              <p className={styles.cardTitle + " " + styles.noMarginLeft}>
                12 SESSIONS
              </p>
            </div>

            <p className={styles.cardText + " " + styles.marginBottom}>
              12 sessions will last 4-6 weeks which will help build a solid
              foundation to help you excel with more complicated movements in
              the near future. The recommended frequency is 3 times a week.
            </p>
          </motion.div>
          <motion.div
            variants={card2}
            animate={card2Animate}
            className={styles.card}
          >
            <div className={styles.iconDiv}>
              <p className={styles.cardTitle + " " + styles.noMarginLeft}>
                24 SESSIONS
              </p>
            </div>

            <p className={styles.cardText + " " + styles.marginBottom}>
              24 sessions will last 8-12 weeks and will help you build a strong
              foundation and see dramatic changes in your overall physique. The
              recommended frequency is 3 times a week.
            </p>
          </motion.div>
          <motion.div
            variants={card3}
            animate={card3Animate}
            className={styles.card}
          >
            <div className={styles.iconDiv}>
              <p className={styles.cardTitle + " " + styles.noMarginLeft}>
                36 Sessions
              </p>
            </div>

            <p className={styles.cardText + " " + styles.marginBottom}>
              36 sessions will last 12-18 weeks and will cover various
              techniques to transform your body to improve your self-confidence
              and physical appearance. The recommended frequency is 3 times a
              week.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  } else if (programs) {
    return (
      <motion.div
        animate={divAnimate}
        variants={cardsShowStaggered}
        initial="hidden"
        className={styles.container}
      >
        <p className={styles.servicesTitle}> PROGRAMS</p>
        <motion.div
          className={styles.cardsContainer + " " + styles.programsContainer}
          ref={ref}
        >
          <motion.div
            ref={ref}
            variants={card}
            animate={cardAnimate}
            className={styles.card}
          >
            <div className={styles.iconDiv}>
              <p className={styles.cardTitle + " " + styles.noMarginLeft}>
                WEIGHT LOSS
              </p>
            </div>

            <p className={styles.cardText + " " + styles.marginBottom}>
              This program is designed to help you build muscle while primarily
              focusing on reducing your body fat percentage. A combination of
              scientifically proven techniques such as HIIT, circuit training,
              Tabata, and diet is the key to losing fat. Eating in a caloric
              deficit is the key. This program is not easy. It's tailored for
              those who are willing to work hard to achieve that perfect "beach
              body." For maximal results, a diet plan is used and a training
              frequency of 4-5 days per week is recommended.
            </p>

            <motion.div
              variants={link}
              initial={"initial"}
              animate={"animate"}
              className={styles.readLink}
            >
              <Link href="/contact">
                <a>Learn More</a>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            variants={card2}
            animate={card2Animate}
            className={styles.card}
          >
            <div className={styles.iconDiv}>
              <p className={styles.cardTitle + " " + styles.noMarginLeft}>
                BUILD MUSCLE
              </p>
            </div>

            <p className={styles.cardText + " " + styles.marginBottom}>
              This specialized program is designed for trainees who want to
              increase their muscle mass while lowering your body fat percentage
              in order to obtain your desired physique goal. Using a combination
              of muscle building techniques, circuits, and HIIT training will
              give you astonishing results while remaining lean. In order to
              maximize results, a training frequency of 5 days is recommended.
            </p>
            <motion.div
              variants={link}
              initial={"initial"}
              animate={"animate"}
              className={styles.readLink}
            >
              <Link href="/contact">
                <a>Learn More</a>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            variants={card3}
            animate={card3Animate}
            className={styles.card}
          >
            <div className={styles.iconDiv}>
              <p className={styles.cardTitle + " " + styles.noMarginLeft}>
                POSTURE CORRECTION
              </p>
            </div>

            <p className={styles.cardText + " " + styles.marginBottom}>
              This specialized program will help improve your core, weak
              muscles, and mobility to correct your body’s alignment. Weak and
              neglected muscles are the reason to cause chronic disorders
              limiting one’s health. Over the next 6-8 weeks, we will work on
              ROM and developing all small and large muscles to improve your
              posture. For maximal results, a training frequency of 3-4 times
              per week is recommended.
            </p>
            <motion.div
              variants={link}
              initial={"initial"}
              animate={"animate"}
              className={styles.readLink}
            >
              <Link href="/contact">
                <a>Learn More</a>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            variants={card4}
            animate={card4Animate}
            className={styles.card}
          >
            <div className={styles.iconDiv}>
              <p className={styles.cardTitle + " " + styles.noMarginLeft}>
                FUNCTIONAL & FIT
              </p>
            </div>

            <p className={styles.cardText + " " + styles.marginBottom}>
              This specialized program is for those nearing retirement and want
              to be fit and functional for the long term. Overcoming any
              pre-existing injuries by focusing on ROM, core and functional
              movement patterns will help you improve your physical
              capabilities. Incorporating aspects such as muscular strength,
              coordination, agility, and balance will help progress your
              functionality. For maximal results, a training frequency of 3-4
              times per week is recommended.
            </p>
            <motion.div
              variants={link}
              initial={"initial"}
              animate={"animate"}
              className={styles.readLink}
            >
              <Link href="/contact">
                <a>Learn More</a>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={card5}
            animate={card5Animate}
            className={styles.card}
          >
            <div className={styles.iconDiv}>
              <p className={styles.cardTitle + " " + styles.noMarginLeft}>
                INJURY REHABILITATION
              </p>
            </div>

            <p className={styles.cardText + " " + styles.marginBottom}>
              This program is designed for those who finished their
              physiotherapy rehabilitation exercises and want to jumpstart
              physical exercise safely and efficiently. Emphasizing on ROM,
              functional movements, and stabilization muscles articulating
              around the injury, we will work together to improve functionality.
              Each degree of injury is dependant on the individual's current
              capabilities. The program will last 6-12 weeks.
            </p>
            <motion.div
              variants={link}
              initial={"initial"}
              animate={"animate"}
              className={styles.readLink}
            >
              <Link href="/contact">
                <a>Learn More</a>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  } else if (serviceType) {
    return (
      <motion.div
        animate={divAnimate}
        variants={cardsShowStaggered}
        initial="hidden"
        className={styles.container}
      >
        <motion.div
          className={styles.cardsContainer + " " + styles.programsContainer}
          ref={ref}
        >
          <motion.div
            ref={ref}
            variants={card}
            animate={cardAnimate}
            className={styles.cardService}
          >
            <div className={styles.iconDiv}>
              <p
                className={styles.cardTitleService + " " + styles.noMarginLeft}
              >
                {content.service1Title}
              </p>
            </div>

            <p className={styles.cardTextService + " " + styles.marginService}>
              {content.service1Text}
            </p>

            <motion.div
              variants={link}
              initial={"initial"}
              animate={"animate"}
              className={styles.readLink}
            >
              <Link href={content.link1}>
                <a> {content.button1Text}</a>
              </Link>
            </motion.div>
          </motion.div>
          {threeSections ? null : (
            <motion.div
              variants={card2}
              animate={card2Animate}
              className={styles.cardService}
            >
              <div className={styles.iconDiv}>
                <p
                  className={
                    styles.cardTitleService + " " + styles.noMarginLeft
                  }
                >
                  {content.service2Title}
                </p>
              </div>

              <p
                className={styles.cardTextService + " " + styles.marginService}
              >
                {content.service2Text}
              </p>
              <motion.div
                variants={link}
                initial={"initial"}
                animate={"animate"}
                className={styles.readLink}
              >
                <Link href={content.link2}>
                  <a> {content.button2Text}</a>
                </Link>
              </motion.div>
            </motion.div>
          )}

          <motion.div
            variants={card3}
            animate={card3Animate}
            className={styles.cardService}
          >
            <div className={styles.iconDiv}>
              <p
                className={styles.cardTitleService + " " + styles.noMarginLeft}
              >
                {content.service3Title}
              </p>
            </div>

            <p className={styles.cardTextService + " " + styles.marginService}>
              {content.service3Text}
            </p>
            <motion.div
              variants={link}
              initial={"initial"}
              animate={"animate"}
              className={styles.readLink}
            >
              <Link href={content.link3}>
                <a> {content.button3Text}</a>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            variants={card4}
            animate={card4Animate}
            className={styles.cardService}
          >
            <div className={styles.iconDiv}>
              <p
                className={styles.cardTitleService + " " + styles.noMarginLeft}
              >
                {content.service4Title}
              </p>
            </div>

            <p className={styles.cardTextService + " " + styles.marginService}>
              {content.service4Text}
            </p>
            <motion.div
              variants={link}
              initial={"initial"}
              animate={"animate"}
              className={styles.readLink}
            >
              <Link href={content.link4}>
                <a> {content.button4Text}</a>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        animate={divAnimate}
        variants={cardsShowStaggered}
        initial="hidden"
        className={styles.container}
      >
        <p className={styles.servicesTitle}> Services </p>
        <motion.div className={styles.cardsContainer} ref={ref}>
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
              I create a unique individualized plan based on your needs and
              goals. I make your training fun, unique and challenging. Each
              session will never be the same.
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
              I make fitness fun and challenging to help push your limitations
              in an encouraging, fun atmosphere. With the support of a team, any
              task can be achieved
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
              A fun and perfect way to social distance in the comfort of your
              own home. Each training session will be fun and catered to your
              capabilities. Some equipment is required.
            </p>
          </motion.div>

          <div></div>

          <div></div>
        </motion.div>
      </motion.div>
    );
  }
};

export default ServicesCards;
