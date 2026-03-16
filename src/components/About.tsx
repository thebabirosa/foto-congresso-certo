import { motion } from 'motion/react';
import { Award, Users, Camera } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1a1a1a]">
              Especialistas em Fotografia de Eventos desde 2008
            </h2>
            <div className="space-y-6 text-lg text-[#4A4A4A] leading-relaxed">
              <p>
                A <strong>Foto Congresso</strong> foi criada em 2008 e é coordenada por dois fotógrafos profissionais com ampla experiência em eventos técnicos, científicos e corporativos.
              </p>
              <p>
                Ao longo dos anos, desenvolvemos expertise na cobertura de congressos médicos, feiras de negócios, seminários e eventos institucionais.
              </p>
              <p>
                Nosso trabalho vai além de registrar imagens: buscamos capturar a essência de cada evento, traduzindo em fotografia o impacto, a relevância e os resultados do seu planejamento.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="flex flex-col gap-2">
                <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center text-[#D4AF37] mb-2">
                  <Award size={24} />
                </div>
                <h3 className="font-bold text-[#1a1a1a]">15+ Anos</h3>
                <p className="text-sm text-gray-500">De experiência no mercado</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-[#1a1a1a] mb-2">
                  <Users size={24} />
                </div>
                <h3 className="font-bold text-[#1a1a1a]">Equipe Expert</h3>
                <p className="text-sm text-gray-500">Fotógrafos profissionais</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://github.com/thebabirosa/images/blob/main/fotocongresso%20(17).jpg?raw=true"
                alt="Photographer at event"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#1a1a1a] rounded-full text-white">
                  <Camera size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1a1a1a] mb-1">Qualidade Premium</h4>
                  <p className="text-sm text-gray-500">Equipamentos de última geração para resultados impecáveis.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
