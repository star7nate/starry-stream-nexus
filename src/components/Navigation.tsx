
import React from 'react';
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black to-transparent px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/4f557a03-47e6-462c-88e1-b192c9d1fa57.png" 
              alt="STARNYX" 
              className="h-8 w-auto"
            />
          </div>
          <div className="flex gap-6">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => onSectionChange(item.key)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-white",
                  activeSection === item.key ? "text-white" : "text-gray-400"
                )}
              >
                {item.name} {item.key === "mylist" && watchlistCount > 0 && (
                  <span className="ml-1 bg-blue-600 text-xs px-1.5 py-0.5 rounded-full">
                    {watchlistCount}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
          <button className="text-gray-400 hover:text-white transition-colors">
            Profile
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
