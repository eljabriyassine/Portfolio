import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Projects } from "../../constantes/Projects";
import CardPorfolio from "./CardPorfolio";


const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio relative " ref={ref}>
      <div className="sticky top-0 left-0  pt-[calc(100vh-100px)] text-center text-orange-500 text-3xl sm:pt-16">
        <h1 className="text-5xl">Featured Works</h1>
        <motion.div
          style={{ scaleX }}
          className="progressBar h-3 bg-white mt-5"
        ></motion.div>
      </div>
      {Projects.map((item) => (
        <CardPorfolio item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
