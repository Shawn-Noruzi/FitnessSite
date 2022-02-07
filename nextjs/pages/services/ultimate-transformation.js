import { motion } from "framer-motion";
import AboutMe from "../../components/AboutMe";
import Qualifications from "../../components/Qualifications";
import SpecialtyAreas from "../../components/SpecialtyAreas";
import WorkOutVideos from "../../components/WorkOutVideos";

const AboutPage = ({ isFirstMount }) => {
  const aboutMe = {
    title: `
    16 WEEK ULTIMATE TRANSFORMATION PLAN`,
    text: `The ultimate program is constructed to learn, practice, and perfect the basic fundamentals of weight lifting in order to progress efficiently and safely. The program is broken into 3 phases: sensorimotor, power & hypertrophy, and speed & fat loss. Each phase has different goals aimed to allow you to progress in a linear pattern to avoid hitting a plateau. Each duration of the phases is dependant on the clients ability to learn movements and effort level. I will be here to guide you step by step to success.`,
    button: `TRANSFORM NOW`,
    imageHeader: "/images/loganWeights.webp",
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
