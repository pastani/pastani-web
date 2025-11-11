import { useState } from 'react';
import ProductCard from './ProductCard';

const WHATSAPP_NUMBER = '595984981705';
//Dulces imagenes
  import dulce1 from '../assets/dulces/Imagen de WhatsApp 2025-10-25 a las 12.39.04_00da84b0.jpg';
  import dulce2 from '../assets/dulces/Imagen de WhatsApp 2025-10-25 a las 12.39.40_7c95aea6.jpg';
  import dulce3 from '../assets/dulces/Imagen de WhatsApp 2025-10-25 a las 12.40.13_d692c258.jpg';
  import dulce4 from '../assets/dulces/Imagen de WhatsApp 2025-10-25 a las 12.40.47_c94c2fdf.jpg';
  import dulce5 from '../assets/dulces/Imagen de WhatsApp 2025-10-25 a las 12.41.38_8df68fa8.jpg';
  import dulce6 from '../assets/dulces/Imagen de WhatsApp 2025-10-25 a las 12.42.47_98c0f258.jpg';
  import dulce7 from '../assets/dulces/Imagen de WhatsApp 2025-10-25 a las 12.43.58_886f2d25.jpg';
  import dulce8 from '../assets/dulces/Imagen de WhatsApp 2025-10-25 a las 12.45.08_02b16b91.jpg';
  import dulce9 from '../assets/dulces/Imagen de WhatsApp 2025-10-25 a las 12.45.37_45ec0601.jpg';
  import dulce10 from '../assets/dulces/Imagen de WhatsApp 2025-10-25 a las 12.46.23_0a59d3a6.jpg';
  import dulce11 from '../assets/dulces/Imagen de WhatsApp 2025-10-25 a las 12.46.51_8a704e2d.jpg';
  import dulce14 from '../assets/dulces/Imagen de WhatsApp 2025-10-25 a las 12.55.35_3859abbb.jpg';
  import dulce15 from '../assets/dulces/Imagen de WhatsApp 2025-10-25 a las 12.56.56_76524c37.jpg';
  import dulce16 from '../assets/dulces/Imagen de WhatsApp 2025-10-25 a las 12.58.46_bbc82d71.jpg';
  import dulce17 from '../assets/dulces/Imagen de WhatsApp 2025-11-04 a las 13.17.59_75a99a35.jpg';
  import dulce18 from '../assets/dulces/Imagen de WhatsApp 2025-11-04 a las 13.18.11_e43fe3f4.jpg';
  import dulce19 from '../assets/dulces/Imagen de WhatsApp 2025-11-04 a las 13.18.34_acdd2b49.jpg';
  import dulce20 from '../assets/dulces/Imagen de WhatsApp 2025-11-04 a las 13.21.24_e2779004.jpg';
  import dulce22 from '../assets/dulces/Imagen de WhatsApp 2025-11-07 a las 10.38.05_8c9a5f03.jpg';
  import dulce23 from '../assets/dulces/Imagen de WhatsApp 2025-11-07 a las 10.38.05_a49a0908.jpg';
  import dulce24 from '../assets/dulces/Imagen de WhatsApp 2025-11-07 a las 10.38.06_82eca7d3.jpg';
  import dulce25 from '../assets/dulces/Imagen de WhatsApp 2025-11-07 a las 10.38.06_e658734e.jpg';
  import dulce26 from '../assets/dulces/Imagen de WhatsApp 2025-11-07 a las 12.09.30_059c0fc0.jpg';
  import dulce27 from '../assets/dulces/Imagen de WhatsApp 2025-11-07 a las 12.09.30_97799123.jpg';
  import dulce28 from '../assets/dulces/Imagen de WhatsApp 2025-11-07 a las 12.09.30_fb159eb8.jpg';
//Salados imagenes
 import salado1 from '../assets/salados/Imagen de WhatsApp 2025-11-04 a las 13.21.27_1f1b67df.jpg';
