import { useEffect } from 'react';
import Lenis from 'lenis';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import MenuBook from './components/MenuBook/MenuBook';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import './index.css';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
    });
    
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-cream selection:bg-primary-green selection:text-white">
      <Navigation />
      <Hero />
      
      {/* 3D Menu Section */}
      <MenuBook />

      {/* Gallery Section */}
      <Gallery />

      {/* Reviews Section */}
      <Reviews />
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
