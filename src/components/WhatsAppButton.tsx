import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '595984981705';

function WhatsAppButton() {
  const handleClick = () => {
    const message = 'Hola PASTANI, me gustaría hacer una consulta';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 w-14 h-14 md:w-16 md:h-16 bg-[#E63946] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 hover:shadow-[0_0_20px_rgba(230,57,70,0.6)] transition-all duration-300 z-50 animate-pulse-slow"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} />
    </button>
  );
}

export default WhatsAppButton;
