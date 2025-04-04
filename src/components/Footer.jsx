import React from 'react'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className='min-h-[30vh] w-full bg-[#0f0f0f] relative flex justify-center items-center flex-col -mt-1'>
        <div className="name">THE PRODUCTION</div>
        <div className="developer">Developed by Mandeep Nagar</div>
        <div className="link">
            <a href="https://www.instagram.com/mandeep_10r/" target='_blank' className="flex items-center gap-2 mt-2"><FaInstagram /><span>Instagram</span></a>
            <a href="https://www.linkedin.com/in/mandeepnagar/" target='_blank' className="flex items-center gap-2 mt-1"><FaLinkedin /><span>LinkedIn</span></a>
        </div>
    </footer>
  )
}

export default Footer