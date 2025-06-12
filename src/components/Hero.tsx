
import React from 'react';
import { Star, Play, Info } from 'lucide-react';
import { Movie } from './MovieCard';

interface HeroProps {
  featuredMovie: Movie;
  onPlay: (movie: Movie) => void;
}

const Hero: React.FC<HeroProps> = ({ featuredMovie, onPlay }) => {
  return (
    <div className="relative h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <img 
          src={featuredMovie.posterUrl} 
          alt={featuredMovie.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-2xl px-4 ml-8">
        <h1 className="text-6xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {featuredMovie.title}
        </h1>
        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
          An epic journey through time and space that will challenge everything you thought you knew about the universe. 
          Experience the most groundbreaking story of our time.
        </p>
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="text-white font-semibold">{featuredMovie.rating}</span>
          </div>
          <span className="text-gray-300">{featuredMovie.year}</span>
          <span className="text-gray-300">{featuredMovie.duration}</span>
          <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-semibold">{featuredMovie.genre}</span>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => onPlay(featuredMovie)}
            className="bg-white text-black px-8 py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-gray-200 transition-colors"
          >
            <Play className="w-5 h-5" />
            Play
          </button>
          <button className="bg-gray-600/80 text-white px-8 py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-gray-600 transition-colors">
            <Info className="w-5 h-5" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
