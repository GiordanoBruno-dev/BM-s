import { Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-yellow-500/30 rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-green-500/30 rotate-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 border-2 border-yellow-500/20 rotate-[30deg] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 border-2 border-green-500/20 rotate-45 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="absolute top-1/4 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
          <span className="text-yellow-400 text-sm font-bold tracking-wider">
            ⚡ ACESSO PREMIUM LIBERADO
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-yellow-400 mb-8 leading-tight tracking-tight drop-shadow-[0_0_30px_rgba(255,215,0,0.5)]">
          OS TOP 1% DOS ANUNCIANTES<br />
          JÁ SABEM DISSO
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-white mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          BMs antigos têm até <span className="text-yellow-400 font-bold">70% MAIS aprovação</span> — e essa é a{' '}
          <span className="text-green-400 font-semibold italic">única vantagem justa</span> no jogo do Meta Ads.
        </p>

        <a
          href="#cta"
          className="inline-flex items-center gap-3 bg-yellow-400 text-black px-8 sm:px-12 py-5 sm:py-6 rounded-xl text-lg sm:text-xl font-black hover:bg-yellow-300 transition-all hover:shadow-[0_0_50px_rgba(255,215,0,0.8)] hover:scale-105 transform duration-300 group"
        >
          <span className="text-2xl">🔒</span>
          GARANTA SEU BM PREMIUM AGORA — ÚLTIMAS 9 VAGAS
          <Zap className="group-hover:rotate-12 transition-transform" size={24} />
        </a>

        <p className="text-gray-400 text-sm mt-6">
          <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></span>
          2.347 anunciantes já garantiram acesso
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
