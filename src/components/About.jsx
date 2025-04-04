import React from 'react'
import { motion } from 'framer-motion'
import Transition  from '../utils/Transition'

const About = () => {
  return (
    <motion.div className='w-full min-h-screen flex items-center justify-center px-10 flex-col gap-15'
    >
      <span>
        <h1 className='md:text-2xl text-xl font-bold uppercase'>about me</h1>
        <p>Hi, my name is mandeep nagar and i am from rajasthan, india. I am currently pursuing a BS degree.</p>
        <p>Before this i had already maked an major project, <a href="https://listpro.onrender.com/" target='_blank' className='text-blue-500 hover:text-blue-600'>ListPro.</a></p>
      </span>
      <span>
        <h1 className='md:text-2xl text-xl font-bold uppercase'>About this site</h1>
        <p>I made this site using react, framer-motion, gsap, and tailwind css.</p>
        <p>There can be more improvements can be made on this site but this is my first project on react</p>
        <p> So im happy with it :)</p>
      </span>
    </motion.div>
  )
}

export default Transition(About)