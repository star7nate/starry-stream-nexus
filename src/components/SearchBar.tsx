
import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      <input
        type="text"
        placeholder="Search movies and shows..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="bg-gray-800/50 text-white pl-10 pr-4 py-2 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-800/80 transition-all"
      />
    </div>
  );
};

export default SearchBar;
