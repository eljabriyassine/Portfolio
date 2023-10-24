import { useEffect, useRef, useState } from "react";
import { EducationInformation } from "../../constantes/EducationInformation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import EducationPhoto from "../../assets/education.jpg";

import { motion, useAnimation } from "framer-motion";

const Education = () => {
  const ref = useRef();
  const [currentIndex, setCurrentIndex] = useState(1);
  const controls = useAnimation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update windowWidth
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial window width
    updateWindowWidth();

    // Add event listener for window resize
    window.addEventListener("resize", updateWindowWidth);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  const goToNext = async () => {
    if (currentIndex < EducationInformation.length - 1) {
      await controls.start({
        x: -500,
        opacity: 0,
        transition: { duration: 1 },
      });
      setCurrentIndex(currentIndex + 1);
      controls.start({ x: 0, opacity: 1, transition: { duration: 1 } });
    }
  };

  const goToPrevious = async () => {
    if (currentIndex > 0) {
      await controls.start({ x: 500, opacity: 0, transition: { duration: 1 } });
      setCurrentIndex(currentIndex - 1);
      controls.start({ x: 0, opacity: 1, transition: { duration: 1 } });
    }
  };

  const cardVariants = {
    initial: {
      x: 0,
      opacity: 1,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 3, delay: 2 },
    },
  };

  const variants = {
    initial: {
      x: -500,
      y: -100,
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 1, staggerChildren: 0.2 },
    },
  };



  return (
    <motion.div
      variants={variants}
      initial="animate"
      whileInView="animate"
      ref={ref}
      className="services bg-gradient-to-b from-[#0c0c1d] to-[#111132] h-full flex flex-col justify-content"
    >
      <motion.div
        variants={variants}
        className="textContainer mt-5 h-[80px] w-4/5 sm:h-1/6 self-center text-center flex flex-col items-center gap-5 sm:flex-row sm:self-end"
      >
        <p className="text-sm sm:text-lg text-gray-500  text-right">
          My educational journey academic <br />
          and lifelong learning experiences
        </p>
        <hr className="w-4/5 sm:w-[500px] font-normal border-t-0.5 border-gray-400" />
      </motion.div>
      <motion.div
        variants={variants}
        className="titleContainer w-full h-1/4 sm:h-1/3 flex flex-col items-center justify-center gap-2"
      >
        <div className="title flex flex-col items-center text-center gap:6 sm:gap-12 sm:flex-row">
          <img
            src={EducationPhoto}
            alt=""
            className="h-20 w-48 rounded-full object-cover sm:w-[250px] sm:h-[100px]"
          />
          <h1 className="text-xl sm:text-4xl font-bold">Summary of</h1>
        </div>

        <div className="title flex flex-col items-center text-center gap:6 sm:gap-12 sm:flex-row">
          <h1 className="text-xl sm:text-4xl ">
            <span className="font-bold">Educational </span>Attainments.
          </h1>
          <button className="w-32 h-8 mt-3 rounded-full bg-orange-500 cursor-pointer sm:text-2xl sm:w-64 sm:h-12">
            Degree
          </button>
        </div>
      </motion.div>
      <motion.div
        variants={variants}
        className="listContainer h-1/2 flex flex-col  max-w-5xl mx-auto my-5 gap-6 sm:flex-row"
      >
        {windowWidth > 640 ? (
          EducationInformation.map((education, index) => (
              <motion.div
                key={currentIndex}
                variants={cardVariants}
                initial="initial"
                className="box px-3  py-8 sm:p-5 m-4 w-full h-4/5 rounded-xl border border-cyan-200 flex flex-col justify-center hover:bg-gray-700 gap-1  hover:opacity-150"
                style={{ backgroundColor: "#0c0c1d" }}
                animate={controls}
              >
                <h2 className="text-[22px] sm:text-[22px]">
                  {education.Degree}
                </h2>
                <p className="text-[14px] p-3">{education.description}</p>
              </motion.div>
          ))
        ) : (
          
            <motion.div
              key={currentIndex}
              variants={cardVariants}
              initial="initial"
              className="box px-3  py-8 sm:p-12 m-4 rounded-xl border border-gray-400 flex flex-col justify-between hover:bg-gray-700 gap-2"
              style={{ backgroundColor: "#0c0c1d" }}
              animate={controls}
            >
              <h2 className="text-[22px] sm:text-[22px]">
                {EducationInformation[currentIndex].Degree}
              </h2>
              <p className="text-[14px] p-3">
                {EducationInformation[currentIndex].description}
              </p>
            </motion.div>
         
        )}

        <div className="flex  justify-center top-[calc(100vh-100px)] items-center gap-5  sm:hidden">
          <button
            onClick={goToPrevious}
            className="cursor-pointer w-20 h-8 bg-gray-800 bg-opacity-80 rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md"
          >
            <FaArrowLeft className="w-full h-full" />
          </button>
          <div>{`${currentIndex + 1} / ${EducationInformation.length}`}</div>
          <button
            onClick={goToNext}
            className="cursor-pointer w-20 h-8 bg-gray-800 bg-opacity-80 rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md"
          >
            <FaArrowRight className="w-full h-full" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Education;
