
import React from 'react';
import { Cloud } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cloudcose-navy py-16 border-t border-cloudcose-white/10">
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
          <p className="text-cloudcose-gray-light">© 2025 CloudCose. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
