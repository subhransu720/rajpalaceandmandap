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
  const [audioEnabled, setAudioEnabled] = useState(false);
  const animationRef = useRef<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
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
        
        // Generate bubbles after dimensions are set
        generateBubbles(rect.width, rect.height);
      }
    }, 300);
    
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
    
    // Enable audio after user interaction
    const enableAudio = () => {
      setAudioEnabled(true);
      document.removeEventListener('click', enableAudio);
      document.removeEventListener('touchstart', enableAudio);
    };
    
    document.addEventListener('click', enableAudio);
    document.addEventListener('touchstart', enableAudio);
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', enableAudio);
      document.removeEventListener('touchstart', enableAudio);
      clearTimeout(timer);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  
  // Generate bubbles function
  const generateBubbles = (width: number, height: number) => {
    if (width === 0 || height === 0) return;
    
    const newBubbles: Bubble[] = [];
    const bubbleCount = Math.min(20, Math.floor(width / 60)); // More bubbles for better visual effect
    
    // Deeper, more vibrant bubble colors
    const bubbleColors = [
      'rgba(71, 0, 98, 0.85)',   // Deep purple
      'rgba(139, 0, 0, 0.85)',   // Deep maroon
      'rgba(212, 175, 55, 0.85)', // Gold
      'rgba(0, 105, 148, 0.85)',  // Deep blue
      'rgba(0, 150, 199, 0.85)',  // Medium blue
    ];
    
    for (let i = 0; i < bubbleCount; i++) {
      newBubbles.push({
        id: i,
        x: Math.random() * (width - 80), // Ensure bubbles stay within container
        y: height + Math.random() * 100, // Start below the container
        size: Math.random() * 60 + 40, // 40-100px for better visibility
        color: bubbleColors[Math.floor(Math.random() * bubbleColors.length)],
        speed: Math.random() * 1 + 0.5, // 0.5-1.5
        opacity: Math.random() * 0.3 + 0.7 // 0.7-1.0 for better visibility
      });
    }
    
    setBubbles(newBubbles);
  };
  
  // Generate bubbles periodically
  useEffect(() => {
    if (!isClient || dimensions.width === 0 || dimensions.height === 0) return;
    
    // Initial generation
    generateBubbles(dimensions.width, dimensions.height);
    
    // Regenerate bubbles periodically
    const interval = setInterval(() => {
      generateBubbles(dimensions.width, dimensions.height);
    }, 15000); // Every 15 seconds
    
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
  
  // Initialize audio
  useEffect(() => {
    if (!isClient || !audioEnabled) return;
    
    // Pre-load the audio
    if (audioRef.current) {
      // Create a silent play attempt to handle autoplay restrictions
      const silentPlay = audioRef.current.play();
      
      if (silentPlay !== undefined) {
        silentPlay
          .then(() => {
            // Successfully pre-loaded
            audioRef.current?.pause();
            audioRef.current!.currentTime = 0;
          })
          .catch(error => {
            // Auto-play was prevented, which is expected
            console.log("Audio will play on user interaction");
          });
      }
    }
  }, [isClient, audioEnabled]);
  
  // Play bubble pop sound
  const playPopSound = () => {
    if (audioRef.current && audioEnabled) {
      try {
        // Reset the audio to the beginning if it's already playing
        audioRef.current.currentTime = 0;
        
        // Create a user interaction promise to handle autoplay restrictions
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Playback started successfully
              console.log("Sound played successfully");
            })
            .catch(error => {
              // Auto-play was prevented
              console.error("Error playing sound:", error);
            });
        }
      } catch (error) {
        console.error("Error playing sound:", error);
      }
    } else {
      console.warn("Audio not enabled or element not found");
    }
  };
  
  // Handle bubble click (burst effect)
  const handleBubbleClick = (bubble: Bubble, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    
    // Play pop sound
    playPopSound();
    
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
          'rgba(71, 0, 98, 0.85)',   // Deep purple
          'rgba(139, 0, 0, 0.85)',   // Deep maroon
          'rgba(212, 175, 55, 0.85)', // Gold
          'rgba(0, 105, 148, 0.85)',  // Deep blue
          'rgba(0, 150, 199, 0.85)',  // Medium blue
        ];
        
        setBubbles(prev => [...prev, {
          id: Date.now(), // Use timestamp for unique ID
          x: Math.random() * (dimensions.width - 80),
          y: dimensions.height + Math.random() * 50,
          size: Math.random() * 60 + 40,
          color: bubbleColors[Math.floor(Math.random() * bubbleColors.length)],
          speed: Math.random() * 1 + 0.5,
          opacity: Math.random() * 0.3 + 0.7
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
        background: 'transparent',
      }}
    >
      {/* Audio element for bubble pop sound */}
      <audio 
        ref={audioRef} 
        src="/sounds/bubble-pop.mp3" 
        preload="auto"
      />
      
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
            zIndex: 5,
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
              zIndex: 6,
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
              className="absolute rounded-full border-2 border-blue-300"
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