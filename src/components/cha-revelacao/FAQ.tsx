
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [activeFAQIndex, setActiveFAQIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "Vocês atendem cidades próximas de Piracicaba?",
      answer: "Sim! Atendemos Piracicaba e região: Santa Bárbara d’Oeste, Limeira, Rio Claro, Americana e cidades próximas. Consulte a taxa de deslocamento."
    },
    {
      question: "Qual o valor da locação do letreiro luminoso em Piracicaba?",
      answer: "O valor varia conforme o modelo do letreiro, duração do evento e data. Envie sua data e bairro no WhatsApp para um orçamento rápido e sem compromisso."
    },
    {
      question: "Com quanto tempo de antecedência devo reservar?",
      answer: "Recomendamos de 2 a 4 semanas de antecedência para garantir disponibilidade, especialmente em datas disputadas."
    },
    {
      question: "Qual o tamanho das letras?",
      answer: "As letras possuem 1 metro de altura e a largura varia conforme a letra, em média também em torno de 1 metro."
    }, 
    {
      question: "Como faço para reservar o letreiro?",
      answer: "Fale conosco pelo WhatsApp e confirme sua data. Enviamos todas as orientações para a reserva."
    }, 
    {
      question: "Quanto tempo dura a locação?",
      answer: "A locação padrão é de 5 horas, podendo ser ajustada de acordo com a sua necessidade."
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
    <section className="py-12 md:py-16 px-4 bg-black">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 md:mb-16 text-center text-white">
          DÚVIDAS<br />
          FREQUENTES
        </h2>
        
        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-white/10 rounded overflow-hidden">
              <button 
                className="w-full px-4 md:px-6 py-3 md:py-4 text-left flex justify-between items-center focus:outline-none" 
                onClick={() => toggleFAQ(index)}
              >
                <span className={`text-base md:text-xl font-medium ${index % 2 === 0 ? "text-[#FF00FF]" : "text-[#00BFFF]"}`}>
                  {faq.question}
                </span>
                <span className={`text-xl md:text-2xl ${index % 2 === 0 ? "text-[#FF00FF]" : "text-[#00BFFF]"}`}>
                  {activeFAQIndex === index ? "▼" : "▲"}
                </span>
              </button>
              {activeFAQIndex === index && (
                <div className="px-4 md:px-6 py-3 md:py-4 bg-gray-800/30">
                  <p className="text-white text-sm md:text-base">{faq.answer}</p>
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
