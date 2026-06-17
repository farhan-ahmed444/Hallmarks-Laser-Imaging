import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowLeft, HiCheck, HiCube } from 'react-icons/hi';
import Button from '../components/ui/Button';
import QuoteCTA from '../components/sections/QuoteCTA';
import { servicesData } from '../data';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = servicesData.find((s) => s.id === serviceId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
          <Button href="/services" variant="primary">Back to Services</Button>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="pt-20">
      <section className="relative py-32 overflow-hidden bg-bg-dark">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-bg-dark z-10" />
          <div className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80')" }} />
        </div>
        <div className="container-wide relative z-20">
          <Link to="/services" className="inline-flex items-center gap-2 text-body/60 hover:text-accent text-sm mb-8 transition-colors">
            <HiArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Icon className="w-8 h-8 text-accent" />
              </div>
              <div>
                <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">Our Service</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-body leading-relaxed max-w-2xl">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80')" }}
                />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">Features & Benefits</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Why Choose Our {service.title}?</h2>
              <p className="text-body leading-relaxed mb-8">
                Our precision laser technology ensures permanent, high-quality marking that withstands extreme conditions. Every solution is custom-engineered to your exact specifications.
              </p>
              <div className="space-y-4 mb-8">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <HiCheck className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <span className="text-white text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Button href="/request-quote" variant="primary" size="lg">Request a Quote</Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-dark">
        <div className="container-wide">
          <h2 className="text-3xl font-extrabold text-white mb-8">Available Materials</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {service.materials.map((material, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-4 rounded-xl bg-section-alt border border-border text-center group hover:border-accent/30 transition-all"
              >
                <HiCube className="w-6 h-6 text-accent mx-auto mb-2" />
                <span className="text-white text-sm font-semibold">{material}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <QuoteCTA />
    </div>
  );
}
