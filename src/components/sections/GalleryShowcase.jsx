import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiX, HiSearch } from 'react-icons/hi';
import SectionTitle from '../ui/SectionTitle';

gsap.registerPlugin(ScrollTrigger);

const galleryData = [
  { id: 1, category: 'Laser Marking', title: 'Precision Laser Engraving' },
  { id: 2, category: 'Nameplates', title: 'Industrial Nameplates' },
  { id: 3, category: 'Tags', title: 'Asset Tracking Tags' },
  { id: 4, category: 'Labels', title: 'Barcode Labels' },
  { id: 5, category: 'Signage', title: 'Industrial Signage' },
  { id: 6, category: 'Laser Marking', title: 'Aerospace Components' },
  { id: 7, category: 'Nameplates', title: 'Custom Data Plates' },
  { id: 8, category: 'Tags', title: 'RFID Asset Tags' },
];

const categories = ['All', ...new Set(galleryData.map((g) => g.category))];

const galleryImages = [
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
];

export default function GalleryShowcase() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);
  const gridRef = useRef(null);

  const filtered = activeFilter === 'All'
    ? galleryData
    : galleryData.filter((g) => g.category === activeFilter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(gridRef.current.children, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    });

    return () => ctx.revert();
  }, [activeFilter]);

  return (
    <section className="section-padding bg-section-alt relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,194,255,0.02)_0%,_transparent_70%)]" />
      <div className="container-wide">
        <SectionTitle
          title="Project Gallery"
          subtitle="Browse our portfolio of precision laser marking and identification projects across industries."
        />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-accent text-primary shadow-lg shadow-accent/25'
                  : 'bg-bg-dark text-body border border-border hover:border-accent/30 hover:text-accent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="wait">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`cursor-pointer group rounded-xl overflow-hidden border border-border ${
                  i === 0 ? 'lg:row-span-2 lg:col-span-2' : ''
                } ${i === 5 ? 'lg:col-span-2' : ''}`}
                onClick={() => setLightbox(item)}
              >
                <div className="relative aspect-[4/3] h-full">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url('${galleryImages[i % galleryImages.length]}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-accent/20 border-2 border-accent/50 flex items-center justify-center backdrop-blur-sm">
                      <HiSearch className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-accent text-xs font-semibold tracking-wider uppercase bg-accent/10 px-2 py-1 rounded">{item.category}</span>
                    <h4 className="text-white font-bold text-sm mt-2">{item.title}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 border border-border flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
              onClick={() => setLightbox(null)}
            >
              <HiX className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video rounded-2xl overflow-hidden border border-border mb-6 shadow-2xl shadow-accent/10">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80')` }}
                />
              </div>
              <div className="text-center">
                <span className="inline-block text-accent text-xs font-semibold tracking-wider uppercase bg-accent/10 border border-accent/20 px-3 py-1 rounded-full mb-3">
                  {lightbox.category}
                </span>
                <h3 className="text-white text-2xl font-bold">{lightbox.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
