
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [activeFAQIndex, setActiveFAQIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "Qual o tamanho das letras?",
      answer: "As letras possuem 1 metro de altura, já a largura varia de acordo com cada letra, mas na média fica em torno de 1 metro também."
    }, 
    {
      question: "Como faço para reservar o letreiro?",
      answer: "Para reservar o letreiro, basta entrar em contato conosco pelo WhatsApp e fazer sua reserva."
    }, 
    {
      question: "Quanto tempo antes devo reservar?",
      answer: "Recomendamos que você faça sua reserva com pelo menos 2 semanas de antecedência para garantir a disponibilidade."
    }, 
    {
      question: "Quanto tempo dura a locação?",
      answer: "A locação padrão é de 24 horas, mas podemos ajustar de acordo com sua necessidade."
    }, 
    {
      question: "Vocês entregam em qualquer lugar?",
      answer: "Entregamos em Campinas e região. Para locais mais distantes, entre em contato para verificar a disponibilidade."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    if (activeFAQIndex === index) {
      setActiveFAQIndex(null);
    } else {
      setActiveFAQIndex(index);
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center text-white">
          DÚVIDAS<br />
          FREQUENTES
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-white/10 rounded overflow-hidden">
              <button 
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none" 
                onClick={() => toggleFAQ(index)}
              >
                <span className={`text-xl font-medium ${index % 2 === 0 ? "text-[#FF00FF]" : "text-[#00BFFF]"}`}>
                  {faq.question}
                </span>
                <span className={`text-2xl ${index % 2 === 0 ? "text-[#FF00FF]" : "text-[#00BFFF]"}`}>
                  {activeFAQIndex === index ? "▼" : "▲"}
                </span>
              </button>
              {activeFAQIndex === index && (
                <div className="px-6 py-4 bg-gray-800/30">
                  <p className="text-white">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
