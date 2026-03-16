import { motion } from 'motion/react';
import { Camera, Zap, MonitorPlay, Printer, Share2 } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: "Cobertura Fotográfica",
    description: "Registro completo de eventos corporativos, congressos, seminários, feiras e eventos institucionais."
  },
  {
    icon: Zap,
    title: "Entrega Rápida",
    description: "Estrutura preparada para entrega diária das imagens ou ao final do evento, atendendo prazos de divulgação."
  },
  {
    icon: MonitorPlay,
    title: "Tempo Real",
    description: "Disponibilizamos estrutura para tratamento e entrega de imagens em tempo real durante o evento."
  },
  {
    icon: Printer,
    title: "Fotos Impressas",
    description: "Produção de fotos impressas e lembranças fotográficas para participantes e convidados."
  },
  {
    icon: Share2,
    title: "Redes Sociais",
    description: "Imagens otimizadas para divulgação em redes sociais e comunicação institucional."
  }
];

export default function Services() {
  return (
    <section id="servicos" className="relative py-24 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://github.com/thebabirosa/images/blob/main/fotocongresso%20(9).jpg?raw=true"
          alt="Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/85 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] font-medium tracking-wider text-sm">O que oferecemos</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-white">Serviços de Fotografia para Eventos</h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group"
            >
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors text-white">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
