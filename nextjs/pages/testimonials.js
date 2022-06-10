import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";

import styles from "./testimonials.module.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1250 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1250, min: 850 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 850, min: 0 },
    items: 1,
  },
};
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
  const CustomLeftArrow = ({ onClick }) => (
    <div onClick={() => onClick()} className="custom-left-arrow">
      <img className={"arrow"} src="/images/arrow.png" />
    </div>
  );
  const CustomRightArrow = ({ onClick }) => {
    return (
      <div className="custom-right-arrow" onClick={() => onClick()}>
        <img className={"reverseArrow"} src="/images/arrow.png" />
      </div>
    );
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
                TESTIMONIALS
              </motion.p>
              <motion.p
                variants={title}
                animate={"animate"}
                initial={"initial"}
                className={styles.cardTitleService}
              >
                Our core values are at the heart of all that we do. They are
                integrated into our daily work lives and help us remember that
                our customer always comes first.
                <br />
                The last thank you should always come from us.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <Carousel
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        itemClass="padding"
       
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
      >
        <div className="carousel-item-padding-40-px">
          <p className={styles.cardText}>
            Have belong to Club16 for just over 2 years. I have been training
            with Logan Wong since Xmas. Excellent experience! He is always
            focused on your training session. He runs the sessions to meet your
            goals and to help you be successful with the training. Extremely
            knowledgeable making sure you are performing the excercises
            correctly to avoid injury. Have heard from other members on how
            happy they are with Logan. I have no problem with recommending Logan
            as a trainer!!!
          </p>
          <p className={styles.cardText}>- Martin Mckeown</p>
        </div>
        <div className="carousel-item-padding-40-px">
          <p className={styles.cardText}>
            I have been working out with Logan, his brother and my nephew,
            virtual, for the past few weeks and I love it. Logan is
            professional, well organized, supportive, ensures to consider safety
            and puts a lot a work and time into designing us a good workout that
            targets different muscle groups etc. I am 56 years old, and Logan
            meets each of our individual needs and always gives us alternative
            movements that we can choose from. He's a very kind nice fellow that
            I recommend to anyone that wants to have a great workout from
            someone that is highly knowledgeable and skilled. Thanks Logan, I
            really appreciate our group workouts.
          </p>
          <p className={styles.cardText}>- Marilyn Turnbull</p>
        </div>
        <div className="carousel-item-padding-40-px">
          <p className={styles.cardText}>
            A diagnosis of severe shoulder arthritis and accompanying reduction
            of motion led me to checking out personal training at Trevor Linden
            gym. The lovely Emma signed me up and suggested Logan Wong would be
            a good fit. I have been working with Logan for over a year now and I
            can't say enough about what this young man brings to the table.
            Apart from the knowledge he has gained by being in his 3rd year of
            kinesiology studies, he takes his job very seriously and is always
            researching ways to improve whatever ails you. His sessions are
            never boring and he always encourages without pushing. Working with
            him has meant I won't be using the terms frail and senior in the
            same sentence!
          </p>
          <p className={styles.cardText}>- Nancy Murray</p>
        </div>
        <div className="carousel-item-padding-40-px">
          <p className={styles.cardText}>
            My personal trainer Logan Wong has been helping me meet my fitness
            goals of better mobility, balance and becoming a fit, confident at
            the gym, strong woman. He is giving me the knowledge to understand
            how to use the vast variety of gym equipment and understand and
            learn the proper form with each exercise which is challenging as I
            try to retrain my brain of my bad exercise habits. Logan is always
            helpful when I ask him questions and if needed, he will follow up by
            emailing me back-up information pertinent to the question. The Club
            16 trainers use InBody Composition Analysis which is helpful for me
            to understand the long reality of the ups and downs of transforming
            my new fitness regime to a healthier lifestyle. At times, they also
            use an assessment evaluation test to help them with the
            progress/regress part of the training (I’m good at plank, not so
            much at push-ups!). success for your training needs.
          </p>
          <p className={styles.cardText}> - Irene Reid</p>
        </div>
      </Carousel>
    </motion.section>
  );
};

export default clubTraining;
