import { Check, Zap, Shield, Infinity, RefreshCw, FileCheck, Clock } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'BM COM GASTOS',
    description: 'Pronto para escalar HOJE, sem espera.',
    color: 'yellow'
  },
  {
    icon: Shield,
    title: 'GOOGLE ADS COM GASTOS',
    description: 'Histórico limpo, sem revisões manuais.',
    color: 'green'
  },
  {
    icon: Infinity,
    title: 'BM NOLIMIT (2024/2025 c/10 CA\'s)',
    description: 'Escala infinita, sem bloqueios.',
    color: 'yellow'
  },
  {
    icon: RefreshCw,
    title: 'PERFIL REESTABELECIDO',
    description: 'Volta à ativa em 24h, sem burocracia.',
    color: 'green'
  },
  {
    icon: FileCheck,
    title: 'PERFIL VERIFICADO C/DOC',
    description: 'Compliance total, zero risco de ban.',
    color: 'yellow'
  },
  {
    icon: Clock,
    title: 'PÁGINAS ANTIGAS (ALTERA NOME)',
    description: 'Herança digital pronta para usar.',
    color: 'green'
  }
];

export default function Benefits() {
  return (
    <section id="beneficios" className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255, 215, 0, 0.03) 2px,
            rgba(255, 215, 0, 0.03) 4px
          )`
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            POR QUE <span className="text-yellow-400">MILHARES DE ANUNCIANTES</span>
            <br />
            ESCOLHEM COLOMBELLI?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-green-400 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group relative bg-gray-900/50 backdrop-blur-sm border-2 ${
                benefit.color === 'yellow' ? 'border-yellow-500/30 hover:border-yellow-500' : 'border-green-500/30 hover:border-green-500'
              } rounded-xl p-6 sm:p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                benefit.color === 'yellow' ? 'hover:shadow-yellow-500/50' : 'hover:shadow-green-500/50'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`absolute top-0 left-0 w-32 h-32 ${
                  benefit.color === 'yellow' ? 'bg-yellow-500/10' : 'bg-green-500/10'
                } rounded-full blur-3xl`}></div>
              </div>

              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-14 h-14 ${
                  benefit.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-green-500/20 text-green-400'
                } rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon size={28} strokeWidth={2.5} />
                </div>

                <div className="flex items-start gap-3 mb-3">
                  <Check className={`${
                    benefit.color === 'yellow' ? 'text-yellow-400' : 'text-green-400'
                  } flex-shrink-0 mt-1`} size={24} strokeWidth={3} />
                  <h3 className="text-white text-lg font-bold leading-tight">
                    {benefit.title}
                  </h3>
                </div>

                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className={`absolute bottom-0 right-0 w-20 h-20 ${
                benefit.color === 'yellow' ? 'border-yellow-500/20' : 'border-green-500/20'
              } border-t-2 border-l-2 rounded-tl-3xl`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
