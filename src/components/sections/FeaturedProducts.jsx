import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiArrowRight } from 'react-icons/hi';
import SectionTitle from '../ui/SectionTitle';
import Card3D from '../ui/Card3D';
import { productsData } from '../../data';

gsap.registerPlugin(ScrollTrigger);

const categories = ['All', 'Nameplates', 'Labels', 'Tags', 'Panels'];

const productImages = [
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80',
];

export default function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState('All');
  const productsRef = useRef(null);

  const filtered = activeCategory === 'All'
    ? productsData
    : productsData.filter(p => p.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(productsRef.current.children, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: productsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    });

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section className="section-padding bg-bg-dark relative overflow-hidden">
      <div className="container-wide">
        <SectionTitle
          title="Featured Products"
          subtitle="Explore our premium range of industrial identification products, engineered for precision and durability."
        />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-accent text-primary shadow-lg shadow-accent/25'
                  : 'bg-section-alt text-body border border-border hover:border-accent/30 hover:text-accent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div ref={productsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Card3D className="group h-full">
                  <div className="relative h-full p-6 rounded-2xl bg-section-alt border border-border hover:border-accent/30 transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                      <div className="aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-secondary/50 border border-border">
                        <div
                          className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                          style={{ backgroundImage: `url('${productImages[i % productImages.length]}')` }}
                        />
                      </div>
                      <span className="inline-block text-xs text-accent font-semibold tracking-wider uppercase bg-accent/10 border border-accent/20 rounded-full px-3 py-1 mb-3">
                        {product.category}
                      </span>
                      <h3 className="text-lg font-bold text-white mt-1 mb-2 group-hover:text-accent transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-body/70 text-sm leading-relaxed">
                        {product.description}
                      </p>
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
      </div>
    </section>
  );
}
