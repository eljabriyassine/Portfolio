import { motion } from "framer-motion";
// import { useState } from "react";

export default function Test() {
  // const [open, setOpen] = useState(false);
  // const variants = {
  //   visible: { opacity: 1, x: 500, transition: { type:'spring',stifness:100,damping:100} },
  //   hidden: { opacity: 0,  },
  // };
  const variants = {
    visible:(i)=>( { opacity: 1, x: 100, transition: { delay: 0.3*i } }),
    hidden: { opacity: 0 },
  };

  const items = ["item1", "item2", "item3", "item 4"];

  return (
    <div className="h-screen flex items-center  justify-center">
      {/* <motion.div
        className="w-[200px] h-[200px] bg-white"
        // initial={{opacity :0.5 ,scale:0.5}}
        // whileHover={{opacity :1 ,scale:2}}
        // whileTap={{opacity :1 ,scale:2}}
        // whileInView={{opacity :1 ,scale:2}}
        variants={variants}
        animate={open ? variants.visible : variants.hidden}
      ></motion.div> */}
      {/* <button onClick={() => setOpen((prev) => !prev)}>click on one</button> */}
      <motion.ul
        variants={variants}
        initial='hidden'
        animate='visible'
      >
        {items.map((item,index) => (
          <motion.li variants={variants}  key={item} custom={index} >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
