import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "./hoc";
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <div className="flex flex-col justify-center items-center" id="about">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text=[17px] max-w-3xl leading-[30px]"
      >
        I am full-stack developer adept in TypeScript, Next.js, React.js,
        Tailwind CSS, Node.js, Express.js, and MongoDB. Crafts modern,
        feature-rich web applications from frontend to backend
      </motion.p>
      <div className="mt-20 flex justify-center flex-wrap gap-10 ">
        {services.map((e, index) => (
          <ServiceCard key={index} index={index} {...e} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
