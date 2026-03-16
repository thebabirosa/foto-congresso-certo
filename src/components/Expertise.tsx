import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const expertiseItems = [
  "Congressos médicos",
  "Eventos científicos",
  "Feiras e exposições",
  "Conferências e fóruns",
  "Workshops e seminários",
  "Eventos corporativos",
  "Rodadas de negócios",
  "Eventos institucionais"
];

export default function Expertise() {
  return (
    <section className="py-20 bg-[#f3f4f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
            Fotografia especializada em eventos técnicos e científicos
          </h2>
          <p className="text-lg text-[#4A4A4A]">
            Eventos técnicos exigem sensibilidade, discrição e agilidade para registrar momentos importantes sem interferir na dinâmica do evento.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-center gap-3"
            >
              <CheckCircle2 className="text-[#D4AF37] shrink-0" size={20} />
              <span className="font-medium text-[#1a1a1a]">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
