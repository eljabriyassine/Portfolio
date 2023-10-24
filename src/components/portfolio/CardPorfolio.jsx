import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CardPorfolio({item}) {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
      target: ref,
    });
  
    const isBigScreen = window.innerWidth >= 640 // Replace screenSize with your actual screen size detection logic

    const y = useTransform(scrollYProgress, [0, 1], isBigScreen ? [-100, 100] : [0, 0]);
    
  
    return (
      <section >
        <div className="container flex items-center justify-center w-full h-full overflow-hidden">
          <div className="wrapper max-w-5xl h-full mx-auto flex flex-col items-center justify-center gap-12 sm:flex-row">
            <div className="imageContainer flex-1 w-full max-h-72  h-1/2 " ref={ref}>
              <img className="w-full h-full object-contain sm:object-cover" src={item.img} alt="" />
            </div>
            <motion.div
              style={{ y }}
              className="textContainer items-center text-center flex-1 flex flex-col gap-8 sm:text-start "
            >
              <h2 className="text-2xl sm:text-6xl">{item.title}</h2>
              <p className="text-xl text-gray-500 sm:text-2xl">{item.desc}</p>
              <button className="text-xl bg-orange-500 border-none rounded-lg p-2 w-48 cursor-pointer">
                See Demo
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    );
}
