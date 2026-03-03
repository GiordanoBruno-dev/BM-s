import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-yellow-500/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/50">
              <img src="/logo-colombelliads.webp" alt="Colombelli Contingência" className="h-10 w-10 rounded-xl shadow-lg shadow-yellow-500/20 object-contain" />
            <span className="text-white text-xl font-bold"> </span>
              </div>
              <span className="text-white text-lg font-bold">
                COLOMBELLI <span className="text-yellow-400">CONTINGÊNCIA</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Fornecedor premium de Business Managers,<br />
              Google Ads e TikTok Ads verificados.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-white font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#beneficios" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#social-proof" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Resultados
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2025 Colombelli Contingência. Todos os direitos reservados.
            </p>

            <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2">
              <Shield className="text-green-400" size={18} />
              <span className="text-green-400 text-sm font-semibold">Parceiro Autorizado Meta Ads</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
