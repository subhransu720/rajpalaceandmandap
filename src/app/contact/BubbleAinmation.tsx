'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  opacity: number;
}

const BubbleAnimation = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [burstBubbles, setBurstBubbles] = useState<{id: number, x: number, y: number, size: number, color: string}[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isClient, setIsClient] = useState(false);
  const animationRef = useRef<number | null>(null);
  
  // Set isClient to true after component mounts to prevent hydration mismatch
  useEffect(() => {
    setIsClient(true);
    
    // Small delay to ensure the container is properly rendered
    const timer = setTimeout(() => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({
          width: rect.width,
          height: rect.height
        });
      }
    }, 100);
    
    // Handle window resize
    const handleResize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({
          width: rect.width,
          height: rect.height
        });
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  
  // Generate bubbles
  useEffect(() => {
    if (!isClient || dimensions.width === 0 || dimensions.height === 0) return;
    
    const generateBubbles = () => {
      const newBubbles: Bubble[] = [];
      const bubbleCount = Math.min(15, Math.floor(dimensions.width / 80)); // Fewer bubbles for better performance
      
      const bubbleColors = [
        'rgba(173, 216, 230, 0.8)', // Light blue
        'rgba(135, 206, 235, 0.8)', // Sky blue
        'rgba(0, 191, 255, 0.8)',   // Deep sky blue
        'rgba(30, 144, 255, 0.8)',  // Dodger blue
        'rgba(100, 149, 237, 0.8)'  // Cornflower blue
      ];
      
      for (let i = 0; i < bubbleCount; i++) {
        newBubbles.push({
          id: i,
          x: Math.random() * (dimensions.width - 80), // Ensure bubbles stay within container
          y: dimensions.height + Math.random() * 100, // Start below the container
          size: Math.random() * 60 + 40, // 40-100px for better visibility
          color: bubbleColors[Math.floor(Math.random() * bubbleColors.length)],
          speed: Math.random() * 1 + 0.5, // 0.5-1.5
          opacity: Math.random() * 0.4 + 0.5 // 0.5-0.9 for better visibility
        });
      }
      
      setBubbles(newBubbles);
    };
    
    generateBubbles();
    
    // Regenerate bubbles periodically
    const interval = setInterval(() => {
      generateBubbles();
    }, 20000); // Every 20 seconds
    
    return () => clearInterval(interval);
  }, [isClient, dimensions]);
  
  // Animate bubbles
  useEffect(() => {
    if (!isClient || bubbles.length === 0 || dimensions.width === 0 || dimensions.height === 0) return;
    
    let lastTime = 0;
    const fps = 60;
    const interval = 1000 / fps;
    
    const animate = (timestamp: number) => {
      if (timestamp - lastTime >= interval) {
        lastTime = timestamp;
        
        setBubbles(prevBubbles => 
          prevBubbles.map(bubble => {
            // Move bubble upward
            const newY = bubble.y - bubble.speed;
            
            // If bubble is out of view, reset its position
            if (newY < -bubble.size) {
              return {
                ...bubble,
                y: dimensions.height + bubble.size,
                x: Math.random() * (dimensions.width - bubble.size)
              };
            }
            
            // Add slight horizontal movement
            let newX = bubble.x + (Math.sin(timestamp * 0.001 + bubble.id) * 0.5);
            
            // Keep bubble within container bounds
            if (newX < 0) newX = 0;
            if (newX > dimensions.width - bubble.size) newX = dimensions.width - bubble.size;
            
            return {
              ...bubble,
              y: newY,
              x: newX
            };
          })
        );
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isClient, bubbles.length, dimensions]);
  
  // Handle bubble click (burst effect)
  const handleBubbleClick = (bubble: Bubble, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    
    // Play bubble pop sound
    try {
      const audio = new Audio('/sounds/bubble-pop.mp3');
      audio.volume = 0.3;
      audio.play().catch(err => console.log('Audio play failed:', err));
    } catch (error) {
      console.log('Audio error:', error);
    }
    
    // Remove the clicked bubble
    setBubbles(prevBubbles => prevBubbles.filter(b => b.id !== bubble.id));
    
    // Add to burst bubbles
    setBurstBubbles(prev => [...prev, {
      id: bubble.id,
      x: bubble.x,
      y: bubble.y,
      size: bubble.size,
      color: bubble.color
    }]);
    
    // Remove burst effect after animation completes
    setTimeout(() => {
      setBurstBubbles(prev => prev.filter(b => b.id !== bubble.id));
    }, 1000);
    
    // Add a new bubble to replace the popped one
    setTimeout(() => {
      if (dimensions.width > 0 && dimensions.height > 0) {
        const bubbleColors = [
          'rgba(173, 216, 230, 0.8)',
          'rgba(135, 206, 235, 0.8)',
          'rgba(0, 191, 255, 0.8)',
          'rgba(30, 144, 255, 0.8)',
          'rgba(100, 149, 237, 0.8)'
        ];
        
        setBubbles(prev => [...prev, {
          id: Date.now(), // Use timestamp for unique ID
          x: Math.random() * (dimensions.width - 80),
          y: dimensions.height + Math.random() * 50,
          size: Math.random() * 60 + 40,
          color: bubbleColors[Math.floor(Math.random() * bubbleColors.length)],
          speed: Math.random() * 1 + 0.5,
          opacity: Math.random() * 0.4 + 0.5
        }]);
      }
    }, 2000);
  };
  
  // Burst animation variants
  const burstVariants = {
    initial: { scale: 1, opacity: 1 },
    animate: { 
      scale: 0,
      opacity: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  const particleVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { 
      scale: 1,
      opacity: [0, 1, 0],
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  
  if (!isClient) return null;
  
  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      style={{ 
        background: 'linear-gradient(to bottom, rgba(240, 248, 255, 0.2), rgba(173, 216, 230, 0.3))',
      }}
    >
      {/* Water surface effect */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-70"></div>
      
      {/* Bubbles */}
      {bubbles.map(bubble => (
        <motion.div
          key={`bubble-${bubble.id}`}
          className="absolute rounded-full cursor-pointer pointer-events-auto"
          style={{
            left: bubble.x,
            top: bubble.y,
            width: bubble.size,
            height: bubble.size,
            background: `radial-gradient(circle at 30% 30%, white, ${bubble.color})`,
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.5) inset',
            opacity: bubble.opacity,
            zIndex: 10,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => handleBubbleClick(bubble, e)}
          whileHover={{ scale: 1.1, opacity: bubble.opacity + 0.2 }}
        >
          {/* Bubble shine effect */}
          <div 
            className="absolute rounded-full"
            style={{
              width: '30%',
              height: '30%',
              left: '20%',
              top: '20%',
              background: 'rgba(255, 255, 255, 0.8)',
              filter: 'blur(1px)'
            }}
          />
        </motion.div>
      ))}
      
      {/* Burst effects */}
      <AnimatePresence>
        {burstBubbles.map(bubble => (
          <motion.div
            key={`burst-${bubble.id}`}
            className="absolute"
            style={{
              left: bubble.x,
              top: bubble.y,
              width: bubble.size,
              height: bubble.size,
              zIndex: 20,
            }}
          >
            {/* Burst circle */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: '100%',
                height: '100%',
                background: bubble.color,
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.5) inset',
              }}
              variants={burstVariants}
              initial="initial"
              animate="animate"
            />
            
            {/* Burst particles */}
            {[...Array(8)].map((_, i) => {
              const angle = (i / 8) * Math.PI * 2;
              const distance = bubble.size * 0.8;
              
              return (
                <motion.div
                  key={`particle-${bubble.id}-${i}`}
                  className="absolute rounded-full"
                  style={{
                    width: bubble.size * 0.2,
                    height: bubble.size * 0.2,
                    background: bubble.color,
                    left: '50%',
                    top: '50%',
                    marginLeft: -bubble.size * 0.1,
                    marginTop: -bubble.size * 0.1,
                  }}
                  variants={particleVariants}
                  initial="initial"
                  animate={{
                    scale: 1,
                    x: Math.cos(angle) * distance,
                    y: Math.sin(angle) * distance,
                    opacity: [0, 1, 0],
                    transition: {
                      duration: 0.8,
                      ease: "easeOut"
                    }
                  }}
                />
              );
            })}
            
            {/* Water ripple effect */}
            <motion.div
              className="absolute rounded-full border-2 border-blue-200"
              style={{
                width: '100%',
                height: '100%',
                left: 0,
                top: 0,
              }}
              animate={{
                width: bubble.size * 3,
                height: bubble.size * 3,
                left: -bubble.size,
                top: -bubble.size,
                opacity: [0.7, 0],
              }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default BubbleAnimation; 