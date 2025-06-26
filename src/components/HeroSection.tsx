
import React from 'react';
import { Button } from '@/components/ui/button';
import ScrollIndicator from '@/components/ScrollIndicator';

interface HeroSectionProps {
  onDemoRequest: () => void;
}

const HeroSection = ({ onDemoRequest }: HeroSectionProps) => {
  return (
    <section id="inicio" className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 relative bg-cloudcose-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-cloudcose-navy leading-tight mb-8">
              Transforme sua gestão de custos na 
              <span className="text-cloudcose-blue"> Cloud</span>
            </h1>
            <p className="text-xl text-cloudcose-gray mb-10 leading-relaxed max-w-lg">
              Visibilidade centralizada. Economia automática. Decisões orientadas por dados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={onDemoRequest}
                className="bg-cloudcose-blue hover:bg-cloudcose-navy text-cloudcose-white px-8 py-4 text-lg font-semibold shadow-professional"
              >
                Solicitar Demonstração
              </Button>
            </div>
          </div>
          <div className="animate-slide-in-right">
            <div className="bg-cloudcose-white rounded-2xl shadow-elevated p-8 border border-gray-100">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                   alt="Dashboard CloudCose" 
                   className="w-full h-64 object-cover rounded-xl" />
            </div>
          </div>
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;
