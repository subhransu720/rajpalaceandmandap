'use client';

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt, FaYoutube  } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold text-[#d4af37] mb-4">Raj Palace</h3>
            <p className="mb-4">
              Raj Palace & Convention is a premier venue for all your special events. 
              We provide elegant spaces and exceptional service for weddings, corporate events, 
              private parties, and more.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-xl hover:text-[#d4af37] transition-colors">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/rajpalace_andconvention/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-[#d4af37] transition-colors">
                <FaInstagram />
              </a>
              <a href="https://youtube.com/@rajpalace-p2l?si=X1EqCvayTpIS36de" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-[#d4af37] transition-colors">
                <FaYoutube />
              </a>
              <a href="#" className="text-xl hover:text-[#d4af37] transition-colors">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-[#d4af37] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#d4af37] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#d4af37] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#d4af37] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#d4af37] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#d4af37] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-[#d4af37] mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="hover:text-[#d4af37] transition-colors">Wedding Ceremonies</li>
              <li className="hover:text-[#d4af37] transition-colors">Corporate Events</li>
              <li className="hover:text-[#d4af37] transition-colors">Birthday Parties</li>
              <li className="hover:text-[#d4af37] transition-colors">Private Parties</li>
              <li className="hover:text-[#d4af37] transition-colors">Thread Ceremonies</li>
              <li className="hover:text-[#d4af37] transition-colors">Kitty Parties</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-[#d4af37] mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 text-[#d4af37]" />
                <span>Samantapur, near young phoenix public school, Bhubaneswar ,Odisha, India - 751002</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-[#d4af37]" />
                <span>9178080116</span>
                <span>9937142047</span>
                <span>9776272777</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-[#d4af37]" />
                <span>rajpalaceandconvention@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black py-4">
        <div className="container-custom text-center">
          <p>&copy; {new Date().getFullYear()} Raj Palace & Convention. All Rights Reserved. Powered by <Link href="https://www.sandrcodeworks.in" className='text-[#9805dc]'>S&R Code Works</Link></p>
        </div>
      </div>
    </footer>
  );
};
export default Footer; 