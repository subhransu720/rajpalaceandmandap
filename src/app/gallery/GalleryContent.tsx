'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaTimes, FaArrowRight, FaArrowLeft, FaMapMarkerAlt, FaGem, FaUtensils, FaGlassCheers, FaCalendarAlt } from 'react-icons/fa';
import { MdOutline360 } from 'react-icons/md';
import { IoMdCompass } from 'react-icons/io';
import { BiMap } from 'react-icons/bi';
import { GiCrystalBall, GiPartyPopper } from 'react-icons/gi';
const galleryImages = [
  {
    id: 1,
    src: '/images/weddingBedi.png',
    category: 'Wedding',
    title: 'Elegant Wedding Setup',
  },
  {
    id: 2,
    src: '/images/Corporate2.png',
    category: 'Corporate',
    title: 'Business Conference',
  },
  {
    id: 3,
    src: '/images/birthday.png',
    category: 'Party',
    title: 'Birthday Celebration',
  },
  {
    id: 4,
    src: '/images/wedding_stage.jpg',
    category: 'Wedding',
    title: 'Wedding Reception',
  },
  {
    id: 5,
    src: '/images/IMG_0340.jpg',
    category: 'Outside View',
    title: 'Outside View',
  },
  {
    id: 6,
    src: '/images/Lawn.jpg',
    category: 'Lawn',
    title: 'Large Lawn Area',
  },
  {
    id: 7,
    src: '/images/IMG_0324.jpg',
    category: 'Venue',
    title: 'Second Hall',
  },
  {
    id: 8,
    src: '/images/Kitchen.jpg',
    category: 'Kitchen',
    title: 'Large Kitchen Area',
  },
  {
    id: 9,
    src: '/images/parking.jpg',
    category: 'Parking',
    title: 'Large Area Parking',
  },
  {
    id: 10,
    src: '/images/rooms.jpg',
    category: 'Room',
    title: 'Luxurious Room ',
  },
  {
    id: 11,
    src: '/images/IMG_0311.jpg',
    category: 'Venue',
    title: 'Main Hall',
  },
  {
    id: 12,
    src: '/images/stage2.jpeg',
    category: 'Venue',
    title: 'stage Decoration',
  },
  {
    id: 13,
    src: '/images/wedding_stage.jpg',
    category: 'Venue',
    title: 'Hall Decoration',
  },
  {
    id: 14,
    src: '/images/entrygate.jpeg',
    category: 'Venue',
    title: 'Entrance Decoration',
  },
  {
    id: 15,
    src: '/images/bedi2.jpg',
    category: 'Hall',
    title: 'bedi decoration',
  },
];

