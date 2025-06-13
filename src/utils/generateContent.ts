
export const generateContent = () => {
  const movies = [
    // Netflix Originals & Popular Shows
    {
      id: 1,
      title: "Wednesday",
      genre: "Horror Comedy",
      category: "TV Shows",
      rating: 8.1,
      year: 2022,
      duration: "1 Season",
      isNew: true,
      isTrending: true,
      isOriginal: true,
      posterUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=450&fit=crop&crop=face"
    },
    {
      id: 2,
      title: "Fast & Furious",
      genre: "Action",
      category: "Movies",
      rating: 7.0,
      year: 2001,
      duration: "106 min",
      isNew: false,
      isTrending: true,
      isOriginal: false,
      posterUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=300&h=450&fit=crop"
    },
    {
      id: 3,
      title: "Henry Danger",
      genre: "Comedy",
      category: "Kids",
      rating: 6.1,
      year: 2014,
      duration: "5 Seasons",
      isNew: false,
      isTrending: false,
      isOriginal: false,
      posterUrl: "https://images.unsplash.com/photo-1531384698654-7f6e297c1552?w=300&h=450&fit=crop"
    },
    {
      id: 4,
      title: "Stranger Things",
      genre: "Sci-Fi Horror",
      category: "TV Shows",
      rating: 8.7,
      year: 2016,
      duration: "4 Seasons",
      isNew: false,
      isTrending: true,
      isOriginal: true,
      posterUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=450&fit=crop"
    },
    {
      id: 5,
      title: "The Witcher",
      genre: "Fantasy",
      category: "TV Shows",
      rating: 8.2,
      year: 2019,
      duration: "3 Seasons",
      isNew: false,
      isTrending: true,
      isOriginal: true,
      posterUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop"
    },
    {
      id: 6,
      title: "Black Mirror",
      genre: "Sci-Fi Thriller",
      category: "TV Shows",
      rating: 8.8,
      year: 2011,
      duration: "6 Seasons",
      isNew: false,
      isTrending: false,
      isOriginal: true,
      posterUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=450&fit=crop"
    },
    {
      id: 7,
      title: "Avatar: The Last Airbender",
      genre: "Animation",
      category: "Kids",
      rating: 9.3,
      year: 2005,
      duration: "3 Seasons",
      isNew: false,
      isTrending: true,
      isOriginal: false,
      posterUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop"
    },
    {
      id: 8,
      title: "The Queen's Gambit",
      genre: "Drama",
      category: "TV Shows",
      rating: 8.5,
      year: 2020,
      duration: "1 Season",
      isNew: false,
      isTrending: false,
      isOriginal: true,
      posterUrl: "https://images.unsplash.com/photo-1594736797933-d0cce2c1dee1?w=300&h=450&fit=crop"
    },
    {
      id: 9,
      title: "Money Heist",
      genre: "Crime Thriller",
      category: "TV Shows",
      rating: 8.3,
      year: 2017,
      duration: "5 Seasons",
      isNew: false,
      isTrending: true,
      isOriginal: true,
      posterUrl: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=450&fit=crop"
    },
    {
      id: 10,
      title: "The Crown",
      genre: "Historical Drama",
      category: "TV Shows",
      rating: 8.7,
      year: 2016,
      duration: "6 Seasons",
      isNew: false,
      isTrending: false,
      isOriginal: true,
      posterUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop"
    },
    {
      id: 11,
      title: "Spider-Man: No Way Home",
      genre: "Action",
      category: "Movies",
      rating: 8.4,
      year: 2021,
      duration: "148 min",
      isNew: true,
      isTrending: true,
      isOriginal: false,
      posterUrl: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=450&fit=crop"
    },
    {
      id: 12,
      title: "Top Gun: Maverick",
      genre: "Action",
      category: "Movies",
      rating: 8.3,
      year: 2022,
      duration: "130 min",
      isNew: true,
      isTrending: true,
      isOriginal: false,
      posterUrl: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=300&h=450&fit=crop"
    },
    {
      id: 13,
      title: "Encanto",
      genre: "Animation",
      category: "Kids",
      rating: 7.2,
      year: 2021,
      duration: "102 min",
      isNew: false,
      isTrending: true,
      isOriginal: false,
      posterUrl: "https://images.unsplash.com/photo-1594736797933-d0cce2c1dee1?w=300&h=450&fit=crop"
    },
    {
      id: 14,
      title: "Squid Game",
      genre: "Thriller",
      category: "TV Shows",
      rating: 8.0,
      year: 2021,
      duration: "1 Season",
      isNew: false,
      isTrending: true,
      isOriginal: true,
      posterUrl: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=450&fit=crop"
    },
    {
      id: 15,
      title: "The Batman",
      genre: "Action",
      category: "Movies",
      rating: 7.8,
      year: 2022,
      duration: "176 min",
      isNew: true,
      isTrending: true,
      isOriginal: false,
      posterUrl: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=450&fit=crop"
    },
    {
      id: 16,
      title: "Dune",
      genre: "Sci-Fi",
      category: "Movies",
      rating: 8.0,
      year: 2021,
      duration: "155 min",
      isNew: false,
      isTrending: true,
      isOriginal: false,
      posterUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=450&fit=crop"
    },
    {
      id: 17,
      title: "Euphoria",
      genre: "Drama",
      category: "TV Shows",
      rating: 8.4,
      year: 2019,
      duration: "2 Seasons",
      isNew: false,
      isTrending: true,
      isOriginal: false,
      posterUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop"
    },
    {
      id: 18,
      title: "Breaking Bad",
      genre: "Crime Drama",
      category: "TV Shows",
      rating: 9.5,
      year: 2008,
      duration: "5 Seasons",
      isNew: false,
      isTrending: false,
      isOriginal: false,
      posterUrl: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=450&fit=crop"
    },
    {
      id: 19,
      title: "Game of Thrones",
      genre: "Fantasy Drama",
      category: "TV Shows",
      rating: 9.3,
      year: 2011,
      duration: "8 Seasons",
      isNew: false,
      isTrending: false,
      isOriginal: false,
      posterUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop"
    },
    {
      id: 20,
      title: "The Office",
      genre: "Comedy",
      category: "TV Shows",
      rating: 8.7,
      year: 2005,
      duration: "9 Seasons",
      isNew: false,
      isTrending: true,
      isOriginal: false,
      posterUrl: "https://images.unsplash.com/photo-1531384698654-7f6e297c1552?w=300&h=450&fit=crop"
    },
    {
      id: 21,
      title: "Friends",
      genre: "Comedy",
      category: "TV Shows",
      rating: 8.9,
      year: 1994,
      duration: "10 Seasons",
      isNew: false,
      isTrending: true,
      isOriginal: false,
      posterUrl: "https://images.unsplash.com/photo-1531384698654-7f6e297c1552?w=300&h=450&fit=crop"
    },
    {
      id: 22,
      title: "Marvel's The Avengers",
      genre: "Action",
      category: "Movies",
      rating: 8.0,
      year: 2012,
      duration: "143 min",
      isNew: false,
      isTrending: true,
      isOriginal: false,
      posterUrl: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=450&fit=crop"
    },
    {
      id: 23,
      title: "The Mandalorian",
      genre: "Sci-Fi",
      category: "TV Shows",
      rating: 8.7,
      year: 2019,
      duration: "3 Seasons",
      isNew: false,
      isTrending: true,
      isOriginal: false,
      posterUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=450&fit=crop"
    },
    {
      id: 24,
      title: "Ozark",
      genre: "Crime Drama",
      category: "TV Shows",
      rating: 8.4,
      year: 2017,
      duration: "4 Seasons",
      isNew: false,
      isTrending: false,
      isOriginal: true,
      posterUrl: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=450&fit=crop"
    },
    {
      id: 25,
      title: "House of Cards",
      genre: "Political Drama",
      category: "TV Shows",
      rating: 8.6,
      year: 2013,
      duration: "6 Seasons",
      isNew: false,
      isTrending: false,
      isOriginal: true,
      posterUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop"
    },
    {
      id: 26,
      title: "Narcos",
      genre: "Crime Drama",
      category: "TV Shows",
      rating: 8.8,
      year: 2015,
      duration: "3 Seasons",
      isNew: false,
      isTrending: false,
      isOriginal: true,
      posterUrl: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=450&fit=crop"
    },
    {
      id: 27,
      title: "Orange Is the New Black",
      genre: "Comedy Drama",
      category: "TV Shows",
      rating: 8.1,
      year: 2013,
      duration: "7 Seasons",
      isNew: false,
      isTrending: false,
      isOriginal: true,
      posterUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop"
    },
    {
      id: 28,
      title: "Bridgerton",
      genre: "Romance Drama",
      category: "TV Shows",
      rating: 7.3,
      year: 2020,
      duration: "2 Seasons",
      isNew: false,
      isTrending: true,
      isOriginal: true,
      posterUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop"
    },
    {
      id: 29,
      title: "The Umbrella Academy",
      genre: "Superhero",
      category: "TV Shows",
      rating: 7.9,
      year: 2019,
      duration: "3 Seasons",
      isNew: false,
      isTrending: true,
      isOriginal: true,
      posterUrl: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=450&fit=crop"
    },
    {
      id: 30,
      title: "Cobra Kai",
      genre: "Action Drama",
      category: "TV Shows",
      rating: 8.5,
      year: 2018,
      duration: "5 Seasons",
      isNew: false,
      isTrending: true,
      isOriginal: true,
      posterUrl: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=300&h=450&fit=crop"
    }
  ];

  // Generate additional movies to reach 100+
  const additionalMovies = [];
  const genres = ["Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Romance", "Thriller", "Animation"];
  const categories = ["Movies", "TV Shows", "Originals", "Documentaries", "Kids"];
  
  for (let i = 31; i <= 120; i++) {
    const randomGenre = genres[Math.floor(Math.random() * genres.length)];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const randomYear = 2015 + Math.floor(Math.random() * 9);
    const isMovie = randomCategory === "Movies";
    
    additionalMovies.push({
      id: i,
      title: `${randomGenre} ${isMovie ? 'Movie' : 'Series'} ${i - 30}`,
      genre: randomGenre,
      category: randomCategory,
      rating: 6.0 + Math.random() * 3.5,
      year: randomYear,
      duration: isMovie ? `${90 + Math.floor(Math.random() * 60)} min` : `${1 + Math.floor(Math.random() * 5)} Season${Math.floor(Math.random() * 5) > 0 ? 's' : ''}`,
      isNew: Math.random() > 0.8,
      isTrending: Math.random() > 0.7,
      isOriginal: Math.random() > 0.6,
      posterUrl: `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 100000000)}?w=300&h=450&fit=crop`
    });
  }

  return [...movies, ...additionalMovies];
};
