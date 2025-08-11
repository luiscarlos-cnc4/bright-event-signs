
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Hero from '@/components/cha-revelacao/Hero';
import Features from '@/components/cha-revelacao/Features';
import GallerySection from '@/components/cha-revelacao/GallerySection';
import Testimonials from '@/components/cha-revelacao/Testimonials';
import HowItWorks from '@/components/cha-revelacao/HowItWorks';
import FAQ from '@/components/cha-revelacao/FAQ';
import FooterSection from '@/components/cha-revelacao/FooterSection';
import AboutLocal from '@/components/cha-revelacao/AboutLocal';

const ChaRevelacao = () => {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Vegas Letras - Letreiros Luminosos para Chá Revelação em Piracicaba</title>
          <meta name="description" content="Locação de letreiros luminosos em Piracicaba para chá revelação. Torne seu momento inesquecível com a Vegas Letras. Reserve agora!" />
          <link rel="canonical" href="https://vegasletras.com.br/cha-revelacao" />
          <link rel="preload" as="image" href="/lovable-uploads/3fa7bc2b-9a33-4f51-b430-30e809ef94af.png" />
          <script type="application/ld+json">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Vegas Letras',
              url: 'https://vegasletras.com.br/cha-revelacao',
              image: 'https://vegasletras.com.br/lovable-uploads/3fa7bc2b-9a33-4f51-b430-30e809ef94af.png',
              telephone: '+55 19 99695-1746',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Piracicaba',
                addressRegion: 'SP',
                addressCountry: 'BR'
              },
              areaServed: ['Piracicaba', 'Santa Bárbara d\'Oeste', 'Limeira', 'Rio Claro', 'Americana'],
              priceRange: '$$',
              sameAs: [
                'https://www.instagram.com/vegasletras/'
              ]
            })}
          </script>
        </Helmet>
        <div className="bg-black min-h-screen">
          <Hero />
          <Features />
          <GallerySection />
          <Testimonials />
          <HowItWorks />
          <AboutLocal />
          <FAQ />
          <FooterSection />
        </div>
      </>
    </HelmetProvider>
  );
};

export default ChaRevelacao;
