'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaQuestion } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BubbleAnimation from '../components/BubbleAnimation';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQContent = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const faqItems: FAQItem[] = [
    {
      question: "What is the capacity of your venue?",
      answer: "Our main hall can accommodate up to 1000 guests for a reception-style event and 500 guests for a seated dinner. We also have smaller halls that can accommodate 200-300 guests. Our outdoor garden area can host up to 1500 guests.",
      category: "venue"
    },
    {
      question: "Do you provide catering services?",
      answer: "Yes, we offer in-house catering with a wide range of cuisines including Indian, Continental, Chinese, and more. We can customize menus based on your preferences and dietary requirements. Outside catering is also allowed with a nominal fee.",
      category: "services"
    },
    {
      question: "What is your booking process?",
      answer: "To book our venue, you need to check availability for your preferred date, visit for a site inspection, select the services you need, pay a booking amount (30% of the total cost), and sign a contract. The remaining payment is due 7 days before the event.",
      category: "booking"
    },
    {
      question: "How far in advance should I book the venue?",
      answer: "We recommend booking at least 6-8 months in advance for weekend dates during peak season (October-February). For weekday events or off-season dates, 3-4 months advance booking is usually sufficient.",
      category: "booking"
    },
    {
      question: "Do you provide decoration services?",
      answer: "Yes, we have in-house decoration services with various themes and customization options. We work with experienced decorators who can transform the venue according to your vision. You can also bring your own decorator if preferred.",
      category: "services"
    },
    {
      question: "Is parking available at the venue?",
      answer: "Yes, we have ample parking space that can accommodate up to 300 cars. We also provide valet parking services for larger events to ensure smooth traffic flow.",
      category: "venue"
    },
    {
      question: "Can we bring our own alcohol?",
      answer: "Yes, you can bring your own alcohol. We provide bartenders, mixers, ice, and glassware. We also have liquor licenses and can arrange for alcohol if required, with charges based on consumption.",
      category: "services"
    },
    {
      question: "Do you have accommodation facilities?",
      answer: "We don't have on-site accommodation, but we have tie-ups with nearby hotels that offer special rates for our clients. We can help arrange accommodation for outstation guests.",
      category: "venue"
    },
    {
      question: "What is your cancellation policy?",
      answer: "If you cancel more than 90 days before the event, 70% of the booking amount is refundable. For cancellations between 60-90 days, 50% is refundable. For cancellations less than 60 days before the event, the booking amount is non-refundable.",
      category: "booking"
    },
    {
      question: "Do you provide sound and lighting equipment?",
      answer: "Yes, we have state-of-the-art sound and lighting equipment. We also have in-house technicians to ensure everything runs smoothly. If you have specific requirements, we can arrange for additional equipment.",
      category: "services"
    }
  ];
  
  const filteredFAQs = activeCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);
  
  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'venue', name: 'Venue' },
    { id: 'services', name: 'Services' },
    { id: 'booking', name: 'Booking & Payments' }
  ];
  
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <>
      <Navbar />
      <main className="pt-20 relative">
        {/* Hero Section with Bubble Animation */}
        <section className="relative h-[40vh] min-h-[300px] bg-gradient-to-b from-blue-900 to-indigo-900 flex items-center justify-center overflow-hidden">
          <BubbleAnimation />
          
          <div className="container-custom relative z-10 text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Frequently Asked Questions
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Find answers to common questions about our venue and services
            </motion.p>
            <motion.p 
              className="mt-6 text-blue-200 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
             
            </motion.p>
          </div>
        </section>
        
        {/* FAQ Content */}
        <section className="py-16 bg-gradient-to-b from-indigo-50 to-white">
          <div className="container-custom">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-50'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
            
            {/* FAQ Items */}
            <div className="max-w-3xl mx-auto">
              <AnimatePresence>
                {filteredFAQs.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-8"
                  >
                    <FaQuestion className="text-4xl text-indigo-300 mx-auto mb-4" />
                    <p className="text-gray-600">No questions found in this category.</p>
                  </motion.div>
                ) : (
                  filteredFAQs.map((faq, index) => (
                    <motion.div
                      key={`${activeCategory}-${index}`}
                      className="mb-4 bg-white rounded-lg shadow-md overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      layout
                    >
                      <motion.button
                        className="w-full px-6 py-4 text-left flex justify-between items-center"
                        onClick={() => toggleFAQ(index)}
                        whileHover={{ backgroundColor: 'rgba(238, 242, 255, 0.5)' }}
                      >
                        <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                        <motion.div
                          animate={{ rotate: activeIndex === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FaChevronDown className="text-indigo-500" />
                        </motion.div>
                      </motion.button>
                      
                      <AnimatePresence>
                        {activeIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 py-4 border-t border-gray-100">
                              <p className="text-gray-600">{faq.answer}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>
            
            {/* Still Have Questions */}
            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Still Have Questions?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                If you couldn't find the answer to your question, please feel free to contact us directly.
                Our team is always ready to help you.
              </p>
              <motion.a
                href="/contact"
                className="inline-block px-8 py-3 bg-indigo-600 text-white font-medium rounded-full shadow-lg"
                whileHover={{ scale: 1.05, backgroundColor: '#4338ca' }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FAQContent; 