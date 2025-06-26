
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingDown } from 'lucide-react';

const ProblemsSection = () => {
  const problems = [
    'Falta de transparência nos custos em cloud',
    'Ciclo de vida dos recursos sem controle',
    'Engenheiros desengajados na redução de gastos',
    'Falta de visibilidade centralizada'
  ];

  return (
    <section id="problemas" className="py-24 bg-cloudcose-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-cloudcose-navy mb-6">
            Problemas que Resolvemos
          </h2>
          <p className="text-xl text-cloudcose-gray max-w-4xl mx-auto leading-relaxed">
            Identificamos e solucionamos os principais desafios na gestão de custos em cloud
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problema, index) => (
            <Card key={index} className="bg-cloudcose-white hover:shadow-elevated transition-all duration-300 border border-gray-100">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 border border-red-100">
                  <TrendingDown className="h-7 w-7 text-red-600" />
                </div>
                <p className="font-semibold text-cloudcose-navy text-lg leading-relaxed">{problema}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
