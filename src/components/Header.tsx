
import React from 'react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onLogin: () => void;
  onFreeTrial: () => void;
}

const Header = ({ onLogin, onFreeTrial }: HeaderProps) => {
  return (
    <header className="bg-cloudcose-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-cloudcose-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/3c505f1b-f58e-415d-b47f-ea87f47926cd.png" 
              alt="CloudCose" 
              className="h-10"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-cloudcose-gray hover:text-cloudcose-navy transition-colors font-medium">Início</a>
            <a href="#problemas" className="text-cloudcose-gray hover:text-cloudcose-navy transition-colors font-medium">Problemas</a>
            <a href="#beneficios" className="text-cloudcose-gray hover:text-cloudcose-navy transition-colors font-medium">Benefícios</a>
            <a href="#funcionalidades" className="text-cloudcose-gray hover:text-cloudcose-navy transition-colors font-medium">Funcionalidades</a>
            <a href="#contato" className="text-cloudcose-gray hover:text-cloudcose-navy transition-colors font-medium">Contato</a>
            <div className="flex items-center space-x-3">
              <Button 
                onClick={onLogin}
                variant="outline"
                className="border-cloudcose-blue text-cloudcose-blue hover:bg-cloudcose-blue hover:text-white"
              >
                Login
              </Button>
              <Button 
                onClick={onFreeTrial}
                className="bg-cloudcose-blue hover:bg-cloudcose-navy transition-colors shadow-professional"
              >
                Free Trial
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
