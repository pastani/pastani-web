import { useState } from 'react';

interface Product {
  name: string;
  description: string;
  category: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
  whatsappNumber: string;
}

function ProductCard({ product, whatsappNumber }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleOrder = () => {
    const message = `Hola PASTANI, quiero pedir: ${product.name}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div
      className="product-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
    >
      <div className="relative overflow-hidden rounded-lg aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute top-3 right-3 bg-[#E63946] text-white text-xs font-montserrat font-semibold px-3 py-1 rounded-full">
          {product.category}
        </div>

        <div className="absolute top-3 left-3 opacity-20">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 5L22 15L30 10L25 18L35 20L25 22L30 30L22 25L20 35L18 25L10 30L15 22L5 20L15 18L10 10L18 15L20 5Z" fill="#E63946"/>
          </svg>
        </div>

        <div
          className={`absolute inset-0 bg-black/90 flex flex-col items-center justify-center p-6 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h3 className="text-xl font-playfair font-semibold mb-3 text-center text-white">
            {product.name}
          </h3>
          <p className="text-sm text-[#F5F5F5]/80 text-center mb-6 font-montserrat">
            {product.description}
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleOrder();
            }}
            className="btn-secondary"
          >
            Hacer pedido por WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
