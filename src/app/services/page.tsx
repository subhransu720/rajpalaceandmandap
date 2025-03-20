import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import { FaHeart, FaBriefcase, FaBirthdayCake, FaUsers, FaRegCalendarAlt, FaFemale } from 'react-icons/fa';

export const metadata = {
  title: 'Our Services | Raj Palace & Convention',
  description: 'Explore our comprehensive range of event services at Raj Palace & Convention.',
};

const services = [
  {
    id: 1,
    title: <span className="text-[#a232f1]">Wedding Ceremonies</span>,
    titleText: 'Wedding Ceremonies',
    description: <span className="text-[#520073]">Make your special day truly memorable with our elegant wedding venues and comprehensive services.</span>,
    icon: <FaHeart className="text-4xl text-[#a232f1]" />,
    image: '/images/wedding_stage.jpg',
    price: 'Contact for pricing',
    features: [
      <span className="text-[#5d007e]">Elegant banquet halls with customizable decor</span>,
      <span className="text-[#5d007e]">Comprehensive wedding planning services</span>,
      <span className="text-[#5d007e]">Exquisite catering with multi-cuisine options</span>,
      <span className="text-[#5d007e]">Dedicated wedding coordinator</span>,
      <span className="text-[#5d007e]">Bridal suite and guest accommodations</span>,
      <span className="text-[#5d007e]">Professional sound and lighting systems</span>,
      <span className="text-[#5d007e]">Ample parking with valet service</span>,
    ],
  },
  {
    id: 2,
    title: <span className="text-[#a232f1]">Corporate Events</span>,
    titleText: 'Corporate Events',
    description: <span className="text-[#520073]">Professional spaces for conferences, meetings, and corporate gatherings with modern amenities.</span>,
    icon: <FaBriefcase className="text-4xl text-[#a232f1]" />,
    image: '/images/Corporate2.png',
    price: 'Contact for pricing',
    features: [
      <span className="text-[#5d007e]">State-of-the-art conference rooms</span>,
      <span className="text-[#5d007e]">High-speed WiFi and audiovisual equipment</span>,
      <span className="text-[#5d007e]">Corporate catering packages</span>,
      <span className="text-[#5d007e]">Business center services</span>,
      <span className="text-[#5d007e]">Team-building activity spaces</span>,
      <span className="text-[#5d007e]">Professional event management</span>,
      <span className="text-[#5d007e]">Customizable seating arrangements</span>,
    ],
  },
  {
    id: 3,
    title: <span className="text-[#a232f1]">Birthday Parties</span>,
    titleText: 'Birthday Parties',
    description: <span className="text-[#520073]">Celebrate your birthday in style with our customizable party packages and decorations.</span>,
    icon: <FaBirthdayCake className="text-4xl text-[#a232f1]" />,
    image: '/images/birthday.png',
    price: 'Contact for pricing',
    features: [
      <span className="text-[#5d007e]">Themed decoration options</span>,
      <span className="text-[#5d007e]">Custom cake and catering services</span>,
      <span className="text-[#5d007e]">Entertainment options (DJ, live music, etc.)</span>,
      <span className="text-[#5d007e]">Photography and videography services</span>,
      <span className="text-[#5d007e]">Party planning assistance</span>,
      <span className="text-[#5d007e]">Kid-friendly options available</span>,
      <span className="text-[#5d007e]">Flexible timing options</span>,
    ],
  },
  {
    id: 4,
    title: <span className="text-[#a232f1]">Private Parties</span>,
    titleText: 'Private Parties',
    description: <span className="text-[#520073]">Host your private gatherings in our luxurious spaces with personalized service and catering.</span>,
    icon: <FaUsers className="text-4xl text-[#a232f1]" />,
    image: '/images/privateParty.png',
    price: 'Contact for pricing',
    features: [
      <span className="text-[#5d007e]">Intimate venues for small gatherings</span>,
      <span className="text-[#5d007e]">Spacious halls for larger parties</span>,
      <span className="text-[#5d007e]">Customizable menu options</span>,
      <span className="text-[#5d007e]">Bar and beverage services</span>,
      <span className="text-[#5d007e]">Decoration and theme setup</span>,
      <span className="text-[#5d007e]">Sound system and entertainment options</span>,
      <span className="text-[#5d007e]">Dedicated event coordinator</span>,
    ],
  },
  {
    id: 5,
    title: <span className="text-[#a232f1]">Thread Ceremonies</span>,
    titleText: 'Thread Ceremonies',
    description: <span className="text-[#520073]">Traditional venues for thread ceremonies with all the necessary arrangements and catering.</span>,
    icon: <FaRegCalendarAlt className="text-4xl text-[#a232f1]" />,
    image: '/images/stage1.jpeg',
    price: 'Contact for pricing',
    features: [
      <span className="text-[#5d007e]">Traditional ceremony setup</span>,
      <span className="text-[#5d007e]">Customized decor as per rituals</span>,
      <span className="text-[#5d007e]">Specialized catering for ceremony</span>,
      <span className="text-[#5d007e]">Priest arrangements if required</span>,
      <span className="text-[#5d007e]">Accommodation for family members</span>,
      <span className="text-[#5d007e]">Photography services</span>,
      <span className="text-[#5d007e]">Assistance with traditional requirements</span>,
    ],
  },
  {
    id: 6,
    title: <span className="text-[#a232f1]">Kitty Parties</span>,
    titleText: 'Kitty Parties',
    description: <span className="text-[#520073]">Elegant spaces for kitty parties with special packages including food, decor, and entertainment.</span>,
    icon: <FaFemale className="text-4xl text-[#a232f1]" />,
    image: '/images/kitty.png',
    price: 'Contact for pricing',
    features: [
      <span className="text-[#5d007e]">Stylish venue setup</span>,
      <span className="text-[#5d007e]">Specialized kitty party menus</span>,
      <span className="text-[#5d007e]">Theme-based decoration</span>,
      <span className="text-[#5d007e]">Entertainment and game arrangements</span>,
      <span className="text-[#5d007e]">Special group packages</span>,
      <span className="text-[#5d007e]">Flexible timing options</span>,
      <span className="text-[#5d007e]">Dedicated coordinator for smooth execution</span>,
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] w-full">
        <Image
          src="/images/IMG_0340.jpg"
          alt="Raj Palace Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="heading-primary mb-4">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto px-4">
              Comprehensive event solutions for every occasion
            </p>
          </div>
        </div>
      </div>
      
      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-[#a924e7] mb-2">Comprehensive Event Services</h2>
            <h3 className="heading-tertiary mb-6">Tailored Solutions for Every Occasion</h3>
            <p className="max-w-3xl mx-auto text-gray-700">
              At Raj Palace & Convention, we offer a wide range of services to make your events memorable and hassle-free.
              From weddings to corporate events, we have the perfect venue and services for all your needs.
            </p>
          </div>
          
          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-[200px]">
                  <Image
                    src={service.image}
                    alt={service.titleText}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <div className="mr-3">{service.icon}</div>
                      <p className="font-bold text-[#8b0000]">{service.price}</p>
                    </div>
                    <button className="bg-[#d4af37] text-white px-3 py-1 rounded-full text-sm hover:bg-[#c09c2c] transition-colors">
                      Enquire
                    </button>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <a href={`#${service.id}`} className="text-[#d4af37] font-medium hover:underline">
                    View Details →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Detailed Service Sections */}
      {services.map((service) => (
        <section key={service.id} id={`${service.id}`} className="section-padding bg-[#f8f0e3]">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center mb-4">
                  <div className="mr-3">{service.icon}</div>
                  <h2 className="heading-secondary text-[#8b0000]">{service.title}</h2>
                </div>
                <h3 className="heading-tertiary mb-6">{service.description}</h3>
                
                <p className="font-bold text-xl mb-4 text-[#8b0000]">{service.price}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-bold mb-3 text-[#520073]">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#d4af37] mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="btn-primary">Book Now</button>
              </div>
              
              <div className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={service.image}
                  alt={service.titleText}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      ))}
      
      {/* Additional Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-[#8b0000] mb-2">Additional Services</h2>
            <h3 className="heading-tertiary mb-6">Enhancing Your Event Experience</h3>
            <p className="max-w-3xl mx-auto text-gray-700">
              We offer a range of additional services to complement your event and make it truly special.
              These can be added to any of our packages to create a customized experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2 text-[#a924e7]">Decoration Services</h4>
              <p className="text-gray-600 mb-4">
                Customized decoration services to match your event theme and preferences.
              </p>
             
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2 text-[#a924e7]">Catering Services</h4>
              <p className="text-gray-600 mb-4">
                Multi-cuisine catering options with customizable menus for all events.
              </p>
             
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2 text-[#a924e7]">Entertainment</h4>
              <p className="text-gray-600 mb-4">
                DJ, live music, cultural performances, and other entertainment options.
              </p>
              
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2 text-[#a924e7]">Photography & Videography</h4>
              <p className="text-gray-600 mb-4">
                Professional photography and videography services to capture your special moments.
              </p>
             
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2 text-[#a924e7]">Accommodation</h4>
              <p className="text-gray-600 mb-4">
                Luxury accommodation for guests with special rates for event bookings.
              </p>
            
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2 text-[#a924e7]">Transportation</h4>
              <p className="text-gray-600 mb-4">
                Transportation services for guests, including luxury cars and shuttle services.
              </p>
              
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-[#0a0a0a] text-white">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="heading-secondary text-[#d4af37] mb-4">Ready to Plan Your Event?</h2>
            <p className="max-w-3xl mx-auto mb-8 text-gray-300">
              Contact us today to discuss your requirements and let us help you create a memorable event at Raj Palace & Convention.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="btn-primary">Book a Venue Tour</button>
              <button className="btn-secondary">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 