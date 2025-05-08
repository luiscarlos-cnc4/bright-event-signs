
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ChaRevelacao = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Conteúdo da página será adicionado aqui */}
      </main>
      <Footer />
    </div>
  );
};

export default ChaRevelacao;
