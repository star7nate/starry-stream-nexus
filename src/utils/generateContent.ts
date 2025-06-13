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
      posterUrl: "/lovable-uploads/2d5a62e1-86ec-44d7-a39b-544ff12822fb.png"
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
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg"
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
      posterUrl: "/lovable-uploads/1718a68a-1952-44f2-9891-c275421c9ff0.png"
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
      posterUrl: "/lovable-uploads/4b87809e-61ea-4428-a251-8dc095cd4f25.png"
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
      posterUrl: "https://m.media-amazon.com/images/M/MV5BOGE4MmVjMDgtMzIzYy00NjEwLWJhZDctYjNhMTRkNDE0ZTI1XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_FMjpg_UX1000_.jpg"
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
      posterUrl: "https://m.media-amazon.com/images/M/MV5BYTM3YWVhMDMtNjczMy00NGEyLWJhZDctYjNhMTRkNDE0ZTI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
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
      posterUrl: "https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_FMjpg_UX1000_.jpg"
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
      posterUrl: "https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_FMjpg_UX1000_.jpg"
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
      posterUrl: "https://m.media-amazon.com/images/M/MV5BODI0ZTljYTMtODQ1NC00NmI0LTk1YWUtN2FlNDM1MDExMDlhXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_FMjpg_UX1000_.jpg"
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
      posterUrl: "https://m.media-amazon.com/images/M/MV5BZmY0MzBlNjctNTJkNi00N2YyLWE2MzMtMzViOGM5YzM3NzRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg"
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
      posterUrl: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg"
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
      posterUrl: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_FMjpg_UX1000_.jpg"
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
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNjE5NzA4ZDctOTJkZi00NzM0LTkwOTYtMDI4MmNkMzIxODhkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_FMjpg_UX1000_.jpg"
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
      posterUrl: "https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg"
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
      posterUrl: "/lovable-uploads/2cca1d76-8b3a-4ebb-beaa-1c753f015f53.png"
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
      posterUrl: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
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
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMDMzZDkyNzEtYmM1MS00NWVlLTlhOTctZmVjYWZmODNiNzBhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg"
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
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"
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
      posterUrl: "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_FMjpg_UX1000_.jpg"
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
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_FMjpg_UX1000_.jpg"
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
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg"
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
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg"
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
      posterUrl: "https://m.media-amazon.com/images/M/MV5BN2M5YWFjN2YtYzU4ZS00YjQ3LWFmZTEtYjJlMWQzOGJkMjc1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg"
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
      posterUrl: "https://m.media-amazon.com/images/M/MV5BZTJmOWY0ZDctZjU3OC00ZGIxLWFkNjQtZWJhZjk5MjNiODBmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg"
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
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNzllNjc3YjUtYTY5Yy00NGVlLTgwZGMtMmJkYjk1ZWVmOGM3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_FMjpg_UX1000_.jpg"
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
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNmVjNzMxMzMtZGMxZC00ODU4LWJiYTEtMjgxYjNhNjZjZWI5XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg"
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
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMjIxMTUwZDAtZTIxZC00YTIyLTgwYjYtZDM4ZGY3ZTQ3NTk4XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_FMjpg_UX1000_.jpg"
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
      posterUrl: "https://m.media-amazon.com/images/M/MV5BOTFjOGU1OWMtZjlmYi00ZGFhLWJhZWMtMGZmZDM0MzI5ZjYyXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg"
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
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNjZlNDZhMTUtMzMzOS00YjU0LWJlYzItNWRmYjFkYjMzNjk5XkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_FMjpg_UX1000_.jpg"
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
      posterUrl: "https://m.media-amazon.com/images/M/MV5BYzA2ZmNmYmUtMzM4OS00ZmJkLTk3ZjgtODA5YzU3NGRjNGZhXkEyXkFqcGdeQXVyNjkwOTg4MTA@._V1_FMjpg_UX1000_.jpg"
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
