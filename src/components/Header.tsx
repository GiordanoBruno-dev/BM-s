import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <img src="/logo-colombelliads.webp" alt="Colombelli Contingência" className="h-16 w-auto rounded-xl shadow-lg shadow-yellow-500/30 object-contain" />
            <span className="text-white text-xl font-bold tracking-tight">
              COLOMBELLI <span className="text-yellow-400">CONTINGÊNCIA</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#beneficios" className="text-gray-300 hover:text-yellow-400 transition-colors font-medium">
              Benefícios
            </a>
            <a href="#social-proof" className="text-gray-300 hover:text-yellow-400 transition-colors font-medium">
              Resultados
            </a>
            <a href="#faq" className="text-gray-300 hover:text-yellow-400 transition-colors font-medium">
              FAQ
            </a>
            <a
              href="#cta"
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-all hover:shadow-lg hover:shadow-yellow-500/50"
            >
              GARANTIR AGORA
            </a>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-yellow-500/20">
            <a
              href="#beneficios"
              className="block text-gray-300 hover:text-yellow-400 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefícios
            </a>
            <a
              href="#social-proof"
              className="block text-gray-300 hover:text-yellow-400 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Resultados
            </a>
            <a
              href="#faq"
              className="block text-gray-300 hover:text-yellow-400 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <a
              href="#cta"
              className="block bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold text-center hover:bg-yellow-300 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              GARANTIR AGORA
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
