import HeroImage from "../../../assets/PhotoRoom-20231024_111141.png";
import ScorllIcone from "../../../assets/scroll.png";

import { motion } from "framer-motion";
import { Routes } from "../../../Routes/Routes";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-100%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 8,
    },
  },
};

const Hero = () => {
  return (
    <div className="h-[calc(100vh-100px)] overflow-hidden bg-gradient-to-b from-[#0c0c1d] to-[#111132] relative text-white">
      <div className=" max-w-5xl h-full mx-auto p-8 z-100 ">
        <motion.div
          className="w-full  h-full flex flex-col justify-center    items-center gap-8 md:items-start md:w-1/2"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            variants={textVariants}
            className="text-3xl text-rebeccapurple tracking-widest  "
          >
            EL JABRI Yassine
          </motion.h2>
          <motion.h2
            variants={textVariants}
            className="text-xl text-rebeccapurple tracking-widest md:text-4xl  "
          >
            Software Engineering student
          </motion.h2>

          <motion.div
            variants={textVariants}
            className="buttons  items-center flex flex-col sm:flex-row md:flex-col md:justify-center lg:flex-row gap-4 "
          >
            <motion.button
              variants={textVariants}
              className="px-5 py-3 w-52 hover:bg-gray-600 border border-white rounded-md bg-transparent text-white  cursor-pointer font-light bg-gray-500"
            >
              <a href={`#${Routes.PROJECTES}`}>Contact Me</a>
            </motion.button>
            <motion.button
              variants={textVariants}
              className="px-5 py-3 w-52 hover:bg-gray-600 border border-white rounded-md bg-transparent text-white cursor-pointer font-light bg-gray-500"
            >
              <a href={`#${Routes.CONTACT}`}>Contact Me</a>
            </motion.button>
          </motion.div>
          <a href={`#${Routes.EDUCATION}`}>
            <motion.img
              variants={textVariants}
              animate="scrollButton"
              src={ScorllIcone}
              alt=""
              className="w-12"
            />
          </a>
        </motion.div>
      </div>

      <div>
        <motion.img
          className="absolute rounded-4xl  h-screen top-0 right-0 w-[60%] hidden   md:block"
          src={HeroImage}
          alt=""
        />
      </div>
      <motion.div
        className="z-0 absolute  text-[#ffffff09] font-bold text-[180px] bottom-[-50px] whitespace-nowrap w-1/2 h-1/2"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Passionate software engineer and innovator{" "}
      </motion.div>
    </div>
  );
};

export default Hero;
