import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SignupForm } from './components/SignupForm';
import { WhatIsSection } from './components/WhatIsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { YieldCalculator } from './components/YieldCalculator';
import { ComparisonSection } from './components/ComparisonSection';
import { NoBankSection } from './components/NoBankSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { SecuritySection } from './components/SecuritySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { LocationSection } from './components/LocationSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsAndConditions } from './pages/TermsAndConditions';
import { RefundPolicy } from './pages/RefundPolicy';
import { Regulation } from './pages/Regulation';
import { Registro } from './pages/Registro';
import { MessageCircle } from 'lucide-react';
const HomePage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  return <>
      <Header />
      <main>
        <HeroSection />
        <WhatIsSection />
        <HowItWorksSection />
        <YieldCalculator />
        <ComparisonSection />
        <NoBankSection />
        <GuaranteeSection />
        <SecuritySection />
        <TestimonialsSection />
        <FaqSection />
        <LocationSection />
        <FinalCta />
        {/* WhatsApp floating button (mobile only) */}
        <a href="https://wa.me/525512345678" className="whatsapp-float md:hidden">
          <MessageCircle size={24} />
        </a>
      </main>
    </>;
};
export function App() {
  return <BrowserRouter>
      <div className="min-h-screen w-full bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/privacidad" element={<PrivacyPolicy />} />
          <Route path="/terminos" element={<TermsAndConditions />} />
          <Route path="/reembolsos" element={<RefundPolicy />} />
          <Route path="/regulacion" element={<Regulation />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>;
}