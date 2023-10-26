import { motion, useInView } from 'framer-motion';
import { FaTwitter, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SOCIALMEDIA } from '../../constantes/socialMedia';
import AnimatedPhoneSVG from './AnimatedPhoneSVG ';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const socialMediaLinks = [
  { icon: FaTwitter, link: SOCIALMEDIA.TWITTER },
  { icon: FaEnvelope, link: SOCIALMEDIA.Mail },
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
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export default function Contact() {
  const ref = useRef();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_6hkaj1l',
        'template_u00sqyg',
        form.current,
        '-gfK3PTyFT8axwHFj'
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Message sent successfully:)');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error('Error sending the message. Please try again.');
        }
      );
  };

  const isInView = useInView(ref, { margin: '0px' });

  return (
    <motion.div
      ref={ref}
      className=" relative w-full h-full sm:h-4/5  p-28  max-w-5xl m-auto  sm:w-4/5 flex flex-col sm:p-10  items-center justify-center gap-5 sm:flex-row"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <ToastContainer />
      <motion.div
        className="flex-1 flex  flex-col gap-1 justify-center sm:gap-3 h-4/5 pt-8  "
        variants={variants}
      >
        <motion.h1
          variants={variants}
          className=" pr-3 sm:mb-2 sm:mb-6 text-xl sm:text-[40px]"
        >
          Let's get in touch
        </motion.h1>

        <motion.div className="pl-3  ">
          <span className="text-xl sm:text-[30px] " variants={variants}>
            Email:
          </span>
          <span className="pl-3">Yassinejabrio.2001@gmail.com</span>
        </motion.div>
        <motion.div className="pl-3  ">
          <span className="text-xl sm:text-[30px] " variants={variants}>
            Location :
          </span>
          <span className="ml-3">Marrakech Morocoo</span>
        </motion.div>
        <motion.div className="pl-3  ">
          <span className="text-xl sm:text-[30px]" variants={variants}>
            Phone:
          </span>
          <span className="ml-3">+2126387332983</span>
        </motion.div>
      </motion.div>
      <motion.div className="flex-1 flex justify-center h-4/5 w-[300px] iterms-center justify-center">
        <AnimatedPhoneSVG isInView={isInView} />
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 3, duration: 3 }}
          className="w-full flex flex-col justify-center gap-3 relative"
        >
          <input
            className="p-3 border border-solid border-white rounded bg-[#002733] text-[#87a4b6] focus:border-l-5 focus:border-[#ff7a01] focus:outline-none"
            type="text"
            placeholder="enter your name"
            name="name"
            required
          />
          <input
            className="p-3 border border-solid border-white rounded bg-[#002733] text-[#87a4b6] focus:border-l-5 focus:border-[#ff7a01] focus:outline-none"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <textarea
            className="p-3 rounded bg-[#013747] text-[#ff7a01] font-semibold focus:border-l-5 focus:border-[#ff7a01] focus:outline-none resize-none"
            rows={12}
            placeholder="Message"
            name="message"
            required
          ></textarea>
          <button className="p-3 bg-[#ffffff] text-[#001925] rounded-lg font-semibold border border-transparent hover:bg-transparent hover:border-[#ff7a01] hover:text-[#ff7a01]">
            Submit
          </button>
        </motion.form>
      </motion.div>
      <div className="absolute bottom-5 sm:bottom-[-100px]  sm:h-16 ">
        <div className="flex gap-3  sm:gap-20  ">
          {socialMediaLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 text-gray-200"
            >
              <item.icon className="w-3/4 h-3/4 sm:w-full sm:h-full bg-[color-orange-500]" />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
