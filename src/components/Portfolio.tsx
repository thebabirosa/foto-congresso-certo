import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

const clients = [
  "Sociedade Brasileira de Farmacêuticos em Oncologia",
  "ABES – Associação Brasileira de Engenharia Sanitária",
  "MCI Brasil",
  "CCM Eventos",
  "FACISC – Federação das Associações Empresariais de SC",
  "ABP – Congresso Brasileiro de Psiquiatria"
];

const cities = [
  "Rio de Janeiro", "Florianópolis", "Cuiabá", "Porto Alegre", 
  "Vitória", "Maceió", "Recife", "Natal", 
  "Foz do Iguaçu", "Curitiba", "Gramado", "Campos do Jordão"
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Eventos e Instituições Atendidas
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Temos orgulho de ter registrado momentos importantes para grandes instituições e organizadoras de eventos em todo o país.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-8 bg-slate-50 rounded-xl flex items-center justify-center text-center border border-slate-100 hover:border-slate-200 transition-colors"
            >
              <span className="font-serif font-medium text-lg text-slate-800">{client}</span>
            </motion.div>
          ))}
        </div>

        {/* Coverage Map/List */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Cobertura Nacional
              </h3>
              <p className="text-slate-300 mb-8 text-lg">
                Atendemos eventos em toda a região Sul do Brasil, além dos estados de São Paulo e Rio de Janeiro, com estrutura preparada para deslocamento.
              </p>
              <div className="flex flex-wrap gap-3">
                {cities.map((city, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-sm text-slate-200 border border-white/10">
                    <MapPin size={12} className="text-amber-400" />
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
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
