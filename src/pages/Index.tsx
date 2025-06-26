
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Cloud, Zap, Clock, Check, TrendingDown, Shield, BarChart3, Settings, Eye } from 'lucide-react';
import ScrollIndicator from '@/components/ScrollIndicator';

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
      {/* Header */}
      <header className="bg-cloudcose-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-cloudcose-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-cloudcose-blue rounded-lg flex items-center justify-center">
                <Cloud className="h-6 w-6 text-cloudcose-white" />
              </div>
              <span className="text-2xl font-bold text-cloudcose-navy">CloudCose</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#funcionalidades" className="text-cloudcose-gray hover:text-cloudcose-navy transition-colors font-medium">Funcionalidades</a>
              <a href="#beneficios" className="text-cloudcose-gray hover:text-cloudcose-navy transition-colors font-medium">Benefícios</a>
              <a href="#contato" className="text-cloudcose-gray hover:text-cloudcose-navy transition-colors font-medium">Contato</a>
              <Button 
                onClick={handleDemoRequest}
                className="bg-cloudcose-blue hover:bg-cloudcose-navy transition-colors shadow-professional"
              >
                Solicitar Demo
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 relative bg-cloudcose-background">
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
                  onClick={handleDemoRequest}
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
                     className="w-full h-64 object-cover rounded-xl mb-6" />
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-green-50 p-4 rounded-xl border border-green-100">
                    <span className="text-base font-semibold text-cloudcose-gray">Economia Mensal</span>
                    <span className="text-2xl font-bold text-cloudcose-success">R$ 24.680</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-cloudcose-background p-4 rounded-xl text-center border border-gray-100">
                      <div className="text-3xl font-bold text-cloudcose-navy">127</div>
                      <div className="text-sm text-cloudcose-gray font-medium">Recursos Otimizados</div>
                    </div>
                    <div className="bg-cloudcose-background p-4 rounded-xl text-center border border-gray-100">
                      <div className="text-3xl font-bold text-cloudcose-blue">68%</div>
                      <div className="text-sm text-cloudcose-gray font-medium">Redução de Custos</div>
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
      <section className="py-24 bg-cloudcose-white">
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
            {[
              'Falta de transparência nos custos em cloud',
              'Ciclo de vida dos recursos sem controle',
              'Engenheiros desengajados na redução de gastos',
              'Falta de visibilidade centralizada'
            ].map((problema, index) => (
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

      {/* Benefícios Section */}
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
            {[
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
            ].map((beneficio, index) => (
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

      {/* Funcionalidades Section */}
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
            {[
              'Análise de custos detalhada',
              'Recomendações de economia com previsão',
              'Políticas automatizadas de marcação (tagging)',
              'IdleStop – desligamento automático de recursos ociosos',
              'Programações de energia',
              'Kubernetes Optimization'
            ].map((funcionalidade, index) => (
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

      {/* Cloud IdleStopping Highlight */}
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
                {[
                  'Detecta e desliga recursos automaticamente',
                  'Economia de até 60% em ambientes não produtivos',
                  'Reativa recursos sob demanda com os mesmos acessos (DNS, SSH, etc.)',
                  'Suporte a instâncias spot orquestradas'
                ].map((feature, index) => (
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

      {/* CTA Final */}
      <section className="py-24 bg-cloudcose-navy">
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
              onClick={handleContact}
              className="bg-cloudcose-accent hover:bg-cloudcose-blue-light text-cloudcose-navy px-10 py-4 text-lg font-semibold shadow-professional"
            >
              Entre em Contato
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-cloudcose-navy py-16 border-t border-cloudcose-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-cloudcose-blue rounded-lg flex items-center justify-center">
                  <Cloud className="h-6 w-6 text-cloudcose-white" />
                </div>
                <span className="text-2xl font-bold text-cloudcose-white">CloudCose</span>
              </div>
              <p className="text-cloudcose-gray-light mb-6 leading-relaxed max-w-md">
                Plataforma de FinOps para otimização inteligente de custos em cloud computing.
              </p>
              <div className="space-y-2">
                <p className="text-cloudcose-gray-light">
                  Email: <a href="mailto:contact@cloudcose.com" className="text-cloudcose-white hover:text-cloudcose-accent transition-colors font-medium">contact@cloudcose.com</a>
                </p>
                <p className="text-cloudcose-gray-light">
                  Site: <a href="https://cloudcose.com" className="text-cloudcose-white hover:text-cloudcose-accent transition-colors font-medium">cloudcose.com</a>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-cloudcose-white font-semibold mb-6 text-lg">Links Rápidos</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-cloudcose-gray-light hover:text-cloudcose-white transition-colors">Sobre</a></li>
                <li><a href="#funcionalidades" className="text-cloudcose-gray-light hover:text-cloudcose-white transition-colors">Funcionalidades</a></li>
                <li><a href="#contato" className="text-cloudcose-gray-light hover:text-cloudcose-white transition-colors">Contato</a></li>
                <li><a href="#" className="text-cloudcose-gray-light hover:text-cloudcose-white transition-colors">Política de Privacidade</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-cloudcose-white font-semibold mb-6 text-lg">Produto</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-cloudcose-gray-light hover:text-cloudcose-white transition-colors">Demo</a></li>
                <li><a href="#" className="text-cloudcose-gray-light hover:text-cloudcose-white transition-colors">Preços</a></li>
                <li><a href="#" className="text-cloudcose-gray-light hover:text-cloudcose-white transition-colors">Documentação</a></li>
                <li><a href="#" className="text-cloudcose-gray-light hover:text-cloudcose-white transition-colors">Suporte</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-cloudcose-white/10 mt-12 pt-8 text-center">
            <p className="text-cloudcose-gray-light">© 2024 CloudCose. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
