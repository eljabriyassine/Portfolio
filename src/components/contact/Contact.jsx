import { motion, useInView } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SOCIALMEDIA } from "../../constantes/socialMedia";
import AnimatedPhoneSVG from "./AnimatedPhoneSVG ";
import { useRef } from "react";

const socialMediaLinks = [
  { icon: FaFacebook, link: SOCIALMEDIA.FACEBOOK },
  { icon: FaInstagram, link: SOCIALMEDIA.INSTAGRAM },
  { icon: FaGithub, link: SOCIALMEDIA.GITHUB },
  { icon: FaLinkedin, link: SOCIALMEDIA.LINKEDIN },
];

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export default function Contact() {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-10px" });

  return (
    <motion.div
      ref={ref}
      className=" relative w-full h-4/5  p-28  max-w-5xl m-auto  sm:w-4/5 flex flex-col sm:p-20  items-center justify-center gap-5 sm:flex-row"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div
        className="flex-1 flex  flex-col gap-1 sm:gap-3 h-4/5 pt-8  "
        variants={variants}
      >
        <motion.h1 variants={variants} className="m-2 text-4xl sm:text-[40px]">
          Let's get in touch
        </motion.h1>
        <motion.div>
          <h2 className="text-xl sm:text-[30px] " variants={variants}>
            Mail
          </h2>
          <span className="ml-3">Yassinejabrio.2001@gmail.com</span>
        </motion.div>
        <motion.div className="item  ">
          <h2 className="text-xl sm:text-[30px] " variants={variants}>
            Adress
          </h2>
          <span className="ml-3">
            Av imam maled sidi rahhal el kalaa des sraghna
          </span>
        </motion.div>
        <motion.div className="item  ">
          <h2 className="text-xl sm:text-[30px]" variants={variants}>
            Phone
          </h2>
          <span className="ml-3">+2126387332983</span>
        </motion.div>
      </motion.div>
      <motion.div className="flex-1 flex justify-center h-4/5 w-[300px] iterms-center justify-center">
        <AnimatedPhoneSVG isInView={isInView} />
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 3, duration: 3 }}
          class="w-full flex flex-col gap-3 relative"
        >
          <input
            class="p-3 border border-solid border-white rounded bg-[#002733] text-[#87a4b6] focus:border-l-5 focus:border-[#ff7a01] focus:outline-none"
            type="text"
            placeholder="enter your name"
            required
          />
          <input
            class="p-3 border border-solid border-white rounded bg-[#002733] text-[#87a4b6] focus:border-l-5 focus:border-[#ff7a01] focus:outline-none"
            type="email"
            placeholder="Email"
            required
          />
          <textarea
            class="p-3 rounded bg-[#013747] text-[#ff7a01] font-semibold focus:border-l-5 focus:border-[#ff7a01] focus:outline-none resize-none"
            rows={12}
            placeholder="Message"
            name="message"
            required
          ></textarea>
          <button class="p-3 bg-[#ffffff] text-[#001925] rounded-lg font-semibold border border-transparent hover:bg-transparent hover:border-[#ff7a01] hover:text-[#ff7a01]">
            Submit
          </button>
        </motion.form>
      </motion.div>
      <div className="absolute mt-[100vh]  h-16 ">
        <div className="flex gap-3 md:gap-20  ">
          {socialMediaLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              className="w-12 h-12 text-gray-200 "
            >
              <item.icon className="w-full h-full bg-[color-orange-500]" />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
