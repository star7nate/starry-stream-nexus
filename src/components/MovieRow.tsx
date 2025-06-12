
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MovieCard, { Movie } from './MovieCard';

interface MovieRowProps {
  title: string;
  movies: Movie[];
  size?: "sm" | "md" | "lg";
  onMoreInfo: (movie: Movie) => void;
  onAddToWatchlist: (movie: Movie) => void;
  onPlay: (movie: Movie) => void;
}

const MovieRow: React.FC<MovieRowProps> = ({ title, movies, size = "md", onMoreInfo, onAddToWatchlist, onPlay }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };
  
  return (
    <div className="mb-8">
      <h2 className="text-white text-xl font-semibold mb-4 px-4">{title}</h2>
      <div className="relative group">
        <button 
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-4 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {movies.map((movie) => (
            <MovieCard 
              key={movie.id} 
              movie={movie} 
              size={size} 
              onMoreInfo={onMoreInfo}
              onAddToWatchlist={onAddToWatchlist}
              onPlay={onPlay}
            />
          ))}
        </div>
        
        <button 
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default MovieRow;
