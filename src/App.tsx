import { useState } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F5F5F5]">
      <nav className="fixed top-0 w-full bg-[#0B0B0B]/95 backdrop-blur-sm z-50 border-b border-[#E63946]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="text-xl font-playfair font-semibold tracking-wider">
              PASTANI
            </a>

            <div className="hidden md:flex space-x-8">
              <a href="#" className="nav-link">Inicio</a>
              <a href="#productos" className="nav-link">Productos</a>
              <a href="#sobre" className="nav-link">Sobre</a>
              <a href="#contacto" className="nav-link">Contacto</a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <a href="https://www.instagram.com/_pastani__/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="text-[#F5F5F5] hover:text-[#E63946] transition-colors">
                <Instagram size={20} />
              </a>
            </div>

            <button
              className="md:hidden text-[#F5F5F5]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#0B0B0B] border-t border-[#E63946]/20">
            <div className="px-4 py-4 space-y-3">
              <a href="#" className="block nav-link" onClick={() => setIsMenuOpen(false)}>Inicio</a>
              <a href="#productos" className="block nav-link" onClick={() => setIsMenuOpen(false)}>Productos</a>
              <a href="#sobre" className="block nav-link" onClick={() => setIsMenuOpen(false)}>Sobre</a>
              <a href="#contacto" className="block nav-link" onClick={() => setIsMenuOpen(false)}>Contacto</a>
            </div>
          </div>
        )}
      </nav>

      <Hero />
      <Products />
      <About />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
