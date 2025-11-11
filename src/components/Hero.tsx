import logo from '../assets/Imagen de WhatsApp 2025-11-04 a las 13.21.53_fb3cd9b2.jpg';

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-radial from-[#E63946]/5 to-transparent opacity-30"></div>

      <div className="max-w-4xl mx-auto px-4 text-center z-10 animate-fade-in">
        <img
          src={logo}
          alt="PASTANI Logo"
          className="w-64 h-64 mx-auto mb-8 object-contain animate-float"
        />

        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 tracking-wide">
          Sabores que inspiran
        </h1>

        <div className="w-24 h-0.5 bg-[#E63946] mx-auto mb-6"></div>

        <p className="text-xl md:text-2xl font-montserrat font-light mb-12 text-[#F5F5F5]/80">
          Dulces y Salados con estilo artesanal
        </p>

        <a
          href="#productos"
          className="btn-primary inline-block"
        >
          Ver Productos
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[#E63946]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
