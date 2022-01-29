import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const Footer = () => {
    return (
        <div className="bg-header py-5 ">
            <div>
            <a href="#top" className="flex items-center justify-center p-3 rounded-full bg-dark w-16 h-16 mx-auto cursor-pointer ">
                <KeyboardArrowUpIcon style={{color:"#fff",fontSize:"40px"}} />
            </a>
          <div className="p-10 flex items-center justify-center space-x-10 ">
          <a href="https://www.facebook.com/muzammil.memon.58910" target="_blank">
            <p className="text-dark text-2xl cursor-pointer hover:text-white   transition-colors bg-textColor p-2 rounded-full h-12 w-12  text-center">
                <i class="fab fa-facebook-f"></i>
              </p>
              </a>
            <a href="https://www.linkedin.com/in/muzammil-rafiq-b6682022a/" target="_blank">              
            <p className="text-dark text-2xl cursor-pointer hover:text-white  transition-colors bg-textColor p-2 rounded-full h-12 w-12  text-center">
                <i class="fab fa-linkedin-in"></i>
              </p>
                </a>
            <a href="https://github.com/muzammil17sp" target="_blank">
            <p className="text-dark hover:text-white  transition-colors text-2xl cursor-pointer bg-textColor p-2 rounded-full h-12 w-12  text-center">
                  <i class="fab fa-github"></i>
              </p>
                </a>
              <a href="https://www.instagram.com/muzammil_6/" target="_blank">
              <p className="text-dark text-2xl cursor-pointer hover:text-white  transition-colors bg-textColor p-2 rounded-full h-12 w-12  text-center">
                  <i class="fab fa-instagram"></i>
              </p>
                </a>
            </div>
            </div>
          <p className="text-base text-textColor text-center font-extrabold font-lower">Made by Muzammil</p>
        </div>
    )
}

export default Footer
