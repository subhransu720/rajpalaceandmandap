'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = ['Home', 'About', 'Services', 'Venue', 'Gallery', 'FAQ', 'Contact'];

  const navAnimation = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="show"
      variants={navAnimation}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <motion.div variants={itemAnimation}>
          <Link href="/" className="flex items-center">
            <div className="w-16 h-16 mr-3 relative">
              <Image 
                src="/images/image.png" 
                alt="Raj Palace Logo" 
                width={84} 
                height={84} 
                className="object-contain"
              />
            </div>
            <span className={`text-2xl md:text-3xl font-bold ${scrolled ? 'text-[#4b0082]' : 'text-white'}`}>
              Raj Palace
            </span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item, index) => (
            <motion.div key={item} variants={itemAnimation}>
              <Link 
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                className={`font-medium relative group ${
                  scrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8a2be2] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
          
          {/* Book Now Button */}
          <motion.div variants={itemAnimation}>
            <Link 
              href="/contact" 
              className="px-4 py-2 bg-[#8a2be2] text-white rounded-md hover:bg-[#7722cc] transition-colors"
            >
              Book Now
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button 
          variants={itemAnimation}
          className={`md:hidden text-2xl focus:outline-none ${
            scrolled ? 'text-[#4b0082]' : 'text-white'
          }`}
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[#4b0082]/95 z-50 flex flex-col justify-center items-center transition-all duration-300 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <button 
          className="absolute top-6 right-6 text-white text-3xl"
          onClick={toggleMenu}
        >
          <FaTimes />
        </button>
        
        <div className="flex flex-col space-y-6 items-center">
          {navItems.map((item, index) => (
            <Link 
              key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
              className="text-white text-2xl font-medium hover:text-[#e6e6fa] transition-colors"
              onClick={toggleMenu}
            >
              {item}
            </Link>
          ))}
          
          {/* Book Now Button */}
          <Link 
            href="/contact" 
            className="px-6 py-2 bg-white text-[#4b0082] rounded-md font-bold hover:bg-[#e6e6fa] transition-colors"
            onClick={toggleMenu}
          >
            Book Now
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 