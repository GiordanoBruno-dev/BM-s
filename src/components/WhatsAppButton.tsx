import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/555198913093?text=Olá!%20Quero%20saber%20mais%20sobre%20as%20BMs%20premium"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl shadow-green-500/50 hover:bg-green-600 hover:scale-110 transition-all duration-300 group animate-bounce hover:animate-none"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={32} strokeWidth={2.5} className="group-hover:rotate-12 transition-transform" />

      <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>

      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        <span className="font-semibold text-sm">Fale conosco agora!</span>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
          <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-green-500"></div>
        </div>
      </div>
    </a>
  );
}
