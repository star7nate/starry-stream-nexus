
import React, { useState } from "react";
import SplashScreen from "./SplashScreen";
import Navigation from "./Navigation";
import Hero from "./Hero";
import MovieRow from "./MovieRow";
import MovieCard from "./MovieCard";
import MovieModal from "./MovieModal";
import VideoModal from "./VideoModal";
import Pagination from "./Pagination";
import Footer from "./Footer";
import { generateContent } from "../utils/generateContent";

export default function StarnyxApp() {
  const [content] = useState(() => generateContent());
  const [activeSection, setActiveSection] = useState("home");
  const [searchTerm, setSearchTerm] = useState("");
  const [watchlist, setWatchlist] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [playingMovie, setPlayingMovie] = useState(null);
  const itemsPerPage = 20;
  
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
  
  const handlePlay = (movie) => {
    setPlayingMovie(movie);
    setVideoModalOpen(true);
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
      <Navigation 
        activeSection={activeSection}
        watchlistCount={watchlist.length}
        searchTerm={searchTerm}
        onSectionChange={handleSectionChange}
        onSearchChange={handleSearchChange}
      />
      
      {/* Conditional Content Based on Active Section */}
      {activeSection === "home" && !searchTerm ? (
        <>
          {/* Hero Section */}
          <Hero featuredMovie={featuredMovie} onPlay={handlePlay} />
          
          {/* Content Rows */}
          <div className="pb-20">
            <MovieRow title="Trending Now" movies={trendingNow} size="lg" onMoreInfo={handleMoreInfo} onAddToWatchlist={handleAddToWatchlist} onPlay={handlePlay} />
            <MovieRow title="New Releases" movies={newReleases} onMoreInfo={handleMoreInfo} onAddToWatchlist={handleAddToWatchlist} onPlay={handlePlay} />
            <MovieRow title="Top Rated" movies={topRated} onMoreInfo={handleMoreInfo} onAddToWatchlist={handleAddToWatchlist} onPlay={handlePlay} />
            <MovieRow title="STARNYX Originals" movies={originals} onMoreInfo={handleMoreInfo} onAddToWatchlist={handleAddToWatchlist} onPlay={handlePlay} />
            <MovieRow title="Action & Adventure" movies={actionMovies} onMoreInfo={handleMoreInfo} onAddToWatchlist={handleAddToWatchlist} onPlay={handlePlay} />
            <MovieRow title="Dramas" movies={dramas} onMoreInfo={handleMoreInfo} onAddToWatchlist={handleAddToWatchlist} onPlay={handlePlay} />
            <MovieRow title="Comedies" movies={comedies} onMoreInfo={handleMoreInfo} onAddToWatchlist={handleAddToWatchlist} onPlay={handlePlay} />
            <MovieRow title="Sci-Fi & Fantasy" movies={sciFi} onMoreInfo={handleMoreInfo} onAddToWatchlist={handleAddToWatchlist} onPlay={handlePlay} />
            <MovieRow title="Documentaries" movies={documentaries} onMoreInfo={handleMoreInfo} onAddToWatchlist={handleAddToWatchlist} onPlay={handlePlay} />
            <MovieRow title="Kids & Family" movies={kids} size="sm" onMoreInfo={handleMoreInfo} onAddToWatchlist={handleAddToWatchlist} onPlay={handlePlay} />
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
                      onPlay={handlePlay}
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
      
      {/* Video Modal */}
      <VideoModal 
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        movieTitle={playingMovie?.title || ""}
      />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
