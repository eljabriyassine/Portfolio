import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Projects } from '../../constantes/Projects';
import CardPorfolio from './CardPorfolio';

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 10,
  });

  return (
    <div className="portfolio relative " ref={ref}>
      <div className="sticky top-0 left-0  pt-[calc(100vh-60px)] text-center text-orange-500 text-3xl sm:pt-16">
        <h1 className="sm:text-5xl">Featured Works</h1>
        <motion.div
          style={{ scaleX }}
          className="progressBar h-3 bg-white sm:mt-5"
        ></motion.div>
      </div>
      {Projects.map((item) => (
        <CardPorfolio item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
