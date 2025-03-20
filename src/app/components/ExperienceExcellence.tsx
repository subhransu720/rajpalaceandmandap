'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaStar, FaGem, FaAward, FaHeart, FaGlassCheers, FaHandshake } from 'react-icons/fa';

// Define experience type
interface Experience {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  shadowColor: string;
}

const ExperienceExcellence = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  // Define experiences with icons and descriptions
  const experiences: Experience[] = [
    {
      icon: <FaStar className="text-3xl" />,
      title: "Premium Service",
      description: "Personalized attention to every detail of your event",
      color: "from-amber-500 to-yellow-400",
      bgColor: "bg-gradient-to-br from-amber-50 to-yellow-50",
      shadowColor: "rgba(245, 158, 11, 0.4)"
    },
    {
      icon: <FaGem className="text-3xl" />,
      title: "Luxury Experience",
      description: "Elegant settings and sophisticated ambiance for your guests",
      color: "from-indigo-500 to-blue-400",
      bgColor: "bg-gradient-to-br from-indigo-50 to-blue-50",
      shadowColor: "rgba(99, 102, 241, 0.4)"
    },
    {
      icon: <FaAward className="text-3xl" />,
      title: "Award-Winning Venue",
      description: "Recognized for excellence in hospitality and event management",
      color: "from-purple-500 to-violet-400",
      bgColor: "bg-gradient-to-br from-purple-50 to-violet-50",
      shadowColor: "rgba(139, 92, 246, 0.4)"
    },
    {
      icon: <FaHeart className="text-3xl" />,
      title: "Memorable Moments",
      description: "Creating unforgettable experiences for you and your guests",
      color: "from-rose-500 to-pink-400",
      bgColor: "bg-gradient-to-br from-rose-50 to-pink-50",
      shadowColor: "rgba(244, 63, 94, 0.4)"
    },
    {
      icon: <FaGlassCheers className="text-3xl" />,
      title: "Celebration Expertise",
      description: "Specialists in making every celebration truly special",
      color: "from-teal-500 to-emerald-400",
      bgColor: "bg-gradient-to-br from-teal-50 to-emerald-50",
      shadowColor: "rgba(20, 184, 166, 0.4)"
    },
    {
      icon: <FaHandshake className="text-3xl" />,
      title: "Dedicated Team",
      description: "Professional staff committed to exceeding your expectations",
      color: "from-orange-500 to-red-400",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
      shadowColor: "rgba(249, 115, 22, 0.4)"
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

  const experienceCardVariants = {
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
    <section className="py-20 bg-gradient-to-b from-white to-[#fff8f0] relative overflow-hidden" ref={containerRef}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gradient-to-r from-gold-300/20 to-amber-300/20 blur-3xl"
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
          className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-gradient-to-r from-indigo-300/20 to-purple-300/20 blur-3xl"
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-rose-300/10 to-pink-300/10 blur-3xl"
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
              <h2 className="heading-secondary text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mb-2">
                Experience Excellence
              </h2>
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full"
                initial={{ width: "0%", left: "50%" }}
                whileInView={{ width: "100%", left: "0%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
          
          <motion.h3 
            className="heading-tertiary text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-600 mb-6"
            whileHover={{ scale: 1.02 }}
          >
            Where Every Event Becomes Extraordinary
          </motion.h3>
          
          <motion.p 
            className="text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            At Raj Palace & Convention, we pride ourselves on delivering exceptional experiences that exceed expectations and create lasting memories.
          </motion.p>
        </motion.div>
        
        {/* Experience Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={experienceCardVariants}
              whileHover="hover"
              viewport={{ once: true }}
              className={`${experience.bgColor} rounded-xl overflow-hidden transform transition-all duration-300`}
              style={{ 
                y: index % 2 === 0 ? y : undefined,
                boxShadow: `0 10px 30px -5px ${experience.shadowColor}`
              }}
            >
              <div className={`h-3 bg-gradient-to-r ${experience.color}`}></div>
              <div className="p-8">
                <div className="flex items-start gap-5">
                  <motion.div 
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${experience.color} flex items-center justify-center text-white shadow-lg`}
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    {experience.icon}
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
                  
                  <div>
                    <motion.h3 
                      className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {experience.title}
                    </motion.h3>
                    <p className="text-gray-600">{experience.description}</p>
                  </div>
                </div>
                
                {/* Animated highlight */}
                <motion.div 
                  className={`w-full h-1 mt-6 bg-gradient-to-r ${experience.color} rounded-full opacity-50`}
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
                
                {/* Animated dots */}
                <div className="flex justify-end mt-4">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${experience.color} ml-1`}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.7, 0.3],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
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
            className="w-24 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 rounded-full"
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

export default ExperienceExcellence; 