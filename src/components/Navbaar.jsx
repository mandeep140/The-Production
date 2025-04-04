import React, { useState, useEffect, useRef } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import gsap from 'gsap'
import { NavLink } from 'react-router-dom'

const Navbaar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isSecondComponent, setIsSecondComponent] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mobileMenuRef = useRef(null);
  const menuItemsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = prevScrollPos < currentScrollPos;
      const isSecondComponent = currentScrollPos > window.innerHeight;
      setIsSecondComponent(isSecondComponent);

      setVisible(!isScrollingDown || !isSecondComponent);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      // Animate menu container
      gsap.fromTo(mobileMenuRef.current,
        {
          height: 0,
          opacity: 0
        },
        {
          height: "auto",
          opacity: 1,
          duration: 0.3,
          ease: "power2.out"
        }
      );

      // Animate menu items
      gsap.fromTo(menuItemsRef.current,
        {
          x: -20,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: "power2.out"
        }
      );
    } else if (mobileMenuRef.current) {
      // Animate menu closing
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in"
      });
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <nav className={`w-full text-white shadow-md fixed top-0 left-0 right-0 z-50 transition-transform duration-300 bg-[rgba(0,0,0,0.7)] ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/resources/TP_logo_BG.png" alt="Logo" className="h-12 w-auto mr-2" />
            <span className="text-xl font-bold">THE PRODUCTION</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 px-10">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-red-500 transition duration-300 ${isActive ? 'text-green-500' : 'text-white'}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-red-500 transition duration-300 ${isActive ? 'text-green-500' : 'text-white'}`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-red-500 transition duration-300 ${isActive ? 'text-green-500' : 'text-white'}`
              }
            >
              About
            </NavLink>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              className="mobile-menu-button p-2 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className="mobile-menu md:hidden overflow-hidden"
          style={{ height: 0, opacity: 0 }}
        >
          <div className="flex flex-col space-y-4 py-4">
            {['Home', 'Contact', 'About'].map((item, index) => (
              <NavLink
                key={index}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}

                className={({ isActive }) =>
                  `block px-4 py-2 hover:bg-gray-800 rounded transition duration-300 ${isActive ? 'text-green-500' : 'text-white'}`
                }
                ref={el => menuItemsRef.current[index] = el}
              >
                {item}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbaar