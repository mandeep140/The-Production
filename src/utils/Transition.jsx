import React from 'react'
import { motion } from 'framer-motion'

const Transition = (Component) => {
  return () => (
    <>
      {/* Diagonal Top-Left to Bottom-Right Wipe */}
      <motion.div 
        className="fixed top-0 left-0 w-full h-screen z-30 bg-[#0f0f0f]"
        initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', opacity: 1 }}
        animate={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)', opacity: 0 }}
        exit={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      ></motion.div>

      {/* Diagonal Bottom-Right to Top-Left Wipe */}
      <motion.div 
        className="fixed top-0 left-0 w-full h-screen z-20 bg-[#0f0f0f]"
        initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', opacity: 1 }}
        animate={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)', opacity: 0 }}
        exit={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
      ></motion.div>
      
      <Component />
    </>
  )
}

export default Transition
