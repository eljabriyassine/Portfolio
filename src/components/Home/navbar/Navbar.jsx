import { FaTwitter, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { SOCIALMEDIA } from '../../../constantes/socialMedia';
import Sidebar from '../../sideBar/Sidebar';

export default function Navbar() {
  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  const socialMediaLinks = [
    { icon: FaEnvelope, link: SOCIALMEDIA.Mail },
    { icon: FaTwitter, link: SOCIALMEDIA.TWITTER },
    { icon: FaGithub, link: SOCIALMEDIA.GITHUB },
    { icon: FaLinkedin, link: SOCIALMEDIA.LINKEDIN },
  ];

  return (
    <div className="h-[100px] ">
      <Sidebar />
      <div className=" h-full max-w-5xl m-auto pr-8  flex items-center justify-end sm:justify-between">
        <motion.span
          variants={variants}
          initial="hidden"
          animate="visible"
          className="hidden text-lg sm:text-2xl md:text-4xl ml-20 sm:block"
        >
          EL JABRI Yassine
        </motion.span>
        <div className="flex gap-3 md:gap-10 ">
          {socialMediaLinks.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              className="w-8 h-8 "
              variants={variants}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.5,
                color: '#444',
                transition: { duration: 0.2 },
              }}
            >
              <item.icon className="w-full h-full" />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
