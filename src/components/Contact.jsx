import React from "react";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { motion } from "framer-motion";
import { SectionWrapper } from "./hoc";
import { styles } from "../style";
const Contact = () => {
  return (
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      id="contact"
      className="py-8 bg-primary"
    >
      <h2 className={`mt-16 text-white ${styles.sectionHeadText}`}>
        Contact <span className={`text-secondary`}>Me</span>
      </h2>

      <div className="flex justify-start items-center flex-wrap mt-8">
        <div className="flex flex-row items-center space-x-3 w-[300px]">
          <BsWhatsapp size={28} color="green" />
          <p className="font-semibold text-base md:text-xl text-gray-600">
            +923415634031
          </p>
        </div>
        <div className="flex flex-row items-center space-x-3 max-w-[400px] p-8">
          <BiLogoGmail size={28} color="red" />
          <p className="font-semibold text-base md:text-xl text-gray-600">
            codewithkashif318@gmail.com
          </p>
        </div>
        <div className="flex flex-row items-center space-x-3 w-[300px] p-8">
          <BsLinkedin size={28} color="blue" />
          <p
            href={"https://www.linkedin.com/in/codewithkashif/"}
            className="font-semibold text-base md:text-xl text-gray-600"
          >
            Muhammad Kashif
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Contact, "projects");
