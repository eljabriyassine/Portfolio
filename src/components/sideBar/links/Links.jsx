import { Routes } from '../../../Routes/Routes'; // Correct casing for 'Routes.jsx'
import { motion } from 'framer-motion';

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  return (
    <motion.div
      className="absolute w-full h-full flex flex-col items-center justify-center gap-7"
      variants={variants}
    >
      {Object.values(Routes).map((item) => (
        <motion.a
          className="text-2xl  duration-500 hover:scale-125 tap:scale-80"
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
