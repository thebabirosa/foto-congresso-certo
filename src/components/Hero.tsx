import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://github.com/thebabirosa/images/blob/main/fotocongresso%20(11).jpg?raw=true"
          alt="Conference Hall"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#1a1a1a]/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium tracking-wider mb-6">
            Desde 2008
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
            <span className="text-white">Fotografia Profissional para</span> <br className="hidden md:block" />
            <span className="text-white">
              Congressos e Eventos
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Especialistas em fotografia de congressos, conferências, feiras e eventos empresariais. 
            Capturamos com precisão e profissionalismo os momentos que representam o crescimento do seu evento.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contato"
              className="group relative px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white rounded-full font-semibold text-lg overflow-hidden transition-all hover:shadow-[0_0_40px_-10px_rgba(212,175,55,0.5)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Solicitar Orçamento
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 rounded-full font-medium text-white border border-white/30 hover:bg-white/10 transition-colors"
            >
              Ver Portfólio
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
