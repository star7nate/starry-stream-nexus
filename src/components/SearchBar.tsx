
import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  onGenreFilter?: (genre: string) => void;
  selectedGenre?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  searchTerm, 
  onSearchChange, 
  onGenreFilter, 
  selectedGenre 
}) => {
  const [showFilters, setShowFilters] = useState(false);
  
  const genres = [
    "All", "Action", "Comedy", "Drama", "Horror", "Sci-Fi", 
    "Romance", "Thriller", "Animation", "Fantasy", "Crime"
  ];

  return (
    <div className="relative">
      <div className="flex items-center gap-2">
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
        
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="bg-gray-800/50 text-white p-2 rounded-md hover:bg-gray-800/80 transition-all"
        >
          <Filter className="w-4 h-4" />
        </button>
      </div>
      
      {showFilters && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-md p-4 z-50">
          <h3 className="text-white font-semibold mb-2">Filter by Genre</h3>
          <div className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => onGenreFilter?.(genre)}
                className={`px-3 py-1 rounded-full text-sm transition-all ${
                  selectedGenre === genre
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
