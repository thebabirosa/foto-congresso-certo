import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

const clients = [
  { name: "Client 1", logo: "https://github.com/thebabirosa/images/blob/main/1.jpg?raw=true" },
  { name: "Client 2", logo: "https://github.com/thebabirosa/images/blob/main/2.jpg?raw=true" },
  { name: "Client 3", logo: "https://github.com/thebabirosa/images/blob/main/3.jpg?raw=true" },
  { name: "Client 4", logo: "https://github.com/thebabirosa/images/blob/main/4.jpg?raw=true" },
  { name: "Client 5", logo: "https://github.com/thebabirosa/images/blob/main/5.jpg?raw=true" },
  { name: "Client 6", logo: "https://github.com/thebabirosa/images/blob/main/6.jpg?raw=true" },
  { name: "Client 7", logo: "https://github.com/thebabirosa/images/blob/main/7.jpg?raw=true" },
  { name: "Client 8", logo: "https://github.com/thebabirosa/images/blob/main/8.jpg?raw=true" },
  { name: "Client 9", logo: "https://github.com/thebabirosa/images/blob/main/9.jpg?raw=true" },
  { name: "Client 10", logo: "https://github.com/thebabirosa/images/blob/main/10.jpg?raw=true" },
  { name: "Client 11", logo: "https://github.com/thebabirosa/images/blob/main/11.jpg?raw=true" },
  { name: "Client 12", logo: "https://github.com/thebabirosa/images/blob/main/12.jpg?raw=true" },
  { name: "Client 13", logo: "https://github.com/thebabirosa/images/blob/main/13.jpg?raw=true" },
  { name: "Client 14", logo: "https://github.com/thebabirosa/images/blob/main/14.jpg?raw=true" },
  { name: "Client 15", logo: "https://github.com/thebabirosa/images/blob/main/15.jpg?raw=true" },
];

const cities = [
  "Rio de Janeiro", "Florianópolis", "Cuiabá", "Porto Alegre", 
  "Vitória", "Maceió", "Recife", "Natal", 
  "Foz do Iguaçu", "Curitiba", "Gramado", "Campos do Jordão"
];

export default function Clients() {
  return (
    <section id="clientes" className="py-24 bg-[#f3f4f6]/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1a1a1a]">
            Eventos e Instituições Atendidas
          </h2>
          <p className="text-lg text-[#4A4A4A] max-w-3xl mx-auto">
            Temos orgulho de ter registrado momentos importantes para grandes instituições e organizadoras de eventos em todo o país.
          </p>
        </div>
      </div>

      {/* Logo Carousel */}
      <div className="relative w-full overflow-hidden py-10 bg-white border-y border-gray-100">
        <div className="flex w-max animate-marquee">
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center min-w-[150px] md:min-w-[200px] px-8 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            >
              <div className="h-20 w-full flex items-center justify-center p-2">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-full max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradient Fade Edges */}
        <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      </div>

      {/* Coverage Map/List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-[#1a1a1a] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Cobertura Nacional
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                Atendemos eventos em toda a região Sul do Brasil, além dos estados de São Paulo e Rio de Janeiro, com estrutura preparada para deslocamento.
              </p>
              <div className="flex flex-wrap gap-3">
                {cities.map((city, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-sm text-gray-200 border border-white/10">
                    <MapPin size={12} className="text-[#D4AF37]" />
                    {city}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative h-64 md:h-full min-h-[300px] rounded-xl overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop" 
                 alt="City skyline" 
                 className="absolute inset-0 w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
