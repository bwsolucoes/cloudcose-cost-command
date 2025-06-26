
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

const FunctionalitiesSection = () => {
  const functionalities = [
    'Análise de custos detalhada',
    'Recomendações de economia com previsão',
    'Políticas automatizadas de marcação (tagging)',
    'IdleStop – desligamento automático de recursos ociosos',
    'Programações de energia',
    'Kubernetes Optimization'
  ];

  return (
    <section id="funcionalidades" className="py-24 bg-cloudcose-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-cloudcose-white mb-6">
            Funcionalidades-Chave
          </h2>
          <p className="text-xl text-cloudcose-accent max-w-4xl mx-auto leading-relaxed">
            Ferramentas poderosas para otimização completa de sua infraestrutura cloud
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {functionalities.map((funcionalidade, index) => (
            <Card key={index} className="bg-cloudcose-white/5 backdrop-blur-sm border border-cloudcose-white/10 hover:bg-cloudcose-white/10 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-cloudcose-blue/20 rounded-xl flex items-center justify-center mb-6">
                  <Check className="h-7 w-7 text-cloudcose-accent" />
                </div>
                <h3 className="font-semibold text-cloudcose-white text-lg leading-relaxed">{funcionalidade}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunctionalitiesSection;
