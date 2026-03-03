import { TrendingUp, Activity, Award } from 'lucide-react';

export default function SocialProof() {
  return (
    <section id="social-proof" className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            NÃO É SORTE. É <span className="text-yellow-400">INFRAESTRUTURA.</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-green-400 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/30 rounded-xl p-8 text-center group hover:border-yellow-500 transition-all hover:shadow-2xl hover:shadow-yellow-500/30">
            <TrendingUp className="text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform" size={48} strokeWidth={2} />
            <div className="text-5xl font-black text-yellow-400 mb-2">+2.347</div>
            <div className="text-gray-400 font-semibold">BMs Entregues</div>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/30 rounded-xl p-8 text-center group hover:border-green-500 transition-all hover:shadow-2xl hover:shadow-green-500/30">
            <Activity className="text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" size={48} strokeWidth={2} />
            <div className="text-5xl font-black text-green-400 mb-2">99.4%</div>
            <div className="text-gray-400 font-semibold">Uptime</div>
          </div>

          <div className="bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/30 rounded-xl p-8 text-center group hover:border-yellow-500 transition-all hover:shadow-2xl hover:shadow-yellow-500/30">
            <Award className="text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform" size={48} strokeWidth={2} />
            <div className="text-5xl font-black text-yellow-400 mb-2">+70%</div>
            <div className="text-gray-400 font-semibold">Mais Aprovação</div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm border-2 border-green-500/30 rounded-2xl p-8 sm:p-12 relative overflow-hidden group hover:border-green-500 transition-all">
            <div className="absolute top-0 left-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl group-hover:w-64 group-hover:h-64 transition-all duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-6xl text-green-400 leading-none">"</div>
                <div className="flex-1">
                  <p className="text-white text-xl sm:text-2xl leading-relaxed mb-6 italic">
                    Minha campanha foi aprovada em <span className="text-green-400 font-bold">17 minutos</span> — e eu estava usando um BM novo.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      A
                    </div>
                    <div>
                      <div className="text-white font-bold">@AgenciaTopBrasil</div>
                      <div className="text-gray-400 text-sm">Cliente Colombelli desde 2024</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
          <div className="text-gray-400 text-sm font-semibold tracking-wider">PARCEIRO OFICIAL:</div>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            <div className="text-white font-bold text-xl opacity-60 hover:opacity-100 transition-opacity">Google Ads</div>
            <div className="text-white font-bold text-xl opacity-60 hover:opacity-100 transition-opacity">Meta</div>
            <div className="text-white font-bold text-xl opacity-60 hover:opacity-100 transition-opacity">TikTok Ads</div>
          </div>
        </div>
      </div>
    </section>
  );
}
