import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const differentials = [
  "Mais de 15 anos de experiência em eventos corporativos",
  "Especialização em eventos científicos e médicos",
  "Equipe coordenada por fotógrafos profissionais",
  "Cobertura discreta e eficiente",
  "Entrega rápida de imagens",
  "Estrutura para atendimento de eventos de qualquer porte"
];

export default function Differentials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6">
              Por que escolher a Foto Congresso
            </h2>
            <p className="text-lg text-[#4A4A4A] mb-8">
              Nossa experiência e dedicação garantem que você tenha a melhor cobertura para o seu evento, sem preocupações.
            </p>
            
            <div className="space-y-4">
              {differentials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-yellow-50 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-[#4A4A4A] font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="https://github.com/thebabirosa/images/blob/main/fotocongresso%20(7).jpg?raw=true"
              alt="Conference audience"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white max-w-xs">
              <p className="font-serif text-2xl italic">"Capturando a essência do seu evento com precisão."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
