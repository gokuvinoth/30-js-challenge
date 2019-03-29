const moviesData = [
  {
    key: 1,
    movieName: "Beauty and the Beast",
    directorFname: "Bill",
    directorLname: "Condon",
    year: 2017,
    rating: 7.2,
    metaScore: 65,
    votes: 231753,
    grossValue: 504.01
  },
  {
    key: 2,
    movieName: "Logan",
    directorFname: "James",
    directorLname: "Mangold",
    year: 2017,
    rating: 8.1,
    metaScore: 77,
    votes: 543066,
    grossValue: 226.28
  },
  {
    key: 3,
    movieName: "X-Men: Apocalypse",
    directorFname: "Bryan",
    directorLname: "Singer",
    year: 2016,
    rating: 7,
    metaScore: 52,
    votes: 346506,
    grossValue: 155.44
  },
  {
    key: 4,
    movieName: "Deadpool",
    directorFname: "Tim",
    directorLname: "Miller",
    year: 2016,
    rating: 8,
    metaScore: 65,
    votes: 804241,
    grossValue: 363.07
  },
  {
    key: 5,
    movieName: "Man of Steel",
    directorFname: "Zack",
    directorLname: "Snyder",
    year: 2013,
    rating: 7.1,
    metaScore: 55,
    votes: 639492,
    grossValue: 291.05
  },
  {
    key: 6,
    movieName: "Batman v Superman: Dawn of Justice",
    directorFname: "Zack",
    directorLname: "Snyder",
    year: 2016,
    rating: 6.5,
    metaScore: 44,
    votes: 567696,
    grossValue: 330.36
  },
  {
    key: 7,
    movieName: "Slumdog Millionaire",
    directorFname: "Danny",
    directorLname: "Boyle",
    year: 2008,
    rating: 8,
    metaScore: 86,
    votes: 740478,
    grossValue: 141.32
  },
  {
    key: 8,
    movieName: "Titanic",
    directorFname: "James",
    directorLname: "Cameron",
    year: 1997,
    rating: 7.8,
    metaScore: 75,
    votes: 943082,
    grossValue: 659.33
  },
  {
    key: 9,
    movieName: "Avatar",
    directorFname: "James",
    directorLname: "Cameron",
    year: 2009,
    rating: 7.8,
    metaScore: 83,
    votes: 1031689,
    grossValue: 760.51
  },
  {
    key: 10,
    movieName: "Gravity",
    directorFname: "Alfonso",
    directorLname: "Cuarón",
    year: 2013,
    rating: 7.7,
    metaScore: 96,
    votes: 700655,
    grossValue: 274.09
  },
  {
    key: 11,
    movieName: "The Dark Knight",
    directorFname: "Christopher",
    directorLname: "Nolan",
    year: 2008,
    rating: 9,
    metaScore: 84,
    votes: 2032085,
    grossValue: 534.86
  },
  {
    key: 12,
    movieName: "The Dark Knight Rises",
    directorFname: "Christopher",
    directorLname: "Nolan",
    year: 2012,
    rating: 8.4,
    metaScore: 78,
    votes: 1368449,
    grossValue: 448.14
  },
  {
    key: 13,
    movieName: "Batman Begins",
    directorFname: "Christopher",
    directorLname: "Nolan",
    year: 2005,
    rating: 8.2,
    metaScore: 70,
    votes: 1177467,
    grossValue: 206.85
  },
  {
    key: 14,
    movieName: "Guardians of the Galaxy",
    directorFname: "James",
    directorLname: "Gunn",
    year: 2014,
    rating: 8.1,
    metaScore: 76,
    votes: 919804,
    grossValue: 333.18
  },
  {
    key: 15,
    movieName: "Captain America: Civil War",
    directorFname: "Anthony",
    directorLname: "Russo",
    year: 2016,
    rating: 7.8,
    metaScore: 75,
    votes: 558098,
    grossValue: 408.08
  },
  {
    key: 16,
    movieName: "Star Wars: Episode VII - The Force Awakens",
    directorFname: "J",
    directorLname: "J",
    year: 2015,
    rating: 8,
    metaScore: 81,
    votes: 775432,
    grossValue: 936.66
  },
  {
    key: 17,
    movieName: "How to Be Single",
    directorFname: "Christian",
    directorLname: "Ditter",
    year: 2016,
    rating: 6.1,
    metaScore: 51,
    votes: 73316,
    grossValue: 46.81
  },
  {
    key: 18,
    movieName: "Ted",
    directorFname: "Seth",
    directorLname: "MacFarlane",
    year: 2012,
    rating: 6.9,
    metaScore: 62,
    votes: 533800,
    grossValue: 218.82
  },
  {
    key: 19,
    movieName: "The Hangover",
    directorFname: "Todd",
    directorLname: "Phillips",
    year: 2009,
    rating: 7.7,
    metaScore: 73,
    votes: 663559,
    grossValue: 277.32
  },
  {
    key: 20,
    movieName: "A Cinderella Story: If the Shoe Fits",
    directorFname: "Michelle",
    directorLname: "Johnston",
    year: 2016,
    rating: 6,
    metaScore: 0,
    votes: 2191,
    grossValue: 0
  },
  {
    key: 21,
    movieName: "Adventures in Babysitting",
    directorFname: "John",
    directorLname: "Schultz",
    year: 2016,
    rating: 6.1,
    metaScore: 0,
    votes: 2219,
    grossValue: 0
  },
  {
    key: 22,
    movieName: "Descendants",
    directorFname: "Kenny",
    directorLname: "Ortega",
    year: 2015,
    rating: 6.4,
    metaScore: 0,
    votes: 11798,
    grossValue: 0
  },
  {
    key: 23,
    movieName: "Avengers: Age of Ultron",
    directorFname: "Joss",
    directorLname: "Whedon",
    year: 2015,
    rating: 7.4,
    metaScore: 66,
    votes: 637838,
    grossValue: 459.01
  },
  {
    key: 24,
    movieName: "The Avengers",
    directorFname: "Joss",
    directorLname: "Whedon",
    year: 2012,
    rating: 8.1,
    metaScore: 69,
    votes: 1157260,
    grossValue: 623.36
  },
  {
    key: 25,
    movieName: "Suicide Squad",
    directorFname: "David",
    directorLname: "Ayer",
    year: 2016,
    rating: 6.1,
    metaScore: 40,
    votes: 521087,
    grossValue: 325.1
  },
  {
    key: 26,
    movieName: "Doctor Strange",
    directorFname: "Scott",
    directorLname: "Derrickson",
    year: 2016,
    rating: 7.5,
    metaScore: 72,
    votes: 490070,
    grossValue: 232.64
  },
  {
    key: 27,
    movieName: "Iron Man",
    directorFname: "Jon",
    directorLname: "Favreau",
    year: 2008,
    rating: 7.9,
    metaScore: 79,
    votes: 840375,
    grossValue: 318.41
  },
  {
    key: 28,
    movieName: "Inception",
    directorFname: "Christopher",
    directorLname: "Nolan",
    year: 2010,
    rating: 8.8,
    metaScore: 74,
    votes: 1810999,
    grossValue: 292.58
  },
  {
    key: 29,
    movieName: "Forrest Gump",
    directorFname: "Robert",
    directorLname: "Zemeckis",
    year: 1994,
    rating: 8.8,
    metaScore: 82,
    votes: 1582936,
    grossValue: 330.25
  }
];

