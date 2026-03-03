import { AlertTriangle, Flame, ArrowRight } from 'lucide-react';

export default function Urgency() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-red-950/20 to-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-red-950/30 border-2 border-red-500/50 rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-2xl shadow-red-500/20">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-0 w-40 h-40 border-2 border-red-500/20 rotate-45"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 border-2 border-red-500/20 rotate-45"></div>
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 bg-red-500/20 border border-red-500/50 rounded-full px-6 py-3 mb-8">
              <AlertTriangle className="text-red-400 animate-pulse" size={24} />
              <span className="text-red-400 font-bold text-lg">ALERTA DE MERCADO</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              ⚠️ ALERTA DE MERCADO:<br />
              <span className="text-red-400">ESTOQUE EM QUEDA</span>
            </h2>

            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Desde setembro/2025, a oferta de BMs válidos caiu{' '}
              <span className="text-red-400 font-bold text-3xl">82%</span>.
              <br />
              O próximo lote só em <span className="text-yellow-400 font-bold">2026</span>.
            </p>

            <div className="bg-black/50 border-2 border-yellow-500/50 rounded-2xl p-8 mb-10 inline-block">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Flame className="text-red-500 animate-bounce" size={40} />
                <div className="text-left">
                  <div className="text-gray-400 text-sm font-semibold mb-1">RESTAM APENAS</div>
                  <div className="text-yellow-400 text-6xl font-black leading-none tracking-tighter">9</div>
                </div>
                <div className="text-left">
                  <div className="text-gray-400 text-sm font-semibold mb-1">&nbsp;</div>
                  <div className="text-white text-3xl font-bold leading-none">VAGAS</div>
                </div>
              </div>
              <div className="text-gray-400 text-sm">
                Reservadas por ordem de contato. <span className="text-red-400 font-bold">Sem lista de espera.</span>
              </div>
            </div>

            <a
              href="#cta"
              className="inline-flex items-center gap-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-10 py-6 rounded-xl text-lg sm:text-xl font-black hover:from-yellow-300 hover:to-yellow-400 transition-all hover:shadow-[0_0_50px_rgba(255,215,0,0.8)] hover:scale-105 transform duration-300 group"
            >
              <span className="text-2xl">📲</span>
              CLICAR AQUI E GARANTIR MEU BM — NÃO PERGUNTE. GARANTA.
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
            </a>

            <p className="text-gray-500 text-sm mt-6 italic">
              Última atualização: há 3 minutos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
