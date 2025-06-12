
import React, { useState } from 'react';
import { Star, Play, Plus, Info } from 'lucide-react';
import { cn } from "@/lib/utils";

interface Movie {
  id: number;
  title: string;
  genre: string;
  category: string;
  rating: number;
  year: number;
  duration: string;
  isNew: boolean;
  isTrending: boolean;
  isOriginal: boolean;
  posterUrl: string;
}

interface MovieCardProps {
  movie: Movie;
  size?: "sm" | "md" | "lg";
  onMoreInfo: (movie: Movie) => void;
  onAddToWatchlist: (movie: Movie) => void;
  onPlay: (movie: Movie) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, size = "md", onMoreInfo, onAddToWatchlist, onPlay }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const sizeClasses = {
    sm: "w-32 h-48",
    md: "w-48 h-72",
    lg: "w-64 h-96"
  };
  
  return (
    <div 
      className={cn(
        "relative flex-shrink-0 rounded-lg overflow-hidden cursor-pointer transition-all duration-300",
        sizeClasses[size],
        isHovered ? "scale-105 z-10" : "hover:scale-105"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full relative">
        <img 
          src={movie.posterUrl} 
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        
        {movie.isNew && (
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-bold">
            NEW
          </div>
        )}
        
        {movie.isTrending && (
          <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded font-bold">
            #1
          </div>
        )}
        
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
          <h3 className="text-white font-semibold text-sm mb-1 line-clamp-2">{movie.title}</h3>
          <div className="flex items-center justify-between text-xs text-gray-300">
            <span>{movie.year}</span>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span>{movie.rating}</span>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-1">{movie.genre}</p>
        </div>
        
        {isHovered && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="flex gap-2">
              <button 
                onClick={() => onPlay(movie)}
                className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Play className="w-4 h-4" />
              </button>
              <button 
                onClick={() => onAddToWatchlist(movie)}
                className="bg-gray-800/80 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
              <button 
                onClick={() => onMoreInfo(movie)}
                className="bg-gray-800/80 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Info className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
export type { Movie };
