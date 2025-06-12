
import React from 'react';
import { Crown } from 'lucide-react';
import { cn } from "@/lib/utils";
import SearchBar from './SearchBar';

interface NavigationProps {
  activeSection: string;
  watchlistCount: number;
  searchTerm: string;
  onSectionChange: (section: string) => void;
  onSearchChange: (term: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  activeSection, 
  watchlistCount, 
  searchTerm, 
  onSectionChange, 
  onSearchChange 
}) => {
  const navItems = [
    { name: "Home", key: "home" },
    { name: "TV Shows", key: "TV Shows" },
    { name: "Movies", key: "Movies" },
    { name: "Originals", key: "Originals" },
    { name: "My List", key: "mylist" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10 px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 group">
            <Crown className="w-6 h-6 text-yellow-400 animate-pulse group-hover:scale-110 transition-transform duration-300" />
            <img 
              src="/lovable-uploads/4f557a03-47e6-462c-88e1-b192c9d1fa57.png" 
              alt="STARNYX" 
              className="h-8 w-auto group-hover:brightness-110 transition-all duration-300"
            />
          </div>
          <div className="flex gap-6">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => onSectionChange(item.key)}
                className={cn(
                  "text-sm font-medium transition-all duration-300 hover:text-white relative group px-3 py-2 rounded-lg",
                  activeSection === item.key 
                    ? "text-white bg-white/10 backdrop-blur-sm" 
                    : "text-gray-400 hover:bg-white/5"
                )}
              >
                {item.name} {item.key === "mylist" && watchlistCount > 0 && (
                  <span className="ml-1 bg-gradient-to-r from-blue-600 to-purple-600 text-xs px-1.5 py-0.5 rounded-full shadow-lg">
                    {watchlistCount}
                  </span>
                )}
                <div className={cn(
                  "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300",
                  activeSection === item.key ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
          <button className="text-gray-400 hover:text-white transition-colors bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10">
            Profile
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
