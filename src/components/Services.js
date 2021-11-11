import React, { useState } from 'react'
import {AnimateSharedLayout} from "framer-motion"
import Accordian from './Accordian';
const Services = () => {
  const [quesAns, setquesAns] = useState([
    "React js with hooks", "Rest API integration", "Node js Express js backend", "Fix bugs in API",
    "MongoDB database structure", " Authentication and Authorization in node js using JWT", "Redux", "Material UI",
    "Framer Motion", "irebase Authentication Database and Storage", "Figma to code",
    "Responsive UI using modern Tailwind CSS", "Hosting on Netlify and Heroku", "Git and Github"
  ])
  

  return (
    <div className="bg-dark py-10">

      <div className='max-w-90 mx-auto space-y-5'>
        <h1 className='font-thin font-lower text-white md:text-2xl text-xl '>Any Questions <span className="text-underline font-bold">FAQ</span>
        </h1>
        <AnimateSharedLayout>
        <Accordian question="When did I start coding?" answer="After I completed my matriculation and at that time I was 16 years
              old, I got interested in building websites, and I began." />
          <Accordian question="How do you schedule your day?" answer="     I wake up at 8:00 am and take a bath. I am currently interning at a
            software house from 9:00 am to 6:00 pm, and at 7:00 pm I reach home
            and spend some time with my family. I take tea and start coding
            again and go to sleep at 1:00 am" />

          <Accordian question="What services do I provide?" quesAns={quesAns} />
        </AnimateSharedLayout>
     
      </div>

    </div>
  )
}

export default Services
