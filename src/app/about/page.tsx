import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import { FaCheck, FaUsers, FaCalendarAlt, FaMedal, FaHandshake, FaBed, FaUtensils, FaWifi, FaParking, FaAccessibleIcon } from 'react-icons/fa';

export const metadata = {
  title: 'About Us | Raj Palace & Convention',
  description: 'Learn about Raj Palace & Convention - our history, mission, and values.',
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] w-full">
        <Image
          src="/images/IMG_0341.jpg"
          alt="About Raj Palace"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="heading-primary mb-4">About Us</h1>
            <p className="text-xl max-w-3xl mx-auto px-4">
              Learn about our journey, mission, and commitment to excellence
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-secondary text-[#8b0000] mb-2">Our Story</h2>
              <h3 className="heading-tertiary mb-6">A Legacy of Excellence </h3>
              
              <p className="mb-4 text-gray-700">
              Raj Palace & Convention was founded with a vision to create a premier venue for all types of events and celebrations. What started as a small banquet hall has now grown into one of the most prestigious convention centers in the region.
              </p>
              
              <p className="mb-6 text-gray-700">
              With a commitment to excellence, attention to detail, and personalized service, we have become the preferred choice for weddings, corporate events, and social gatherings. Over time, we have expanded our facilities, enhanced our amenities, and continuously modernized to offer an unparalleled experience for our guests.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <FaCheck className="text-[#d4af37]" />
                  <span>Founded in 2022 by the  family</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheck className="text-[#d4af37]" />
                  <span>Expanded to 2 event halls in 2023</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheck className="text-[#d4af37]" />
                  <span>Renovated and modernized in 2022</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheck className="text-[#d4af37]" />
                  <span>Added luxury accommodation in 2022</span>
                </div>
              </div>
            </div>
            
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/IMG_0296.jpg"
                alt="Raj Palace History"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="section-padding bg-[#f8f0e3]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-[#8b0000] mb-2">Our Mission & Values</h2>
            <h3 className="heading-tertiary text-[#090381] mb-6">What Drives Us Every Day</h3>
            <p className="max-w-3xl mx-auto text-[#8b0000]">
              At Raj Palace & Convention, we are guided by our commitment to excellence and customer satisfaction.
              Our mission and values define who we are and how we operate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-[#d4af37]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-2xl text-[#d4af37]" />
              </div>
              <h4 className="text-xl text-[#090381]  font-bold mb-2">Customer First</h4>
              <p className="text-gray-600">
                We prioritize our customers' needs and strive to exceed their expectations in every interaction.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-[#d4af37]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMedal className="text-2xl text-[#d4af37]" />
              </div>
              <h4 className="text-xl text-[#090381] font-bold mb-2">Excellence</h4>
              <p className="text-gray-600">
                We are committed to delivering excellence in every aspect of our service and facilities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-[#d4af37]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandshake className="text-2xl text-[#d4af37]" />
              </div>
              <h4 className="text-xl text-[#090381] font-bold mb-2">Integrity</h4>
              <p className="text-gray-600">
                We conduct our business with honesty, transparency, and ethical practices.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-[#d4af37]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCalendarAlt className="text-2xl text-[#d4af37]" />
              </div>
              <h4 className="text-xl text-[#090381] font-bold mb-2">Innovation</h4>
              <p className="text-gray-600">
                We continuously innovate and improve our services to stay ahead in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Facilities & Amenities Section (Replacing Team Section) */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-[#8b0000] mb-2">Our Facilities</h2>
            <h3 className="heading-tertiary mb-6">Premium Amenities for Exceptional Events</h3>
            <p className="max-w-3xl mx-auto text-gray-700">
              Raj Palace & Convention offers state-of-the-art facilities and amenities to ensure your event is a remarkable success.
              From spacious event halls to luxury accommodation, we have everything you need for a perfect occasion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:transform hover:scale-105">
              <div className="relative h-[250px]">
                <Image
                  src="/images/IMG_0311.jpg"
                  alt="Event Halls"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-1">Elegant Event Halls</h4>
                    <p className="text-[#d4af37]">For Every Occasion</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Our versatile event spaces can accommodate intimate gatherings and grand celebrations alike. With customizable layouts and modern amenities, our halls provide the perfect backdrop for your special occasion.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <FaCheck className="text-[#9805dc]" />
                    <span className='text-[#9805dc]'>Capacity for up to 500 guests</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaCheck className="text-[#9805dc]" />
                    <span className='text-[#9805dc]'>State-of-the-art sound and lighting</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaCheck className="text-[#9805dc]" />
                    <span className='text-[#9805dc]'>Customizable floor plans</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:transform hover:scale-105">
              <div className="relative h-[250px]">
                <Image
                  src="/images/IMG_0334.jpg"
                  alt="Accommodation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-1">Luxury Accommodation</h4>
                    <p className="text-[#d4af37]">Comfort and Elegance</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Our well-appointed rooms and suites offer comfortable and elegant accommodations for your guests. With modern amenities and attentive service, we ensure a pleasant stay for everyone.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <FaBed className="text-[#d4af37]" />
                    <span className='text-[#9805dc]'>Luxurious rooms and suites</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaWifi className="text-[#d4af37]" />
                    <span className='text-[#9805dc]'>Complimentary high-speed WiFi</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaCheck className="text-[#d4af37]" />
                    <span className='text-[#9805dc]'>24-hour concierge service</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:transform hover:scale-105">
              <div className="relative h-[250px]">
                <Image
                  src="/images/IMG_0324.jpg"
                  alt="Dining"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-1">Premium Amenities</h4>
                    <p className="text-[#d4af37]">Enhancing Your Experience</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  From exceptional dining options to convenient services, our comprehensive amenities ensure a seamless and enjoyable experience for you and your guests at Raj Palace & Convention.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <FaUtensils className="text-[#d4af37]" />
                    <span className='text-[#9805dc]'>Exquisite catering options</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaParking className="text-[#d4af37]" />
                    <span className='text-[#9805dc]'>Ample parking space</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaAccessibleIcon className="text-[#d4af37]" />
                    <span className='text-[#9805dc]'>Accessibility features</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="section-padding bg-[#0a0a0a] text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-[#d4af37] mb-2">Testimonials</h2>
            <h3 className="heading-tertiary mb-6 text-white">What Our Clients Say</h3>
            <p className="max-w-3xl mx-auto text-gray-300">
              Don't just take our word for it. Here's what some of our satisfied clients have to say about their experience with Raj Palace & Convention.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#1a1a1a] p-6 rounded-lg">
              <div className="text-[#d4af37] text-4xl mb-4">"</div>
              <p className="mb-6 text-gray-300">
                We had our daughter's wedding at Raj Palace, and it was absolutely perfect. The staff was attentive, the venue was beautiful, and our guests couldn't stop raving about it.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#d4af37] rounded-full mr-4"></div>
                <div>
                  <h5 className="font-bold">Anita & Suresh Patel</h5>
                  <p className="text-[#d4af37]">Wedding</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#1a1a1a] p-6 rounded-lg">
              <div className="text-[#d4af37] text-4xl mb-4">"</div>
              <p className="mb-6 text-gray-300">
                Our annual corporate conference was a huge success thanks to the team at Raj Palace. The facilities were top-notch, and the service was impeccable.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#d4af37] rounded-full mr-4"></div>
                <div>
                  <h5 className="font-bold">Rahul Mehta</h5>
                  <p className="text-[#d4af37]">Corporate Event</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#1a1a1a] p-6 rounded-lg">
              <div className="text-[#d4af37] text-4xl mb-4">"</div>
              <p className="mb-6 text-gray-300">
                We hosted our silver jubilee celebration at Raj Palace, and it exceeded all our expectations. The attention to detail and personalized service made it a truly memorable event.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#d4af37] rounded-full mr-4"></div>
                <div>
                  <h5 className="font-bold">Neha & Raj Malhotra</h5>
                  <p className="text-[#d4af37]">Anniversary</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 