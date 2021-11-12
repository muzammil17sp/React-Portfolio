import { motion } from "framer-motion";
import React from "react";
import { imageAnimation, titleAnimation } from "../animations";
import Wave from "./Wave";

const Banner = () => {
  return (
    <div id="top" className="bg-dark py-10 ">
      <div className=" max-w-90 mx-auto  flex items-center flex-col md:flex-row justify-between">
        <div className="flex flex-col items-center md:items-stretch z-10">
          <div className="overflow-hidden">
            <motion.h2
              variants={titleAnimation}
              initial="hidden"
              animate="show"
              className="text-2xl md:text-3xl text-white text-center md:text-left font-light mt-2 "
            >
              Welcome to my portfolio My name is
              <span className="text-underline font-black font-lower mt-3 mx-5">
                Muzammil
              </span>
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.div
              variants={titleAnimation}
              initial="hidden"
              animate="show"
              className="flex items-center space-x-9 my-4  "
            >
              <p className="text-white text-3xl cursor-pointer">
                <a
                  href="https://www.facebook.com/muzammil.memon.58910"
                  target="_blank"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
              </p>
              <p className="text-white text-3xl cursor-pointer">
                <a href="https://www.linkedin.com/in/muzammil-rafiq-3896081b4/"
                  target="_blank"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </p>
              <p className="text-white text-3xl cursor-pointer">
                <a href="https://github.com/muzammil17sp" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
              </p>
              <p className="text-white text-3xl cursor-pointer">
                <a href="https://www.instagram.com/muzammil_6/" target="_blank">
                  <i class="fab fa-instagram"></i>
                </a>
              </p>
            </motion.div>
          </div>
          <a href="#project">
            <button className="px-5 py-3 md:w-3/6 w-full bg-background  text-base md:text-xl text-white  rounded-sm mt-2">
              See Projects
            </button>
          </a>
        </div>
        {/* <div className=""> */}
        <motion.img
          variants={imageAnimation}
          initial="hidden"
          animate="show"
          className="md:h-3/6 md:w-3/6 z-10"
          src="/img/main.svg"
          alt=""
        />
        {/* </div> */}
        <Wave />
      </div>
    </div>
  );
};

export default Banner;
