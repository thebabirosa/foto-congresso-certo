import { motion } from 'motion/react';
import { Camera, Maximize2 } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: "Congresso Brasileiro de Medicina",
    category: "Congresso",
    image: "https://github.com/thebabirosa/images/blob/main/fotocongresso%20(12).jpg?raw=true",
    size: "large"
  },
  {
    id: 2,
    title: "Feira de Tecnologia",
    category: "Feira",
    image: "https://github.com/thebabirosa/images/blob/main/fotocongresso%20(5).jpg?raw=true",
    size: "small"
  },
  {
    id: 3,
    title: "Workshop Corporativo",
    category: "Corporativo",
    image: "https://github.com/thebabirosa/images/blob/main/fotocongresso%20(8).jpg?raw=true",
    size: "small"
  },
  {
    id: 4,
    title: "Premiação Anual",
    category: "Social",
    image: "https://github.com/thebabirosa/images/blob/main/fotocongresso%20(14).jpg?raw=true",
    size: "wide"
  },
  {
    id: 5,
    title: "Simpósio Internacional",
    category: "Científico",
    image: "https://github.com/thebabirosa/images/blob/main/fotocongresso%20(3).jpg?raw=true",
    size: "small"
  }
];

const carouselImages = [
  "https://github.com/thebabirosa/images/blob/main/fotocongresso%20(12).jpg?raw=true",
  "https://github.com/thebabirosa/images/blob/main/fotocongresso%20(5).jpg?raw=true",
  "https://github.com/thebabirosa/images/blob/main/fotocongresso%20(8).jpg?raw=true",
  "https://github.com/thebabirosa/images/blob/main/fotocongresso%20(14).jpg?raw=true",
  "https://github.com/thebabirosa/images/blob/main/fotocongresso%20(3).jpg?raw=true"
];

export default function Gallery() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] font-medium tracking-wider text-sm">Nosso Trabalho</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Portfólio em Destaque</h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px] mb-16">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-xl cursor-pointer ${
                item.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                item.size === 'wide' ? 'md:col-span-2' : ''
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#1a1a1a]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[#D4AF37] text-sm font-medium tracking-wider mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.category}
                </span>
                <h3 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.title}
                </h3>
                <div className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <Maximize2 size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Carousel */}
        <div className="mb-12 overflow-hidden py-4">
          <div className="flex gap-4 animate-marquee whitespace-nowrap">
            {[...carouselImages, ...carouselImages].map((src, index) => (
              <div key={index} className="w-64 h-40 shrink-0 rounded-lg overflow-hidden shadow-md">
                <img src={src} alt="Portfolio Carousel" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://www.instagram.com/fotocongresso/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-[#4A4A4A]/20 rounded-full text-[#1a1a1a] font-medium hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37] transition-all"
          >
            <Camera size={18} />
            Ver mais no Instagram
          </a>
        </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
