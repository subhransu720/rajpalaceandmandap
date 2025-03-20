'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const LoadingAnimation = () => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing');
  
  // Simulate loading progress with optimized interval
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15 + 5; // Faster progress
        
        // Update loading text based on progress
        if (newProgress > 80 && prev <= 80) {
          setLoadingText('Almost ready');
        } else if (newProgress > 50 && prev <= 50) {
          setLoadingText('Loading assets');
        } else if (newProgress > 20 && prev <= 20) {
          setLoadingText('Preparing experience');
        }
        
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 150); // Faster interval
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 to-black flex items-center justify-center z-50">
      {/* Background animation - reduced complexity */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(147, 51, 234, 0.3) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Reduced number of particles for better performance */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              backgroundColor: `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, ${Math.random() * 255}, ${Math.random() * 0.5 + 0.3})`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -Math.random() * 80 - 40],
              opacity: [0, 1, 0],
              scale: [0, 1, 0.5]
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <div className="text-center z-10 px-4">
        {/* Welcome Text */}
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4"
          style={{ 
            background: "linear-gradient(to right, #ffffff, #e0aaff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to
        </motion.h1>
        
        {/* Logo Animation */}
        <motion.div 
          className="w-60 h-60 mx-auto mb-6 relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Image 
            src="/images/image.png" 
            alt="Raj Palace Logo" 
            width={240} 
            height={240} 
            className="object-contain"
          />
          
          {/* Simplified glow effect */}
          <motion.div 
            className="absolute inset-0 rounded-full"
            style={{ 
              background: 'radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.7) 0%, transparent 70%)',
              filter: 'blur(8px)'
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
        
        {/* Brand Name */}
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-2"
          style={{ 
            background: "linear-gradient(to right, #c77dff, #7b2cbf)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Raj Palace & Convention
        </motion.h2>
        
        {/* Tagline */}
        <motion.p
          className="text-white/80 mb-6 text-lg md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Where Luxury Meets Celebration
        </motion.p>
        
        {/* Loading Message */}
        <motion.p
          className="text-purple-200 mb-4 text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          {loadingText}...
        </motion.p>
        
        {/* Loading Progress Bar - simplified */}
        <div className="mt-2 w-64 md:w-80 h-2 bg-purple-900/50 rounded-full overflow-hidden mx-auto relative">
          <motion.div 
            className="h-full bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-full"
            style={{ width: `${Math.min(progress, 100)}%` }}
            initial={{ width: "0%" }}
          />
        </div>
        
        {/* Progress Percentage */}
        <motion.p
          className="text-purple-200 mt-2 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {Math.min(Math.round(progress), 100)}%
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingAnimation; 