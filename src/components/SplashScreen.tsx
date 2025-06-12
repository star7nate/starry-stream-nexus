
import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Wait for fade out animation
    }, 10000); // Changed to 10 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="animate-pulse">
        <img 
          src="/lovable-uploads/4f557a03-47e6-462c-88e1-b192c9d1fa57.png" 
          alt="STARNYX" 
          className="w-96 h-auto animate-fade-in"
        />
      </div>
    </div>
  );
};

export default SplashScreen;
