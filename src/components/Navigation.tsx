
import React from 'react';
import { Search, User, Bell, Crown } from 'lucide-react';
import SearchBar from './SearchBar';
import ThemeToggle from './ThemeToggle';

interface NavigationProps {
  activeSection: string;
  watchlistCount: number;
  searchTerm: string;
  selectedGenre?: string;
  theme: 'dark' | 'royal';
  onSectionChange: (section: string) => void;
  onSearchChange: (term: string) => void;
  onGenreFilter?: (genre: string) => void;
  onThemeChange: (theme: 'dark' | 'royal') => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  activeSection, 
  watchlistCount, 
  searchTerm, 
  selectedGenre,
  theme,
  onSectionChange, 
  onSearchChange, 
  onGenreFilter,
  onThemeChange
}) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'TV Shows', label: 'TV Shows' },
    { id: 'Movies', label: 'Movies' },
    { id: 'Originals', label: 'Originals' },
    { id: 'Kids', label: 'Kids' },
    { id: 'mylist', label: `My List${watchlistCount > 0 ? ` (${watchlistCount})` : ''}` }
  ];
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
      theme === 'royal' 
        ? 'bg-gradient-to-r from-blue-900/80 via-purple-900/80 to-blue-900/80 backdrop-blur-md border-b border-blue-500/20' 
        : 'bg-black/80 backdrop-blur-md border-b border-gray-800'
    }`}>
      <div className="px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center gap-2">
              <Crown className={`w-8 h-8 ${theme === 'royal' ? 'text-blue-400' : 'text-blue-500'} animate-pulse`} />
              <span className={`text-2xl font-bold ${
                theme === 'royal' 
                  ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent' 
                  : 'text-white'
              }`}>
                STARNYX
              </span>
            </div>
            
            {/* Navigation Items */}
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    activeSection === item.id
                      ? theme === 'royal' 
                        ? 'text-blue-400 border-b-2 border-blue-400 shadow-blue-400/25' 
                        : 'text-white border-b-2 border-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <SearchBar 
              searchTerm={searchTerm} 
              onSearchChange={onSearchChange}
              onGenreFilter={onGenreFilter}
              selectedGenre={selectedGenre}
            />
            
            <ThemeToggle theme={theme} onThemeChange={onThemeChange} />
            
            <button className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
              theme === 'royal' 
                ? 'hover:bg-blue-800/50 text-blue-400' 
                : 'hover:bg-gray-800 text-gray-300'
            }`}>
              <Bell className="w-5 h-5" />
            </button>
            
            <button className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
              theme === 'royal' 
                ? 'hover:bg-blue-800/50 text-blue-400' 
                : 'hover:bg-gray-800 text-gray-300'
            }`}>
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
