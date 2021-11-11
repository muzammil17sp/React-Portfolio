import React from 'react'
import { motion } from 'framer-motion'
import { projectsAnimation } from '../animations';
import { useScroll } from './useScroll';

const Project = () => {
    const [element, controls] = useScroll();

    return (
        <div className="bg-dark overflow-x-hidden py-10 " id="project">
            <h1 className="text-lower md:text-xl text-base font-bold uppercase text-white text-center mb-10">CHECK OUT SOME OF MY WORKS.
            </h1>
            <motion.div
                ref={element}
                animate={controls}
                variants={projectsAnimation}
                initial="hidden"
                className='  max-w-90 mx-auto grid md:grid-cols-3  xl:grid-cols-4 xxl grid-cols-1   gap-6    '>
                    <a href="https://darazclone.netlify.app/" target="_blank">
                <div className='group relative overflow-hidden w-64 h-32 cursor-pointer '>
                        <img src="/img/daraz.PNG" alt="" className=" group-hover:opacity-20  transition-opacity  " />

                        <h1 className="absolute top-0 opacity-0 group-hover:opacity-100 font-lower text-white text-base font-bold pt-5 px-1 " >Mern Ecommerce Web app clone with Admin panel complete authentication and crud functionlaity </h1>
                </div>
                    </a>
                    <a href="https://muzammilblog.netlify.app/" target="_blank">
                <div className='group relative overflow-hidden w-64 h-32 cursor-pointerr '>
                        <img src="/img/blog.PNG" alt="" className=" group-hover:opacity-20  transition-opacity  " />
                        <h1 className="absolute top-0 opacity-0 group-hover:opacity-100 font-lower text-white text-base font-bold pt-5 px-1 text-center">MERN Blog with authentication and crud functionality </h1>
                </div>
                    </a>
                    <a href="https://instagram12.netlify.app/" target="_blank" >
                <div className='group relative overflow-hidden w-64 h-32 cursor-pointerr '>
                        <img src="/img/instagram.PNG" alt="" className=" group-hover:opacity-20  transition-opacity  " />
                        <h1 className="absolute top-0 opacity-0 group-hover:opacity-100 font-lower text-white text-base font-bold pt-5 px-1 ">Instagram clone using firebase Firestore , Authtication, Storage </h1>
                </div>
                    </a>
                <a href="https://netflix122.netlify.app/" target="_blank">
                <div className='group relative overflow-hidden w-64 h-32 cursor-pointer  '>
                    <img src="/img/netflix.PNG" alt="" className=" group-hover:opacity-20  transition-opacity  " />
                    <h1 className="absolute top-0 opacity-0 group-hover:opacity-100 font-lower text-white text-base font-bold pt-5 px-1 text-center">Netflix cline with Firebase authentication</h1>
                </div>
                </a>
                    <a href="https://airbnb-clone-beta-one.vercel.app/" target="_blank">
                <div className='group relative overflow-hidden w-64 h-32 cursor-pointer flex  justify-center '>
                        <img src="/img/airbnb.png" alt="" className=" group-hover:opacity-20  transition-opacity" />
                        <h1 className="absolute top-0 opacity-0 group-hover:opacity-100 font-lower text-white text-base font-bold pt-5 mx-auto px-1 text-center">Airbnb Clone </h1>
                </div>
                    </a>
                    <a href="https://amazon-gamma.vercel.app/"   target="_blank">
                <div className='group relative overflow-hidden w-64 h-32 cursor-pointer flex  justify-center '>

                        <img src="/img/amazon.png" alt="" className=" group-hover:opacity-20  transition-opacity" />
                        <h1 className="absolute top-0 opacity-0 group-hover:opacity-100 font-lower text-white text-base font-bold pt-5 px-1 text-center">Amazon Clone </h1>
                </div>
                    </a>

            </motion.div>
        </div>
    )
}

export default Project
