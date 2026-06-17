import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSearch, HiArrowRight } from 'react-icons/hi';
import Card3D from '../components/ui/Card3D';
import QuoteCTA from '../components/sections/QuoteCTA';
import { productsData } from '../data';

const categories = ['All', 'Nameplates', 'Labels', 'Tags', 'Panels'];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = productsData
    .filter((p) => activeCategory === 'All' || p.category === activeCategory)
    .filter((p) => p.title.toLowerCase().includes(searchQuery.toLowerCase()));

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
            <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-6 block">Our Products</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Premium Industrial<br /><span className="text-gradient">Identification Products</span>
            </h1>
            <p className="text-lg md:text-xl text-body leading-relaxed max-w-2xl mx-auto">
              Engineered for precision, built for durability. Explore our complete range of industrial identification solutions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    activeCategory === cat
                      ? 'bg-accent text-primary'
                      : 'bg-bg-dark text-body border border-border hover:border-accent/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-72">
              <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-body/40" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-bg-dark border border-border rounded-xl text-white text-sm focus:outline-none focus:border-accent/50 transition-colors placeholder:text-body/30"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Card3D className="group h-full">
                    <div className="relative h-full p-6 rounded-2xl bg-bg-dark border border-border hover:border-accent/30 transition-all duration-500 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative z-10">
                        <div className="aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-secondary/50 border border-border">
                          <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80')` }} />
                        </div>
                        <span className="text-xs text-accent font-semibold tracking-wider uppercase">{product.category}</span>
                        <h3 className="text-lg font-bold text-white mt-2 mb-2 group-hover:text-accent transition-colors">{product.title}</h3>
                        <p className="text-body/70 text-sm leading-relaxed">{product.description}</p>
                        <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold mt-4 group-hover:gap-3 transition-all">
                          View Details <HiArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Card3D>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-body/60 text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      <QuoteCTA />
    </div>
  );
}
