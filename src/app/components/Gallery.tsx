'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaSearch, FaTimes } from 'react-icons/fa';

const galleryImages = [
  {
    id: 1,
    src: '/images/weddingBedi.png',
    category: 'Wedding',
    title: 'Elegant Wedding Setup',
  },
  {
    id: 2,
    src: '/images/corporate.png',
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
    src: '/images/corporate2.png',
    category: 'Corporate',
    title: 'Corporate Dinner',
  },
  {
    id: 6,
    src: '/images/kitty.png',
    category: 'Party',
    title: 'Private Party',
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<null | typeof galleryImages[0]>(null);
  const [filter, setFilter] = useState('All');

  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="section-padding bg-white" id="gallery">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-secondary text-[#8b0000] mb-2">Photo Gallery</h2>
            <h3 className="heading-tertiary text-[#f20f0f] mb-6">Glimpses of Our Memorable Events</h3>
            <p className="max-w-3xl mx-auto text-gray-700 mb-8">
              Browse through our gallery to see the beautiful events we've hosted at Raj Palace & Convention.
              From weddings to corporate events, we create magical experiences for all occasions.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['All', 'Wedding', 'Corporate', 'Party'].map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    filter === category
                      ? 'bg-[#d4af37] text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  {category}
                </button>
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
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              className="relative group overflow-hidden rounded-lg shadow-md h-[300px]"
              variants={item}
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h4 className="text-white text-xl font-bold">{image.title}</h4>
                <p className="text-[#d4af37]">{image.category}</p>
                <button className="absolute top-4 right-4 bg-[#d4af37] text-white p-2 rounded-full">
                  <FaSearch />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link href="/gallery" className="btn-primary">
            View Full Gallery
          </Link>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full h-[80vh]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
              <button
                className="absolute top-4 right-4 bg-[#d4af37] text-white p-3 rounded-full"
                onClick={() => setSelectedImage(null)}
              >
                <FaTimes />
              </button>
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <h4 className="text-white text-xl font-bold">{selectedImage.title}</h4>
                <p className="text-[#d4af37]">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery; 