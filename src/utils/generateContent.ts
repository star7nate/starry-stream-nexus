
// Popular movie and TV show data
const popularTitles = [
  // Netflix Originals & Popular Shows
  { title: "Wednesday", genre: "Horror", category: "Originals", isOriginal: true, isNew: true },
  { title: "Stranger Things", genre: "Sci-Fi", category: "Originals", isOriginal: true, isTrending: true },
  { title: "The Crown", genre: "Drama", category: "Originals", isOriginal: true },
  { title: "Squid Game", genre: "Thriller", category: "Originals", isOriginal: true, isTrending: true },
  { title: "Money Heist", genre: "Crime", category: "Originals", isOriginal: true },
  { title: "Dark", genre: "Sci-Fi", category: "Originals", isOriginal: true },
  { title: "The Witcher", genre: "Fantasy", category: "Originals", isOriginal: true },
  { title: "Ozark", genre: "Crime", category: "Originals", isOriginal: true },
  { title: "Bridgerton", genre: "Romance", category: "Originals", isOriginal: true },
  { title: "Henry Danger", genre: "Comedy", category: "Kids", isNew: false },
  
  // Fast & Furious Franchise
  { title: "Fast & Furious", genre: "Action", category: "Movies" },
  { title: "Fast Five", genre: "Action", category: "Movies", isTrending: true },
  { title: "Fast & Furious 6", genre: "Action", category: "Movies" },
  { title: "Furious 7", genre: "Action", category: "Movies" },
  { title: "The Fate of the Furious", genre: "Action", category: "Movies" },
  { title: "Fast & Furious Presents: Hobbs & Shaw", genre: "Action", category: "Movies" },
  { title: "F9: The Fast Saga", genre: "Action", category: "Movies", isNew: true },
  
  // Marvel Movies
  { title: "Avengers: Endgame", genre: "Action", category: "Movies", isTrending: true },
  { title: "Spider-Man: No Way Home", genre: "Action", category: "Movies", isNew: true },
  { title: "Black Panther", genre: "Action", category: "Movies" },
  { title: "Iron Man", genre: "Action", category: "Movies" },
  { title: "Thor: Ragnarok", genre: "Action", category: "Movies" },
  { title: "Captain America: The Winter Soldier", genre: "Action", category: "Movies" },
  { title: "Guardians of the Galaxy", genre: "Action", category: "Movies" },
  { title: "Doctor Strange", genre: "Action", category: "Movies" },
  { title: "Ant-Man", genre: "Action", category: "Movies" },
  { title: "Captain Marvel", genre: "Action", category: "Movies" },
  
  // DC Movies
  { title: "The Batman", genre: "Action", category: "Movies", isNew: true },
  { title: "Wonder Woman", genre: "Action", category: "Movies" },
  { title: "Aquaman", genre: "Action", category: "Movies" },
  { title: "Shazam!", genre: "Action", category: "Movies" },
  { title: "Justice League", genre: "Action", category: "Movies" },
  
  // Popular Movies
  { title: "Top Gun: Maverick", genre: "Action", category: "Movies", isNew: true, isTrending: true },
  { title: "Avatar: The Way of Water", genre: "Sci-Fi", category: "Movies", isNew: true },
  { title: "Dune", genre: "Sci-Fi", category: "Movies", isNew: true },
  { title: "No Time to Die", genre: "Action", category: "Movies" },
  { title: "The Matrix Resurrections", genre: "Sci-Fi", category: "Movies" },
  { title: "John Wick: Chapter 4", genre: "Action", category: "Movies", isNew: true },
  { title: "Mission: Impossible - Dead Reckoning", genre: "Action", category: "Movies", isNew: true },
  { title: "Indiana Jones 5", genre: "Adventure", category: "Movies", isNew: true },
  { title: "Transformers: Rise of the Beasts", genre: "Action", category: "Movies", isNew: true },
  { title: "Scream VI", genre: "Horror", category: "Movies", isNew: true },
  
  // Classic Movies
  { title: "The Godfather", genre: "Drama", category: "Movies" },
  { title: "Pulp Fiction", genre: "Crime", category: "Movies" },
  { title: "The Shawshank Redemption", genre: "Drama", category: "Movies" },
  { title: "Forrest Gump", genre: "Drama", category: "Movies" },
  { title: "The Dark Knight", genre: "Action", category: "Movies" },
  { title: "Inception", genre: "Sci-Fi", category: "Movies" },
  { title: "Interstellar", genre: "Sci-Fi", category: "Movies" },
  { title: "Goodfellas", genre: "Crime", category: "Movies" },
  { title: "The Lord of the Rings: The Return of the King", genre: "Fantasy", category: "Movies" },
  { title: "Schindler's List", genre: "Drama", category: "Movies" },
  
  // Popular TV Shows
  { title: "Game of Thrones", genre: "Fantasy", category: "TV Shows", isTrending: true },
  { title: "Breaking Bad", genre: "Crime", category: "TV Shows" },
  { title: "Better Call Saul", genre: "Crime", category: "TV Shows" },
  { title: "The Walking Dead", genre: "Horror", category: "TV Shows" },
  { title: "House of the Dragon", genre: "Fantasy", category: "TV Shows", isNew: true },
  { title: "The Boys", genre: "Action", category: "TV Shows", isTrending: true },
  { title: "Euphoria", genre: "Drama", category: "TV Shows" },
  { title: "The Mandalorian", genre: "Sci-Fi", category: "TV Shows" },
  { title: "Succession", genre: "Drama", category: "TV Shows" },
  { title: "The Office", genre: "Comedy", category: "TV Shows" },
  { title: "Friends", genre: "Comedy", category: "TV Shows" },
  { title: "Sherlock", genre: "Mystery", category: "TV Shows" },
  { title: "Peaky Blinders", genre: "Crime", category: "TV Shows" },
  { title: "Vikings", genre: "Drama", category: "TV Shows" },
  { title: "The Last of Us", genre: "Drama", category: "TV Shows", isNew: true, isTrending: true },
  
  // Horror Movies
  { title: "It", genre: "Horror", category: "Movies" },
  { title: "The Conjuring", genre: "Horror", category: "Movies" },
  { title: "A Quiet Place", genre: "Horror", category: "Movies" },
  { title: "Hereditary", genre: "Horror", category: "Movies" },
  { title: "Get Out", genre: "Horror", category: "Movies" },
  { title: "Us", genre: "Horror", category: "Movies" },
  { title: "Midsommar", genre: "Horror", category: "Movies" },
  { title: "The Babadook", genre: "Horror", category: "Movies" },
  
  // Comedy Movies
  { title: "Deadpool", genre: "Comedy", category: "Movies" },
  { title: "The Hangover", genre: "Comedy", category: "Movies" },
  { title: "Superbad", genre: "Comedy", category: "Movies" },
  { title: "Anchorman", genre: "Comedy", category: "Movies" },
  { title: "Step Brothers", genre: "Comedy", category: "Movies" },
  { title: "Borat", genre: "Comedy", category: "Movies" },
  { title: "Tropic Thunder", genre: "Comedy", category: "Movies" },
  
  // Animated Movies
  { title: "Spider-Man: Into the Spider-Verse", genre: "Animation", category: "Movies" },
  { title: "Toy Story 4", genre: "Animation", category: "Kids" },
  { title: "Frozen 2", genre: "Animation", category: "Kids" },
  { title: "Moana", genre: "Animation", category: "Kids" },
  { title: "Coco", genre: "Animation", category: "Kids" },
  { title: "The Incredibles 2", genre: "Animation", category: "Kids" },
  { title: "Finding Nemo", genre: "Animation", category: "Kids" },
  { title: "Shrek", genre: "Animation", category: "Kids" },
  
  // Kids Shows
  { title: "Paw Patrol", genre: "Animation", category: "Kids" },
  { title: "SpongeBob SquarePants", genre: "Animation", category: "Kids" },
  { title: "Avatar: The Last Airbender", genre: "Animation", category: "Kids" },
  { title: "Teen Titans Go!", genre: "Animation", category: "Kids" },
  { title: "Adventure Time", genre: "Animation", category: "Kids" },
  { title: "Regular Show", genre: "Animation", category: "Kids" },
  { title: "Gravity Falls", genre: "Animation", category: "Kids" },
  
  // Documentaries
  { title: "Our Planet", genre: "Documentary", category: "Documentaries" },
  { title: "Tiger King", genre: "Documentary", category: "Documentaries", isTrending: true },
  { title: "Making a Murderer", genre: "Documentary", category: "Documentaries" },
  { title: "The Social Dilemma", genre: "Documentary", category: "Documentaries" },
  { title: "My Octopus Teacher", genre: "Documentary", category: "Documentaries" },
  { title: "Free Solo", genre: "Documentary", category: "Documentaries" },
  { title: "Won't You Be My Neighbor?", genre: "Documentary", category: "Documentaries" },
];

