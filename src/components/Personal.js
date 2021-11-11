import Reac from "react";
import { motion } from "framer-motion";
import { backendAnimation, javascriptAnimation, mernAnimation, reactAnimation, reduxAnimation, titleAnimation } from "../animations";
import { useScroll } from "./useScroll";

const Personal = () => {
  const [element, controls] = useScroll();

  return (
    <motion.div
      ref={element}
      animate={controls}
      // variants={fadeAnimation}
      initial="hidden"
      exit="exit"
      id="about"
      className="py-20 bg-dark"
    >
      <div className="max-w-90 mx-auto space-y-10 ">
        <div className="flex md:flex-row flex-col items-center  md:items-stretch">
          <div className="md:mr-20 mt-6">
            <h2 className="font-lower text-white font-bold md:text-2xl  text-xl mb-1 uppercase">
              Education
            </h2>
            <hr className="bg-underline p-underline" />
          </div>
          <div className="mt-3 flex flex-col  text-center md:text-justify md:ml-40 space-y-9">
            <div className="overflow-hidden">
              <motion.h2 variants={titleAnimation} initial="hidden" animate={controls} className="font-lower text-underline md:text-2xl  text-xl mb-1 tracking-widest font-extrabold">
                The Asian School , Karachi
              </motion.h2>
              <motion.p variants={titleAnimation} initial="hidden" animate={controls} className="text-textColor md:text-xl text-base font-lower">
                Matriculation <span className="font-bold text-base md:text-xl mx-1">.</span>
                Nov 2019
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.h2 variants={titleAnimation} initial="hidden" animate={controls} className=" text-underline md:text-2xl text-xl mb-1 tracking-widest font-lower font-extrabold">
                Gulshan College , Karachi
              </motion.h2>
              <motion.p variants={titleAnimation} initial="hidden" animate={controls} className="text-textColor md:text-xl text-base font-lower">
                Intermediate <span className="font-bold text-2xl mx-1">.</span>
                April 2021
              </motion.p>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center md:items-stretch">
          <div className="md:mr-20 mt-6">
            <h2 className="font-lower text-white font-bold md:text-2xl text-xl mb-1 uppercase">
              Work
            </h2>
            <hr className="bg-underline p-underline" />
          </div>
          <div className="mt-3 flex flex-col text-center md:text-justify  md:ml-56 space-y-9">
            <div>
              <motion.h2 variants={titleAnimation} initial="hidden" animate={controls} className="font-lower text-underline  md:text-2xl text-xl mb-1 tracking-widest font-extrabold">
                Internship in Software , Karachi
              </motion.h2>
              <motion.p variants={titleAnimation} initial="hidden" animate={controls} className="text-textColor md:text-xl  text-base">
                Junior Developer
                <span className="font-bold text-2xl mx-1">.</span>
                Oct 2021
              </motion.p>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center md:items-stretch text-center md:text-justify  ">
          <div className="md:mr-20">
            <h2 className="font-lower text-white font-bold md:text-2xl text-xl  uppercase">
              Skills
            </h2>
            <hr className="bg-underline p-underline" />
          </div>
          <div className=" flex flex-col  md:ml-56 space-y-9 md:w-7/12 w-full">
            <div className="space-y-7">
              <div className="overflow-hidden">
                <motion.p variants={titleAnimation} initial="hidden" animate={controls} className="text-textColor md:text-xl  text-base overflow-ellipsis	">
                  My Programming Language Proficiency
                </motion.p>
              </div>

              <div>
                <p className="my-2 text-xl font-lower font-bold text-white ">JAVASCRIPT</p>
                <div className=" bg-textColor  ">
                  <motion.div variants={javascriptAnimation} initial="hidden" animate={controls} className=" bg-underline  p-6"></motion.div>
                </div>

              </div>
              <div>
                <p className="my-2 text-xl font-lower font-bold text-white   ">ReactJs</p>
                <div className=" bg-textColor  ">
                  <motion.div variants={reactAnimation} initial="hidden" animate={controls}  className="w-8/12 bg-underline  p-6"></motion.div>
                </div>
              </div>
              <div>
                <p className="my-2 text-xl font-lower font-bold text-white  ">Redux</p>
                <div className="bg-textColor">
                <motion.div variants={reduxAnimation} initial="hidden" animate={controls}  className="w-8/12 bg-underline  p-6"></motion.div>
                </div>
              </div>
              <div>
                <p className="my-2 text-xl font-lower font-bold text-white  ">MERN Stack</p>
                <div className="bg-textColor">
                <motion.div variants={mernAnimation} initial="hidden" animate={controls}  className="w-8/12 bg-underline  p-6"></motion.div>
                </div>
              </div>
              <div>
                <p className="my-2 text-xl font-lower font-bold text-white  ">Firebase  </p>
                <div className="bg-textColor">
                <motion.div variants={reactAnimation} initial="hidden" animate={controls}  className="w-8/12 bg-underline  p-6"></motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Personal;
