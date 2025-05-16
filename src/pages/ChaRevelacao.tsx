
import React from 'react';
import Hero from '@/components/cha-revelacao/Hero';
import Features from '@/components/cha-revelacao/Features';
import GallerySection from '@/components/cha-revelacao/GallerySection';
import Testimonials from '@/components/cha-revelacao/Testimonials';
import HowItWorks from '@/components/cha-revelacao/HowItWorks';
import FAQ from '@/components/cha-revelacao/FAQ';
import FooterSection from '@/components/cha-revelacao/FooterSection';

const ChaRevelacao = () => {
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

export default ChaRevelacao;
