import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { HiStar } from 'react-icons/hi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTitle from '../ui/SectionTitle';

import 'swiper/css';
import 'swiper/css/pagination';

gsap.registerPlugin(ScrollTrigger);

const testimonialsData = [
  { name: 'Robert Kline', company: 'Aerospace Dynamics Corp', quote: 'Hallmarks Laser Imaging has been our trusted partner for identification solutions for over 15 years. Their precision and quality are unmatched in the industry.' },
  { name: 'Jennifer Walsh', company: 'Precision Manufacturing Inc', quote: 'The level of detail and customization they provide is exceptional. Our asset tracking has improved dramatically since switching to Hallmarks.' },
  { name: 'Michael Torres', company: 'Defense Systems International', quote: 'When you need MIL-SPEC compliance and absolute durability, Hallmarks delivers every time. Their laser marking technology is world-class.' },
  { name: 'Lisa Chang', company: 'MedTech Innovations', quote: 'FDA compliance is critical for us. Hallmarks understands medical device requirements and delivers consistently perfect results.' },
  { name: 'David Park', company: 'Global Energy Solutions', quote: 'Our components operate in extreme environments, and Hallmarks markings have never failed. Exceptional durability and precision.' },
  { name: 'Sarah O\'Brien', company: 'Commercial Dynamics LLC', quote: 'The team at Hallmarks went above and beyond to deliver a custom solution that perfectly matched our branding requirements.' },
];

export default function TestimonialsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,194,255,0.03)_0%,_transparent_70%)]" />
      <div className="container-wide relative z-10">
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Trusted by industry leaders across manufacturing, aerospace, defense, and medical sectors."
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !bg-accent/50 !opacity-100',
            bulletActiveClass: '!bg-accent !w-8 !rounded-full',
          }}
          className="pb-14"
        >
          {testimonialsData.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <motion.div
                className="p-8 rounded-2xl bg-section-alt border border-border h-full flex flex-col"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <HiStar key={j} className="w-4 h-4 text-accent" />
                  ))}
                </div>
                <p className="text-body text-sm leading-relaxed mb-6 flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-border mt-auto">
                  <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center shrink-0">
                    <span className="text-accent font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                    <p className="text-body/60 text-xs">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
