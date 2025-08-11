import React from 'react';
import Hero from '@/components/casamento/Hero';
import Features from '@/components/casamento/Features';
import GallerySection from '@/components/casamento/GallerySection';
import Testimonials from '@/components/casamento/Testimonials';
import HowItWorks from '@/components/casamento/HowItWorks';
import FAQ from '@/components/casamento/FAQ';
import FooterSection from '@/components/casamento/FooterSection';

const Casamento = () => {
  return (
    <div className="bg-black min-h-screen">
      <Hero />
      <Features />
      <GallerySection />
      <Testimonials />
      <HowItWorks />
      <FAQ />
      <FooterSection />
    </div>
  );
};

export default Casamento;