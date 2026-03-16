import { motion } from 'motion/react';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Como Preparar seu Evento para Fotografia Profissional',
    excerpt: 'Descubra os elementos-chave a considerar ao planejar seu evento para garantir que a equipe de fotografia possa capturar os melhores momentos sem interromper o fluxo.',
    category: 'Planejamento',
    date: '15 Out, 2023',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop',
    link: '#'
  },
  {
    id: 2,
    title: 'A Importância de Capturar Momentos de Networking',
    excerpt: 'O networking é frequentemente a parte mais valiosa de qualquer evento corporativo. Saiba por que documentar essas interações espontâneas é crucial para o seu marketing pós-evento.',
    category: 'Corporativo',
    date: '02 Nov, 2023',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop',
    link: '#'
  },
  {
    id: 3,
    title: 'Escolhendo o Fotógrafo Certo para seu Evento Corporativo',
    excerpt: 'Nem todos os fotógrafos são adequados para ambientes corporativos dinâmicos. Aqui está um guia sobre o que procurar ao contratar um profissional para sua próxima grande conferência.',
    category: 'Guia',
    date: '28 Nov, 2023',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    link: '#'
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#c29b40] font-semibold tracking-wider uppercase text-sm"
          >
            Insights & Dicas
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl md:text-4xl font-serif font-bold text-slate-900"
          >
            Últimas do Nosso Blog
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-slate-600"
          >
            Conselhos de especialistas, tendências do setor e os bastidores da fotografia profissional de eventos.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="relative h-60 overflow-hidden group">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-900 flex items-center gap-1">
                  <Tag size={12} />
                  {post.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                  <Calendar size={14} />
                  <time dateTime={post.date}>{post.date}</time>
                </div>
                
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3 line-clamp-2 hover:text-[#c29b40] transition-colors">
                  <a href={post.link}>{post.title}</a>
                </h3>
                
                <p className="text-slate-600 mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                
                <a 
                  href={post.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#c29b40] hover:text-[#a68434] transition-colors mt-auto group"
                >
                  Ler Artigo
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-8 py-3 border border-slate-200 rounded-full text-base font-medium text-slate-700 bg-white hover:bg-slate-50 hover:text-slate-900 transition-colors"
          >
            Ver Todos os Posts
          </a>
        </motion.div>
      </div>
    </section>
  );
}
