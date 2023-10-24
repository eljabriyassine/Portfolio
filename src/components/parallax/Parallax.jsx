import { useRef } from "react";
import mountains from "../../assets/mountains.png";
import planets from "../../assets/planets.png";
import starts from "../../assets/stars.png";
import sun from '../../assets/sun.png'
import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax({ type }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const ybg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      ref={ref}
      className={`absolute w-full h-full relative flex items-center justify-center overflow-hidden  ${
        type === "education"
          ? "bg-gradient-to-b from-[#111132] to-[#0c0c1d]"
          : "bg-gradient-to-b from-[#111132] to-[#505064]"
      }`}
    >
      <motion.h1 style={{ y: yText }} className="text-6xl sm:text-8xl">
        {type === "education" ? "Education" : "Projects"}
      </motion.h1>
      <motion.div
        className="absolute w-full h-full bg-bottom bg-no-repeat bg-contain sm:bg-cover z-30"
        style={{ backgroundImage: `url(${mountains})` }}
      ></motion.div>
      <motion.div 
        className="absolute w-full h-full bg-bottom bg-no-repeat bg-contain sm:bg-coverxz-20"
        style={{y:ybg, 
          backgroundImage: type === 'education' ? `url(${planets})` : `url(${sun})`
        }}
        
      ></motion.div>
      <motion.div
        className="absolute w-full h-full bg-bottom bg-cover z-10"
        style={{x:ybg, backgroundImage: `url(${starts})` }}
      ></motion.div>
    </motion.div> 
  );
}