export default function GalleryContent() {
  const [selectedImage, setSelectedImage] = useState<null | typeof galleryImages[0]>(null);
  const [filter, setFilter] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const handleImageClick = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
    setCurrentIndex(filteredImages.findIndex(img => img.id === image.id));
  };

  const handleNext = () => {
    if (currentIndex < filteredImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedImage(filteredImages[currentIndex + 1]);
    } else {
      setCurrentIndex(0);
      setSelectedImage(filteredImages[0]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedImage(filteredImages[currentIndex - 1]);
    } else {
      setCurrentIndex(filteredImages.length - 1);
      setSelectedImage(filteredImages[filteredImages.length - 1]);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] w-full">
        <Image
          src="/images/IMG_0324.jpg"
          alt="Raj Palace Gallery"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#4b0082]/80 via-[#6a0dad]/70 to-[#8a2be2]/60 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <motion.h1 
              className="heading-primary mb-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{ 
                textShadow: "0 0 15px rgba(212, 175, 55, 0.7)",
                background: "linear-gradient(to right, #ffffff, #d4af37)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Our Gallery
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl mx-auto px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Browse through our collection of memorable events and beautiful venues
            </motion.p>
            <motion.div
              className="h-1 bg-gradient-to-r from-[#d4af37] to-[#f5e7a3] rounded-full mx-auto mt-4 w-0"
              initial={{ width: 0 }}
              animate={{ width: "180px" }}
              transition={{ delay: 0.5, duration: 1 }}
            />
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div 
              key={i}
              className="absolute rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ 
                duration: 2 + Math.random() * 3, 
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                background: i % 2 === 0 ? '#d4af37' : '#ffffff',
                boxShadow: i % 2 === 0 ? '0 0 10px #d4af37' : '0 0 10px #ffffff'
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Gallery Section */}
      <section className="section-padding bg-gradient-to-b from-[#0a0a1a] to-[#1a1a3a]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-secondary mb-2" style={{ 
                background: "linear-gradient(to right, #d4af37, #f5e7a3, #d4af37)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 10px rgba(212, 175, 55, 0.3)"
              }}>Photo Gallery</h2>
              <h3 className="heading-tertiary mb-6 text-white">Glimpses of Our Memorable Events</h3>
              <p className="max-w-3xl mx-auto text-gray-300 mb-8">
                Browse through our gallery to see the beautiful events we've hosted at Raj Palace & Convention.
                From weddings to corporate events, we create magical experiences for all occasions.
              </p>
              <motion.div
                className="h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent rounded-full mx-auto mt-6 mb-12 w-32"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "120px", opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              />

              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {['All', 'Wedding', 'Corporate', 'Party', 'Venue'].map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`px-6 py-2 rounded-full transition-all ${
                      filter === category
                        ? 'bg-gradient-to-r from-[#d4af37] to-[#f5e7a3] text-[#4b0082] font-bold shadow-lg shadow-[#d4af37]/30'
                        : 'bg-[#1a1a3a] border border-[#d4af37]/30 text-white hover:border-[#d4af37] shadow-md'
                    }`}
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 0 15px rgba(212, 175, 55, 0.3)" 
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Gallery Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <AnimatePresence>
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="relative group overflow-hidden rounded-lg shadow-xl h-[300px] cursor-pointer border border-[#d4af37]/10 hover:border-[#d4af37]/40"
                  onClick={() => handleImageClick(image)}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.4), 0 0 15px rgba(212, 175, 55, 0.3)"
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/90 via-[#4b0082]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h4 className="text-[#d4af37] text-xl font-bold">{image.title}</h4>
                    <p className="text-white">{image.category}</p>
                    <motion.button 
                      className="absolute top-4 right-4 bg-[#d4af37] text-[#0a0a1a] p-2 rounded-full border border-white/30"
                      whileHover={{ 
                        scale: 1.1, 
                        boxShadow: "0 0 15px rgba(212, 175, 55, 0.7)" 
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaSearch />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      
      {/* Virtual Tour Experience (Replacing Video Gallery) */}
      <section className="section-padding bg-gradient-to-b from-[#1a1a3a] to-[#0a0a1a]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-secondary mb-2" style={{ 
                background: "linear-gradient(to right, #d4af37, #f5e7a3, #d4af37)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 10px rgba(212, 175, 55, 0.3)"
              }}>Virtual Tour Experience</h2>
              <h3 className="heading-tertiary mb-6 text-white">Explore Our Venue From Anywhere</h3>
              <p className="max-w-3xl mx-auto text-gray-300">
                Take a virtual journey through our premium spaces and immersive environments.
                Experience the grandeur of Raj Palace & Convention before your visit.
              </p>
              <motion.div
                className="h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent rounded-full mx-auto mt-6 w-32"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "120px", opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              />
            </motion.div>
          </div>
          
          {/* Featured Spaces */}
          <div className="mb-16">
            <motion.h4 
              className="text-[#d4af37] text-xl font-medium mb-8 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Featured Spaces
            </motion.h4>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div 
                className="relative h-[400px] rounded-xl overflow-hidden group cursor-pointer"
                variants={item}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.4), 0 0 15px rgba(212, 175, 55, 0.3)"
                }}
              >
                <Image
                  src="/images/IMG_0311.jpg"
                  alt="Grand Ballroom"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/90 via-[#4b0082]/60 to-transparent flex flex-col justify-end p-6">
                  <MdOutline360 className="text-4xl text-[#d4af37] mb-2" />
                  <h5 className="text-2xl font-bold text-white mb-1">Grand Ballroom</h5>
                  <p className="text-gray-300 mb-4">Our largest event space with elegant design and state-of-the-art facilities</p>
                  <motion.button 
                    className="px-4 py-2 rounded-full bg-[#d4af37] text-[#0a0a1a] font-semibold inline-flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <BiMap />
                    <span>Explore Now</span>
                  </motion.button>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative h-[400px] rounded-xl overflow-hidden group cursor-pointer"
                variants={item}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.4), 0 0 15px rgba(212, 175, 55, 0.3)"
                }}
              >
                <Image
                  src="/images/IMG_0334.jpg"
                  alt="Luxury Suites"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/90 via-[#4b0082]/60 to-transparent flex flex-col justify-end p-6">
                  <MdOutline360 className="text-4xl text-[#d4af37] mb-2" />
                  <h5 className="text-2xl font-bold text-white mb-1">Luxury Suites</h5>
                  <p className="text-gray-300 mb-4">Elegant accommodations for guests with premium amenities and comfort</p>
                  <motion.button 
                    className="px-4 py-2 rounded-full bg-[#d4af37] text-[#0a0a1a] font-semibold inline-flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <BiMap />
                    <span>Explore Now</span>
                  </motion.button>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative h-[400px] rounded-xl overflow-hidden group cursor-pointer"
                variants={item}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.4), 0 0 15px rgba(212, 175, 55, 0.3)"
                }}
              >
                <Image
                  src="/images/IMG_0324.jpg"
                  alt="Outdoor Gardens"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/90 via-[#4b0082]/60 to-transparent flex flex-col justify-end p-6">
                  <MdOutline360 className="text-4xl text-[#d4af37] mb-2" />
                  <h5 className="text-2xl font-bold text-white mb-1">Celebration Hall</h5>
                  <p className="text-gray-300 mb-4">Perfect for medium-sized gatherings with beautiful decorative elements</p>
                  <motion.button 
                    className="px-4 py-2 rounded-full bg-[#d4af37] text-[#0a0a1a] font-semibold inline-flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <BiMap />
                    <span>Explore Now</span>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Event Inspiration */}
          <div>
            <motion.h4 
              className="text-[#d4af37] text-xl font-medium mb-8 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Event Inspiration
            </motion.h4>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {[
                { 
                  icon: <GiPartyPopper className="text-3xl" />, 
                  title: "Wedding Reception", 
                  desc: "Create unforgettable memories in our elegant ballroom."
                },
                { 
                  icon: <FaCalendarAlt className="text-3xl" />, 
                  title: "Corporate Events", 
                  desc: "Professional settings for meetings and conferences."
                },
                { 
                  icon: <FaGlassCheers className="text-3xl" />, 
                  title: "Gala Dinners", 
                  desc: "Luxurious dining experiences for special occasions."
                },
                { 
                  icon: <GiCrystalBall className="text-3xl" />, 
                  title: "Cultural Events", 
                  desc: "Spaces designed to celebrate diverse traditions."
                }
              ].map((eventItem, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gradient-to-br from-[#1a1a3a] to-[#2a2a4a] rounded-lg p-6 border border-[#d4af37]/20 text-center hover:border-[#d4af37]/50 transition-all"
                  variants={item}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.4), 0 0 15px rgba(212, 175, 55, 0.3)"
                  }}
                >
                  <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 flex items-center justify-center mx-auto mb-4 text-[#d4af37]">
                    {eventItem.icon}
                  </div>
                  <h5 className="text-xl font-bold mb-2 text-white">{eventItem.title}</h5>
                  <p className="text-gray-300 mb-4">{eventItem.desc}</p>
                  <motion.button 
                    className="text-[#d4af37] inline-flex items-center gap-1 hover:gap-3 transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span>See Examples</span>
                    <FaArrowRight />
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#4b0082] to-[#8a2be2] text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          {[...Array(30)].map((_, i) => (
            <motion.div 
              key={i}
              className="absolute rounded-full"
              animate={{ 
                y: [Math.random() * 100, Math.random() * -100],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{ 
                duration: 5 + Math.random() * 10, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                background: '#d4af37',
                boxShadow: '0 0 10px #d4af37'
              }}
            />
          ))}
        </div>
        <div className="container-custom relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-secondary mb-4" style={{ 
              background: "linear-gradient(to right, #ffffff, #d4af37)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 15px rgba(212, 175, 55, 0.3)"
            }}>Want to Host Your Event at Raj Palace?</h2>
            <p className="max-w-3xl mx-auto mb-8 text-white/90">
              Contact us today to book your event and create your own beautiful memories at Raj Palace & Convention.
            </p>
            <motion.button 
              className="px-8 py-4 rounded-full bg-[#d4af37] text-[#4b0082] font-bold text-lg shadow-lg shadow-[#d4af37]/30 relative overflow-hidden group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px rgba(212, 175, 55, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Contact Us Now</span>
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-[#f5e7a3] to-[#d4af37] opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="relative max-w-4xl w-full h-[80vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
              <motion.button
                className="absolute top-4 right-4 bg-[#d4af37] text-[#0a0a1a] p-3 rounded-full border border-white/30"
                onClick={() => setSelectedImage(null)}
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: "0 0 15px rgba(212, 175, 55, 0.7)" 
                }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes />
              </motion.button>
              
              <motion.button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#d4af37] text-[#0a0a1a] p-3 rounded-full border border-white/30"
                onClick={handlePrev}
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: "0 0 15px rgba(212, 175, 55, 0.7)" 
                }}
                whileTap={{ scale: 0.9 }}
              >
                <FaArrowLeft />
              </motion.button>
              
              <motion.button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#d4af37] text-[#0a0a1a] p-3 rounded-full border border-white/30"
                onClick={handleNext}
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: "0 0 15px rgba(212, 175, 55, 0.7)" 
                }}
                whileTap={{ scale: 0.9 }}
              >
                <FaArrowRight />
              </motion.button>
              
              <motion.div 
                className="absolute bottom-4 left-0 right-0 text-center bg-[#0a0a1a]/70 backdrop-blur-sm py-4 px-6 rounded-lg mx-4 border border-[#d4af37]/30"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="text-[#d4af37] text-xl font-bold">{selectedImage.title}</h4>
                <p className="text-white">{selectedImage.category}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <Footer />
    </main>
  );
} 