
import React, { useEffect, useState } from 'react';
import { Crown } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [logoScale, setLogoScale] = useState(0.8);
  const [showGlow, setShowGlow] = useState(false);

  useEffect(() => {
    // Premium sound effect
    const playPremiumSound = () => {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Create a premium startup sound (8 seconds)
      const createTone = (frequency: number, startTime: number, duration: number, volume: number = 0.1) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(frequency, startTime);
        gainNode.gain.setValueAtTime(0, startTime);
        gainNode.gain.linearRampToValueAtTime(volume, startTime + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
        
        oscillator.start(startTime);
        oscillator.stop(startTime + duration);
      };
      
      const now = audioContext.currentTime;
      // Premium chord progression
      createTone(261.63, now, 2, 0.08); // C4
      createTone(329.63, now + 0.5, 2, 0.06); // E4
      createTone(392.00, now + 1, 2, 0.04); // G4
      createTone(523.25, now + 1.5, 3, 0.03); // C5
      createTone(659.25, now + 2, 4, 0.02); // E5
    };

    // Logo animations
    setTimeout(() => setLogoScale(1), 100);
    setTimeout(() => setShowGlow(true), 500);
    
    try {
      playPremiumSound();
    } catch (error) {
      console.log('Audio not supported or blocked');
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 10000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 bg-gradient-to-br from-black via-blue-900/20 to-purple-900/20 z-50 flex items-center justify-center transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="relative">
        {/* Floating Crown */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Crown 
            className={`w-12 h-12 text-yellow-400 transition-all duration-1000 ${showGlow ? 'drop-shadow-[0_0_20px_rgba(251,191,36,0.8)] animate-pulse' : ''}`}
          />
        </div>
        
        {/* Logo with premium effects */}
        <div 
          className={`transition-all duration-1000 ${showGlow ? 'drop-shadow-[0_0_50px_rgba(59,130,246,0.8)]' : ''}`}
          style={{ transform: `scale(${logoScale})` }}
        >
          <img 
            src="/lovable-uploads/4f557a03-47e6-462c-88e1-b192c9d1fa57.png" 
            alt="STARNYX" 
            className={`w-96 h-auto transition-all duration-2000 ${showGlow ? 'brightness-110' : ''}`}
          />
        </div>
        
        {/* Glowing orb effect */}
        <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl transition-opacity duration-2000 ${showGlow ? 'opacity-100' : 'opacity-0'}`} />
      </div>
    </div>
  );
};

export default SplashScreen;
