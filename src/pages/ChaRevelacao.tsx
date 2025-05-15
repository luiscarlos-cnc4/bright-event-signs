
import React from 'react';
import { toast } from "@/components/ui/use-toast";
import Hero from '@/components/cha-revelacao/Hero';
import Features from '@/components/cha-revelacao/Features';
import GallerySection from '@/components/cha-revelacao/GallerySection';
import Testimonials from '@/components/cha-revelacao/Testimonials';
import HowItWorks from '@/components/cha-revelacao/HowItWorks';
import FAQ from '@/components/cha-revelacao/FAQ';
import FooterSection from '@/components/cha-revelacao/FooterSection';

const ChaRevelacao = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5519996951746?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20locação%20de%20letreiro%20luminoso%20para%20chá%20revelação", "_blank");
  };

  return (
    <div className="bg-vegas-black min-h-screen">
      <Hero onWhatsAppClick={handleWhatsAppClick} />
      <Features onWhatsAppClick={handleWhatsAppClick} />
      <GallerySection />
      <Testimonials onWhatsAppClick={handleWhatsAppClick} />
      <HowItWorks onWhatsAppClick={handleWhatsAppClick} />
      <FAQ />
      <FooterSection />
    </div>
  );
};

export default ChaRevelacao;
