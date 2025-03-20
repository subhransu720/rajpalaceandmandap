'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import BubbleAnimation from './BubbleAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Enable audio after user interaction
  useEffect(() => {
    const handleInteraction = () => {
      setHasInteracted(true);
      // Remove event listeners after first interaction
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        date: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="section-padding bg-[#f8f0e3] relative min-h-[90vh]" id="contact">
      {/* Bubble Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <BubbleAnimation />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-secondary text-[#8b0000] mb-2">Contact Us</h2>
            <h3 className="heading-tertiary mb-6 text-[#470062]">Get in Touch for Bookings & Inquiries</h3>
            <p className="max-w-3xl mx-auto text-gray-700">
              Reach out to us for booking inquiries, venue tours, or any questions about our services.
              Our team is ready to help you plan your perfect event at Raj Palace & Convention.
            </p>
            <motion.p 
              className="mt-4 text-blue-700 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
            
            </motion.p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg"
          >
            <h4 className="text-2xl font-bold mb-6 text-[#470062]">Send us a Message</h4>
            
            {submitSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                Thank you for your message! We will get back to you soon.
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  />
                </div>
                <div>
                  <label htmlFor="eventType" className="block text-gray-700 mb-2">
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  >
                    <option value="">Select Event Type</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Corporate">Corporate Event</option>
                    <option value="Birthday">Birthday Party</option>
                    <option value="Private">Private Party</option>
                    <option value="Thread">Thread Ceremony</option>
                    <option value="Kitty">Kitty Party</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="date" className="block text-gray-700 mb-2">
                  Event Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#0a0a0a]/90 backdrop-blur-sm text-white p-8 rounded-lg shadow-lg mb-8">
              <h4 className="text-2xl font-bold mb-6 text-[#d4af37]">Contact Information</h4>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#d4af37] p-3 rounded-full text-white">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">Our Location</h5>
                    <p className="text-gray-300">Samantapur, near young phoenix public school, Bhubaneswar ,Odisha, India - 751002</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[#d4af37] p-3 rounded-full text-white">
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">Phone Number</h5>
                    <p className="text-gray-300">+91 91780 80116</p>
                    <p className="text-gray-300">+91 99371 42047</p>
                    <p className="text-gray-300">+91 97762 72777</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[#d4af37] p-3 rounded-full text-white">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">Email Address</h5>
                    <p className="text-gray-300">rajpalaceandconvention@gmail.com</p>
                    
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[#d4af37] p-3 rounded-full text-white">
                    <FaClock size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">Office Hours</h5>
                    <p className="text-gray-300">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-300">Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4133.799250041876!2d85.83982067564187!3d20.22487478123084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7001bbf87ad%3A0x2acac52a7b7d3d47!2sRaj%20Palace!5e1!3m2!1sen!2sin!4v1742450996348!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Raj Palace & Convention Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 