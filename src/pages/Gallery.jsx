import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import { galleryData } from '../data';

const categories = ['All', ...new Set(galleryData.map((g) => g.category))];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = activeFilter === 'All'
    ? galleryData
    : galleryData.filter((g) => g.category === activeFilter);

  return (
    <div className="pt-20">
      <section className="relative py-32 overflow-hidden bg-bg-dark">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-bg-dark z-10" />
          <div className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80')" }} />
        </div>
        <div className="container-wide relative z-20 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-6 block">Our Work</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Project<br /><span className="text-gradient">Gallery</span>
            </h1>
            <p className="text-lg md:text-xl text-body leading-relaxed max-w-2xl mx-auto">
              Browse our portfolio of precision laser marking and identification projects spanning multiple industries.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === cat ? 'bg-accent text-primary' : 'bg-bg-dark text-body border border-border hover:border-accent/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <AnimatePresence mode="wait">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`cursor-pointer group rounded-xl overflow-hidden border border-border ${
                    i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                  } ${i % 5 === 0 ? 'lg:col-span-2' : ''}`}
                  onClick={() => setLightbox(item)}
                >
                  <div className={`relative ${i === 0 ? 'aspect-[4/3]' : 'aspect-[4/3]'}`}>
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-accent text-xs font-semibold tracking-wider">{item.category}</span>
                      <h4 className="text-white font-bold text-sm mt-1">{item.title}</h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors" onClick={() => setLightbox(null)}>
              <HiX className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video rounded-2xl overflow-hidden border border-border mb-6">
                <div className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80')` }} />
              </div>
              <div className="text-center">
                <span className="text-accent text-sm font-semibold tracking-wider">{lightbox.category}</span>
                <h3 className="text-white text-2xl font-bold mt-2">{lightbox.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
