
import React from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  movieTitle: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, movieTitle }) => {
  if (!isOpen) return null;

  // Sample trailer URL - in production you'd use real trailer URLs
  const trailerUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        <iframe
          src={trailerUrl}
          title={`${movieTitle} Trailer`}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoModal;
