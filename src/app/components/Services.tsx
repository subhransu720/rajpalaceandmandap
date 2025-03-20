'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaHeart, FaBriefcase, FaBirthdayCake, FaUsers, FaRegCalendarAlt, FaFemale, FaStar, FaCheck } from 'react-icons/fa';
import Link from 'next/link';

// Define service type
interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  color: string;
}

// Define star type
interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Wedding Ceremonies',
    description: 'Make your special day truly memorable with our elegant wedding venues and comprehensive services.',
    icon: <FaHeart className="text-4xl text-white" />,
    image: '/images/wedding_stage.jpg',
    color: 'from-[#8a2be2] to-[#9932cc]'
  },
  {
    id: 2,
    title: 'Corporate Events',
    description: 'Professional spaces for conferences, meetings, and corporate gatherings with modern amenities.',
    icon: <FaBriefcase className="text-4xl text-white" />,
    image: '/images/Corporate2.png',
    color: 'from-[#9932cc] to-[#800080]'
  },
  {
    id: 3,
    title: 'Birthday Parties',
    description: 'Celebrate your birthday in style with our customizable party packages and decorations.',
    icon: <FaBirthdayCake className="text-4xl text-white" />,
    image: '/images/birthday.png',
    color: 'from-[#800080] to-[#9370db]'
  },
  {
    id: 4,
    title: 'Private Parties',
    description: 'Host your private gatherings in our luxurious spaces with personalized service and catering.',
    icon: <FaUsers className="text-4xl text-white" />,
    image: '/images/privateParty.png',
    color: 'from-[#9370db] to-[#8a2be2]'
  },
  {
    id: 5,
    title: 'Thread Ceremonies',
    description: 'Traditional venues for thread ceremonies with all the necessary arrangements and catering.',
    icon: <FaRegCalendarAlt className="text-4xl text-white" />,
    image: '/images/stage1.jpeg',
    color: 'from-[#4b0082] to-[#8a2be2]'
  },
  {
    id: 6,
    title: 'Kitty Parties',
    description: 'Elegant spaces for kitty parties with customized menus and entertainment options.',
    icon: <FaFemale className="text-4xl text-white" />,
    image: '/images/kitty.png',
    color: 'from-[#8a2be2] to-[#4b0082]'
  }
];

const Services = () => {
  const [activeServiceId, setActiveServiceId] = useState(1);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  // Floating stars state
  const [stars, setStars] = useState<Star[]>([]);
  
  // Generate stars on component mount
  useEffect(() => {
    const newStars = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: Math.floor(Math.random() * 100),
      y: Math.floor(Math.random() * 100),
      size: Math.floor(Math.random() * 6) + 2,
      delay: Math.random() * 3
    }));
    setStars(newStars);
  }, []);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  
  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };
  
  // Find the active service object
  const activeService = services.find(service => service.id === activeServiceId) || services[0];

  return (
    <section className="section-padding bg-[#f8f5ff] relative overflow-hidden" id="services" ref={containerRef}>
      {/* Animated stars background */}
      {stars.map(star => (
        <motion.div
          key={star.id}
          className="absolute text-purple-300 opacity-30"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            fontSize: `${star.size * 8}px`
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 10 + star.id,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut"
          }}
        >
          <FaStar />
        </motion.div>
      ))}
      
      {/* Decorative circles */}
      <motion.div 
        className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="heading-secondary text-[#4b0082] mb-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Our Services
          </motion.h2>
          <motion.h3 
            className="heading-tertiary bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text mb-6"
            whileHover={{ scale: 1.02 }}
          >
            Exceptional Venues for Every Occasion
          </motion.h3>
          <motion.p 
            className="text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            From elegant weddings to corporate events, we offer a range of services tailored to make your special occasions truly memorable. Our dedicated team ensures every detail is perfect.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Service Navigation */}
          <motion.div 
            className="lg:col-span-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`mb-4 cursor-pointer transition-all duration-300 transform ${
                  activeServiceId === service.id 
                    ? `bg-gradient-to-r ${service.color} rounded-lg shadow-lg scale-105` 
                    : 'bg-white/80 hover:bg-white rounded-lg shadow-md'
                }`}
                onClick={() => setActiveServiceId(service.id)}
                whileHover={{ 
                  scale: activeServiceId === service.id ? 1.05 : 1.02,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-4 flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                    activeServiceId === service.id 
                      ? 'bg-white/20' 
                      : `bg-gradient-to-r ${service.color}`
                  }`}>
                    {service.icon}
                  </div>
                  <div>
                    <h4 className={`font-semibold ${
                      activeServiceId === service.id ? 'text-white' : 'text-[#4b0082]'
                    }`}>
                      {service.title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Service Details */}
          <motion.div 
            className="lg:col-span-2 bg-white rounded-xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{ y }}
          >
            <div className="relative h-[300px] md:h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute inset-0"
                >
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent`}></div>
                </motion.div>
              </AnimatePresence>
              
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{activeService.title}</h3>
                <p className="text-white/90">{activeService.description}</p>
              </motion.div>
            </div>
            
            <div className="p-6">
              <motion.h4 
                className="text-xl font-semibold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                What We Offer
              </motion.h4>
              
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-3"
              >
                {[
                  "Customizable packages",
                  "Professional event planning",
                  "Catering services",
                  "Decoration services",
                  "Audio-visual equipment",
                  "Ample parking space"
                ].map((feature, index) => (
                  <motion.li 
                    key={index}
                    variants={itemVariants}
                    className="flex items-center"
                  >
                    <span className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center mr-2">
                      <FaCheck className="text-white text-xs" />
                    </span>
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex justify-end items-center"
              >
                <Link href="/contact">
                  <motion.button 
                    className="btn-primary bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 0 15px rgba(138, 43, 226, 0.6)" 
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services; 