
import React from 'react';
import { Button } from '@/components/ui/button';
import ScrollIndicator from '@/components/ScrollIndicator';

interface HeroSectionProps {
  onLogin: () => void;
  onFreeTrial: () => void;
}

const HeroSection = ({ onLogin, onFreeTrial }: HeroSectionProps) => {
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
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                onClick={onFreeTrial}
                className="bg-cloudcose-blue hover:bg-cloudcose-navy text-cloudcose-white px-8 py-4 text-lg font-semibold shadow-professional"
              >
                Free Trial
              </Button>
              <Button 
                size="lg" 
                onClick={onLogin}
                variant="outline"
                className="border-cloudcose-blue text-cloudcose-blue hover:bg-cloudcose-blue hover:text-white px-8 py-4 text-lg font-semibold"
              >
                Login
              </Button>
            </div>
            <div className="flex items-center gap-6 opacity-70">
              <img 
                src="/lovable-uploads/8e3d7019-96ee-46f3-8c23-1ca5bf8ed50f.png" 
                alt="AWS" 
                className="h-8 object-contain"
              />
              <img 
                src="/lovable-uploads/723de9c6-1ed1-4aa5-b93e-8a0481d8cda9.png" 
                alt="Azure" 
                className="h-8 object-contain"
              />
              <img 
                src="/lovable-uploads/16c4dd15-a0b8-4193-b4c0-fb3e062ad46c.png" 
                alt="Google Cloud" 
                className="h-8 object-contain"
              />
            </div>
          </div>
          <div className="animate-slide-in-right">
            <div className="bg-cloudcose-white rounded-2xl shadow-elevated p-4 border border-gray-100">
              <img src="/lovable-uploads/87cf556b-4b42-45c9-9960-b14f0eb0206e.png" 
                   alt="Dashboard CloudCose" 
                   className="w-full h-96 object-cover object-left-top rounded-xl" />
            </div>
          </div>
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;
