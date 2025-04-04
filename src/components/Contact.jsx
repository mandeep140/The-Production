import React from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Transition  from '../utils/Transition'
const Contact = () => {
  return (
    <motion.div className='w-full h-screen flex items-center justify-center px-10'
    >
      <h3 className='text-2xl font-bold'>
        You can contact me on my: <a href="https://www.instagram.com/mandeep_10r/" target='_blank' className="flex items-center gap-2 mt-2 text-blue-500 hover:text-blue-600"><FaInstagram /><span>Instagram</span></a>
        <a href="https://www.linkedin.com/in/mandeepnagar/" target='_blank' className="flex items-center gap-2 mt-1 text-blue-500 hover:text-blue-600"><FaLinkedin /><span>LinkedIn</span></a>
      </h3>
    </motion.div>
  )
}

export default Transition(Contact)