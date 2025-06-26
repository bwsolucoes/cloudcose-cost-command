
import React from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce-subtle">
      <div className="text-sm text-cloudcose-gray mb-3 font-medium tracking-wide">
        Role para baixo
      </div>
      <div className="w-10 h-10 rounded-full border-2 border-cloudcose-blue flex items-center justify-center bg-cloudcose-white shadow-professional">
        <ChevronDown className="w-5 h-5 text-cloudcose-blue" />
      </div>
    </div>
  );
};

export default ScrollIndicator;
