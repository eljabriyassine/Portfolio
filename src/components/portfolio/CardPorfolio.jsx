import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CardPorfolio({ item }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const isBigScreen = window.innerWidth >= 740; // Replace screenSize with your actual screen size detection logic

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    isBigScreen ? [-300, 300] : [0, 0]
  );

  return (
    <section>
      <div className="flex items-center justify-center max-w-5xl mx-auto w-full h-full overflow-hidden">
        <div className="m-2 h-4/5 flex flex-col items-center justify-center gap-12 sm:flex-row">
          <div
            className="imageContainer flex-1 w-full max-h-72  h-1/2 "
            ref={ref}
          >
            <img
              className="w-full h-full object-contain sm:object-cover rounded-lg border border-solid border-gray-400 border-8"
              src={item.img}
              alt=""
            />
          </div>
          <motion.div
            style={{ y }}
            className="textContainer items-center text-center flex-1 flex flex-col gap-8 sm:text-start "
          >
            <h2 className="text-2xl sm:text-6xl">{item.title}</h2>
            <p className="text-xl text-gray-500 sm:text-2xl">{item.desc}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button className="text-xl bg-orange-500 border-none rounded-lg p-2 w-48 cursor-pointer">
                Code
              </button>
            </a>
          </motion.div>
        </div>
        {/* <h1 className="bg-cyan-200 ">eheh</h1> */}
      </div>
    </section>
  );
}