import salado2 from '../assets/salados/Imagen de WhatsApp 2025-11-04 a las 13.21.27_c6c9f9aa.jpg';
import salado3 from '../assets/salados/Imagen de WhatsApp 2025-11-04 a las 13.21.28_36127e8e.jpg';
import salado4 from '../assets/salados/Imagen de WhatsApp 2025-11-04 a las 13.21.29_53ceb02b.jpg';
import salado5 from '../assets/salados/Imagen de WhatsApp 2025-11-04 a las 13.21.29_4844f541.jpg';
import salado6 from '../assets/salados/Imagen de WhatsApp 2025-11-04 a las 13.21.29_dea4fe97.jpg';

const products = [
 // 🧁 Productos Dulces
{ name: 'Alfajor de maicena con relleno de dulce de leche', description: 'Alfajor artesanal de maicena, súper suave, con generoso dulce de leche y un toque de coco rallado.', category: 'Dulces', image: dulce1 },
{ name: 'Bollos con rellenos (membrillo, dulce de leche, crema pastelera)', description: 'Bollos esponjosos horneados a diario con rellenos clásicos: membrillo, dulce de leche o crema pastelera.', category: 'Dulces', image: dulce2 },
{ name: 'Bollos sin relleno', description: 'Bollos tiernos y dorados, ideales para el mate o café, con sabor casero en cada bocado.', category: 'Dulces', image: dulce3 },
{ name: 'Biscochuelo con relleno de mermelada y frutas de estación', description: 'Bizcochuelo húmedo y liviano, relleno con mermelada y frutas frescas de temporada.', category: 'Dulces', image: dulce4 },
{ name: 'Budines de vainilla, naranja y chocolate', description: 'Budines caseros bien húmedos: vainilla aromática, naranja cítrica y chocolate intenso.', category: 'Dulces', image: dulce5 },
{ name: 'Pastafrola sin gluten de membrillo, batata, guayaba', description: 'Pastafrola sin TACC con masa suave y rellenos tradicionales: membrillo, batata o guayaba.', category: 'Dulces', image: dulce6 },
{ name: 'Tarta rellenos de maní, dulce de leche, frutas de estación, merengue', description: 'Tartas artesanales con combinaciones irresistibles: maní, dulce de leche, frutas frescas y merengue.', category: 'Dulces', image: dulce7 },
{ name: 'Alfajor de maicena con dulce de leche y cobertura de chocolate', description: 'Alfajor de maicena con corazón de dulce de leche, bañado en fina cobertura de chocolate.', category: 'Dulces', image: dulce8 },
{ name: 'Torta Alfajor de maicena y dulce de leche', description: 'Torta estilo alfajor: capas de maicena suaves unidas con mucho dulce de leche y terminación casera.', category: 'Dulces', image: dulce9 },
{ name: 'Rol de canela con frutas', description: 'Roll de canela esponjoso con trocitos de frutas, glaseado suave y aroma irresistible.', category: 'Dulces', image: dulce10 },
{ name: 'Rol de canela', description: 'Clásico roll de canela, tierno y perfumado, con glaseado liviano para el toque final.', category: 'Dulces', image: dulce11 },
{ name: 'Tartas de frutas', description: 'Base crocante y crema suave coronada con frutas de estación frescas y brillantes.', category: 'Dulces', image: dulce14 },
{ name: 'Torta decorado con frutas de estación', description: 'Torta húmeda y elegante, decorada a mano con una selección de frutas frescas.', category: 'Dulces', image: dulce15 },
{ name: 'Budín de pan', description: 'Receta tradicional, textura cremosa y sabor a hogar; perfecto con caramelo suave.', category: 'Dulces', image: dulce16 },
{ name: 'Pan dulce tradicional', description: 'Pan dulce esponjoso con frutas abrillantadas y aroma a vainilla y cítricos.', category: 'Dulces', image: dulce17 },
{ name: 'Pan dulce con relleno de chocolate', description: 'Pan dulce tierno con vetas y chips de chocolate para los más golosos.', category: 'Dulces', image: dulce18 },
{ name: 'Rol de canela con azúcar negra', description: 'Roll de canela con cobertura de azúcar negra que aporta crocante y sabor intenso.', category: 'Dulces', image: dulce19 },
{ name: 'Alfajor de maicena con cobertura de chocolate amargo', description: 'Alfajor de maicena relleno de dulce de leche y baño de chocolate amargo premium.', category: 'Dulces', image: dulce20 },
{ name: 'Panetones rellenos con frutas abrillantadas', description: 'Panetón alto y aireado con abundantes frutas abrillantadas y aroma navideño.', category: 'Dulces', image: dulce22 },
{ name: 'Budín Marmolado', description: 'Budín marmolado de vainilla y cacao, húmedo y de miga perfecta.', category: 'Dulces', image: dulce23 },
{ name: 'Pan dulce con cobertura de oreo y frutos secos', description: 'Pan dulce festivo con cobertura de galleta tipo Oreo y mix de frutos secos.', category: 'Dulces', image: dulce24 },
{ name: 'Pan dulces variados', description: 'Selección de panes dulces con distintos rellenos y coberturas para todos los gustos.', category: 'Dulces', image: dulce25 },
{ name: 'Panetones', description: 'Panetones artesanales de miga suave, sabor delicado y aroma a cítricos.', category: 'Dulces', image: dulce26 },
{ name: 'Budín decorado con frutos secos', description: 'Budín húmedo terminado con frutos secos tostados para un toque crujiente.', category: 'Dulces', image: dulce27 },
{ name: 'Pan dulce con chipas y cobertura de chocolate', description: 'Pan dulce diferente: trocitos tipo chipa en la masa y cobertura de chocolate.', category: 'Dulces', image: dulce28 },

// 🥖 Productos Salados
{ name: 'Matambre rellenos de vegetales, huevo y jamón y queso', description: 'Matambre arrollado bien sabroso, con vegetales, huevo y el clásico jamón y queso.', category: 'Salados', image: salado1 },
{ name: 'Pan casero de harina de trigo', description: 'Pan casero de corteza dorada y miga suave, hecho con harina de trigo seleccionada.', category: 'Salados', image: salado2 },
{ name: 'Empanada de carne con masa casera', description: 'Empanadas de carne jugosa, condimentadas a la perfección y envueltas en masa casera.', category: 'Salados', image: salado3 },
{ name: 'Pan integral con semillas', description: 'Pan integral nutritivo con mix de semillas, ideal para un desayuno o sándwich saludable.', category: 'Salados', image: salado4 },
{ name: 'Pan blanco', description: 'Pan blanco clásico, esponjoso y versátil, perfecto para acompañar cualquier comida.', category: 'Salados', image: salado5 },
{ name: 'Empanada casera de relleno de pollo', description: 'Empanadas de pollo tiernas y sabrosas con masa casera doradita.', category: 'Salados', image: salado6 },

];


function Products() {
  const [filter, setFilter] = useState<'Todos' | 'Dulces' | 'Salados'>('Todos');

  const filteredProducts = filter === 'Todos'
    ? products
    : products.filter(p => p.category === filter);

  return (
    <section id="productos" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            Nuestros Productos
          </h2>
          <div className="w-24 h-0.5 bg-[#E63946] mx-auto mb-8"></div>
          <p className="text-lg text-[#F5F5F5]/70 font-montserrat">
            Horneados a diario con ingredientes seleccionados
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setFilter('Todos')}
            className={`filter-btn ${filter === 'Todos' ? 'active' : ''}`}
          >
            Todos
          </button>
          <button
            onClick={() => setFilter('Dulces')}
            className={`filter-btn ${filter === 'Dulces' ? 'active' : ''}`}
          >
            Dulces
          </button>
          <button
            onClick={() => setFilter('Salados')}
            className={`filter-btn ${filter === 'Salados' ? 'active' : ''}`}
          >
            Salados
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              whatsappNumber={WHATSAPP_NUMBER}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
