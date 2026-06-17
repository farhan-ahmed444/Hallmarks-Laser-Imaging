import { useEffect } from 'react';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import AboutSection from '../components/sections/AboutSection';
import IndustriesSection from '../components/sections/IndustriesSection';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import FeaturedProducts from '../components/sections/FeaturedProducts';
import ProcessSection from '../components/sections/ProcessSection';
import ManufacturingCapability from '../components/sections/ManufacturingCapability';
import GalleryShowcase from '../components/sections/GalleryShowcase';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import QuoteCTA from '../components/sections/QuoteCTA';
import ContactPreview from '../components/sections/ContactPreview';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <IndustriesSection />
      <WhyChooseUs />
      <FeaturedProducts />
      <ProcessSection />
      <ManufacturingCapability />
      <GalleryShowcase />
      <TestimonialsSection />
      <QuoteCTA />
      <ContactPreview />
    </>
  );
}
