
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Cloud, Zap, Clock, Check, ArrowDown, ArrowUp } from 'lucide-react';
import ScrollIndicator from '@/components/ScrollIndicator';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cloudcose-light to-white font-inter">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Cloud className="h-8 w-8 text-cloudcose-blue" />
              <span className="text-2xl font-bold text-cloudcose-navy">CloudCose</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#funcionalidades" className="text-gray-700 hover:text-cloudcose-blue transition-colors">Funcionalidades</a>
              <a href="#beneficios" className="text-gray-700 hover:text-cloudcose-blue transition-colors">Benefícios</a>
              <a href="#contato" className="text-gray-700 hover:text-cloudcose-blue transition-colors">Contato</a>
              <Button className="bg-cloudcose-blue hover:bg-cloudcose-blue-dark">
                Solicitar Demo
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-cloudcose-navy leading-tight mb-6">
                Transforme sua gestão de custos na 
                <span className="text-cloudcose-blue"> Cloud</span> com transparência, controle e eficiência
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Visibilidade centralizada. Economia automática. Decisões orientadas por dados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-cloudcose-blue hover:bg-cloudcose-blue-dark text-white px-8 py-4 text-lg">
                  Solicitar Demonstração
                </Button>
                <Button size="lg" variant="outline" className="border-cloudcose-blue-dark text-cloudcose-blue-dark hover:bg-cloudcose-blue hover:text-white px-8 py-4 text-lg">
                  Fale com um Especialista
                </Button>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="bg-white rounded-2xl shadow-2xl p-6 border">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                     alt="Dashboard CloudCose" 
                     className="w-full h-64 object-cover rounded-lg mb-4" />
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-green-50 p-3 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Economia Mensal</span>
                    <span className="text-lg font-bold text-green-600">R$ 24.680</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-blue-50 p-3 rounded-lg text-center">
                      <div className="text-2xl font-bold text-cloudcose-blue-dark">127</div>
                      <div className="text-xs text-gray-600">Recursos Otimizados</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg text-center">
                      <div className="text-2xl font-bold text-cloudcose-blue">68%</div>
                      <div className="text-xs text-gray-600">Redução de Custos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScrollIndicator />
      </section>

      {/* Problemas Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-cloudcose-navy mb-4">
              Problemas que Resolvemos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Identificamos e solucionamos os principais desafios na gestão de custos em cloud
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Falta de transparência nos custos em cloud',
              'Ciclo de vida dos recursos sem controle',
              'Engenheiros desengajados na redução de gastos',
              'Falta de visibilidade centralizada'
            ].map((problema, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <ArrowDown className="h-6 w-6 text-red-600" />
                  </div>
                  <p className="font-medium text-gray-800">{problema}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section id="beneficios" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-cloudcose-navy mb-4">
              Benefícios do CloudCose
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforme sua operação cloud com nossa plataforma completa de FinOps
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Visibilidade Completa',
                description: 'Monitore custos em múltiplas clouds, contas e regiões em um painel único',
                icon: Cloud
              },
              {
                title: 'Rightsizing Avançado',
                description: 'Dezenas de recomendações inteligentes para otimização de recursos',
                icon: Zap
              },
              {
                title: 'Alocação Inteligente',
                description: 'Custos organizados por tags e atributos diversos para máxima clareza',
                icon: Check
              },
              {
                title: 'Detecção de Anomalias',
                description: 'Alertas automáticos de orçamento e identificação de gastos incomuns',
                icon: ArrowUp
              },
              {
                title: 'Cultura FinOps',
                description: 'Integração com todas as áreas para criar consciência de custos',
                icon: Clock
              },
              {
                title: 'Automação Completa',
                description: 'Políticas automatizadas e ações proativas de otimização',
                icon: Zap
              }
            ].map((beneficio, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow bg-white border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-cloudcose-blue to-cloudcose-blue-dark rounded-xl flex items-center justify-center mb-6">
                    <beneficio.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-cloudcose-navy mb-3">{beneficio.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{beneficio.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Funcionalidades Section */}
      <section id="funcionalidades" className="py-20 bg-gradient-to-r from-cloudcose-blue to-cloudcose-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Funcionalidades-Chave
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ferramentas poderosas para otimização completa de sua infraestrutura cloud
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Análise de custos detalhada',
              'Recomendações de economia com previsão',
              'Políticas automatizadas de marcação (tagging)',
              'IdleStop – desligamento automático de recursos ociosos',
              'Programações de energia',
              'Kubernetes Optimization'
            ].map((funcionalidade, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white text-lg">{funcionalidade}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud IdleStopping Highlight */}
      <section className="py-20 bg-gradient-to-r from-cloudcose-blue-gradient to-cloudcose-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Cloud IdleStopping
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Economia automatizada em ambientes ociosos
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                {[
                  'Detecta e desliga recursos automaticamente',
                  'Economia de até 60% em ambientes não produtivos',
                  'Reativa recursos sob demanda com os mesmos acessos (DNS, SSH, etc.)',
                  'Suporte a instâncias spot orquestradas'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mt-1">
                      <Check className="h-4 w-4 text-cloudcose-blue" />
                    </div>
                    <p className="text-lg text-white">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="text-6xl font-bold text-white mb-2">60%</div>
                <div className="text-blue-100 text-lg mb-6">Economia Média</div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-white text-sm">Economia mensal típica</div>
                  <div className="text-2xl font-bold text-white">R$ 15.000 - R$ 45.000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-cloudcose-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Transforme seus custos em 
            <span className="text-cloudcose-blue"> vantagem competitiva</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Junte-se a centenas de empresas que já otimizaram seus custos cloud com CloudCose
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-cloudcose-blue hover:bg-cloudcose-blue-dark text-white px-10 py-4 text-lg">
              Teste Gratuito
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cloudcose-navy px-10 py-4 text-lg">
              Solicite Demonstração
            </Button>
            <Button size="lg" className="bg-cloudcose-blue-dark hover:bg-cloudcose-blue text-white px-10 py-4 text-lg">
              Entre em Contato
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-cloudcose-navy py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Cloud className="h-8 w-8 text-cloudcose-blue" />
                <span className="text-2xl font-bold text-white">CloudCose</span>
              </div>
              <p className="text-blue-200 mb-4">
                Plataforma de FinOps para otimização inteligente de custos em cloud computing.
              </p>
              <p className="text-blue-200">
                Email: <a href="mailto:contact@cloudcose.com" className="text-white hover:text-cloudcose-blue transition-colors">contact@cloudcose.com</a>
              </p>
              <p className="text-blue-200">
                Site: <a href="https://cloudcose.com" className="text-white hover:text-cloudcose-blue transition-colors">cloudcose.com</a>
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#funcionalidades" className="text-blue-200 hover:text-white transition-colors">Funcionalidades</a></li>
                <li><a href="#contato" className="text-blue-200 hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Política de Privacidade</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Produto</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Demo</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Documentação</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Suporte</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center">
            <p className="text-blue-200">© 2024 CloudCose. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
