import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleWhatsApp = () => {
    const message = "Olá, gostaria de solicitar um orçamento para um evento.";
    window.open(`https://wa.me/5548998377929?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-[#f3f4f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6">
              Solicite um orçamento para o seu evento
            </h2>
            <p className="text-lg text-[#4A4A4A] mb-10">
              Se você está organizando um congresso, feira ou evento corporativo, conte com uma equipe especializada em registrar cada momento com qualidade e profissionalismo.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#D4AF37] shadow-sm shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1a1a1a] text-lg">Email</h3>
                  <p className="text-[#4A4A4A]">samantasavordelli@fotocongresso.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#D4AF37] shadow-sm shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1a1a1a] text-lg">Telefone / WhatsApp</h3>
                  <p className="text-[#4A4A4A]">(48) 99837-7929</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#D4AF37] shadow-sm shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1a1a1a] text-lg">Atendimento</h3>
                  <p className="text-[#4A4A4A]">Sul, Sudeste e principais capitais do Brasil</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
               <button 
                 onClick={handleWhatsApp}
                 className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full font-semibold hover:bg-[#20bd5a] transition-colors shadow-sm"
               >
                 <MessageCircle size={20} />
                 Falar no WhatsApp
               </button>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 min-h-[500px] relative overflow-hidden">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#4A4A4A] mb-2">Nome</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D4AF37] focus:ring-2 focus:ring-yellow-100 outline-none transition-all" placeholder="Seu nome" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#4A4A4A] mb-2">Empresa</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D4AF37] focus:ring-2 focus:ring-yellow-100 outline-none transition-all" placeholder="Nome da empresa" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#4A4A4A] mb-2">Email</label>
                      <input required type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D4AF37] focus:ring-2 focus:ring-yellow-100 outline-none transition-all" placeholder="seu@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#4A4A4A] mb-2">Telefone</label>
                      <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D4AF37] focus:ring-2 focus:ring-yellow-100 outline-none transition-all" placeholder="(00) 00000-0000" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#4A4A4A] mb-2">Tipo de Evento</label>
                      <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D4AF37] focus:ring-2 focus:ring-yellow-100 outline-none transition-all bg-white">
                        <option>Congresso</option>
                        <option>Feira / Exposição</option>
                        <option>Evento Corporativo</option>
                        <option>Outro</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#4A4A4A] mb-2">Data do Evento</label>
                      <input type="date" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D4AF37] focus:ring-2 focus:ring-yellow-100 outline-none transition-all" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#4A4A4A] mb-2">Mensagem</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D4AF37] focus:ring-2 focus:ring-yellow-100 outline-none transition-all" placeholder="Conte mais sobre o evento..."></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#1a1a1a] text-white rounded-lg font-semibold hover:bg-[#4A4A4A] transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Solicitação
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">Solicitação Enviada!</h3>
                  <p className="text-[#4A4A4A] mb-8">
                    Obrigado pelo interesse. Recebemos seus dados e entraremos em contato em breve pelo email ou telefone informado.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                  >
                    Enviar nova mensagem
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
