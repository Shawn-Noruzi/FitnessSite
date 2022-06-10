import { motion } from "framer-motion";
import AboutMe from "../../components/AboutMe";
import ServiceParallax from "../../components/ServiceParallax";

const ultimateTransformation = ({ isFirstMount }) => {
  const transformMe = {
    title: `THE PROGRAM IS SUITABLE FOR YOU IF`,
    text: `
    - WANT TO TRANSFORM YOUR BODY
    - NOVICE TO WEIGHTLIFTING
    - NEVER FOLLOWED A PLAN
    - HAVE AN INJURY
    - TIRED OF NOT SEEING RESULTS
    - INTIMIDATED IN THE GYM`,
    button: `TRANSFORM NOW`,
  };

  const aboutMe = {
    title: `
    16 WEEK ULTIMATE TRANSFORMATION PLAN`,
    text: `The ultimate program is constructed to learn, practice, and perfect the basic fundamentals of weight lifting in order to progress efficiently and safely. The program is broken into 3 phases: sensorimotor, power & hypertrophy, and speed & fat loss. Each phase has different goals aimed to allow you to progress in a linear pattern to avoid hitting a plateau. Each duration of the phases is dependant on the clients ability to learn movements and effort level. I will be here to guide you step by step to success.`,
    button: `TRANSFORM NOW`,
    imageHeader: "/images/loganWeights.webp",
  };

  const content1stSection = {
    title: "PHASE 1: Sensorimotor",
    text: "The first goal is to build a strong foundation that emphasizes core, stability, and strengthen the mind-muscle connection. Full-body movement accelerates your heart rate to lose weight faster while building the essential stabilization muscles for perfect form. Mastering sensorimotor skills early on will make learning compound movements significantly easier. To maximize results, a training frequency of 3-4 times per week is recommended.",
    video: "/images/videos/1stVideo.mp4",
  };
  const content2ndSection = {
    title: "PHASE 2: POWER & HYPERTROPHY",
    text: "The second goal is to perfect force production during the eccentric and concentric motion to improve a mind-muscle connection to increase muscle mass and reduce fat. The more muscle you have the higher metabolism therefore will be burning fat at a faster rate. The duration of this phase will be determined by your goal. lFor optimal results, a training frequency of 4-5 times per week is recommended.",
    video: "/images/videos/2ndVideo.mp4",
  };
  const content3rdSection = {
    title: "PHASE 3: SPEED & FAT LOSS",
    text: "The final goal is to integrate speed and cardio acceleration during each phase of the movements to help fatigue the muscles and cardiovascular system. Stressing both systems forces growth, development, and minimization of body fat. Increasing your EPOC after a workout allows you to burn more calories post-workout for a higher fat loss rate. A training frequency of 4-5 times per week is recommended.",
    video: "/images/videos/3rdVideo.mp4",
  };

  return (
    <motion.section exit={{ opacity: 0 }}>
      <AboutMe
        aboutTitle={aboutMe.title}
        aboutText={aboutMe.text}
        button={aboutMe.button}
        imageHeader={aboutMe.imageHeader}
        isFirstMount={isFirstMount}
      />
      <ServiceParallax content={content1stSection} />
      <ServiceParallax content={content2ndSection} />
      <ServiceParallax content={content3rdSection} />
      <AboutMe
        transform
        aboutTitle={transformMe.title}
        aboutText={transformMe.text}
        button={transformMe.button}
        isFirstMount={isFirstMount}
      />
    </motion.section>
  );
};

export default ultimateTransformation;
