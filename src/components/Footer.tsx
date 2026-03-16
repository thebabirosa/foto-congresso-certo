import { Camera, Instagram, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex items-center gap-2">
            <div className="p-2 bg-white rounded-lg text-[#1a1a1a]">
              <Camera size={24} />
            </div>
            <span className="font-serif text-xl font-bold tracking-tight">
              Foto Congresso
            </span>
          </div>

          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#hero" className="hover:text-white transition-colors">Início</a>
            <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
            <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Portfólio</a>
            <a href="#contato" className="hover:text-white transition-colors">Contato</a>
          </div>

          <div className="flex gap-4">
            <a href="https://www.instagram.com/fotocongresso/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-white transition-all text-gray-400">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-white transition-all text-gray-400">
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-white transition-all text-gray-400">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Foto Congresso. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
