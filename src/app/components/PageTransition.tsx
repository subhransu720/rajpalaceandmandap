'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingAnimation from './LoadingAnimation';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  
  // Set isMounted to true after component mounts to prevent hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Handle initial page load only - optimized for faster loading
  useEffect(() => {
    if (!isMounted) return;
    
    // Check if this is the first load of the website
    let hasLoaded = false;
    
    try {
      hasLoaded = localStorage.getItem('hasLoaded') === 'true';
    } catch (error) {
      console.log('Storage not available');
    }
    
    if (!hasLoaded) {
      // First time loading the website - show loading animation
      // Use a shorter timeout for faster loading
      const timer = setTimeout(() => {
        setIsLoading(false);
        // Mark that the site has loaded once
        try {
          localStorage.setItem('hasLoaded', 'true');
        } catch (error) {
          console.log('Storage not available');
        }
      }, 2000); // Reduced to 2 seconds for faster experience
      
      return () => clearTimeout(timer);
    } else {
      // Site has been loaded before - skip animation
      setIsLoading(false);
    }
  }, [isMounted]);

  // Don't render anything during SSR to prevent hydration issues
  if (!isMounted) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }} // Faster transition
        >
          <LoadingAnimation />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }} // Faster transition
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition; 