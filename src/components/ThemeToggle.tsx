
import React from 'react';
import { Sun, Moon, Crown } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'dark' | 'royal';
  onThemeChange: (theme: 'dark' | 'royal') => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onThemeChange }) => {
  return (
    <div className="flex items-center gap-2 bg-gray-800/50 rounded-lg p-1">
      <button
        onClick={() => onThemeChange('dark')}
        className={`p-2 rounded-md transition-all ${
          theme === 'dark' 
            ? 'bg-gray-700 text-white' 
            : 'text-gray-400 hover:text-white'
        }`}
      >
        <Moon className="w-4 h-4" />
      </button>
      
      <button
        onClick={() => onThemeChange('royal')}
        className={`p-2 rounded-md transition-all ${
          theme === 'royal' 
            ? 'bg-blue-600 text-white shadow-blue-500/25 shadow-lg' 
            : 'text-gray-400 hover:text-blue-400'
        }`}
      >
        <Crown className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ThemeToggle;
