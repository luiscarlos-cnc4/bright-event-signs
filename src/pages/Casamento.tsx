import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Hero from '@/components/casamento/Hero';
import Features from '@/components/casamento/Features';
import GallerySection from '@/components/casamento/GallerySection';
import Testimonials from '@/components/casamento/Testimonials';
import HowItWorks from '@/components/casamento/HowItWorks';
import FAQ from '@/components/casamento/FAQ';
import FooterSection from '@/components/casamento/FooterSection';

const Casamento = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Casamentos – Letras Iluminadas | Vegas Letras</title>
        <meta
          name="description"
          content="Letras iluminadas elegantes para casamentos. Crie um cenário memorável com Vegas Letras. Orçamentos rápidos via WhatsApp."
        />
        <link rel="canonical" href="https://www.vegasletras.com.br/casamentos" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Letras Iluminadas para Casamentos",
              provider: { "@type": "Organization", name: "Vegas Letras" },
              areaServed: "Piracicaba, SP e região",
              serviceType: "Decoração de casamentos",
              url: "https://www.vegasletras.com.br/casamentos",
            }),
          }}
        />
      </Helmet>

      <div className="wedding-theme bg-black min-h-screen font-inter">
        <Hero />
        <Features />
        <GallerySection />
        <Testimonials />
        <HowItWorks />
        <FAQ />
        <FooterSection />
      </div>
    </HelmetProvider>
  );
};

export default Casamento;