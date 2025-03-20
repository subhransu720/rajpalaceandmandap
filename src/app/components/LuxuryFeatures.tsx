'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGem, FaUsers, FaUtensils, FaWifi } from 'react-icons/fa';

// Define feature type
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  shadowColor: string;
}

const LuxuryFeatures = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  // Define features with icons, descriptions and colors
  const features: Feature[] = [
    {
      icon: <FaGem className="text-3xl" />,
      title: "Luxurious Venues",
      description: "Elegant spaces designed for memorable events",
      color: "from-purple-500 to-indigo-400",
      bgColor: "bg-gradient-to-br from-purple-50 to-indigo-50",
      shadowColor: "rgba(139, 92, 246, 0.4)"
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Professional Staff",
      description: "Dedicated team to ensure flawless execution",
      color: "from-blue-500 to-cyan-400",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      shadowColor: "rgba(59, 130, 246, 0.4)"
    },
    {
      icon: <FaUtensils className="text-3xl" />,
      title: "Exquisite Catering",
      description: "Delectable cuisine to delight your guests",
      color: "from-rose-500 to-pink-400",
      bgColor: "bg-gradient-to-br from-rose-50 to-pink-50",
      shadowColor: "rgba(244, 63, 94, 0.4)"
    },
    {
      icon: <FaWifi className="text-3xl" />,
      title: "Modern Amenities",
      description: "State-of-the-art facilities for your convenience",
      color: "from-amber-500 to-yellow-400",
      bgColor: "bg-gradient-to-br from-amber-50 to-yellow-50",
      shadowColor: "rgba(245, 158, 11, 0.4)"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const featureCardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2 + (i * 0.1),
        duration: 0.6,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -15,
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -30 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 0.1
      } 
    },
    hover: { 
      scale: 1.2,
      rotate: 5,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      } 
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f8f5ff] relative overflow-hidden" ref={containerRef}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gradient-to-r from-purple-300/20 to-indigo-300/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-gradient-to-r from-pink-300/20 to-rose-300/20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-amber-300/10 to-yellow-300/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative">
              <h2 className="heading-secondary text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-2">
                Experience Excellence
              </h2>
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"
                initial={{ width: "0%", left: "50%" }}
                whileInView={{ width: "100%", left: "0%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
          
          <motion.h3 
            className="heading-tertiary text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-600 mb-6"
            whileHover={{ scale: 1.02 }}
          >
            Where Luxury Meets Functionality
          </motion.h3>
          
          <motion.p 
            className="text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our venue combines elegant aesthetics with modern amenities to create the perfect setting for your special events.
          </motion.p>
        </motion.div>
        
        {/* Feature Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={featureCardVariants}
              whileHover="hover"
              viewport={{ once: true }}
              className={`${feature.bgColor} rounded-xl overflow-hidden transform transition-all duration-300`}
              style={{ 
                y: index % 2 === 0 ? y : undefined,
                boxShadow: `0 10px 30px -5px ${feature.shadowColor}`
              }}
            >
              <div className={`h-3 bg-gradient-to-r ${feature.color}`}></div>
              <div className="p-6">
                <div className="flex flex-col items-center text-center">
                  <motion.div 
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-lg mb-4`}
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    {feature.icon}
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-white/30"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0, 0.3, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {feature.title}
                  </motion.h3>
                  <p className="text-gray-600">{feature.description}</p>
                  
                  {/* Animated highlight */}
                  <motion.div 
                    className={`w-full h-1 mt-4 bg-gradient-to-r ${feature.color} rounded-full opacity-50`}
                    animate={{
                      scaleX: [0, 1, 0],
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom decoration */}
        <motion.div 
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 rounded-full"
            animate={{
              width: ["6rem", "12rem", "6rem"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default LuxuryFeatures; 