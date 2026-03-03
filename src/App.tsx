import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import SocialProof from './components/SocialProof';
import Urgency from './components/Urgency';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <SocialProof />
        <Urgency />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
