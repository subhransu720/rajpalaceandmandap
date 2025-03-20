import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LuxuryFeatures from './components/LuxuryFeatures';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LuxuryFeatures />
      <Facilities />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
