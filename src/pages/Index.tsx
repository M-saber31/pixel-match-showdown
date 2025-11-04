import React from 'react';
import HeroSection from '@/components/HeroSection';
import DiscoverySection from '@/components/DiscoverySection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <HeroSection />
      <DiscoverySection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;
