import { Rocket, ArrowRight, Lock } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="cta" className="relative py-24 bg-gradient-to-b from-black via-yellow-950/10 to-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/10 rounded-full blur-[150px] animate-pulse"></div>
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-yellow-500/20 rotate-45"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border-2 border-green-500/20 rotate-12"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border-2 border-yellow-500/10 rotate-[30deg]"></div>
        <div className="absolute bottom-10 right-1/3 w-28 h-28 border-2 border-green-500/10 rotate-45"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-gray-900 via-yellow-950/20 to-gray-900 border-4 border-yellow-500/50 rounded-3xl p-8 sm:p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl shadow-yellow-500/30">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(255, 215, 0, 0.1) 10px,
                rgba(255, 215, 0, 0.1) 20px
              )`
            }}></div>
          </div>

          <div className="relative z-10">
            <Rocket className="text-yellow-400 mx-auto mb-6 animate-bounce" size={64} strokeWidth={2} />

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              PRONTOS PARA <span className="text-yellow-400">ESCALAR?</span>
            </h2>

            <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Garanta seu acesso premium enquanto há vagas disponíveis.<br />
              <span className="text-yellow-400 font-bold">Não deixe para amanhã.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-green-400">
                <Lock size={20} />
                <span className="font-semibold">Pagamento Seguro</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-gray-700"></div>
              <div className="flex items-center gap-2 text-green-400">
                <Lock size={20} />
                <span className="font-semibold">Garantia 7 Dias</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-gray-700"></div>
              <div className="flex items-center gap-2 text-green-400">
                <Lock size={20} />
                <span className="font-semibold">Suporte 24/7</span>
              </div>
            </div>

            <a
              href="https://wa.me/555198913093?text=Quero%20garantir%20minha%20BM%20Premium"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black px-12 py-7 rounded-2xl text-xl sm:text-2xl font-black hover:from-yellow-300 hover:via-yellow-400 hover:to-yellow-300 transition-all hover:shadow-[0_0_60px_rgba(255,215,0,1)] hover:scale-105 transform duration-300 group animate-pulse hover:animate-none"
            >
              <span className="text-3xl">🚀</span>
              GARANTA SEU BM PREMIUM — ÚLTIMAS 9 VAGAS
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={28} strokeWidth={3} />
            </a>

            <p className="text-gray-400 text-sm mt-6">
              ⚡ Clique acima e fale direto com nossa equipe via WhatsApp
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Online agora</span>
          </div>
          <span>•</span>
          <span>Resposta em até 5 minutos</span>
          <span>•</span>
          <span>Sem compromisso</span>
        </div>
      </div>
    </section>
  );
}
