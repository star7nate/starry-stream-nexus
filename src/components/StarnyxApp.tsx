import React, { useState, useRef, useEffect } from "react";
import { Star, Play, ChevronLeft, ChevronRight, Plus, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import SplashScreen from "./SplashScreen";
import SearchBar from "./SearchBar";
import MovieModal from "./MovieModal";
import Pagination from "./Pagination";

// Generate 5000+ movies and shows
const generateContent = () => {
  const genres = ["Action", "Drama", "Comedy", "Thriller", "Sci-Fi", "Horror", "Romance", "Documentary", "Animation", "Crime"];
  const categories = ["Movies", "TV Shows", "Documentaries", "Kids", "Originals"];
  const adjectives = ["Epic", "Dark", "Lost", "Hidden", "Secret", "Last", "First", "Silent", "Broken", "Golden", "Shadow", "Crystal", "Midnight", "Rising", "Fallen", "Ancient", "Modern", "Future", "Quantum", "Digital"];
  const nouns = ["Kingdom", "City", "Empire", "Galaxy", "Ocean", "Mountain", "Forest", "Desert", "Island", "Castle", "Tower", "Bridge", "River", "Storm", "Dawn", "Night", "Star", "Moon", "Sun", "Earth"];
  
  const content = [];
  
  for (let i = 0; i < 5000; i++) {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const genre = genres[Math.floor(Math.random() * genres.length)];
    const category = categories[Math.floor(Math.random() * categories.length)];
    const rating = (Math.random() * 4 + 6).toFixed(1); // 6.0 - 10.0
    const year = 2015 + Math.floor(Math.random() * 10);
    
    content.push({
      id: i + 1,
      title: `${adj} ${noun}`,
      genre,
      category,
      rating: parseFloat(rating),
      year,
      duration: category === "Movies" ? `${90 + Math.floor(Math.random() * 60)}min` : `${1 + Math.floor(Math.random() * 10)} Season${Math.floor(Math.random() * 10) > 5 ? 's' : ''}`,
      isNew: Math.random() > 0.7,
      isTrending: Math.random() > 0.8,
      isOriginal: category === "Originals"
    });
  }
  
  return content;
};

const MovieCard = ({ movie, size = "md", onMoreInfo, onAddToWatchlist }) => {
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
      <div className="w-full h-full bg-gradient-to-br from-blue-900/60 via-purple-900/40 to-indigo-900/60 relative">
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
              <button className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors">
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

const MovieRow = ({ title, movies, size = "md", onMoreInfo, onAddToWatchlist }) => {
  const scrollRef = useRef(null);
  
  const scroll = (direction) => {
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

const Hero = ({ featuredMovie }) => {
  return (
    <div className="relative h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-purple-900/30 to-indigo-900/40" />
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
          <button className="bg-white text-black px-8 py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-gray-200 transition-colors">
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

export default function StarnyxApp() {
  const [content] = useState(() => generateContent());
  const [activeSection, setActiveSection] = useState("home");
  const [searchTerm, setSearchTerm] = useState("");
  const [watchlist, setWatchlist] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  
  const navItems = [
    { name: "Home", key: "home" },
    { name: "TV Shows", key: "TV Shows" },
    { name: "Movies", key: "Movies" },
    { name: "Originals", key: "Originals" },
    { name: "My List", key: "mylist" }
  ];
  
  // Filter content based on active section and search term
  const getFilteredContent = () => {
    let filtered = content;
    
    // Filter by section
    if (activeSection === "mylist") {
      filtered = watchlist;
    } else if (activeSection !== "home") {
      filtered = content.filter(item => item.category === activeSection);
    }
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.genre.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  };
  
  const filteredContent = getFilteredContent();
  const totalPages = Math.ceil(filteredContent.length / itemsPerPage);
  const paginatedContent = filteredContent.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  const featuredMovie = content[0];
  
  const handleAddToWatchlist = (movie) => {
    setWatchlist(prev => {
      const exists = prev.find(item => item.id === movie.id);
      if (exists) {
        return prev.filter(item => item.id !== movie.id);
      }
      return [...prev, movie];
    });
  };
  
  const handleMoreInfo = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };
  
  const handleSectionChange = (section) => {
    setActiveSection(section);
    setCurrentPage(1);
    setSearchTerm("");
  };
  
  const handleSearchChange = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };
  
  // Create different sections of content
  const trendingNow = content.filter(item => item.isTrending).slice(0, 20);
  const newReleases = content.filter(item => item.isNew).slice(0, 20);
  const topRated = content.filter(item => item.rating >= 8.5).slice(0, 20);
  const actionMovies = content.filter(item => item.genre === "Action").slice(0, 20);
  const dramas = content.filter(item => item.genre === "Drama").slice(0, 20);
  const comedies = content.filter(item => item.genre === "Comedy").slice(0, 20);
  const sciFi = content.filter(item => item.genre === "Sci-Fi").slice(0, 20);
  const documentaries = content.filter(item => item.category === "Documentaries").slice(0, 20);
  const originals = content.filter(item => item.isOriginal).slice(0, 20);
  const kids = content.filter(item => item.category === "Kids").slice(0, 20);
  
  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }
  
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black to-transparent px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/4f557a03-47e6-462c-88e1-b192c9d1fa57.png" 
                alt="STARNYX" 
                className="h-8 w-auto"
              />
            </div>
            <div className="flex gap-6">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleSectionChange(item.key)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-white",
                    activeSection === item.key ? "text-white" : "text-gray-400"
                  )}
                >
                  {item.name} {item.key === "mylist" && watchlist.length > 0 && (
                    <span className="ml-1 bg-blue-600 text-xs px-1.5 py-0.5 rounded-full">
                      {watchlist.length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
            <button className="text-gray-400 hover:text-white transition-colors">
              Profile
            </button>
          </div>
        </div>
      </nav>
      
      {/* Conditional Content Based on Active Section */}
      {activeSection === "home" && !searchTerm ? (
        <>
          {/* Hero Section */}
          <Hero featuredMovie={featuredMovie} />
          
          {/* Content Rows */}
          <div className="pb-20">
            <MovieRow title="Trending Now" movies={trendingNow} size="lg" onMoreInfo={handleMoreInfo} onAddToWatchlist={handleAddToWatchlist} />
            <MovieRow title="New Releases" movies={newReleases} onMoreInfo={handleMoreInfo} onAddToWatchlist={handleAddToWatchlist} />
            <MovieRow title="Top Rated" movies={topRated} onMoreInfo={handleMoreInfo} onAddToWatchlist={handleAddToWatchlist} />
            <MovieRow title="STARNYX Originals" movies={originals} onMoreInfo={handleMoreInfo} onAddToWatchlist={handleAddToWatchlist} />
            <MovieRow title="Action & Adventure" movies={actionMovies} onMoreInfo={handleMoreInfo} onAddToWatchlist={handleAddToWatchlist} />
            <MovieRow title="Dramas" movies={dramas} onMoreInfo={handleMoreInfo} onAddToWatchlist={handleAddToWatchlist} />
            <MovieRow title="Comedies" movies={comedies} onMoreInfo={handleMoreInfo} onAddToWatchlist={handleAddToWatchlist} />
            <MovieRow title="Sci-Fi & Fantasy" movies={sciFi} onMoreInfo={handleMoreInfo} onAddToWatchlist={handleAddToWatchlist} />
            <MovieRow title="Documentaries" movies={documentaries} onMoreInfo={handleMoreInfo} onAddToWatchlist={handleAddToWatchlist} />
            <MovieRow title="Kids & Family" movies={kids} size="sm" onMoreInfo={handleMoreInfo} onAddToWatchlist={handleAddToWatchlist} />
          </div>
        </>
      ) : (
        <>
          {/* Grid View for Filtered Content */}
          <div className="pt-24 px-8 pb-20">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-white mb-2">
                {searchTerm ? `Search results for "${searchTerm}"` : 
                 activeSection === "mylist" ? "My List" : activeSection}
              </h1>
              <p className="text-gray-400">
                {filteredContent.length} {filteredContent.length === 1 ? 'title' : 'titles'} found
              </p>
            </div>
            
            {filteredContent.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-400 text-lg">
                  {activeSection === "mylist" ? "Your watchlist is empty" : "No results found"}
                </p>
                <p className="text-gray-500 mt-2">
                  {activeSection === "mylist" ? "Add some movies and shows to get started!" : "Try adjusting your search terms"}
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                  {paginatedContent.map((movie) => (
                    <MovieCard 
                      key={movie.id} 
                      movie={movie} 
                      size="md" 
                      onMoreInfo={handleMoreInfo}
                      onAddToWatchlist={handleAddToWatchlist}
                    />
                  ))}
                </div>
                
                {totalPages > 1 && (
                  <Pagination 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                )}
              </>
            )}
          </div>
        </>
      )}
      
      {/* Movie Modal */}
      <MovieModal 
        movie={selectedMovie}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddToWatchlist={handleAddToWatchlist}
      />
      
      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="/lovable-uploads/4f557a03-47e6-462c-88e1-b192c9d1fa57.png" 
                  alt="STARNYX" 
                  className="h-6 w-auto"
                />
              </div>
              <p className="text-gray-400 text-sm">
                Premium streaming experience with over 5,000 titles.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Content</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Movies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">TV Shows</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentaries</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Originals</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            © 2025 STARNYX. All rights reserved. Streaming luxury redefined. ✨
          </div>
        </div>
      </footer>
    </div>
  );
}
