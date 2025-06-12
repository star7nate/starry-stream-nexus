
import React from 'react';
import { X, Play, Plus, Star } from 'lucide-react';

interface MovieModalProps {
  movie: any;
  isOpen: boolean;
  onClose: () => void;
  onAddToWatchlist: (movie: any) => void;
}

const MovieModal: React.FC<MovieModalProps> = ({ movie, isOpen, onClose, onAddToWatchlist }) => {
  if (!isOpen || !movie) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="h-64 bg-gradient-to-r from-blue-900/40 via-purple-900/30 to-indigo-900/40 relative">
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/50 to-transparent">
              <h2 className="text-3xl font-bold text-white mb-2">{movie.title}</h2>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{movie.rating}</span>
                </div>
                <span>{movie.year}</span>
                <span>{movie.duration}</span>
                <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">{movie.genre}</span>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex gap-4 mb-6">
              <button className="bg-white text-black px-6 py-2 rounded-md font-semibold flex items-center gap-2 hover:bg-gray-200 transition-colors">
                <Play className="w-4 h-4" />
                Play
              </button>
              <button 
                onClick={() => onAddToWatchlist(movie)}
                className="bg-gray-600/80 text-white px-6 py-2 rounded-md font-semibold flex items-center gap-2 hover:bg-gray-600 transition-colors"
              >
                <Plus className="w-4 h-4" />
                My List
              </button>
            </div>
            
            <p className="text-gray-300 text-lg mb-4">
              An epic journey through time and space that will challenge everything you thought you knew about the universe. 
              Experience the most groundbreaking story of our time with stunning visuals and compelling characters.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-white font-semibold mb-2">Cast</h3>
                <p className="text-gray-400">John Doe, Jane Smith, Michael Johnson, Sarah Wilson</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Director</h3>
                <p className="text-gray-400">Christopher Nolan</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Genres</h3>
                <p className="text-gray-400">{movie.genre}, Adventure, Drama</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Language</h3>
                <p className="text-gray-400">English</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