console.table(moviesData);

// Array methods -  Filter movies with votes more than 1500000

const mostVotedMovies = moviesData.filter(movie => movie.votes > 1500000);
console.table(mostVotedMovies);

// Array methods - Map array of top movie directors

const movieNameWithYear = moviesData.map(function(movie) {
  return `${movie.movieName} (${movie.year})`;
});
console.table(movieNameWithYear);

// sort movies from oldest to new
const movieSortedByYear = moviesData.sort((a, b) => a.year - b.year);
console.table(movieSortedByYear);

// sort movies by movie name
const movieSortedByName = moviesData.sort(function(a, b) {
  if (a.movieName > b.movieName) return 1;
  if (a.movieName < b.movieName) return -1;
  if (a.movieName === b.movieName) return 0;
});
console.table(movieSortedByName);

// Array Method Reduce o summ it up

const totalMovieGross = Math.round(
  moviesData.reduce((movieGross, movie) => {
    return movieGross + movie.grossValue;
  }, 0),
  2
);

console.log(totalMovieGross);

/*
//use this code in this wikipedia page to find amman temples in chennai 
// wiki Link : https://en.wikipedia.org/wiki/Category:Hindu_temples_in_Chennai

const chennaiTemples = Array.from(document.querySelectorAll("li > a"));
const chennaiTempleNames = chennaiTemples
  .map(temple => temple.textContent)
  .filter(templeName => templeName.includes("amma"));


  */

//  Get total movies by Year and Director using Reduce Function

const directorFullName = moviesData.map(
  movie => `${movie.directorFname} ${movie.directorLname}`
);

console.table(directorFullName);

const moviesByDirector = directorFullName.reduce(function(obj, director) {
  if (!obj[director]) obj[director] = 0;
  obj[director]++;
  return obj;
}, {});

console.table(moviesByDirector);

const moviesByYear = moviesData.reduce(function(obj, movie) {
  if (!obj[movie.year]) obj[movie.year] = 0;
  obj[movie.year]++;
  return obj;
}, {});

console.table(moviesByYear);
