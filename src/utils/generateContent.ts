
// Generate 5000+ movies and shows with poster URLs
export const generateContent = () => {
  const genres = ["Action", "Drama", "Comedy", "Thriller", "Sci-Fi", "Horror", "Romance", "Documentary", "Animation", "Crime"];
  const categories = ["Movies", "TV Shows", "Documentaries", "Kids", "Originals"];
  const adjectives = ["Epic", "Dark", "Lost", "Hidden", "Secret", "Last", "First", "Silent", "Broken", "Golden", "Shadow", "Crystal", "Midnight", "Rising", "Fallen", "Ancient", "Modern", "Future", "Quantum", "Digital"];
  const nouns = ["Kingdom", "City", "Empire", "Galaxy", "Ocean", "Mountain", "Forest", "Desert", "Island", "Castle", "Tower", "Bridge", "River", "Storm", "Dawn", "Night", "Star", "Moon", "Sun", "Earth"];
  
  // Movie poster placeholder URLs from Unsplash
  const posterUrls = [
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=450&fit=crop",
    "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=450&fit=crop",
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=300&h=450&fit=crop",
    "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=300&h=450&fit=crop",
    "https://images.unsplash.com/photo-1478720568477-b0ac8cf949da?w=300&h=450&fit=crop",
    "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop",
    "https://images.unsplash.com/photo-1551636898-47668aa61de2?w=300&h=450&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=450&fit=crop"
  ];
  
  const content = [];
  
  for (let i = 0; i < 5000; i++) {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const genre = genres[Math.floor(Math.random() * genres.length)];
    const category = categories[Math.floor(Math.random() * categories.length)];
    const rating = (Math.random() * 4 + 6).toFixed(1); // 6.0 - 10.0
    const year = 2015 + Math.floor(Math.random() * 10);
    const posterUrl = posterUrls[Math.floor(Math.random() * posterUrls.length)];
    
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
      isOriginal: category === "Originals",
      posterUrl
    });
  }
  
  return content;
};
