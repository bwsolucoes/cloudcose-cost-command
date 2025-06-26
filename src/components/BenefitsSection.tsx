
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Zap, BarChart3, Shield, Clock, Settings } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      title: 'Visibilidade Completa',
      description: 'Monitore custos em múltiplas clouds, contas e regiões em um painel único',
      icon: Eye
    },
    {
      title: 'Rightsizing Avançado',
      description: 'Dezenas de recomendações inteligentes para otimização de recursos',
      icon: Zap
    },
    {
      title: 'Alocação Inteligente',
      description: 'Custos organizados por tags e atributos diversos para máxima clareza',
      icon: BarChart3
    },
    {
      title: 'Detecção de Anomalias',
      description: 'Alertas automáticos de orçamento e identificação de gastos incomuns',
      icon: Shield
    },
    {
      title: 'Cultura FinOps',
      description: 'Integração com todas as áreas para criar consciência de custos',
      icon: Clock
    },
    {
      title: 'Automação Completa',
      description: 'Políticas automatizadas e ações proativas de otimização',
      icon: Settings
    }
  ];

  return (
    <section id="beneficios" className="py-24 bg-cloudcose-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-cloudcose-navy mb-6">
            Benefícios do CloudCose
          </h2>
          <p className="text-xl text-cloudcose-gray max-w-4xl mx-auto leading-relaxed">
            Transforme sua operação cloud com nossa plataforma completa de FinOps
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((beneficio, index) => (
            <Card key={index} className="hover:shadow-elevated transition-all duration-300 bg-cloudcose-white border border-gray-100">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-cloudcose-blue rounded-xl flex items-center justify-center mb-6">
                  <beneficio.icon className="h-8 w-8 text-cloudcose-white" />
                </div>
                <h3 className="text-xl font-bold text-cloudcose-navy mb-4">{beneficio.title}</h3>
                <p className="text-cloudcose-gray leading-relaxed text-base">{beneficio.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
