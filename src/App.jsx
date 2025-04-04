import React from 'react'
import Navbaar from './components/Navbaar'
import Home_lander from './components/Home_lander'
import Home_card from './components/Home_card'
import Home_last from './components/Home_last'
import More from './components/More'
import useSmoothScroll from './utils/Scroll'
import Intro from './utils/Intro'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import { Routes, Route, useLocation } from 'react-router-dom'
import ErrorBoundary from './utils/ErrorBoundary'
import { AnimatePresence } from 'framer-motion'

const App = () => {
  useSmoothScroll()
  const location = useLocation()
  return (
    <ErrorBoundary fallback={<div>Error</div>}>
      <Intro />
      <Navbaar />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={
            <>
                <Home_lander />
                <Home_card />
                <Home_last />
                <More />
            </>
          } />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </ErrorBoundary>
  )
}

export default App