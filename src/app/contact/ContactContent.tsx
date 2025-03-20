'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaTwitter, FaArrowRight, FaWhatsapp, FaSms, FaYoutube } from 'react-icons/fa';

/**
 * Contact page with booking request form
 * 
 * This component renders the contact page with a form that allows clients to submit booking inquiries.
 * When a form is submitted:
 * 1. Data is sent to the /api/contact endpoint
 * 2. The server processes the submission and sends an email notification
 * 3. The email includes all booking details with a professional template
 * 4. The recipient (venue owner) receives a "New Booking Request" email with contact information
 * 5. Success/error states are handled with appropriate user feedback
 */
export default function ContactContent() {
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
  const [submitError, setSubmitError] = useState('');
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
      
      // Success
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
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to send message');
    } finally {
      setIsSubmitting(false);
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
    show: { opacity: 1, y: 0 }
  };

  const faqItems = [
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking at least 3-6 months in advance for weddings and large events, and 1-2 months for smaller events, especially during peak season."
    },
    {
      question: "Do you provide catering services?",
      answer: "Yes, we offer comprehensive catering services with a wide range of cuisines. You can also bring your own caterer for an additional fee."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Cancellations made 60 days or more before the event date receive a full refund minus the booking fee. Please refer to our terms and conditions for more details."
    },
    {
      question: "Can I visit the venue before booking?",
      answer: "Absolutely! We encourage you to schedule a venue tour to see our facilities in person. Please contact us to arrange a convenient time."
    },
    {
      question: "Do you offer accommodation for guests?",
      answer: "Yes, we have luxury accommodation options available for event guests at special rates. Please inquire for details and availability."
    },
    {
      question: "What is the payment schedule?",
      answer: "We require a 25% deposit to secure your booking, with 50% due 90 days before the event and the remaining balance due 30 days prior to the event date."
    }
  ];

  const contactItems = [
    {
      icon: <FaPhone className="text-2xl text-white" />,
      title: "Phone",
      details: ["9178080116", "9937142047", "9776272777"]
    },
    {
      icon: <FaEnvelope className="text-2xl text-white" />,
      title: "Email",
      details:["rajpalaceandconvention@gmail.com"]
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-white" />,
      title: "Address",
      details: ["Samantarapur, near young phoenix public school, Bhubaneswar ,Odisha, India - 751002"]
    },
    {
      icon: <FaClock className="text-2xl text-white" />,
      title: "Office Hours",
      details: ["Monday - Saturday: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 4:00 PM"]
    }
  ];

  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] w-full">
        <Image
          src="/images/entrygate.jpeg"
          alt="Contact Raj Palace"
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
              Contact Us
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl mx-auto px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Get in touch for bookings, inquiries, and venue tours
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
      
      {/* Quick Contact Banner */}
      <section className="py-6 bg-gradient-to-r from-[#4b0082] to-[#8a2be2]">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
          >
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Need to book quickly?</h2>
              <p className="text-white/80">Contact us directly via WhatsApp or SMS for instant assistance</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/919178080116" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <motion.button
                  className="px-6 py-3 rounded-md bg-[#25D366] text-white font-semibold flex items-center gap-2 border-2 border-white/20"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(37, 211, 102, 0.6)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaWhatsapp className="text-xl" />
                  <span>WhatsApp: 9178080116</span>
                </motion.button>
              </a>
              <a href="sms:+919178080116">
                <motion.button
                  className="px-6 py-3 rounded-md bg-[#3498db] text-white font-semibold flex items-center gap-2 border-2 border-white/20"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(52, 152, 219, 0.6)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaSms className="text-xl" />
                  <span>SMS: 9178080116</span>
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Information */}
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
              }}>Get In Touch</h2>
              <h3 className="heading-tertiary mb-6 text-white">We'd Love to Hear From You</h3>
              <p className="max-w-3xl mx-auto text-gray-300">
                Whether you're planning an event or have questions about our services, our team is ready to assist you.
                Reach out to us through any of the following channels.
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
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {contactItems.map((contactItem, index) => (
              <motion.div 
                key={index} 
                className="bg-gradient-to-br from-[#1a1a3a] to-[#2a2a4a] p-6 rounded-lg shadow-lg text-center border border-[#d4af37]/20 backdrop-blur-sm"
                variants={item}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 15px 30px rgba(0,0,0,0.3), 0 0 15px rgba(212, 175, 55, 0.3)",
                  borderColor: "rgba(212, 175, 55, 0.5)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-gradient-to-br from-[#4b0082] to-[#8a2be2] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-[#d4af37]/50">
                  {contactItem.icon}
                </div>
                <h4 className="text-xl font-bold mb-2 text-[#d4af37]">{contactItem.title}</h4>
                {contactItem.details.map((detail, i) => (
                  <p key={i} className={`text-gray-300 ${i < contactItem.details.length - 1 ? 'mb-2' : ''}`}>
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#1a1a3a] to-[#2a2a4a] p-8 rounded-lg shadow-xl border border-[#d4af37]/30"
            >
              <h4 className="text-2xl font-bold mb-6 text-[#d4af37]">Send us a Message</h4>
              
              {submitSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-900/30 border border-green-500 text-green-300 px-4 py-3 rounded mb-6"
                >
                  Thank you for your message! We will get back to you soon.
                </motion.div>
              )}
              
              {submitError && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-900/30 border border-red-500 text-red-300 px-4 py-3 rounded mb-6"
                >
                  {submitError}
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-[#0a0a1a]/70 border border-[#d4af37]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37] text-white placeholder-gray-400"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-[#0a0a1a]/70 border border-[#d4af37]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37] text-white placeholder-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-[#0a0a1a]/70 border border-[#d4af37]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37] text-white placeholder-gray-400"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="eventType" className="block text-gray-300 mb-2">
                      Event Type
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-[#0a0a1a]/70 border border-[#d4af37]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37] text-white"
                    >
                      <option value="" className="bg-[#1a1a3a]">Select Event Type</option>
                      <option value="Wedding" className="bg-[#1a1a3a]">Wedding</option>
                      <option value="Corporate" className="bg-[#1a1a3a]">Corporate Event</option>
                      <option value="Birthday" className="bg-[#1a1a3a]">Birthday Party</option>
                      <option value="Private" className="bg-[#1a1a3a]">Private Party</option>
                      <option value="Thread" className="bg-[#1a1a3a]">Thread Ceremony</option>
                      <option value="Kitty" className="bg-[#1a1a3a]">Kitty Party</option>
                      <option value="Other" className="bg-[#1a1a3a]">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="date" className="block text-gray-300 mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-[#0a0a1a]/70 border border-[#d4af37]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37] text-white"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-[#0a0a1a]/70 border border-[#d4af37]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37] text-white placeholder-gray-400"
                    placeholder="Tell us about your event requirements..."
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-md bg-gradient-to-r from-[#4b0082] to-[#8a2be2] text-white font-bold text-lg relative overflow-hidden ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(212, 175, 55, 0.5)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-[#d4af37] to-[#f5e7a3] opacity-0"
                    whileHover={{ opacity: 0.2 }}
                  />
                </motion.button>
              </form>
              
              {/* Direct Contact Options */}
              <div className="mt-8 pt-6 border-t border-[#d4af37]/30">
                <h5 className="text-xl font-bold mb-4 text-[#d4af37]">Contact us directly:</h5>
                <p className="text-gray-300 mb-4">Reach us instantly via WhatsApp or SMS at: <span className="text-white font-semibold">+91 9178080116</span></p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://wa.me/919178080116" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <motion.button
                      className="w-full py-3 px-6 rounded-md bg-[#25D366] text-white font-bold text-lg flex items-center justify-center gap-2 relative overflow-hidden"
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 0 20px rgba(37, 211, 102, 0.5)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaWhatsapp className="text-xl" />
                      <span>WhatsApp Us</span>
                    </motion.button>
                  </a>
                  
                  <a 
                    href="sms:+919178080116" 
                    className="flex-1"
                  >
                    <motion.button
                      className="w-full py-3 px-6 rounded-md bg-[#3498db] text-white font-bold text-lg flex items-center justify-center gap-2 relative overflow-hidden"
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 0 20px rgba(52, 152, 219, 0.5)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaSms className="text-xl" />
                      <span>Send SMS</span>
                    </motion.button>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden mb-6 shadow-xl border-2 border-[#d4af37]/30">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4133.799250041876!2d85.83982067564187!3d20.22487478123084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7001bbf87ad%3A0x2acac52a7b7d3d47!2sRaj%20Palace!5e1!3m2!1sen!2sin!4v1742450996348!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              
              <div className="bg-gradient-to-br from-[#4b0082] to-[#8a2be2] text-white p-6 rounded-lg shadow-xl border border-[#d4af37]/30">
                <h4 className="text-xl font-bold mb-4 text-[#d4af37]">Connect With Us</h4>
                <p className="mb-4 text-white/90">
                  Follow us on social media for updates, event highlights, and special offers.
                </p>
                <div className="flex space-x-4">
                  {[
                    { icon: <FaFacebook />, label: "Facebook", url: "#" },
                    { icon: <FaInstagram />, label: "Instagram", url: "https://www.instagram.com/rajpalace_andconvention/" },
                    { icon: <FaYoutube />, label: "YouTube", url: "https://youtube.com/@rajpalace-p2l?si=X1EqCvayTpIS36de" },
                    { icon: <FaTwitter />, label: "Twitter", url: "#" }
                  ].map((social, index) => (
                    <motion.a 
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#d4af37]/20 backdrop-blur-sm text-[#d4af37] p-3 rounded-full hover:bg-[#d4af37]/30 transition-colors border border-[#d4af37]/50"
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        boxShadow: "0 0 15px rgba(212, 175, 55, 0.5)"
                      }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
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
              }}>Frequently Asked Questions</h2>
              <h3 className="heading-tertiary text-white mb-6">Common Inquiries About Our Services</h3>
              <p className="max-w-3xl mx-auto text-gray-300">
                Find answers to commonly asked questions about our venue, services, and booking process.
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
          
          <div className="max-w-4xl mx-auto">
            {faqItems.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <motion.div 
                  className={`bg-gradient-to-br from-[#1a1a3a] to-[#2a2a4a] p-6 rounded-lg cursor-pointer transition-all duration-300 border border-[#d4af37]/20 ${
                    activeTab === index ? 'shadow-lg shadow-[#d4af37]/20 border-[#d4af37]/50' : ''
                  }`}
                  onClick={() => setActiveTab(activeTab === index ? -1 : index)}
                  whileHover={{ 
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2), 0 0 10px rgba(212, 175, 55, 0.2)",
                    borderColor: "rgba(212, 175, 55, 0.3)"
                  }}
                >
                  <div className="flex justify-between items-center">
                    <h4 className={`text-xl font-bold ${activeTab === index ? 'text-[#d4af37]' : 'text-white'}`}>
                      {faq.question}
                    </h4>
                    <motion.div
                      animate={{ rotate: activeTab === index ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaArrowRight className={activeTab === index ? 'text-[#d4af37]' : 'text-gray-400'} />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: activeTab === index ? 'auto' : 0,
                      opacity: activeTab === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-gray-300">
                      {faq.answer}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 