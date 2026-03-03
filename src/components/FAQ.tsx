import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'É seguro? Posso ser banido?',
    answer: 'Todos nossos BMs são fornecidos por parceiros autorizados — compliance total. Se for banido, devolvemos 100%.'
  },
  {
    question: 'Como funciona a entrega?',
    answer: 'Em até 24h, via email criptografado. Sem burocracia, sem documentos.'
  },
  {
    question: 'Tem garantia?',
    answer: 'Sim. 7 dias de garantia incondicional — se não funcionar, devolvemos seu dinheiro.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, rgba(255, 215, 0, 0.15) 1px, transparent 0)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            PERGUNTAS FREQUENTES —<br />
            <span className="text-yellow-400">RESPONDIDAS COM TRANSPARÊNCIA</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-green-400 mx-auto mt-6"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-gray-900/50 backdrop-blur-sm border-2 rounded-xl overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? 'border-yellow-500 shadow-lg shadow-yellow-500/20'
                  : 'border-gray-800 hover:border-gray-700'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <span className="text-white text-lg sm:text-xl font-bold pr-4 group-hover:text-yellow-400 transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`text-yellow-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={28}
                  strokeWidth={2.5}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="h-px bg-gradient-to-r from-yellow-500/50 to-transparent mb-4"></div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-500/10 to-transparent border-l-4 border-green-500 rounded-r-xl p-6">
          <p className="text-gray-300 text-lg">
            <span className="text-green-400 font-bold">💡 Ainda tem dúvidas?</span>{' '}
            Nossa equipe responde em até 5 minutos via WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}
