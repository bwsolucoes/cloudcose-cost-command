
import React from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce-down">
      <div className="text-sm text-cloudcose-navy mb-2 font-medium">
        Role para baixo
      </div>
      <div className="w-8 h-8 rounded-full border-2 border-cloudcose-blue flex items-center justify-center bg-white/80 backdrop-blur-sm">
        <ChevronDown className="w-4 h-4 text-cloudcose-blue" />
      </div>
    </div>
  );
};

export default ScrollIndicator;
