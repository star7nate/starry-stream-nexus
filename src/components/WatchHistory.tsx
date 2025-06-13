
import React from 'react';
import { Clock, Play } from 'lucide-react';
import MovieCard, { Movie } from './MovieCard';

interface WatchHistoryProps {
  continueWatching: Movie[];
  recentlyWatched: Movie[];
  onMoreInfo: (movie: Movie) => void;
  onAddToWatchlist: (movie: Movie) => void;
  onPlay: (movie: Movie) => void;
}

const WatchHistory: React.FC<WatchHistoryProps> = ({
  continueWatching,
  recentlyWatched,
  onMoreInfo,
  onAddToWatchlist,
  onPlay
}) => {
  return (
    <div className="space-y-8">
      {continueWatching.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Play className="w-5 h-5 text-blue-400" />
            <h2 className="text-white text-xl font-semibold">Continue Watching</h2>
          </div>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
            {continueWatching.map((movie) => (
              <div key={movie.id} className="relative">
                <MovieCard 
                  movie={movie} 
                  size="md" 
                  onMoreInfo={onMoreInfo}
                  onAddToWatchlist={onAddToWatchlist}
                  onPlay={onPlay}
                />
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="bg-blue-600 h-1 rounded-full">
                    <div 
                      className="bg-blue-400 h-full rounded-full" 
                      style={{ width: `${Math.random() * 80 + 10}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {recentlyWatched.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-gray-400" />
            <h2 className="text-white text-xl font-semibold">Recently Watched</h2>
          </div>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
            {recentlyWatched.map((movie) => (
              <MovieCard 
                key={movie.id}
                movie={movie} 
                size="sm" 
                onMoreInfo={onMoreInfo}
                onAddToWatchlist={onAddToWatchlist}
                onPlay={onPlay}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WatchHistory;
