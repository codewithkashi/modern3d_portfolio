import React from "react";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-4`}
      >
        <div className="flex flex-col justify-center items-center mt-5 ">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>
        <div className="">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I am <span className="text-[#915eff]">Kashif</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a Full Stack Web Developer. (MERN, T3)
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <Link
          to={"#about"}
          className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2"
        >
          <motion.div
            className="h-3 w-3 rounded-full bg-secondary mb-1 "
            animate={{ y: [0, 24, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          ></motion.div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
