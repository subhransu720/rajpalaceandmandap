'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { FaCheck, FaStar, FaGem, FaUsers, FaUtensils, FaWifi, FaQuoteLeft } from 'react-icons/fa';

// Define particle type
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0]);
  
  // Floating particles state with proper typing
  const [particles, setParticles] = useState<Particle[]>([]);
  
  // Generate particles on component mount
  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.floor(Math.random() * 100),
      y: Math.floor(Math.random() * 100),
      size: Math.floor(Math.random() * 8) + 2,
      duration: Math.floor(Math.random() * 20) + 10,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  // Define luxury features with icons and descriptions
  const luxuryFeatures = [
    {
      icon: <FaGem className="text-white text-xl" />,
      title: "Luxurious Venues",
      description: "Elegant spaces designed for memorable events",
      color: "from-purple-600 to-indigo-600"
    },
    {
      icon: <FaUsers className="text-white text-xl" />,
      title: "Professional Staff",
      description: "Dedicated team to ensure flawless execution",
      color: "from-indigo-600 to-blue-600"
    },
    {
      icon: <FaUtensils className="text-white text-xl" />,
      title: "Exquisite Catering",
      description: "Delectable cuisine to delight your guests",
      color: "from-blue-600 to-purple-600"
    },
    {
      icon: <FaWifi className="text-white text-xl" />,
      title: "Modern Amenities",
      description: "State-of-the-art facilities for your convenience",
      color: "from-purple-500 to-pink-500"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="section-padding bg-[#e6e6fa] relative overflow-hidden" id="about" ref={containerRef}>
      {/* Animated background particles */}
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-purple-500/10"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, particle.id % 2 === 0 ? 20 : -20, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image with parallax effect */}
          <motion.div 
            className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ y }}
          >
            <Image
              src="/images/stage1.jpeg"
              alt="Raj Palace Interior"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#4b0082]/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 bg-purple-gradient text-white py-3 px-6 font-medium">
              Established in 2022
            </div>
            
            {/* Floating Elements with enhanced animations */}
            <motion.div 
              className="absolute top-10 right-10 bg-white/20 backdrop-blur-sm p-3 rounded-full"
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.2, rotate: 15 }}
            >
              <FaStar className="text-yellow-400 text-xl" />
            </motion.div>
            
            <motion.div 
              className="absolute bottom-20 right-10 bg-white/20 backdrop-blur-sm p-4 rounded-full"
              initial={{ scale: 0, rotate: 45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.7, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.2, rotate: -15 }}
            >
              <FaStar className="text-yellow-400 text-xl" />
            </motion.div>
            
            {/* New decorative element */}
            <motion.div
              className="absolute top-1/2 left-10 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm p-5 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(138, 43, 226, 0.6)" }}
            >
              <FaQuoteLeft className="text-white/80 text-2xl" />
            </motion.div>
          </motion.div>

          {/* Content with enhanced animations */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <motion.h2 
                className="heading-secondary text-[#4b0082] mb-2"
                whileHover={{ scale: 1.05, x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                About Us
              </motion.h2>
              <motion.h3 
                className="heading-tertiary bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text mb-6"
                whileHover={{ scale: 1.02 }}
              >
                The Premier Destination for Memorable Events
              </motion.h3>
            </motion.div>
            
            <motion.p 
              className="mb-4 text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Raj Palace & Convention is a premier venue for all your special occasions. Located in the heart of the city, we offer elegant spaces, exceptional service, and a team dedicated to making your event unforgettable.
            </motion.p>
            
            <motion.p 
              className="mb-6 text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              From weddings and corporate events to private parties and celebrations, our versatile venues can accommodate gatherings of all sizes. Our attention to detail and commitment to excellence ensure that every event exceeds expectations.
            </motion.p>
            
            {/* Feature cards with enhanced animations */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {luxuryFeatures.map((feature, index) => (
                <motion.div 
                  key={index}
                  className={`bg-gradient-to-r ${feature.color} p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-1">{feature.title}</h4>
                      <p className="text-white/80 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/contact">
                <motion.button 
                  className="btn-primary bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(138, 43, 226, 0.6)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Us
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default About; 