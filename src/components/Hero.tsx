
import React from 'react';
import { Star, Play, Info, Crown } from 'lucide-react';
import { Movie } from './MovieCard';

interface HeroProps {
  featuredMovie: Movie;
  onPlay: (movie: Movie) => void;
}

const Hero: React.FC<HeroProps> = ({ featuredMovie, onPlay }) => {
  return (
    <div className="relative h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={featuredMovie.posterUrl} 
          alt={featuredMovie.title}
          className="w-full h-full object-cover scale-105 animate-pulse"
        />
      </div>
      
      {/* Animated gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-blue-900/30 animate-pulse" />
      
      {/* Floating crown effect */}
      <div className="absolute top-20 right-20 animate-bounce">
        <Crown className="w-16 h-16 text-yellow-400/60 animate-pulse" />
      </div>
      
      <div className="relative z-10 max-w-2xl px-4 ml-8">
        <div className="flex items-center gap-2 mb-4">
          <Crown className="w-8 h-8 text-yellow-400 animate-pulse" />
          <span className="text-yellow-400 font-bold tracking-wider">PREMIUM</span>
        </div>
        
        <h1 className="text-6xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 bg-clip-text text-transparent animate-pulse bg-[length:200%_100%]">
          {featuredMovie.title}
        </h1>
        
        <p className="text-gray-300 text-lg mb-6 leading-relaxed backdrop-blur-sm bg-black/20 p-4 rounded-lg border border-white/10">
          An epic journey through time and space that will challenge everything you thought you knew about the universe. 
          Experience the most groundbreaking story of our time with premium quality and exclusive content.
        </p>
        
        <div className="flex items-center gap-4 mb-8 backdrop-blur-sm bg-white/5 p-3 rounded-lg border border-white/10">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-pulse" />
            <span className="text-white font-semibold">{featuredMovie.rating}</span>
          </div>
          <span className="text-gray-300">{featuredMovie.year}</span>
          <span className="text-gray-300">{featuredMovie.duration}</span>
          <span className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
            {featuredMovie.genre}
          </span>
        </div>
        
        <div className="flex gap-4">
          <button 
            onClick={() => onPlay(featuredMovie)}
            className="bg-gradient-to-r from-white to-gray-100 text-black px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:from-gray-100 hover:to-white transition-all duration-300 shadow-lg hover:shadow-white/25 hover:scale-105 ripple"
          >
            <Play className="w-5 h-5" />
            Play
          </button>
          <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105">
            <Info className="w-5 h-5" />
            More Info
          </button>
        </div>
      </div>
      
      {/* Animated glow effects */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-500/20 to-transparent animate-pulse" />
    </div>
  );
};

export default Hero;
