
import React from 'react';
import { Button } from '@/components/ui/button';

interface CTASectionProps {
  onContact: () => void;
}

const CTASection = ({ onContact }: CTASectionProps) => {
  return (
    <section id="contato" className="py-24 bg-cloudcose-navy">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-cloudcose-white mb-8 leading-tight">
          Transforme seus custos em 
          <span className="text-cloudcose-accent"> vantagem competitiva</span>
        </h2>
        <p className="text-xl text-cloudcose-gray-light mb-12 max-w-3xl mx-auto leading-relaxed">
          Junte-se a centenas de empresas que já otimizaram seus custos cloud com CloudCose
        </p>
        <div className="flex justify-center">
          <Button 
            size="lg" 
            onClick={onContact}
            className="bg-cloudcose-accent hover:bg-cloudcose-blue-light text-cloudcose-navy px-10 py-4 text-lg font-semibold shadow-professional"
          >
            Entre em Contato
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
