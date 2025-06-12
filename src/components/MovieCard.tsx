
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
  const [isAdded, setIsAdded] = useState(false);
  
  const sizeClasses = {
    sm: "w-32 h-48",
    md: "w-48 h-72",
    lg: "w-64 h-96"
  };

  const handleAddToWatchlist = () => {
    onAddToWatchlist(movie);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };
  
  return (
    <div 
      className={cn(
        "relative flex-shrink-0 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 group",
        sizeClasses[size],
        isHovered ? "scale-110 z-20 rotate-1 shadow-2xl shadow-blue-500/25" : "hover:scale-105"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'perspective(1000px) rotateY(-5deg) rotateX(5deg) scale(1.1)' : 'none',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Glassmorphism backdrop */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl" />
      
      <div className="w-full h-full relative">
        <img 
          src={movie.posterUrl} 
          alt={movie.title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
        />
        
        {/* Dynamic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {movie.isNew && (
          <div className="absolute top-2 left-2 bg-gradient-to-r from-red-600 to-red-500 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg animate-pulse">
            NEW
          </div>
        )}
        
        {movie.isTrending && (
          <div className="absolute top-2 right-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg">
            #1
          </div>
        )}
        
        {/* Glassmorphism info panel */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/60 backdrop-blur-md border-t border-white/10">
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
        
        {/* Interactive overlay with microinteractions */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center animate-fade-in">
            <div className="flex gap-2">
              <button 
                onClick={() => onPlay(movie)}
                className="bg-white/90 backdrop-blur-sm text-black p-3 rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-white/25 ripple"
                style={{ animation: 'ripple 0.6s linear' }}
              >
                <Play className="w-4 h-4" />
              </button>
              <button 
                onClick={handleAddToWatchlist}
                className={cn(
                  "backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:scale-110",
                  isAdded ? "bg-green-500 animate-bounce" : "bg-gray-800/80 hover:bg-gray-700"
                )}
              >
                {isAdded ? <span className="text-sm">✓</span> : <Plus className="w-4 h-4" />}
              </button>
              <button 
                onClick={() => onMoreInfo(movie)}
                className="bg-gray-800/80 backdrop-blur-sm text-white p-3 rounded-full hover:bg-gray-700 hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <Info className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
        
        {/* Glow effect */}
        <div className={cn(
          "absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-0 transition-opacity duration-500",
          isHovered && "opacity-20"
        )} />
      </div>
    </div>
  );
};

export default MovieCard;
export type { Movie };
