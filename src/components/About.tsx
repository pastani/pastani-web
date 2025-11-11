function About() {
  return (
    <section id="sobre" className="py-20 px-4 bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 animate-fade-in">
          Sobre Nosotros
        </h2>
        <div className="w-24 h-0.5 bg-[#E63946] mx-auto mb-8"></div>

        <div className="relative">
          <svg className="absolute -top-4 -left-4 w-12 h-12 text-[#E63946] opacity-20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>

          <p className="text-lg md:text-xl text-[#F5F5F5]/80 leading-relaxed font-montserrat font-light mb-8">
            En <span className="text-[#E63946] font-semibold">PASTANI</span> unimos técnica y pasión para crear piezas artesanales,
            equilibrando lo dulce y lo salado. Trabajamos con materia prima seleccionada
            y horneamos a diario.
          </p>

          <svg className="absolute -bottom-4 -right-4 w-12 h-12 text-[#E63946] opacity-20 rotate-180" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center animate-fade-in">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#E63946]/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-[#E63946]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-playfair font-semibold mb-2">Calidad Premium</h3>
            <p className="text-[#F5F5F5]/70 font-montserrat text-sm">Ingredientes seleccionados con cuidado</p>
          </div>

          <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#E63946]/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-[#E63946]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-playfair font-semibold mb-2">Horneado Diario</h3>
            <p className="text-[#F5F5F5]/70 font-montserrat text-sm">Frescura garantizada todos los días</p>
          </div>

          <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#E63946]/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-[#E63946]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-playfair font-semibold mb-2">Hecho con Pasión</h3>
            <p className="text-[#F5F5F5]/70 font-montserrat text-sm">Cada pieza es única y especial</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
