
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemsSection from '@/components/ProblemsSection';
import BenefitsSection from '@/components/BenefitsSection';
import FunctionalitiesSection from '@/components/FunctionalitiesSection';
import IdleStoppingSection from '@/components/IdleStoppingSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  const handleDemoRequest = () => {
    const subject = encodeURIComponent("Quero agendar uma demonstração.");
    const mailtoUrl = `mailto:contact@cloudcose.com?subject=${subject}`;
    window.location.href = mailtoUrl;
  };

  const handleContact = () => {
    const subject = encodeURIComponent("Quero conhecer mais sobre o CloudCose");
    const mailtoUrl = `mailto:contact@cloudcose.com?subject=${subject}`;
    window.location.href = mailtoUrl;
  };

  // Handle smooth scrolling with offset for fixed header
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash) as HTMLElement;
        if (element) {
          const headerHeight = 120; // Increased offset for better visibility
          const elementPosition = element.offsetTop - headerHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Handle initial load with hash
    if (window.location.hash) {
      setTimeout(handleHashChange, 100);
    }

    // Handle hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Handle click events on anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId) as HTMLElement;
        if (targetElement) {
          const headerHeight = 120; // Increased offset for better visibility
          const elementPosition = targetElement.offsetTop - headerHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
          // Update URL hash
          window.history.pushState(null, null, targetId);
        }
      });
    });

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-cloudcose-white font-inter">
      <Header onDemoRequest={handleDemoRequest} />
      <HeroSection onDemoRequest={handleDemoRequest} />
      <ProblemsSection />
      <BenefitsSection />
      <FunctionalitiesSection />
      <IdleStoppingSection />
      <CTASection onContact={handleContact} />
      <Footer />
    </div>
  );
};

export default Index;
