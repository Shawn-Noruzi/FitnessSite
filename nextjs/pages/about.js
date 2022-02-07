import { motion } from "framer-motion";
import AboutMe from "../components/AboutMe";
import Qualifications from "../components/Qualifications";
import SpecialtyAreas from "../components/SpecialtyAreas";
import WorkOutVideos from "../components/WorkOutVideos";

const AboutPage = ({ isFirstMount }) => {
  const aboutMe = {
    title: `Meet the Coach`,
    text: `        I'm a passionate athlete eager to make a difference in people's
  lives. I am currently attending post-secondary education at the
  University of Fraser Valley majoring in Kinesiology and minoring
  in Business Administration while working at Club 16 Trevor Linden
  Fitness in Coquitlam as a Senior Personal Trainer.
  <br />
  <br />
  ​After seeing close family members' physical capabilities
  depreciate over time, I strive to help anyone improve their
  physical fitness level with the end goal to improve their
  longevity, wellness, and decrease the effects of physical
  disorders. I strongly believe that anyone, regardless of age, can
  learn to adopt a healthier lifestyle.
  <br />
  <br />
  With over 12 years of combined bodybuilding, powerlifting, and
  sports conditioning experience I focus on helping my clients
  achieve their desired physique goals. Exercise not only helps
  improve one's physical health, but is a great way to relieve
  stress, improve self-confidence, and enhance the quality of life.
  My vision is to create a welcoming, comfortable, and
  non-judgmental atmosphere where you can unlock your physical
  potential. Striving to achieve your fitness goal is the stepping
  stone toward a healthier lifestyle.
  <br />
  <br />
  With my professional guidance and education, your goals are within
  arm's reach.`,
    button: `CONTACT ME`,
    imageHeader: "/images/logan.webp",
  };
  // const [refMission, inViewMission] = useInView();
  // const solutionContainerAnimation = useAnimation();

  // useEffect(() => {
  //   if (inViewSolution) {
  //     console.log("inview sol", inViewSolution);
  //     solutionContainerAnimation.start("show");
  //     solutionTitleAnimation.start("animate");
  //     solutionTextAnimation.start("animate");
  //   }
  //   if (!inViewSolution) {
  //     console.log("inview sol false", inViewSolution);

  //     solutionContainerAnimation.start("hidden");
  //     solutionTitleAnimation.start("initial");
  //     solutionTextAnimation.start("initial");
  //   }
  // }, [inViewSolution]);

  return (
    <motion.section exit={{ opacity: 0 }}>
      <div>
        <AboutMe
          aboutTitle={aboutMe.title}
          aboutText={aboutMe.text}
          button={aboutMe.button}
          imageHeader={aboutMe.imageHeader}
          isFirstMount={isFirstMount}
        />
        <Qualifications isFirstMount={isFirstMount} />
        <SpecialtyAreas />
        <WorkOutVideos />
      </div>
    </motion.section>
  );
};

export default AboutPage;
