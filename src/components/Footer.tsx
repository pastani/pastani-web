import { Instagram, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '595984981705';

function Footer() {
  return (
    <footer id="contacto" className="bg-[#0B0B0B] border-t border-[#E63946]/20 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-playfair font-bold mb-4">PASTANI</h3>
            <p className="text-[#F5F5F5]/70 font-montserrat text-sm">
              Dulces y Salados<br />
              Sabores con Estilo
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-lg font-playfair font-semibold mb-4">Navegación</h4>
            <div className="space-y-2">
              <a href="#" className="block text-[#F5F5F5]/70 hover:text-[#E63946] transition-colors font-montserrat text-sm">
                Inicio
              </a>
              <a href="#productos" className="block text-[#F5F5F5]/70 hover:text-[#E63946] transition-colors font-montserrat text-sm">
                Productos
              </a>
              <a href="#sobre" className="block text-[#F5F5F5]/70 hover:text-[#E63946] transition-colors font-montserrat text-sm">
                Sobre Nosotros
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-lg font-playfair font-semibold mb-4">Síguenos</h4>
            <div className="flex justify-center md:justify-end gap-4">
              <a
                href="https://www.instagram.com/_pastani__/?utm_source=ig_web_button_share_sheet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#E63946]/10 flex items-center justify-center text-[#F5F5F5] hover:bg-[#E63946] transition-all hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#E63946]/10 flex items-center justify-center text-[#F5F5F5] hover:bg-[#E63946] transition-all hover:scale-110"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#E63946]/20 pt-8 text-center">
          <p className="text-[#F5F5F5]/60 font-montserrat text-sm">
            © 2025 PASTANI — Sabores con Estilo
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
