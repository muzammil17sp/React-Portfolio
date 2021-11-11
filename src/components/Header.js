import React from 'react'

const Header = () => {
  return (
    <nav className=" w-full bg-header sticky top-0 z-30">
      <div className="flex items-center justify-between p-2 md:p-6 max-w-90 mx-auto flex-wrap text-center md:text-left">
      <h4 className="flex-1 font-bigher text-xl  select-none font-bold cursor-pointer text-white"><a href="#top">Portfolio</a></h4>
      <ul className="list-none flex items-center justify-between text-white space-x-10 mt-2 md:mt-0  md:space-x-28 mx-auto md:mx-0  ">
        <li className="cursor-pointer text-base"><a href="#about">About</a></li>
        <li className="cursor-pointer text-base"><a href="#project">Project</a></li>
        <li className="cursor-pointer text-base"><a href="#contact">Contact</a></li>
      </ul>
      </div>
      
     
    </nav>
  )
}

export default Header
