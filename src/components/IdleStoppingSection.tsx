
import React from 'react';
import { Check } from 'lucide-react';

const IdleStoppingSection = () => {
  const features = [
    'Detecta e desliga recursos automaticamente',
    'Economia de até 60% em ambientes não produtivos',
    'Reativa recursos sob demanda com os mesmos acessos (DNS, SSH, etc.)',
    'Suporte a instâncias spot orquestradas'
  ];

  return (
    <section className="py-24 bg-cloudcose-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-cloudcose-white mb-8">
            Cloud IdleStopping
          </h2>
          <p className="text-xl text-cloudcose-white/90 mb-4">
            Economia automatizada em ambientes ociosos
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="w-8 h-8 bg-cloudcose-white rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <Check className="h-5 w-5 text-cloudcose-blue" />
                  </div>
                  <p className="text-lg text-cloudcose-white font-medium leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-cloudcose-white/10 backdrop-blur-sm rounded-2xl p-10 border border-cloudcose-white/20">
            <div className="text-center">
              <div className="text-7xl font-bold text-cloudcose-white mb-4">60%</div>
              <div className="text-cloudcose-white/90 text-lg mb-8 font-medium">Economia Média</div>
              <div className="bg-cloudcose-white/10 rounded-xl p-6 border border-cloudcose-white/20">
                <div className="text-cloudcose-white/80 text-base mb-2">Economia mensal típica</div>
                <div className="text-3xl font-bold text-cloudcose-white">R$ 15.000 - R$ 45.000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdleStoppingSection;