// Movie poster URLs from Unsplash
const posterUrls = [
  "https://images.unsplash.com/photo-1594736797933-d0401ba00ea4?w=500&h=750&fit=crop", // Wednesday vibes
  "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=500&h=750&fit=crop", // Action movie
  "https://images.unsplash.com/photo-1489599904335-5c9dcefe1d16?w=500&h=750&fit=crop", // Sci-fi
  "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=750&fit=crop", // Drama
  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=750&fit=crop", // Horror
  "https://images.unsplash.com/photo-1489599904335-5c9dcefe1d16?w=500&h=750&fit=crop", // Comedy
  "https://images.unsplash.com/photo-1485095329183-d0797cdc5676?w=500&h=750&fit=crop", // Fantasy
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=750&fit=crop", // Adventure
  "https://images.unsplash.com/photo-1516511018979-90d2b6ecf6ca?w=500&h=750&fit=crop", // Crime
  "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=500&h=750&fit=crop", // Thriller
  "https://images.unsplash.com/photo-1572188863110-46d457c9234d?w=500&h=750&fit=crop", // Animation
  "https://images.unsplash.com/photo-1518639192441-8fce0a366556?w=500&h=750&fit=crop", // Documentary
  "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=500&h=750&fit=crop", // Romance
  "https://images.unsplash.com/photo-1489599904335-5c9dcefe1d16?w=500&h=750&fit=crop", // Mystery
  "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=500&h=750&fit=crop", // Kids
];

export const generateContent = () => {
  return popularTitles.map((title, index) => ({
    id: index + 1,
    title: title.title,
    genre: title.genre,
    category: title.category,
    rating: Math.round((Math.random() * 3 + 7) * 10) / 10, // 7.0 - 10.0
    year: Math.floor(Math.random() * 10) + 2014, // 2014-2023
    duration: `${Math.floor(Math.random() * 60) + 90} min`,
    isNew: title.isNew || Math.random() > 0.8,
    isTrending: title.isTrending || Math.random() > 0.9,
    isOriginal: title.isOriginal || Math.random() > 0.85,
    posterUrl: posterUrls[index % posterUrls.length]
  }));
};
