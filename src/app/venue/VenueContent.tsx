'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaBuilding, FaTree, FaBed, FaParking, FaUtensils, FaWifi, FaAirFreshener, FaChair } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Define facility type
interface Facility {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  features: string[];
  capacity?: string;
}

const facilities: Facility[] = [
  {
    id: 1,
    name: 'Main Hall',
    description: 'Our spacious main hall is perfect for grand weddings, corporate events, and large gatherings.',
    icon: <FaBuilding className="text-white text-2xl" />,
    image: '/images/stage1.jpeg',
    features: ['Air-conditioned', 'Stage with lighting', 'Sound system', 'Seating for 500+', 'Customizable decor'],
    capacity: 'Up to 1500 guests'
  },
  {
    id: 2,
    name: 'Garden Lawn',
    description: 'Our beautiful garden lawn offers an open-air venue for outdoor events and ceremonies.',
    icon: <FaTree className="text-white text-2xl" />,
    image: '/images/Lawn.jpg',
    features: ['Landscaped gardens', 'Outdoor lighting', 'Tent options', 'Natural setting', 'Perfect for photography'],
    capacity: 'Up to 1000 guests'
  },
  {
    id: 3,
    name: 'Guest Rooms',
    description: 'Comfortable accommodation for out-of-town guests with modern amenities and services.',
    icon: <FaBed className="text-white text-2xl" />,
    image: '/images/Rooms.jpg',
    features: ['Air-conditioned rooms', 'En-suite bathrooms', 'TV and Wi-Fi', '24-hour service', 'Complimentary breakfast'],
    capacity: '2 rooms available'
  },
  {
    id: 4,
    name: 'Parking Area',
    description: 'Ample parking space for all your guests with security and easy access to the venue.',
    icon: <FaParking className="text-white text-2xl" />,
    image: '/images/Parking.jpg',
    features: ['Secure parking', 'Valet service available', 'Well-lit area', 'CCTV surveillance', 'Easy access'],
    capacity: 'Up to 500 vehicles'
  },
  {
    id: 5,
    name: 'Kitchen Services',
    capacity: 'Large area kitchen',
    description: 'Exquisite catering services with a variety of cuisines and customizable menus.',
    icon: <FaUtensils className="text-white text-2xl" />,
    image: '/images/Kitchen.jpg',
    features: ['Multiple cuisine options', 'Customizable menus', 'Professional chefs', 'Quality ingredients', 'Special dietary accommodations'],
  }
];

// Define amenity type
interface Amenity {
  icon: React.ReactNode;
  name: string;
}

const amenities: Amenity[] = [
  { icon: <FaWifi />, name: 'Free Wi-Fi' },
  { icon: <FaAirFreshener />, name: 'Air Conditioning' },
  { icon: <FaParking />, name: 'Ample Parking' },
  { icon: <FaUtensils />, name: 'Catering' },
  { icon: <FaChair />, name: 'Furniture' },
  { icon: <FaBed />, name: 'Accommodation' }
];

const VenueContent = () => {
  const [activeFacility, setActiveFacility] = useState<Facility>(facilities[0]);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0]);
  
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
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/IMG_0307.jpg"
          alt="Raj Palace Venue"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Venue
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore our luxurious facilities designed for your perfect event
          </motion.p>
        </div>
      </section>
      
      {/* Facilities Section */}
      <section className="py-16 bg-[#f8f5ff]" ref={containerRef}>
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
              Our Facilities
            </motion.h2>
            <motion.h3 
              className="heading-tertiary bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text mb-6"
              whileHover={{ scale: 1.02 }}
            >
              Everything You Need for a Perfect Event
            </motion.h3>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Facility Navigation */}
            <motion.div 
              className="lg:col-span-1"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {facilities.map((facility) => (
                <motion.div
                  key={facility.id}
                  variants={itemVariants}
                  className={`mb-4 cursor-pointer transition-all duration-300 transform ${
                    activeFacility.id === facility.id 
                      ? `bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg shadow-lg scale-105` 
                      : 'bg-white/80 hover:bg-white rounded-lg shadow-md'
                  }`}
                  onClick={() => setActiveFacility(facility)}
                  whileHover={{ 
                    scale: activeFacility.id === facility.id ? 1.05 : 1.02,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="p-4 flex items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                      activeFacility.id === facility.id 
                        ? 'bg-white/20' 
                        : 'bg-gradient-to-r from-purple-600 to-indigo-600'
                    }`}>
                      {facility.icon}
                    </div>
                    <div>
                      <h4 className={`font-semibold ${
                        activeFacility.id === facility.id ? 'text-white' : 'text-[#4b0082]'
                      }`}>
                        {facility.name}
                      </h4>
                      {facility.capacity && (
                        <p className={`text-sm ${
                          activeFacility.id === facility.id ? 'text-white/80' : 'text-purple-800/80'
                        }`}>
                          {facility.capacity}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Facility Details */}
            <motion.div 
              className="lg:col-span-2 bg-white rounded-xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              style={{ y }}
            >
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src={activeFacility.image}
                  alt={activeFacility.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-6 text-white"
                  key={activeFacility.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{activeFacility.name}</h3>
                  <p className="text-white/90">{activeFacility.description}</p>
                </motion.div>
              </div>
              
              <div className="p-6">
                <motion.h4 
                  className="text-xl font-semibold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text"
                  key={`${activeFacility.id}-title`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Features & Amenities
                </motion.h4>
                
                <motion.ul
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-3"
                  key={`${activeFacility.id}-features`}
                >
                  {activeFacility.features.map((feature, index) => (
                    <motion.li 
                      key={index}
                      variants={itemVariants}
                      className="flex items-center"
                    >
                      <span className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center mr-2">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-6"
                >
                  <a href="/contact" className="inline-block">
                    <motion.button 
                      className="btn-primary bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                      whileHover={{ 
                        scale: 1.05, 
                        boxShadow: "0 0 15px rgba(138, 43, 226, 0.6)" 
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Book This Facility
                    </motion.button>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Amenities Section */}
      <section className="py-16 bg-white">
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
              Venue Amenities
            </motion.h2>
            <motion.h3 
              className="heading-tertiary bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text mb-6"
              whileHover={{ scale: 1.02 }}
            >
              Comprehensive Services for Your Convenience
            </motion.h3>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#f8f5ff] rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl mb-4">
                  {amenity.icon}
                </div>
                <h4 className="font-semibold text-[#4b0082]">{amenity.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Virtual Tour Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Take a Virtual Tour
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Explore our venue from the comfort of your home
            </motion.p>
          </div>
          
          <motion.div
            className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="mb-6">Our virtual tour feature is coming soon. Contact us to schedule an in-person visit!</p>
            <a href="/contact" className="inline-block">
              <motion.button 
                className="bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 15px rgba(255, 255, 255, 0.6)" 
                }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule a Visit
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default VenueContent; 